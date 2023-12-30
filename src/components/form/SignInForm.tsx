"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";


const FormSchema = z.object({
  email: z.string(),
  password: z.string()
})

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = () => {
    console.log("form submited!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Input your Email" {...field} />
              </FormControl>
               <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
               <FormMessage />
            </FormItem>
          )}
        />

        </div>
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
};


export default SignInForm;

//tới 26p https://www.youtube.com/watch?v=GkpEWkKQego