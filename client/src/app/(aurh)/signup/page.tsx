"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "@/app/schemas/signupSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const SignupPage = () => {
  const [avatar, setAvatar] = useState();



  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      avatar: avatar,
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="min-h-full w-full flex items-center justify-center bg-orange-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* fullname */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                      placeholder="Enter your full name"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                      placeholder="Enter your Email"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* password  */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                      placeholder="Enter your password"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* avatar  */}
            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Avatar
                  </FormLabel>
                  <FormControl>
                    <Input
                    
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                      placeholder="Enter your avater"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Signup Button */}
<button
  type="submit"
  className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
>
  Sign Up
</button>

{/* Login Link */}
<div className="text-sm text-gray-600 mt-4 text-center">
  Already have an account?{" "}
  <Link href="/login" className="text-blue-600 hover:underline">
    Log in
  </Link>
</div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
