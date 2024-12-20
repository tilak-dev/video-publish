// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request:NextRequest) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get("accessToken")
  //validation error
  if (!token) {
    NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
 

  const isPublicPath = path.startsWith("/login") || path.startsWith("/signup")
  const isPrivatePath = path=== "/home" || path.startsWith("/dashboard") 


  //todo getting user

  //check if the user is authenticated or not and redirect to login page if not
  if(!token){
    if (isPublicPath) {
      return NextResponse.next();
    }
    if (isPrivatePath) {
      return NextResponse.redirect(new URL('/login', request.url));;
    }
  }

 if(token){
   if (isPrivatePath) {
     return NextResponse.next();
   }
   if (isPublicPath) {
     return NextResponse.redirect(new URL('/home', request.url));
   }
 }
}
export const config = {
  matcher: [
    "/login",
    "/dashboard",
    "/signup",
    "/",
    "/home",
  ],
};