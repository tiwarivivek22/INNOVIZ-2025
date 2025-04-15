import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const team = [
    {
      name: "Vivek Prabhat",
      role: "Project Lead & Frontend Developer",
      image: "/6.jpg",
      bio: "Vivek is a computer science student with a passion for AI and healthcare. He has worked on several projects in Web Development & AI.",
    },
    {
      name: "Anuj Kumar",
      role: "Co-Project Lead & Backend Developer",
      image: "/anuj.jpg",
      bio: "Anuj has a background in computer science and has worked on various backend projects in the healthcare sector.",
    },
    {
      name: "Vani Chandra",
      role: "UI/UX Designer & Researcher",
      image: "/vani.jpg",
      bio: "Vani has a background in design and has worked on various projects in the healthcare sector.",
    },
    {
      name: "Ankur Negi",
      role: "UI/UX Designer & Researcher",
      image: "/7.jpg",
      bio: "Ankur has a background in design and has worked on various projects in the healthcare sector.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-teal-50 py-20">
        <div className="container mx-auto flex flex-col items-center gap-8 px-4 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">CareSync AI –</span>
              <span className="block text-teal-600">
                Your Personal Health & Wellness Companion
              </span>
            </h1>
            <p className="text-xl text-gray-500">
              Empowering you with medical insights and emotional support
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/analyze">Start Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/mindmate">Talk to MindMate</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/4.jpg"
              alt="Wellness illustration"
              width={400}
              height={400}
              className="mx-auto h-auto w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="mb-12 text-center text-3xl font-bold">Our Features</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          icon: "📄",
          title: "MedScan AI",
          desc: "Analyze Medical Reports",
          content:
            "Upload your medical reports and get detailed insights about your medications, dosages, and precautions in a clear, easy-to-understand format.",
          href: "/medscan",  // Link to MedScan page
        },
        {
          icon: "💬",
          title: "MindMate AI",
          desc: "Mental Health Support",
          content:
            "Talk to our empathetic AI companion about your health concerns, anxieties, or just to get emotional support during your wellness journey.",
          href: "/mindmate",  // Link to MindMate page
        },
        {
          icon: "🌿",
          title: "Holistic Health",
          desc: "Complete Wellness Approach",
          content:
            "We combine medical insights with emotional support to provide a comprehensive approach to your health and wellness needs.",
          href: "/holistic-health",  // Link to Holistic Health page
        },
      ].map((feature) => (
        <Card key={feature.title}>
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl">
              {feature.icon}
            </div>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{feature.content}</p>
            {/* Link to the feature page */}
            <Link href={feature.href}>
              <Button variant="outline" className="mt-4">Learn More</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Our Team Section */}
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-teal-800">Meet the Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-teal-600 mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                image: "/8.jpg",
                quote:
                  "MindMate helped me through a very tough time. It listens, responds with care, and offers genuine comfort. Thank you!",
                name: "Anjali M.",
              },
              {
                image: "/9.jpg",
                quote:
                  "MedScan AI was so easy to use. It explained my prescriptions in simple terms and helped me stay on track.",
                name: "Rohan S.",
              },
              {
                image: "/8.jpg",
                quote:
                  "CareSync AI is a game changer. I feel more in control of my physical and mental health than ever before.",
                name: "Priya T.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-lg rounded-2xl w-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={250}
                      height={150}
                      className="rounded-lg object-cover shadow-md"
                    />
                  </div>
                  <p className="text-gray-600">"{testimonial.quote}"</p>
                  <div className="mt-4 font-semibold text-teal-700">– {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-teal-700">We value your feedback</h2>
          <p className="mb-10 text-center text-gray-600">
            Help us improve your experience by sharing your thoughts with us.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input placeholder="Your Name" required />
              <Input placeholder="Your Email" type="email" required />
            </div>
            <Textarea placeholder="Your Feedback..." rows={5} required />
            <div className="text-center">
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t bg-gray-100 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-md bg-teal-600 p-1">❤️</div>
              <span className="text-lg font-bold text-teal-600">CareSync AI</span>
            </div>
            <p className="text-sm text-gray-600">
              Your AI-powered health and wellness assistant. We provide holistic care combining emotional support with medical insights.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/analyze" className="hover:text-teal-600">MedScan AI</Link></li>
              <li><Link href="/mindmate" className="hover:text-teal-600">MindMate AI</Link></li>
              <li><Link href="/contact" className="hover:text-teal-600">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-teal-600">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-800">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: tiwarivivek8765@gmail.com</li>
              <li>Phone: +91 7654406307</li>
              <li>Address: Delhi, India</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-800">Follow Us</h4>
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-sm">
              <Link href="https://www.facebook.com/" target="_blank" className="text-gray-500 hover:text-teal-600">Facebook</Link>
              <Link href="https://www.instagram.com/" target="_blank" className="text-gray-500 hover:text-teal-600">Instagram</Link>
              <Link href="https://www.twitter.com/" target="_blank" className="text-gray-500 hover:text-teal-600">Twitter</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
