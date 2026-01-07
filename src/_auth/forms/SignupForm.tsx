import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl , FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { validationFormSchema } from "@/lib/validations"


const SignupForm = () => {
  const form = useForm<z.infer<typeof validationFormSchema>>({
    resolver: zodResolver(validationFormSchema),
    defaultValues: {
      name : "",
      username: "",
      email : "",
      password : ""
    },
  })

   function onSubmit(values: z.infer<typeof validationFormSchema>) {
     console.log(values);
   }

  return (
    <Form {...form}>
      <div className="flex flex-col">
        <img src="/assets/images/logo.svg" alt = "logo"/>
        <h2>Log in to your account</h2>
        <p>Welcome Back!Please enter your details.</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5 mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type = "text"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type = "text" {...field} />
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
                <Input type = "text"  {...field} />
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
                <Input type = "password"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Submit</Button>
      </form>
      </div>
    </Form>
  )
}

export default SignupForm
