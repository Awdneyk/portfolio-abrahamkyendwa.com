"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validation
    if (!name || !email || !message) {
      setError("All fields are required");
      setIsSubmitting(false);
      return;
    }

    try {
      // This would be replaced with your actual form submission logic
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form and show success message
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-900/50 border border-red-500 text-red-200 rounded-md">
          {error}
        </div>
      )}
      
      {isSubmitted && (
        <div className="p-4 bg-green-900/50 border border-green-500 text-green-200 rounded-md">
          Your message has been sent successfully! I&apos;ll get back to you soon.
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 w-full"
          placeholder="Your name"
          disabled={isSubmitting}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800 w-full"
          placeholder="Your email address"
          disabled={isSubmitting}
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-800 w-full min-h-[150px]"
          placeholder="Your message"
          disabled={isSubmitting}
          required
        />
      </div>
      
      <button
        type="submit"
        className={`button w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}