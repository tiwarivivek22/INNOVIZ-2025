"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-teal-50 flex flex-col items-center justify-center font-[Poppins] px-4">
      <Navbar />
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
        
        {/* Sign In */}
        <div
          className={cn(
            "w-full md:w-1/2 p-8 transition-all duration-700 ease-in-out",
            isSignUp ? "-translate-x-full opacity-0 absolute md:static" : "opacity-100"
          )}
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">Sign In</h2>
          <div className="flex justify-center gap-4 mb-4 text-teal-600">
            <i className="fa-brands fa-facebook text-xl" />
            <i className="fa-brands fa-instagram text-xl" />
            <i className="fa-brands fa-google text-xl" />
            <i className="fa-brands fa-github text-xl" />
          </div>
          <p className="text-sm text-center text-gray-500 mb-4">or use your email account</p>
          <form className="flex flex-col gap-3">
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Password" type="password" required />
            <a href="#" className="text-sm text-teal-600 hover:underline">Forgot password?</a>
            <Button className="bg-teal-600 hover:bg-teal-700 mt-2">Sign In</Button>
          </form>
        </div>

        {/* Sign Up */}
        <div
          className={cn(
            "w-full md:w-1/2 p-8 absolute md:static transition-all duration-700 ease-in-out",
            isSignUp ? "opacity-100 left-0 md:left-auto" : "opacity-0 md:opacity-100 md:hidden"
          )}
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">Sign Up</h2>
          <div className="flex justify-center gap-4 mb-4 text-teal-600">
            <i className="fa-brands fa-facebook text-xl" />
            <i className="fa-brands fa-instagram text-xl" />
            <i className="fa-brands fa-google text-xl" />
            <i className="fa-brands fa-github text-xl" />
          </div>
          <p className="text-sm text-center text-gray-500 mb-4">or use email for registration</p>
          <form className="flex flex-col gap-3">
            <Input placeholder="Name" type="text" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Password" type="password" required />
            <Button className="bg-teal-600 hover:bg-teal-700 mt-2">Sign Up</Button>
          </form>
        </div>

        {/* Toggle Panel for Desktop */}
        <div className="hidden md:flex md:flex-col md:items-center md:justify-center w-1/2 bg-teal-600 text-white p-10 transition-all duration-700">
          <h2 className="text-3xl font-bold mb-2">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="text-sm mb-6 text-center max-w-xs">
            {isSignUp
              ? "Already have an account? Log in and stay healthy with CareSync AI!"
              : "Don’t have an account yet? Join us today and take control of your health!"}
          </p>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-teal-700"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </div>
      </div>
    </div>
  )
}
