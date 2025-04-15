import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function MedScan() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-teal-800">MedScan AI</h2>
          <p className="mb-6 text-lg text-gray-600">
            MedScan AI provides a comprehensive analysis of your medical reports, helping you understand your medications, dosages, and precautions in an easy-to-understand format.
          </p>
          <Card className="mx-auto w-full max-w-lg">
            <CardContent>
              <CardTitle>Features</CardTitle>
              <p>Detailed insights into your prescriptions.</p>
              <p>Real-time medication tracking and reminders.</p>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Button variant="outline" className="bg-teal-600 hover:bg-teal-700">
              Get Started with MedScan AI
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
