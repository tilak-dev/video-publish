"use client";

import Link from "next/link";
import { FaLock, FaEnvelope } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas/loginSchema";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const response = await login(values.email, values.password);
      console.log(response);
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      form.reset();
    }
  }

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 overflow-y-auto">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-4">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Log in to your account to continue
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                      <div className="relative rounded-lg shadow-sm">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-500">
                          <FaEnvelope />
                        </span>
                        <Input
                          className="pl-10 pr-4 py-3 block w-full border border-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                          placeholder="Enter your email"
                          {...field}
                          required
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium text-gray-700">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative rounded-lg shadow-sm">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-500">
                          <FaLock />
                        </span>
                        <Input
                          className="pl-10 pr-4 py-3 block w-full border border-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                          placeholder="Enter your password"
                          {...field}
                          required
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-gradient-to-l hover:from-blue-600 hover:to-indigo-500 transition duration-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none shadow-md"
              >
                Login
              </Button>

              {/* Additional Links */}
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <Link
                  href="/forgot-password"
                  className="hover:text-indigo-600 transition"
                >
                  Forgot Password?
                </Link>
                <Link
                  href="/signup"
                  className="hover:text-indigo-600 transition"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
