"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Halo Kamu ";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Fungsi untuk menangani pengiriman data
  const handleSubmit = () => {
    alert(`Masukan & Saran Telah terkirim`);

    // Mengosongkan semua input
    setName("");
    setEmail("");
    setMessage("");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😉
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Kepada Yuma,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ketikan Pesan Disini"
          />
          <span>Email Saya :</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />

          <button
            onClick={() => alert(`Masukan & Saram Telah terkirim`)}
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
          >
            Send Dummy
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Saran & Masukan Telah Terkirim !
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Isi Yang Bener Dong !
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
