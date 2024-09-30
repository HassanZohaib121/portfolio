export const skills = [
  { id: '1', name: 'HTML', bgColor: 'bg-orange-500' },
  { id: '2', name: 'CSS', bgColor: 'bg-blue-500' },
  { id: '3', name: 'React', bgColor: 'bg-sky-400' },
  { id: '4', name: 'Rust', bgColor: 'bg-green-600' },
  { id: '5', name: 'TypeScript', bgColor: 'bg-blue-700' },
  { id: '6', name: 'Next Js', bgColor: 'bg-black' },
  { id: '7', name: 'Tailwind CSS', bgColor: 'bg-teal-500' },
  { id: '8', name: 'Tauri', bgColor: 'bg-yellow-500' },
  { id: '9', name: 'Wordpress', bgColor: 'bg-[#21759B]' },
  { id: '10', name: 'Shadcn', bgColor: 'bg-zinc-800' },
  { id: '11', name: 'Javascript', bgColor: 'bg-yellow-800' },
  { id: '12', name: 'python', bgColor: 'bg-blue-400' },
]

export const personalInfo = {
  name: 'Hassan Zohaib',
  jobTitle: 'Web Developer | Desktop App Developer',
  address: 'Sargodha, Punjab, Pakistan',
  telephone: '+92 310 6025 047',
  email: 'hassan.zohaib.184@gmail.com',
  nationality: 'Pakistani',
  birthDate: '30/08/2000',
  gender: 'Male',
  imageUrl: '/portfolio/images/hassan-zohaib.png', // Replace with your actual image URL
}

export const workExperience = [
  {
    dates: '01/10/2023 – 31/07/2024',
    position: 'Web Developer',
    employer: 'ilaahi international',
    address: 'Office #4, university Road, opposite fatima Hospital, Sargodha',
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Implement responsive design principles',
    ],
  },
]

export const education = [
  {
    dates: '2015 – 2018',
    title: 'Self-Taught Web Development',
    organization: 'Various Online Platforms',
    description:
      'Comprehensive self-study program covering front-end and back-end technologies',
  },
]

export const personalSkills = [
  {
    category: 'Mother tongue(s)',
    skills: [
      {
        language: 'Urdu',
        understanding: 'B1',
        speaking: 'B1',
        writing: 'B1',
      },
    ],
  },
  {
    category: 'Other language(s)',
    skills: [
      {
        language: 'English',
        understanding: 'B2',
        speaking: 'B1',
        writing: 'B2',
      },
    ],
  },
]

export const commonSkills = [
  {
    category: 'Communication skills',
    skills: ['Excellent written and verbal communication'],
  },
  {
    category: 'Organisational skills',
    skills: ['Strong project management and time management skills'],
  },
]

export const skill = [
  {
    category: 'Digital skills',
    skills: [
      'HTML',
      'CSS',
      'React',
      'Rust',
      'TypeScript',
      'Next Js',
      'Tailwind CSS',
      'Tauri',
      'Wordpress',
      'Shadcn',
      'Javascript',
      'python',
      'Git',
      'Node.js',
    ],
  },
]

export const testimonials = [
  {
    name: 'Muhammad Iftikhar',
    role: 'Owner, Samar Book Depo',
    rating: 5,
    desc: '"I recently had the pleasure of using the Invoice App, and I must say, it has exceeded my expectations! The ability to easily add products and instantly generate a professional-looking invoice has streamlined my entire workflow. The app is intuitive, fast, and hassle-free. Printing invoices is now just a click away, and it saves me so much time compared to my old methods. The design is clean, and everything works smoothly. Highly recommended for anyone looking to simplify their invoicing process!"',
  },
  // {
  //   name: 'Jane Smith',
  //   role: 'Marketing Director, InnovateCo',
  //   rating: 4,
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.',
  // },
  // {
  //   name: 'Alex Johnson',
  //   role: 'Founder, StartupX',
  //   rating: 5,
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua.',
  // },
]

export const projectData = [
  {
    id: '1',
    name: 'Tauri Invoice App',
    img: '/portfolio/images/Invoice-app/cart-added.JPG',
    desc: 'Invoice app created for a client to print his invoices. This project include Next js as frontend and rust as backend with sqlite database. ',
    slug: 'invoice-app',
    tech: ['Next JS', 'Tauri', 'Rust'],
    feature: ['1: Very Light weight only 3.1mbs', '2: High performance'],
    screenShot: [
      '/portfolio/images/Invoice-app/Login.JPG',
      '/portfolio/images/Invoice-app/product.JPG',
      '/portfolio/images/Invoice-app/invoice page.JPG',
    ],
    source: '',
    live: '',
  },
  {
    id: '2',
    name: 'Dashboard',
    img: '/portfolio/images/Dashboard/Dashboard.png',
    desc: 'Dashboard App Created by with shadcn/ui. Responsive, beautiful design.',
    slug: 'Dashboard',
    tech: ['Next JS', 'Tailwind CSS', 'Shadcn'],
    feature: ['1: Beautiful Design', '2: High performance'],
    screenShot: ['/portfolio/images/Dashboard/Dashboard.png'],
    source: 'https://github.com/HassanZohaib121/dashboard',
    live: 'https://hassanzohaib121.github.io/dashboard/',
  },
  {
    id: '3',
    name: 'ilaahi.com',
    img: '/portfolio/images/Dashboard/Dashboard.png',
    desc: 'Ilaahi International website.Note the website was later changed.',
    slug: 'ilaahi',
    tech: ['Wordpress', 'Elementor'],
    feature: ['1: Beautiful Design'],
    screenShot: ['/portfolio/images/Dashboard/Dashboard.png'],
    // source: 'https://github.com/HassanZohaib121/dashboard',
    live: 'https://ilaahi.com',
  },
  {
    id: '4',
    name: 'jazilproperty.com/',
    img: '/portfolio/images/jazilproperty/jazilproperty.png',
    desc: 'Jazil Property Consultant and Maintenance website',
    slug: 'jazilproperty',
    tech: ['Wordpress', 'Elementor'],
    feature: ['1: Beautiful Design'],
    screenShot: ['/portfolio/images/Dashboard/Dashboard.png'],
    // source: 'https://github.com/HassanZohaib121/dashboard',
    live: 'https://jazilproperty.com/',
  },
  {
    id: '4',
    name: 'europroinst.com/',
    img: '/portfolio/images/europroinst/europroinst.png',
    desc: 'European Professional institute',
    slug: 'europroinst',
    tech: ['Wordpress', 'Elementor'],
    feature: ['1: Beautiful Design'],
    screenShot: ['/portfolio/images/Dashboard/Dashboard.png'],
    // source: 'https://github.com/HassanZohaib121/dashboard',
    live: 'https://europroinst.com/',
  },
]
