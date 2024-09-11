import { useState } from 'react'
import { motion } from 'framer-motion'
import { projectData, skills, testimonials } from '../lib/data'

import PIC from '../assets/hassan-zohaib.png'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Form from './Form'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navigate = useNavigate()

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex flow-row">
            <img src="/h.png" alt="logo" className="w-8 -mr-2" />
            assan Zohaib
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 py-4"
          >
            <a
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Skills
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Contact
            </a>
          </motion.nav>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          >
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">
              Crafting digital experiences that inspire and engage
            </p>
            <button
              onClick={() => {
                navigate('/cv')
              }}
              className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105"
            >
              View CV
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={PIC}
              alt="Hassan Zhoaib"
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3"
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map(({ id, name, img, desc, slug, tech }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={img}
                  alt={`Project ${name}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map((x) => {
                      return (
                        <span
                          key={x}
                          className={`flex flex-row px-3 py-1 text-white rounded-full text-sm font-medium
                            ${
                              x === 'HTML'
                                ? 'bg-orange-500'
                                : x === 'CSS'
                                ? 'bg-blue-500'
                                : x === 'React'
                                ? 'bg-sky-400'
                                : x === 'Node.js'
                                ? 'bg-green-600'
                                : x === 'TypeScript'
                                ? 'bg-blue-700'
                                : x === 'Next JS'
                                ? 'bg-black'
                                : x === 'Tailwind CSS'
                                ? 'bg-teal-500'
                                : x === 'Tauri'
                                ? 'bg-yellow-500'
                                : x === 'Rust'
                                ? 'bg-red-500'
                                : 'bg-white'
                            }

                            }
                            `}
                        >
                          {x}
                        </span>
                      )
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {desc}
                  </p>
                  <button
                    onClick={() => {
                      navigate(`/project/${slug}`)
                    }}
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold mb-12 text-center"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map(({ id, name, bgColor }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                className={`${bgColor} hover:text-black dark:bg-gray-700 -py-5 rounded-lg px-6 text-center shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50 dark:hover:bg-gray-600`}
              >
                <h3 className="text-lg font-semibold hover:text-black text-white py-5">
                  {name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold mb-12 text-center"
          >
            Client Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic">{testimonial.desc}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Form />

      <Footer />
    </div>
  )
}
