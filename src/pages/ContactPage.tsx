import RootLayout from "../layouts/RootLayout";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function ContactPage() {
  return (
    <RootLayout>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
          Get In Touch
        </h1>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <p className="text-center text-lg mb-8 text-gray-600 dark:text-gray-300">
            Have a project idea, a question, or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Name
              </label>
              <Input id="name" type="text" placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Subject
              </label>
              <Input id="subject" type="text" placeholder="Subject of your message" className="w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Your message..." rows={5} className="w-full" />
            </div>
            <Button type="submit" className="w-full py-3 text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </RootLayout>
  );
}