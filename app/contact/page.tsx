"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Our Office</h2>
        <img
          src="https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our office"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">
            We&apos;d Love to Hear From You
          </h2>
          {isSubmitted ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Thank you for your message!</strong>
              <p className="block sm:inline">
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us how we can help..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Send Message</Button>
              </form>
            </Form>
          )}
        </div>

        {/* Contact Information Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Hotel Name Street, Nairobi, Kenya
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +254 123 456 789
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@hotelname.com
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Our Location</h3>
          {/* Google Maps Embed */}
          <iframe
            className="w-full h-64 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.234024208839!2d-75.16352628461293!3d39.95258337942139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62b11111111%3A0x1111111111111111!2sSerene%20Stays!5e0!3m2!1sen!2sus!4v1618545523526!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>

          <h3 className="text-lg font-semibold mt-6 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              Instagram
            </a>
          </div>

          {/* Additional Section (Optional: FAQ) */}
          <h3 className="text-lg font-semibold mt-6 mb-2">
            Frequently Asked Questions
          </h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">What is your average response time?</li>
            <li className="mb-2">Do you offer customer support on weekends?</li>
            <li>How can I track my order?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
