import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { projectData } from '../lib/data'

export default function SingleProject() {
  const { slug } = useParams()

  const project = projectData.find((proj) => proj.slug === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6">
          <a
            href="/portfolio"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img
              src={project.img}
              alt={`${project.name} Image`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {project.name}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((x) => {
                return (
                  <span
                    key={x}
                    className=" flex flex-row px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {x}
                  </span>
                )
              })}
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p>{project.desc}</p>
              <h2 className=" text-xl font-bold my-2">Key Features</h2>
              <ul>
                {project.feature.map((x) => (
                  <li key={x} className="mb-2">
                    Feature {x}
                  </li>
                ))}
              </ul>
              {/* <h2>Challenges and Solutions</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {project.screenShot.map((x) => {
                return (
                  <img
                    key={x}
                    src={x}
                    alt={`${project.name} Screenshot`}
                    className="rounded-lg shadow-md"
                  />
                )
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </a>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
