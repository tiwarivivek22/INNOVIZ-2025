"use client"

import { useState, useRef, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function MentalHealthScreeningPage() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string; tag?: string }>>([
    {
      role: "assistant",
      content: "Hello! I’m your Mental Health Assistant. I’m here to help assess your emotional well-being. How are you feeling today?",
      tag: "neutral",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (input.trim() === "") return

    const userMessage = input
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const contentLower = userMessage.toLowerCase()
      let tag = "neutral"
      let response = ""

      if (contentLower.includes("overwhelmed") || contentLower.includes("exam") || contentLower.includes("pressure")) {
        tag = "stress"
        response =
          "It sounds like academic stress might be affecting your well-being. Would you like to take a short stress level screening or try some breathing exercises?"
      } else if (contentLower.includes("lonely") || contentLower.includes("ignored") || contentLower.includes("isolated")) {
        tag = "social"
        response =
          "Feeling disconnected can impact your mental health. Would you like tips on building supportive relationships or finding student groups?"
      } else if (contentLower.includes("good") || contentLower.includes("fine") || contentLower.includes("motivated")) {
        tag = "positive"
        response = "That's great to hear! Staying emotionally balanced is important. Would you like a positive habit tracker?"
      } else {
        response = "Thank you for sharing. Would you like to proceed with a well-being survey or discuss coping strategies?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response, tag }])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container py-6 flex flex-1 flex-col">
        <div className="mx-auto max-w-2xl w-full flex-1">
          <h1 className="mb-2 text-3xl font-bold">Student Mental Health Screening</h1>
          <p className="mb-6 text-gray-500">A confidential space to talk and get guidance</p>

          <Card className="flex h-[calc(100vh-250px)] flex-col">
            <div className="flex-1 overflow-y-auto p-4"></div>
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        m.role === "user" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {m.role === "assistant" && m.tag && (
                        <div className="mb-1 text-xs capitalize text-gray-500 flex items-center">
                          <div
                            className={`mr-2 h-2 w-2 rounded-full ${
                              m.tag === "stress"
                                ? "bg-red-400"
                                : m.tag === "social"
                                ? "bg-yellow-400"
                                : m.tag === "positive"
                                ? "bg-green-400"
                                : "bg-gray-400"
                            }`}
                          />
                          {m.tag}
                        </div>
                      )}
                      <p className="text-sm">{m.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg bg-gray-100 p-3 text-gray-800">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 animate-bounce bg-gray-400 rounded-full" />
                        <div
                          className="h-2 w-2 animate-bounce bg-gray-400 rounded-full"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce bg-gray-400 rounded-full"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
  
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Share how you're feeling..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
                    className="resize-none min-h-[60px]"
                  />
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={handleSend}
                    disabled={input.trim() === "" || isTyping}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
  )
}