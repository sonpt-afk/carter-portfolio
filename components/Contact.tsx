"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Send, Sparkles, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const showSuccessMsg = () => toast.success("Message sent successfully!!");
  const showFailMsg = () =>
    toast.error("Failed to send message. Please try again.");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
    };

    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        showSuccessMsg();
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
      } else {
        showFailMsg();
        setSubmitStatus({ type: "error", message: "Failed to send message" });
      }
    } catch (error) {
      console.log(error);
      showFailMsg();
      setSubmitStatus({ type: "error", message: "Failed to send message" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <Sparkles size={16} className="text-brand-lime" />
              <span className="text-sm font-medium text-muted-foreground">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Let&apos;s <span className="text-gradient-rainbow">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together to build something amazing
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-strong rounded-2xl border-2 border-brand-cyan/30 p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-display font-semibold mb-3 text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-brand-cyan" />
                      Your Name
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl bg-background/50 border-2 ${
                      errors.name ? "border-destructive" : "border-border"
                    } focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all placeholder:text-muted-foreground`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm mt-2 flex items-center gap-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-display font-semibold mb-3 text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-brand-coral" />
                      Your Email
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl bg-background/50 border-2 ${
                      errors.email ? "border-destructive" : "border-border"
                    } focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none transition-all placeholder:text-muted-foreground`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm mt-2 flex items-center gap-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-display font-semibold mb-3 text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-brand-lime" />
                      Your Message
                    </div>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border-2 border-border focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20 outline-none transition-all placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full relative px-8 py-5 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-coral text-white font-display font-bold text-lg rounded-xl inline-flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-cyan/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <motion.div
                    animate={isSubmitting ? { rotate: 360 } : {}}
                    transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0, ease: "linear" }}
                    className="relative z-10"
                  >
                    <Send size={20} />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                </motion.button>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-xl text-center font-semibold ${
                      submitStatus.type === "success"
                        ? "bg-brand-lime/10 text-brand-lime border-2 border-brand-lime/30"
                        : "bg-destructive/10 text-destructive border-2 border-destructive/30"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastClassName="glass-strong"
      />
    </>
  );
};

export default Contact;
