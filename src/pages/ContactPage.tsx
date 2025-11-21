import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    // In a real application, you would send this to a backend service
  };

  return (
    <div className="container py-16 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
        <p className="text-lg text-muted-foreground mb-6 text-center">
          Have questions or need assistance? Reach out to us using the form below, or find our contact details.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@example.com" required />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" type="text" placeholder="Subject of your inquiry" required />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message here." rows={5} required />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
        <div className="mt-8 text-center text-muted-foreground">
          <p>Email: <a href="mailto:support@ecommerce.com" className="text-primary hover:underline">support@ecommerce.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></p>
        </div>
      </div>
    </div>
  );
};
