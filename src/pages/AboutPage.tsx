import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const AboutPage: React.FC = () => {
  return (
    <div className="container py-16 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12">About Us</h1>
      <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-6">
        <p>
          Welcome to our E-commerce Site, your ultimate destination for cutting-edge technology and innovative products.
          We are passionate about bringing you the latest and greatest gadgets that enhance your everyday life and fuel your passions.
        </p>
        <p>
          Founded in {new Date().getFullYear() - 5}, our mission has been to curate a selection of high-quality,
          reliable, and stylish products that meet the diverse needs of our customers. From smart devices to audio
          equipment, and gaming peripherals, we strive to offer an unparalleled shopping experience.
        </p>
        <p>
          Our team is dedicated to providing exceptional customer service, ensuring that your journey with us
          is smooth and satisfying. We believe in transparency, integrity, and building lasting relationships
          with our community.
        </p>
        <p>
          Thank you for choosing us. We look forward to serving you!
        </p>
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};
