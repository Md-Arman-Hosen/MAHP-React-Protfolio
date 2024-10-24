import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    express,
    figma,
    bootstrap,
    firebase,
    github,
    mass,
    summer,
    bistro,
    quiz,
    modern,
    taimiya,
    puc,
    enan,
    fahad,
    akib,
    coffee,
    hrm,
    masjid,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Front End Web Developer",
        icon: web,
    },
    {
        title: "Web Designer",
        icon: mobile,
    },
    {
        title: "Content Writer",
        icon: creator,
    },
    {
        title: "Tech Solutions",
        icon: backend,
    },
];

const technologies = [{
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    // {
    //   name: "Material UI",
    //   icon: mui,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },

    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "Vercel",
    //   icon: vercel,
    // },

    {
        name: "git",
        icon: github,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
];

const experiences = [{
        title: "Trainee Programmer",
        company_name: "Spark71",
        company_link: "http://spark71.com/",
        icon: mass,
        // iconBg: "#383E56",
        iconBg: "white",
        date: "July 2022 - February 2023",
        points: [
            "Developing and maintaining web applications using HTML, CSS,Tailwind CSS, JS & JQuery",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design.",
        ],
    },
    {
        title: "Junior Developer",
        company_name: "Spark71",
        company_link: "http://spark71.com/",
        icon: mass,
        iconBg: "white",
        date: "March 2023 - August 2023",
        points: [
            "It's a project based freelance team",
            "Developing and maintaining web applications using HTML, CSS, ReactJs",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design",
        ],
    },

];
const educations = [{
        title: "BSC in Computer Science & Engineering",
        school_name: "Daffodil international University, Dhaka",
        icon: puc,
        iconBg: "#383E56",
        date: "2020 - 2024",
        points: [
            "BSC in Computer Science & Engineering",
            "Programming",
            "Machine Learning",
        ],
    },
    {
        title: "Higher Secondary School",
        school_name: "Milestone College",
        icon: taimiya,
        iconBg: "#E6DEDD",
        date: "2017 - 2019",
        points: [
            "HSC",
            "Science",
        ],
    },
    {
        title: "Secondary School",
        school_name: "Sher-e Bangla Model High School",
        icon: modern,
        iconBg: "#383E56",
        date: "2016 - 2017",
        points: [
            "SSC",
            "Science",
        ],
    },

];

const testimonials = [{
        testimonial: "I believed it was impossible to create a website that matched the beauty of our product, but Arman successfully exceeded my expectations.",
        name: "Md Sazzad Hosen",
        designation: "Junior Visualizer",
        company: "DotBirth",
        company_link: "https://dotbirth.com/",
        portfolio: "https://sazzadhosen.myportfolio.com/",
        image: enan,
    },
    {
        testimonial: "I've never encountered a web developer who demonstrates the same level of genuine care and commitment to their clients as Arman does.",
        name: "Mozahidul Islam Abir",
        designation: "Founder & CEO",
        company: "Spark71",
        company_link: "http://spark71.com/",
        portfolio: "https://www.linkedin.com/in/mozahidulislam01/",
        image: fahad,
    },
    {
        testimonial: "Following Arman's optimization of our website, we experienced a 50% increase in traffic. We are extremely grateful for his efforts.",
        name: "Mohammad Muslim Bin Hasan",
        designation: "Founder & CEO",
        company: "Digitex Crew",
        company_link: "https://digitexcrew.com/",
        portfolio: "https://www.linkedin.com/in/mmuslimbh/",
        image: akib,
    },
];

const projects = [

    {
        name: "A-Ticket System",
        description: "A responsive web-based platform for booking bus tickets. The system aims to simplify online ticket purchases with an easy-to-use interface, ensuring that users of all technical backgrounds can navigate it effortlessly.This project emphasizes accessibility, making ticket purchases smooth for a broad audience.",
        tags: [{
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "VanilaCSS",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: coffee,
        source_code_link: "https://github.com/Md-Arman-Hosen/ticket-system",
        live_site_link: "https://arman-ticket-system.netlify.app/"
    },
    {
        name: "PH-TUBE",
        description: "A video-sharing platform. It allows users to upload, view, and interact with videos by enabling features such as commenting and subscribing to channels. The platform is API-powered, facilitating seamless user engagement and dynamic content sharing, similar to popular video-hosting sites.",
        tags: [{
                name: "API",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "tailwindCSS",
                color: "green-text-gradient",
            },
            {
                name: "HTML5",
                color: "pink-text-gradient",
            },
        ],
        image: hrm,
        source_code_link: "https://github.com/Md-Arman-Hosen/PH-tube",
        live_site_link: "https://mahp-ph-tube.netlify.app/"
    },
    {
        name: "PhoneBazz",
        description: "This project showcases a sleek, responsive website for an online mobile store built using Bootstrap. It features a modern design with well-structured sections, including product displays, a pricing table, and customer testimonials. The site is fully responsive, ensuring an optimal user experience across devices.",
        tags: [{
                name: "API",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "BootStrap",
                color: "green-text-gradient",
            },
            {
                name: "HTML5",
                color: "pink-text-gradient",
            },
        ],
        image: masjid,
        source_code_link: "https://github.com/Md-Arman-Hosen/phone-bazz-bootstrap",
        live_site_link: "https://md-arman-hosen.github.io/phone-bazz-bootstrap/"
    },
    {
        name: "Influencer's E-Shop",
        description: "A Web-based responsive project showcasing a curated collection of trendy products designed for influencers. It provides a user-friendly interface with visually appealing product displays, focusing on essential gear such as cameras, lighting, and accessories.it aims to help influencers easily explore and discover tools that enhance their content creation.",
        tags: [{
                name: "javaScript",
                color: "blue-text-gradient",
            },
            {
                name: "vanila Css",
                color: "orange-text-gradient",
            },
            {
                name: "HTML5",
                color: "green-text-gradient",
            },
        ],
        image: summer,
        source_code_link: "https://github.com/Md-Arman-Hosen/influncer-gear",
        live_site_link: "https://md-arman-hosen.github.io/influncer-gear/"
    },
    {
        name: "Covid-19",
        description: "A web-based application that provides real-time statistics and visualizations of COVID-19 data. It presents key metrics such as total cases, recoveries, and deaths globally and by country. Built with user-friendly design and dynamic charts, the dashboard offers an accessible way to track the pandemic's impact.",
        tags: [{
                name: "SCSS",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "Vanila Css",
                color: "pink-text-gradient",
            },
        ],
        image: quiz,
        source_code_link: "https://github.com/Md-Arman-Hosen/covid19",
        live_site_link: "https://md-arman-hosen.github.io/covid19/"
    },
    {
        name: "FoodBazz",
        description: "The project focuses on creating a simple, user-friendly interface for an e-commerce platform related to food delivery or ordering. It is built primarily using HTML and JavaScript, with an emphasis on responsiveness to ensure compatibility across various devices.",
        tags: [{
                name: "API",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "HTML5",
                color: "pink-text-gradient",
            },
        ],
        image: bistro,
        source_code_link: "https://github.com/Md-Arman-Hosen/food",
        live_site_link: "https://md-arman-hosen.github.io/food/"
    },

];

export { services, technologies, experiences, testimonials, projects, educations };