"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

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
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {error && (
          <motion.div 
            className="p-4 bg-red-900/50 border border-red-500 text-red-200 rounded-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}
        
        {isSubmitted && (
          <motion.div 
            className="p-4 bg-green-900/50 border border-green-500 text-green-200 rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            Your message has been sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatedInput
        id="name"
        label="Name"
        type="text"
        value={name}
        onChange={setName}
        placeholder="Your name"
        disabled={isSubmitting}
        required
      />
      
      <AnimatedInput
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="Your email address"
        disabled={isSubmitting}
        required
      />
      
      <AnimatedInput
        id="message"
        label="Message"
        type="textarea"
        value={message}
        onChange={setMessage}
        placeholder="Your message"
        disabled={isSubmitting}
        required
        rows={6}
      />
      
      <AnimatedButton
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        Send Message
      </AnimatedButton>
    </motion.form>
  );
}

interface AnimatedInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
}

function AnimatedInput({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  rows = 4
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setHasValue(newValue.length > 0);
  };

  const inputClasses = `
    w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg
    text-white placeholder-transparent transition-all duration-200
    focus:outline-none focus:border-blue-500 focus:bg-gray-800
    disabled:opacity-50 disabled:cursor-not-allowed
    ${isFocused || hasValue ? 'pt-6 pb-2' : ''}
  `;

  const labelClasses = `
    absolute left-4 transition-all duration-200 pointer-events-none
    ${isFocused || hasValue || value 
      ? 'top-2 text-xs text-blue-400' 
      : 'top-3 text-base text-gray-400'
    }
  `;

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.label
        htmlFor={id}
        className={labelClasses}
        layout
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      
      {type === "textarea" ? (
        <motion.textarea
          id={id}
          value={value}
          onChange={handleChange}
          className={`${inputClasses} min-h-[120px] resize-y`}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <motion.input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      
      {/* Focus indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ originX: 0.5 }}
      />
    </motion.div>
  );
}