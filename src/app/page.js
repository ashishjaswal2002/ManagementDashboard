
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black min-h-screen">
      

      <section>
      <div className=" px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Welcome to User Management Dashboard
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Manage all your users in one place. Securely and efficiently.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-4 mx-auto p-2 flex flex-col">
       
            <Link href='/userDetails' className='text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 ' > User Details</Link>
          <Link href='/accountCreation' className=' text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 '> Account Creation</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}
