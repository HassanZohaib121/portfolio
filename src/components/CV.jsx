import { useState, useRef } from 'react'
import { Button } from '../components/ui/button'
import ReactToPrint from 'react-to-print'

import {
  personalSkills,
  personalInfo,
  workExperience,
  education,
  skill,
  commonSkills,
} from '../lib/data'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CV() {
  const [imageError, setImageError] = useState(false)

  const navigate = useNavigate()

  const componentRef = useRef()

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow mb-2">
        <div className="container mx-auto px-4 py-4 flex flex-row justify-between">
          <a
            href="/portfolio"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </a>
          <ReactToPrint
            trigger={() => (
              <Button
                onClick={navigate('/portfolio/cv/hassan.pdf')}
                download
                className="bg-primary text-white font-bold rounded-xl bg-gray-700 hover:bg-gray-300 hover:text-gray-700 mb-3"
              >
                Download CV
              </Button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </header>

      <div
        className="max-w-6xl mx-auto p-8 bg-white shadow-2xl border border-cyan-100"
        ref={componentRef}
      >
        <header className="flex flex-col md:flex-row justify-between items-start mb-8 border-b pb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-gray-600 mb-4">
              {personalInfo.jobTitle}
            </p>
          </div>
          {!imageError ? (
            <img
              src={personalInfo.imageUrl}
              alt={`${personalInfo.name}'s photo`}
              width={100}
              height={100}
              className="rounded-full mt-4 md:mt-0"
              onError={handleImageError}
            />
          ) : (
            <div className="w-[100px] h-[100px] bg-gray-200 rounded-full mt-4 md:mt-0 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <strong>Address:</strong> {personalInfo.address}
            </p>
            <p>
              <strong>Telephone:</strong> {personalInfo.telephone}
            </p>
            <p>
              <strong>Email:</strong> {personalInfo.email}
            </p>
            <p>
              <strong>Nationality:</strong> {personalInfo.nationality}
            </p>
            <p>
              <strong>Date of birth:</strong> {personalInfo.birthDate}
            </p>
            <p>
              <strong>Gender:</strong> {personalInfo.gender}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2">
            Work Experience
          </h2>
          {workExperience.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{job.dates}</p>
              <p className="font-semibold">{job.position}</p>
              <p>
                {job.employer}, {job.address}
              </p>
              <ul className="list-disc list-inside mt-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2">
            Education and Training
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{edu.dates}</p>
              <p className="font-semibold">{edu.title}</p>
              <p>{edu.organization}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2">
            Personal Skills
          </h2>
          {personalSkills.map((skillSet, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{skillSet.category}</h3>
              {Array.isArray(skillSet.skills[0]) ? (
                <ul className="list-disc list-inside mt-2">
                  {skillSet.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="list-disc list-inside mt-2">
                  {skillSet.skills.map((lang, idx) => (
                    <li key={idx} className="text-gray-700">
                      {lang.language}: Understanding: {lang.understanding},
                      Speaking: {lang.speaking}, Writing: {lang.writing}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <ul className="list-disc list-inside mt-2">
            {commonSkills.map((lang, idx) => (
              <li key={idx} className="text-gray-700 flex flex-col">
                <div className="text-lg font-semibold">{lang.category}</div>
                {lang.skills.map((x) => {
                  return <div key={x}>{x}</div>
                })}
              </li>
            ))}
          </ul>
          <ul className="my-3">
            {skill.map((lang, idx) => (
              <li key={idx} className="text-gray-700 flex flex-col ">
                <div className="text-2xl font-semibold mb-4 bg-gray-200 p-2">
                  {lang.category}
                </div>
                <div className="grid grid-cols-4 gap-3 ml-2">
                  {lang.skills.map((x) => {
                    return (
                      <div key={x} className="text-gray-700 ">
                        {x}
                      </div>
                    )
                  })}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
