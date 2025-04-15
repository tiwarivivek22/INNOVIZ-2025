import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MindMatePage() {
  return (
    <div>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">MindMate AI</h2>
          <p className="text-xl text-gray-600 mb-6">
            Talk to MindMate AI, your mental health companion. Get emotional support, stress relief, and guidance for a better well-being.
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/mindmate-chat">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
