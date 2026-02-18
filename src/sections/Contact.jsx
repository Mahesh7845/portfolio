import SectionCard from "../components/SectionCard";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

// ✅ Initialize EmailJS ONCE (required)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formEl = formRef.current;
    const formData = new FormData(formEl);

    // 🛡️ Honeypot
    if (formData.get("company")) return;

    try {
      // 📩 MAIN EMAIL (to you)
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 🔁 AUTO-REPLY (to sender)
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          formEl,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch { }

      // ✅ NOW safe to reset
      formEl.reset();
      toast.success("Message sent successfully!");
      setStatus("success");

    } catch (error) {
      console.error("Main email failed:", error);
      toast.error("Failed to send message. Try again.");
      setStatus("error");
    }
  };

  return (
    <SectionCard id="contact">
      {/* Heading */}
      <p className="mb-2 text-sm tracking-widest text-zinc-400">// CONTACT</p>

      <h2 className="mb-4 text-3xl font-bold text-white">Get In Touch</h2>

      <p className="mb-10 max-w-2xl text-zinc-400">
        Feel free to reach out for job opportunities, internships, freelance
        work, or collaboration.
      </p>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        autoComplete="off"
        className="space-y-8"
      >
        {/* 🛡️ Honeypot field (hidden from users) */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <label className="text-sm text-zinc-400">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="mt-2 w-full border-b border-zinc-700 bg-transparent pb-2 text-white outline-none transition focus:border-white"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="mt-2 w-full border-b border-zinc-700 bg-transparent pb-2 text-white outline-none transition focus:border-white"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="text-sm text-zinc-400">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Reason for contacting"
            className="mt-2 w-full border-b border-zinc-700 bg-transparent pb-2 text-white outline-none transition focus:border-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-zinc-400">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Write your message here..."
            className="mt-2 w-full resize-none border-b border-zinc-700 bg-transparent pb-2 text-white outline-none transition focus:border-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-sweep rounded-full bg-white px-10 py-3 text-sm font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </SectionCard>
  );
};

export default Contact;