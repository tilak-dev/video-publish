// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request:NextRequest) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get("accessToken")
  //validation error
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
 

  const isPublicPath = path.startsWith("/login") || path.startsWith("/register") || path==="/"
  const isPrivatePath = path=== "/home"


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
    "/admin",
    "/admin/:path*",
    "/signup",
    "/",
    "/home",
    "/account/:path*",
  ],
};