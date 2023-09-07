import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  socge,
  kpmg,
  me,
  imtbs,
  lacapsule,
  ntu,
  prisma,
  mysql,
  nextjs,
  vinio,
  bevibe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const academy = [
  {
    level: "Bachelor in Information Management",
    specialty: "RNCP 6 Title, Project Manager in Web & Mobile Applications Development Certification",
    school_name: "National Taiwan University",
    icon: ntu,
    iconBg: "#383E56",
    date: "Jan 2017 - Jun 2017",
    points: [
      "3D asset creation using Blender",
      "Creation of an escape room game prototype in Unity",
      "Creation of a mockup for a mobile application",
    ]
  },
  {
    level: "Master's degree in Management",
    specialty: "RNCP 6 Title in Web & Mobile Applications Development",
    school_name: "Institut Mines-Télécom Business School",
    icon: imtbs,
    iconBg: "#E6DEDD",
    date: "Sept 2015 - Jun 2018",
    points: [
      "Java Programming Introduction",
      "Innovative Project Management",
      "Agile IS Project Management",
      "IS Project Management",
      "IS Governance",
      "ERP and CXM",
      "Audit and IS Rating",
    ],
  },
  {
    level: "RNCP 6 Title in Web & Mobile Applications Development",
    specialty: "RNCP 6 Title, Project Manager in Web & Mobile Applications Development Certification",
    school_name: "La Capsule",
    icon: lacapsule,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "10-week coding Bootcamp - Fullstack Web & Mobile development in JavaScript",
      "Web and Mobile applications design and prototyping",
      "Front End development: HTML 5 / CSS / JavaScript / React / Redux",
      "Back End development : NodeJS / Express",
      "Databases and CDN: Mongo DB / Cloudinary",
      "Workflow: Git / Github",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Freelance",
  //   icon: me,
  //   iconBg: "#E6DEDD",
  //   date: "Oct 2022 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const experiences = [
  {
    title: "Project Manager Assistant",
    company_name: "Société Générale",
    icon: socge,
    iconBg: "#383E56",
    date: "Sept 2017 - Oct 2018",
    points: [
      "Mapping of compliance processes:",
      "Efficiently communicated with the business through collaborative workshops",
      "Created the mapping of control processes with a six sigma approach",
      "Managed and optimized online document management as a SharePoint admin",
      "The entire compliance department benefits from a clear view of modeled compliance processes, facilitating future optimizations.",
    ],
  },
  {
    title: "IT Consultant",
    company_name: "KMPG",
    icon: kpmg,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Jan 2019",
    points: [
      "Implemented a Benchmark IT solution for the leading natural gas distributor in France:",
      "Quickly learned to use the new solution prior to implementation",
      "Assisted the IT department leadership in the solution's adoption",
      "The IT department leadership obtained a clear view of the cost for over 10,000 devices used within the company.",
    ],
  },
  {
    title: "Sales Representative",
    company_name: "Freelance",
    icon: me,
    iconBg: "#383E56",
    date: "Jan 2019 - Present",
    points: [
      "Prospecting for the launch of the client's activity:",
      "Implemented an email marketing campaign strategy targeting 1000+ prospects",
      "Proposed a custom email template integrating HTML and CSS",
      "200% increase in response rate from prospects since the initiative.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Freelance",
  //   icon: me,
  //   iconBg: "#E6DEDD",
  //   date: "Oct 2022 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ystra",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "golden-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/stars/cpaulwk/lists/ystra",
    project_link: "https://github.com/stars/cpaulwk/lists/ystra",
  },
  {
    name: "Vinio",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "golden-text-gradient",
      },
    ],
    image: vinio,
    source_code_link: "https://github.com/stars/cpaulwk/lists/vinio",
    project_link: "https://vinio-frontend.vercel.app/",
  },
  {
    name: "Bevibe",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "golden-text-gradient",
      },
    ],
    image: bevibe,
    source_code_link: "https://github.com/stars/cpaulwk/lists/bevibe",
    project_link: "https://bevibe.netlify.app/",
  },
];

export { services, technologies, academy, experiences, testimonials, projects };
