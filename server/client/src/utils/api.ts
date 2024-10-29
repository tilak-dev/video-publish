import axios, { AxiosInstance } from "axios";




if (!process.env.BASE_BACKEND_URI) {
  throw new Error("BASE_BACKEND_URI environment variable not set"); // Throw an error if the environment variable is not set
}

const api:AxiosInstance = axios.create({
  baseURL: process.env.BASE_BACKEND_URI,
});

api.interceptors.request.use((config)=>{
  //add tokens
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  
  //for mobile devices
  if(refreshToken && accessToken){
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  console.log("bhai api config",config)
  return config;
})


api.interceptors.response.use(response => response,
  error => {
    if(error.response && error.response.status === 401){
      //token expired or invalid, refresh token and retry request
      const refreshToken = localStorage.getItem("refreshToken");
      if(refreshToken){
        return api.post('/auth/refresh',{refreshToken})
         .then(response => {
            localStorage.setItem("accessToken",response.data.accessToken);
            return api.request(error.config);
          })
         .catch(error => {
            console.error("Error refreshing token",error);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            return Promise.reject(error);
          });
      }else{
        console.error("No refresh token found, unable to refresh token");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
)

export default api