"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_3jehxou', // Replace with your EmailJS service ID
        'template_qis3dzp', // Replace with your EmailJS template ID
        {
          to_email: 'Srishant054@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YR_M1cbrPcP1oyNiT' // Replace with your EmailJS user ID
      );

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-primary"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[150px]"
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <TwitterIcon className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
