import { z } from "zod";

const image = z.instanceof(File).nullable()

export const signUpSchema = z.object({
  username: z.string().min(3).max(50),
  fullName: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(50),
  avatar: image,
  coverImage: image
});