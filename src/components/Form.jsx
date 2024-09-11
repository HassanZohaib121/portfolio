import { Send } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_8git0cs', // Replace with your EmailJS service ID
        'template_ki19dqk', // Replace with your EmailJS template ID
        e.target,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Email successfully sent!', result)
        },
        (error) => {
          console.log(error.text)
        }
      )

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <Send /> <span className="ml-3">Send Message</span>
          </button>
        </motion.form>
      </div>
    </section>
  )
}
