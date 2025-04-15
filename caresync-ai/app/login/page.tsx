"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-teal-50 font-[Poppins]">
      <Navbar />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px] flex border border-teal-100">
        {/* Sign In Form */}
        <div
          className={cn(
            "w-1/2 p-10 transition-all duration-700 ease-in-out",
            isSignUp ? "-translate-x-full opacity-0" : "opacity-100"
          )}
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">Sign In</h2>
          <div className="flex justify-center gap-3 mb-4 text-teal-600">
            <i className="fa-brands fa-facebook text-xl" />
            <i className="fa-brands fa-instagram text-xl" />
            <i className="fa-brands fa-google text-xl" />
            <i className="fa-brands fa-github text-xl" />
          </div>
          <span className="text-sm text-gray-500 block text-center mb-4">or use your email account</span>
          <form className="flex flex-col gap-3">
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Password" type="password" required />
            <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
            <Button className="bg-teal-600 hover:bg-teal-700 mt-2">Sign In</Button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={cn(
            "w-1/2 p-10 absolute top-0 transition-all duration-700 ease-in-out",
            isSignUp ? "left-1/2 opacity-100" : "left-0 opacity-0"
          )}
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">Sign Up</h2>
          <div className="flex justify-center gap-3 mb-4 text-teal-600">
            <i className="fa-brands fa-facebook text-xl" />
            <i className="fa-brands fa-instagram text-xl" />
            <i className="fa-brands fa-google text-xl" />
            <i className="fa-brands fa-github text-xl" />
          </div>
          <span className="text-sm text-gray-500 block text-center mb-4">or use email for registration</span>
          <form className="flex flex-col gap-3">
            <Input placeholder="Name" type="text" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Password" type="password" required />
            <Button className="bg-teal-600 hover:bg-teal-700 mt-2">Sign Up</Button>
          </form>
        </div>

        {/* Toggle Panel */}
        <div
          className={cn(
            "absolute w-1/2 h-full top-0 right-0 bg-teal-600 text-white flex flex-col items-center justify-center p-10 transition-all duration-700 ease-in-out z-10",
            isSignUp ? "translate-x-[-100%] rounded-l-2xl" : "rounded-r-2xl"
          )}
        >
          <h2 className="text-3xl font-bold mb-2">
            {isSignUp ? "Welcome Back!" : "Hello, User!"}
          </h2>
          <p className="text-sm mb-6">
            {isSignUp ? "Already have an account?" : "Don’t have an account yet?"}
          </p>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-teal-600"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </div>
      </div>
    </div>
  )
}