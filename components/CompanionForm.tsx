"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { minLength, url } from "zod/v4"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { subjects, voices } from "@/constants"
import { Textarea } from "./ui/textarea"
import { redirect } from "next/navigation"
import { createCompanion } from "@/lib/actions/companions.actions"
 
const formSchema = z.object({
  name: z.string().min(1, {message:"companion is required"}),
  subject: z.string().min(1, {message:"subject is required"}),
  topic: z.string().min(1, {message:"topic is required"}),
  voice: z.string().min(1, {message:"voice is required"}),
  style: z.string().min(1, {message:"style is required"}),
  duration: z.coerce.number().min(1, {message:'duration is required'}),
})
const CompanionForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name : '',
        subject : '',
        topic : '',
        voice : '',
        style : '',
        duration : 15
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async ( values: z.infer<typeof formSchema>) =>{
    const companion = await createCompanion(values);
    if(companion){
      redirect(`companions/${companion.id}`)
    }
    else{
      console.log("failed to create a companion");
      redirect('/')
    }
  }
  return (
    <div>
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Companion name" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the Subject" />
  </SelectTrigger>
  <SelectContent>
    {subjects.map((subject)=>(
        <SelectItem
            value={subject}
            key={subject}
            className="capitalize"
        >
            {subject}
        </SelectItem>
    ))}
  </SelectContent>
</Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should this companion teach?</FormLabel>
              <FormControl>
                <Textarea placeholder="Derivatives & Integrals" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the voice" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="male">
        Male
    </SelectItem>
    <SelectItem value="female">
        Female
    </SelectItem>
  </SelectContent>
</Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Speaking Style</FormLabel>
              <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the style" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="formal">
        Formal
    </SelectItem>
    <SelectItem value="casual">
        Casual
    </SelectItem>
  </SelectContent>
</Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Session Duration in Mins</FormLabel>
              <FormControl>
                <Input type="number" placeholder="" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
        <Button type="submit" className="w-full cursor-pointer">Build Your Own Companion</Button>
      </form>
      </Form>
    </div>
  )
}

export default CompanionForm
