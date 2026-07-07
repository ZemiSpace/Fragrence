import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .trim(),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number cannot exceed 15 digits." })
    .regex(/^[+]?[0-9\s-]{10,15}$/, {
      message: "Please enter a valid phone number (e.g. +91 98765 43210 or 9876543210).",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .or(z.literal("")), // Allows empty string for optional email
  enquiryType: z.enum(["general", "recommendation", "gift-hamper", "corporate-bulk"]),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot exceed 1000 characters." })
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type EnquiryType = "general" | "recommendation" | "gift-hamper" | "corporate-bulk";
