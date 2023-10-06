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
  ystra,
  ystra2,
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
    level: "Bachelor's degree in Information Management",
    // specialty: "RNCP 6 Title, Project Manager in Web & Mobile Applications Development Certification",
    school_name: "National Taiwan University",
    icon: ntu,
    iconBg: "#383E56",
    date: "Jan 2017 - Jun 2017",
    points: [
      "3D Asset Creation Using Blender: Gained knowledge and experience in 3D asset creation with Blender, laying the foundation for further exploration in this area.",
      "Escape Game Prototype Creation in Unity: Acquired introductory skills in game development by creating an escape game prototype in Unity, providing exposure to game design principles.",
      "Proof of Concept for a Mobile Application: Explored the conceptual aspects of mobile application development, focusing on the theoretical aspects of creating a proof of concept.",
    ],
  },
  {
    level: "Master's degree in Management",
    // specialty: "RNCP 6 Title in Web & Mobile Applications Development",
    school_name: "Institut Mines-Télécom Business School",
    icon: imtbs,
    iconBg: "#E6DEDD",
    date: "Sept 2015 - Jun 2018",
    points: [
      "Java Programming Introduction: Acquired foundational knowledge of Java programming, providing a basis for understanding software applications.",
      "Agile IS Project Management: Gained a foundational understanding of agile methodologies for efficient project management, with exposure to best practices.",
      "ERP and CXM (Customer Experience Management): Explored concepts related to enterprise resource planning and customer experience management, building a theoretical foundation for improving business operations.",
      "Audit and IS Rating (Information Systems): Developed a fundamental understanding of auditing and evaluation techniques for information systems, focusing on compliance and effectiveness assessment.",
    ],
  },
  {
    level: "RNCP 6 Title in Web & Mobile Applications Development",
    // specialty: "RNCP 6 Title, Project Manager in Web & Mobile Applications Development Certification",
    school_name: "La Capsule",
    icon: lacapsule,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Web and Mobile Applications Design and Prototyping: Acquired advanced skills in designing and prototyping web and mobile applications, enabling the creation of user-centric and visually appealing interfaces.",
      "Front-End Development: Demonstrated proficiency in front-end development technologies, including HTML 5, CSS, JavaScript, React, and Redux, with a track record of building responsive and interactive user interfaces.",
      "Back-End Development: Mastered back-end development using NodeJS and Express, with expertise in building robust server-side applications and RESTful APIs.",
      "Databases and CDN (Content Delivery Network): Established competence in database management and content delivery using MongoDB and Cloudinary, ensuring efficient data storage and optimized content delivery.",
      "Workflow: Utilized advanced version control and collaborative coding practices with Git and GitHub, ensuring efficient and organized development workflows for project teams.",
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
      "Project: Led the mapping of compliance processes with a focus on enhancing efficiency and clarity.",
      "Conducted collaborative workshops with business stakeholders to understand requirements and gather insights.",
      "Utilized Six Sigma principles to create precise and optimized mappings of control processes.",
      "Acted as the SharePoint administrator, effectively managing and optimizing the online document management system.",
      "Successfully provided the entire compliance department with a transparent and well-documented view of modeled compliance processes, streamlining future optimizations.",
    ],
  },
  {
    title: "IT Consultant",
    company_name: "KMPG",
    icon: kpmg,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Jan 2019",
    points: [
      "Project: Successfully implemented a Benchmark IT solution for the leading natural gas distributor in France.",
      "Quickly acquired proficiency in the new solution before its implementation, demonstrating adaptability and a rapid learning curve.",
      "Collaborated closely with the IT department leadership to ensure smooth adoption of the solution.",
      "Facilitated a comprehensive assessment of costs associated with over 10,000 devices utilized within the company.",
    ],
  },
  {
    title: "Sales Representative",
    company_name: "Freelance",
    icon: me,
    iconBg: "#383E56",
    date: "Jan 2019 - Present",
    points: [
      "Project: Spearheaded the prospecting and email marketing campaign to support the successful launch of the client's new business activity.",
      "Developed and executed a comprehensive email marketing campaign targeting over 1,000 prospects.",
      "Designed and implemented a customized email template incorporating HTML and CSS to enhance visual appeal and engagement.",
      "Achieved a remarkable 200% increase in the response rate from prospects, significantly exceeding campaign goals.",
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
      "Art-selling platform specialized in on-demand printing of AI-generated artworks, Ystra provides a unique bridge between cutting-edge technology and creative expression.",
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
    image: ystra,
    source_code_link: "https://github.com/stars/cpaulwk/lists/ystra",
    project_link: "https://youtu.be/afV12tpdOWA",
  },
  {
    name: "Vinio",
    description:
      "Web application dedicated to simplify the art of wine pairing, eliminating the need for extensive wine education, Vinio provides quick and effective answers on how to pair wines.",
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
  // {
  //   name: "Bevibe",
  //   description:
  //     "An interactive 3D T-shirt customization web application, enhanced by AI-generated logos and textures, a standout in the e-commerce space. Reproduced from a tutorial.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "vite",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "openai",
  //       color: "golden-text-gradient",
  //     },
  //   ],
  //   image: bevibe,
  //   source_code_link: "https://github.com/stars/cpaulwk/lists/bevibe",
  //   project_link: "https://bevibe.netlify.app/",
  // },
  {
    name: "Ystra 2.0",
    description:
      "The web version of Ystra. Currently still on development. This project will be a solo project with simpler features, where user can test and leave the platform without login.",
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
    image: ystra2,
    source_code_link: "https://github.com/stars/cpaulwk/lists/ystra",
    project_link: "https://github.com/stars/cpaulwk/lists/ystra",
  },
];

export { services, technologies, academy, experiences, testimonials, projects };
