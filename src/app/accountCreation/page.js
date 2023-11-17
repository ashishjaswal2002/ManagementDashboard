'use client'

import {useForm} from 'react-hook-form'
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useRouter} from 'next/navigation'


export default function Accounts(){
   
    const router = useRouter();
     const schema = z.object({
        username:z.string().min(3).max(30),
        password:z.string().min(5).max(20)
    });
    const {register,handleSubmit} = useForm({resolver:zodResolver(schema)})

    const submitData=(data)=>{
        console.log("It worked",data)
        router.push("/done")
    }

    return (
        <main>
   <section className='p-12'>
   <div className="mx-auto max-w-sm space-y-6">
  <div className="space-y-2 text-center">
    <h1 className="text-3xl font-bold">SignUp</h1>
    <p className="text-zinc-500 dark:text-zinc-400">Please enter your username and password</p>
  </div>
  <div className="space-y-4">
    <form onSubmit={handleSubmit(submitData)}>

         <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="username"
        >
        Username
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="username"
        placeholder="Username"
        {...register("username")} required 
        />
    </div>
     <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="password"
       
        >
        Password
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type='password' {...register("password")} required
        placeholder="Please enter at least 5 characters"
     
        />
     </div>
     <div className='flex justify-center'>
     <input type="submit" value="Submit" className="bg-gray-300  px-8 py-2 rounded hover:bg-gray-500 mt-4  " />
      </div>  
        </form>
   </div>
</div>
      
        </section>
        </main>
    )
}