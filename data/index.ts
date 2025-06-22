const homepage = 'http://localhost:3000/' || "https://lynxpounce.com/";

export const navItems = [
  { name: "Home", link: homepage },
  { name: "About", link: homepage+'#about' },
  { name: "Projects", link: homepage+"#projects" },
  { name: "Testimonials", link: homepage+"#testimonials" },
  { name: "Contact", link: homepage+"#contact" },
  { name: "Blog", link: homepage+"blog" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize client communication to create websites that truly reflect your veterinary clinic’s needs",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/collabor.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/nasa-globe.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "With a passion for technology and love for animals.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/cat-background.jpg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an e-commerce shop for pet products",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    slug: "buivydiskiu-vet-klinika",
    mainFeatures: "Blog and Branding",
    category: "Website development",
    title: "Buivydiškių Vet Clinic",
    des: "Buivydiškių Veterinary Clinic sought to enhance their online presence to better connect with pet owners and provide accessible information about their services. I designed and developed a modern, responsive website that reflects the clinic's dedication to animal welfare. Key features include detailed service pages, an educational blog offering pet care insights, a gallery showcasing treatment successes, and seamless integration of contact information and operating hours. This digital platform not only reinforces the clinic's brand identity but also serves as a valuable resource for the pet-owning community.",
    overview:
      "Developed a comprehensive and user-friendly website for Buivydiškių Veterinary Clinic, emphasizing their commitment to professional and compassionate pet care. The platform showcases a wide range of services, features an informative blog, and includes a gallery highlighting successful treatments, all designed to foster trust and engagement among pet owners.",
    img: "/bvt-service-main.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://bvkklinika.lt/",
    href: "/projects/buivydiskiu-vet-klinika",
    cta: "Check Website",
    slideData: [
      {
        src: "/buivydiskiu-home.png",
      },
      {
        src: "/buivydiskiu-archive.png",
      },
      {
        src: "/buivydiskiu-contact.png",
      },
    ],
  },
  {
    id: 2,
    slug: "unaveta",
    title: "Unaveta Vet Clinic",
    mainFeatures: "Booking System",
    category: "Website Development",
    des: "UnaVeta needed a digital presence that reflected their expertise and welcoming approach while making it easy for pet owners to access their services. I designed and developed a visually engaging, easy-to-navigate website that showcases their services, integrates an online booking system, and features a cohesive brand identity. The platform is mobile-friendly, and built to enhance user experience, ensuring pet owners can seamlessly connect with UnaVeta's veterinary team.",
    overview:
      "Designed and developed a modern, user-friendly website for UnaVeta, a veterinary clinic committed to compassionate pet care. The site highlights their range of services, integrates an intuitive booking system, and features engaging visuals that reflect their brand identity. The platform ensures an effortless experience for pet owners seeking trusted veterinary care.",
    img: "/unaveta-service-main.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://unaveta.lt/",
    href: "/projects/unaveta",
    cta: "Check Website",
    slideData: [
      {
        src: "/unaveta-home.png",
      },
      {
        src: "/unaveta-booking.png",
      },
      {
        src: "/unaveta-about.png",
      },
    ],
  },
  {
    id: 3,
    slug: "severinos-klinika",
    title: "Severinos Klinika",
    mainFeatures: "Blog and Analytics",
    category: "Website Development",
    des: "Severinos Veterinary Clinic needed a modern, user-friendly and responsive website to highlight their services and improve client engagement. I designed an intuitive platform featuring service pages, a blog for pet care insights, and client testimonials. The integration of Google Analytics allows the clinic to track user behavior and refine their marketing efforts. The result is a professional and engaging digital presence that strengthens trust and attracts more pet owners.",
    overview:
      "Designed an engaging and informative website for Severinos Veterinary Clinic, showcasing their commitment to personalized pet care. The platform highlights their range of services, features a blog archive, and includes client testimonials to build trust.",
    img: "/sev-service-main.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://severinosklinika.lt/",
    href: "/projects/severinos-klinika",
    cta: "Check Website",
    slideData: [
      {
        src: "/severinos-home.png",
      },
      {
        src: "/severinos-contacts.png",
      },
      {
        src: "/severinos-services.png",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Thank you for your friendliness, precision, and warm communication. Your work perfectly reflected our vision and greatly contributed to enhancing our branding.",
    name: "Eglė",
    title: "Unaveta",
  },
  {
    quote:
      "Thank you very, very much! It was not only a pleasure to work with such a person, but also very simple, clear, and precise—everything was thought out to the smallest detail and presented thoroughly. All requests were fulfilled quickly and accurately, and all questions were answered. I sincerely recommend and will definitely reach out again in the future!",
    name: "Severina",
    title: "Severinos Klinika",
  },
  {
    quote:
      "We were thrilled with the website Richie created for us. It perfectly captured what we envisioned, and the quality exceeded our expectations.",
    name: "Kamilė",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Website Development",
    desc: "Professional website development services to create a fully customized, high-performance website tailored to your business goals. Whether you need a small business site or a complex platform, LynxPounce designs and develops it with scalability, security, and user experience in mind.",
    className: "md:col-span-2",
    thumbnail: "/dev-service.svg",
  },
  {
    id: 2,
    title: "Website Redesign & Revamp",
    desc: "Upgrade your existing website with expert website redesign services. LynxPounce modernises outdated websites with fresh designs, improved usability, faster load times, and the latest technologies to help your business stand out online.",
    className: "md:col-span-2",
    thumbnail: "/design-service.svg",
  },
  {
    id: 3,
    title: "On-Site SEO Services",
    desc: "Improve your website’s search engine rankings with professional on-site SEO optimization. From keyword-rich meta tags to optimized content and fast-loading pages, we help make your website more visible to your target audience on Google and other search engines.",
    className: "md:col-span-2",
    thumbnail: "/seo-service.svg",
  },
  {
    id: 4,
    title: "Website Maintenance",
    desc: "Keep your website secure, updated, and performing at its best with our website maintenance and support plans. We handle software updates, backups, security monitoring, and content updates so you can focus on growing your business.",
    className: "md:col-span-2",
    thumbnail: "/maintenance-service.svg",
  },
  {
    id: 5,
    title: "E-commerce solutions",
    desc: "Build and optimize powerful online stores with our professional e-commerce solutions. From setting up secure payment gateways and seamless checkout experiences to customizing product pages and integrating advanced features, we ensure your e-commerce site is user-friendly, scalable, and optimized for conversions.",
    className: "md:col-span-2",
    thumbnail: "/ecom-service.svg",
  },
  {
    id: 6,
    title: "Consultation",
    desc: "Receive expert advice to enhance your website’s design, functionality, and performance. Whether you're building a new site or improving an existing one, our consultations cover everything from choosing the right platform to optimizing for speed, SEO, and user experience. Let’s create a strategy that aligns with your business goals.",
    className: "md:col-span-2",
    thumbnail: "/consultation-service.svg",
  },
];

export const socialMedia = [
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ricardas-staniulis/",
  },
];
