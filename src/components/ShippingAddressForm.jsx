import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const shippingAddresFormSchema = z.object({
  line_1: z.string().min(1).max(50),
  line_2: z.string().min(1).max(50).optional(),
  city: z.string().min(1).max(50),
  phone: z.string().min(1).max(15),
});

function ShippingAddressForm() {
  const form = useForm({
    resolver: zodResolver(shippingAddresFormSchema),
    defaultValues: {
      line_1: "",
      line_2: "",
      city: "",
      phone: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="line_1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input placeholder="123/5" {...field} />
              </FormControl>
              <FormDescription>This is the address line 1</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="line_2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 2</FormLabel>
              <FormControl>
                <Input placeholder="123/5" {...field} />
              </FormControl>
              <FormDescription>This is the address line 2</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="123/5" {...field} />
              </FormControl>
              <FormDescription>This is the city</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="123/5" {...field} />
              </FormControl>
              <FormDescription>This is the phone number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

export default ShippingAddressForm;
