import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { validationFormSchema } from "@/lib/validations"
import { NavLink } from "react-router-dom"


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
      <div className="flex flex-col gap-5">
        <img src = "/assets/images/logo.svg" alt = "logo"/>
        <h2 className="text-2xl text-center">Create a new account</h2>
        <p className="text-center">To use snapgram, Please enter your details.</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
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
                <Input type="text"  {...field} />
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
                <Input type="text"  {...field} />
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
                <Input type="password"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full shad-button_primary" type="submit">
          Sign Up
        </Button>
        <p className="text-center">Already have an account ? <NavLink to = "/sign-in" className= "text-primary-500"> Log In</NavLink></p>
      </form>
      </div>
    </Form>
  );
}

export default SignupForm
