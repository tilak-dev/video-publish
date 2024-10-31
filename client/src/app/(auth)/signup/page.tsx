"use client";


import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "@/schemas/signupSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/utils/axiosInstance";

const SignupPage = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username:"",
      fullName: "",
      email: "",
      password: "",
      avatar: null,
      coverImage:  null ,

    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const formData = new FormData();

    // Append text fields
    formData.append("username", values.username);
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("password", values.password);

    // Append file fields
    if (values.avatar) formData.append("avatar", values.avatar);
    if (values.coverImage) formData.append("coverImage", values.coverImage);

    try {
      const response = await api.post("/users/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },//coz document is included
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }finally{
      form.reset();
    }
  }
  return (
  <div className="h-full w-full flex items-center justify-center bg-orange-50 overflow-y-auto">
      <div className="h-full w-full flex items-center justify-center bg-orange-50 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* fullname  and username*/}
            <div className=" flex justify-between">
            <FormField
              control={form.control}
              name="username"
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
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Full Name
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
            </div>
            
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
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Avatar</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      type="file"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                      placeholder="Enter your avater"
                      required
                      accept="image/*, application/pdf"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0] || null)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* cover image  */}
            <FormField
              control={form.control}
              name="coverImage"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      type="file"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                      placeholder="Enter your avater"
                      accept="image/*, application/pdf"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0] || null)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Signup Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </Button>

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
  </div>
  );
};

export default SignupPage;
