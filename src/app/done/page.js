import Link from "next/link"
export default function Done() {

    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div className="p-8 bg-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-center text-gray-500">Dear,User</h1>
          <p className="mt-4 text-2xl text-center text-gray-400">You are Registered Successfully</p>
          <div className="mt-8">
            <button className="w-full p-2 text-gray-500 border-gray-500" variant="outline">
            <Link href='/' className='text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 ' >Go to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
    )
}