import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <div className="container py-10">
        <div className="mx-auto max-w-4xl">
          <section className="mb-16">
            <h1 className="mb-6 text-4xl font-extrabold text-teal-600">About CareSync AI</h1>
            <div className="prose max-w-none text-gray-700">
              <p>
                CareSync AI was founded with a simple mission: to make healthcare more accessible and understandable for
                everyone. We believe that technology should empower individuals to take control of their health journey.
              </p>
              <p>
                Our platform combines advanced AI technology with a human-centered approach to provide both medical
                insights and emotional support. We understand that health is not just about physical wellbeing, but also
                about mental and emotional wellness.
              </p>
              <p>
                With CareSync AI, you can easily understand your medical reports, get clear explanations of your
                medications and treatments, and receive emotional support through our MindMate AI companion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-3xl font-bold text-teal-600">Contact Us</h2>
            <Card className="shadow-lg bg-white rounded-lg">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-medium text-gray-600">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-medium text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white transition duration-300 ease-in-out">Send Message</Button>
                </form>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3 h-8 w-8 text-teal-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-lg font-medium text-gray-700">+91 7654406307</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3 h-8 w-8 text-teal-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-lg font-medium text-gray-700">contact@caresync.ai</span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg border p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3 h-8 w-8 text-teal-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-lg font-medium text-gray-700">Delhi, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
