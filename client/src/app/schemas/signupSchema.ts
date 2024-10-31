import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(50),
  avatar: z
  .instanceof(File)
  .refine((file) => file?.size <= 5 * 1024 * 1024, { // max size 5MB
    message: "File size must be less than 5MB",
  })
  .refine(
    (file) => ["image/jpeg", "image/png"].includes(file?.type), // allowed file types
    {
      message: "Only .jpg or .png files are allowed",
    }
  )
  .optional(), 
});