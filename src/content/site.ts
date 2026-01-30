// Site-wide content and copy for easy editing
// This file contains all text content for the website

export const siteConfig = {
  name: "Alyssa Marie Creative Design",
  tagline: "Chic, modern event design for elevated corporate and social celebrations.",
  location: "San Diego, CA",
  email: "hello@alyssamariecreative.com",
  instagram: "@alyssamariecreative",
  instagramUrl: "https://instagram.com/alyssamariecreative",
  limitedEvents: "Limited events each year",
  inquireEmail: "alyssamariecreativedesign@gmail.com",
};

// Build mailto link with pre-filled content
const emailSubject = encodeURIComponent("Inquiring About Your Services");
const emailBody = encodeURIComponent(`Hi Alyssa,

I'm interested in working with you for an upcoming event, and would love to hear about the services you offer!

First Name: 
Event Type: 
Date: 
Location: 
Guest Count: 

A little about my vision...


Follow-up Preference (Email/Phone/Text):
Phone Number: 
Best Time to Call (if applicable): 
`);
export const inquireLink = `mailto:${siteConfig.inquireEmail}?subject=${emailSubject}&body=${emailBody}`;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Inquire", href: inquireLink, external: true },
];

export const homePage = {
  hero: {
    heading: "Chic, modern event design for elevated corporate and social celebrations.",
    subheading:
      "Alyssa Marie Creative Design is a boutique San Diego–based studio specializing in chic, clean, detail-driven events. From custom guest invitations to controlled, polished environments and custom builds, every celebration is thoughtfully curated to feel elevated and entirely one of a kind.",
    cta1: "Inquire",
    cta1Link: inquireLink,
    cta2: "View Portfolio",
    cta2Link: "/portfolio",
  },
  brandStatement: {
    heading: "Intentional design. Elevated experiences.",
    paragraphs: [
      "At Alyssa Marie Creative Design, every event begins with intention. We believe exceptional events are not defined by excess, but by precision, personalization, and thoughtful creative direction.",
      "Known for chic, modern aesthetics and an uncompromising attention to detail, Alyssa designs immersive environments that feel clean, controlled, and emotionally engaging. From custom builds to personalized guest elements, no two events are ever the same.",
    ],
  },
  servicesPreview: {
    heading: "What We Design",
    services: [
      {
        title: "Corporate Events",
        description:
          "Elevated brand experiences, launches, and corporate celebrations designed with precision and sophistication.",
        link: "/services#corporate",
      },
      {
        title: "Upscale Social",
        description:
          "Birthdays, showers, and milestone celebrations crafted with personalized details and statement moments.",
        link: "/services#social",
      },
      {
        title: "Partial Planning",
        description:
          "Creative direction and design leadership for clients who have started planning but need expert guidance.",
        link: "/services#partial",
      },
    ],
  },
  featuredWork: {
    heading: "Featured Work",
    viewAll: "View All Work",
    viewAllLink: "/portfolio",
  },
  process: {
    heading: "Our Process",
    steps: [
      {
        number: "01",
        title: "Inquiry & Alignment",
        description: "We begin with a conversation to understand your vision, goals, and whether we're the right fit.",
      },
      {
        number: "02",
        title: "Consultation & Creative Vision",
        description: "A deep dive into your event's purpose, aesthetic direction, and desired guest experience.",
      },
      {
        number: "03",
        title: "Custom Design Development",
        description: "We craft a comprehensive design concept tailored to your unique celebration.",
      },
      {
        number: "04",
        title: "Planning Support & Production",
        description: "Vendor collaboration, timeline management, and meticulous coordination of every detail.",
      },
      {
        number: "05",
        title: "Event Execution",
        description: "Flawless day-of direction ensuring your vision comes to life exactly as designed.",
      },
    ],
  },
  aboutPreview: {
    heading: "Meet Alyssa",
    text: "With an eye for clean precision and a passion for creating deeply personal celebrations, Alyssa founded this boutique studio to bring elevated event design to San Diego's most discerning clients.",
    link: "/about",
    linkText: "Learn More",
  },
  testimonials: {
    heading: "Kind Words",
    items: [
      {
        quote:
          "Alyssa transformed our corporate gala into something truly unforgettable. Every detail was perfect, and our guests are still talking about it months later.",
        author: "Sarah M.",
        event: "Annual Corporate Gala",
      },
      {
        quote:
          "The personalized invitations for each guest were the most thoughtful touch. Alyssa understands that it's the details that make an event extraordinary.",
        author: "Jennifer L.",
        event: "40th Birthday Celebration",
      },
      {
        quote:
          "Working with Alyssa Marie Creative Design was a dream. She took our vague ideas and turned them into a cohesive, stunning event that exceeded our expectations.",
        author: "Michael R.",
        event: "Product Launch Event",
      },
      {
        quote:
          "From the initial consultation to the day of the event, Alyssa's attention to detail and calm professionalism made the entire process feel effortless.",
        author: "Emily T.",
        event: "Baby Shower",
      },
      {
        quote:
          "We've worked with many event planners, but Alyssa's design sensibility is unmatched. She creates experiences, not just events.",
        author: "David K.",
        event: "Corporate Retreat",
      },
    ],
  },
  finalCta: {
    heading: "Let's design something unforgettable.",
    subheading: "Limited events accepted each year to ensure every celebration receives the attention it deserves.",
    buttonText: "Start Your Inquiry",
    buttonLink: inquireLink,
  },
};

export const servicesPage = {
  seo: {
    title: "Corporate & Social Event Design in San Diego | Services",
    description:
      "Boutique event design services in San Diego including corporate events, upscale social celebrations, and partial planning. Design-led, bespoke experiences for discerning clients.",
  },
  hero: {
    heading: "Creative event design & planning support in San Diego",
    subheading:
      "A design-led approach to corporate and social celebrations. We accept a limited number of events each year to ensure every project receives our full creative attention and meticulous care.",
  },
  services: [
    {
      id: "corporate",
      title: "Corporate Event Design",
      tagline: "Elevated brand experiences designed with precision",
      description:
        "For companies seeking memorable brand moments, launches, galas, and corporate celebrations. We create immersive environments that align with your brand identity while delivering an exceptional guest experience.",
      includes: [
        "Creative concept development",
        "Spatial design and layout planning",
        "Custom builds and installations",
        "Guest experience design",
        "Vendor selection and collaboration",
        "Day-of execution and direction",
      ],
    },
    {
      id: "social",
      title: "Upscale Social Events",
      tagline: "Milestone celebrations crafted with intention",
      description:
        "Birthdays, showers, and intimate celebrations designed with highly personalized touches. From custom invitations unique to each guest to statement design moments, every element is thoughtfully curated.",
      includes: [
        "Personalized design concept",
        "Custom invitation design",
        "Statement moments and installations",
        "Tablescaping and styling",
        "Vendor coordination",
        "Full event execution",
      ],
    },
    {
      id: "partial",
      title: "Partial Planning & Creative Direction",
      tagline: "Design leadership for events in progress",
      description:
        "For clients who have already begun planning but need expert creative direction to elevate their vision. We step in to provide design leadership, ensuring your event achieves the polished, cohesive aesthetic you envision.",
      includes: [
        "Design consultation and direction",
        "Vendor recommendations",
        "Design concept refinement",
        "Styling guidance",
        "Optional day-of coordination",
      ],
    },
  ],
  investment: {
    heading: "Investment",
    text: "Our services are custom-scoped based on your event's unique needs, scale, and complexity. We work with clients across a range of budgets and believe in transparent conversations about investment from the start. Please inquire for personalized pricing.",
    cta: "Inquire About Pricing",
    ctaLink: inquireLink,
  },
};

export const aboutPage = {
  seo: {
    title: "About | Alyssa Marie Creative Design | San Diego Event Design Studio",
    description:
      "Boutique San Diego event design studio known for chic, modern aesthetics, precision, and highly personalized guest experiences. Limited events accepted each year.",
  },
  hero: {
    heading: "Designing with intention, precision, and heart.",
  },
  content: {
    intro:
      "Alyssa Marie Creative Design is a boutique event design studio based in San Diego, California. Founded on the belief that exceptional events are defined not by excess, but by thoughtful creative direction and an uncompromising attention to detail.",
    paragraphs: [
      "Every event we design begins with intention. We take the time to understand not just what you want your event to look like, but how you want it to feel—for you and for every guest who walks through the door.",
      "Known for creating chic, modern, and highly controlled environments, we specialize in corporate events, upscale social celebrations, and milestone moments that call for something elevated and entirely one of a kind.",
      "What sets our work apart is the level of personalization we bring to every project. From custom builds and installations to unique invitations designed for each individual guest, we believe the magic is in the details that make people feel truly seen and celebrated.",
      "We intentionally limit the number of events we accept each year. This allows us to pour our full creative energy into every project, ensuring nothing is rushed and every element is executed with the precision and care it deserves.",
    ],
    philosophy: {
      heading: "Our Design Philosophy",
      items: [
        {
          title: "Precision Over Excess",
          description:
            "We believe in the power of restraint. Every element serves a purpose, creating clean, controlled environments that feel intentional and elevated.",
        },
        {
          title: "Personalization at Every Level",
          description:
            "From the overarching concept down to the smallest details, we craft experiences that feel deeply personal and meaningful to you and your guests.",
        },
        {
          title: "Emotionally Engaging Design",
          description:
            "Beyond aesthetics, we design experiences that connect with people emotionally, creating moments that linger long after the event ends.",
        },
      ],
    },
    closing:
      "Based in San Diego, we primarily serve clients throughout Southern California, though we're open to destination events for the right projects. If you're seeking an event that's thoughtfully designed, impeccably executed, and entirely your own, we'd love to hear from you.",
  },
  cta: {
    heading: "Ready to create something extraordinary?",
    buttonText: "Get in Touch",
    buttonLink: inquireLink,
  },
};

export const inquirePage = {
  seo: {
    title: "Inquire | Alyssa Marie Creative Design",
    description:
      "Start your event design journey with Alyssa Marie Creative Design. Tell us about your vision for your corporate event, birthday, shower, or celebration.",
  },
  hero: {
    heading: "Let's create something beautiful together.",
    subheading:
      "Tell us about your vision. We review every inquiry personally and will respond within 2–3 business days.",
  },
  form: {
    sections: {
      basics: "The Basics",
      eventDetails: "Event Details",
      vision: "Your Vision",
      referral: "How Did You Find Us?",
    },
    fields: {
      name: {
        label: "Name",
        placeholder: "Your full name",
        required: true,
      },
      email: {
        label: "Email",
        placeholder: "your@email.com",
        required: true,
      },
      phone: {
        label: "Phone",
        placeholder: "(555) 555-5555",
        required: true,
      },
      company: {
        label: "Company",
        placeholder: "Your company (if applicable)",
        required: false,
      },
      eventType: {
        label: "Event Type",
        required: true,
        options: [
          { value: "", label: "Select event type" },
          { value: "corporate", label: "Corporate Event" },
          { value: "birthday", label: "Birthday Celebration" },
          { value: "shower", label: "Shower (Baby/Bridal)" },
          { value: "other", label: "Other Celebration" },
        ],
      },
      eventDate: {
        label: "Event Date / Timeframe",
        placeholder: "e.g., June 2025 or June 15, 2025",
        required: true,
      },
      location: {
        label: "Location / Venue",
        placeholder: "Venue name or city (if known)",
        required: true,
      },
      guestCount: {
        label: "Estimated Guest Count",
        placeholder: "e.g., 50-75 guests",
        required: true,
      },
      budget: {
        label: "Estimated Event Budget",
        required: true,
        options: [
          { value: "", label: "Select estimated budget" },
          { value: "under-15k", label: "Under $15,000" },
          { value: "15k-30k", label: "$15,000 – $30,000" },
          { value: "30k-60k", label: "$30,000 – $60,000" },
          { value: "60k-plus", label: "$60,000+" },
          { value: "tbd", label: "TBD" },
        ],
      },
      vision: {
        label: "Tell us about your event…",
        placeholder:
          "What's the occasion? What are you celebrating? Share any initial ideas or inspirations you have.",
        required: true,
      },
      guestExperience: {
        label: "What kind of experience do you want guests to have?",
        placeholder:
          "How do you want guests to feel when they arrive? What do you want them to remember?",
        required: false,
      },
      whyUs: {
        label: "What about Alyssa Marie Creative Design drew you in?",
        placeholder: "We'd love to know what resonated with you about our work or approach.",
        required: false,
      },
      inspiration: {
        label: "Colors, moods, or inspiration?",
        placeholder:
          "Any colors you love, moods you're drawn to, or inspiration images you'd like to share?",
        required: false,
      },
      referral: {
        label: "How did you hear about us?",
        placeholder: "Instagram, Google, referral, etc.",
        required: false,
      },
    },
    investment: {
      label:
        "I understand that Alyssa Marie Creative Design offers custom-scoped services and pricing is provided after an initial consultation.",
      required: true,
    },
    submit: "Submit Inquiry",
    submitting: "Sending...",
  },
  success: {
    heading: "Thank you for your inquiry!",
    message:
      "We've received your submission and are excited to learn more about your event. Alyssa will review your inquiry and respond within 2–3 business days.",
    backHome: "Return Home",
  },
};

export const portfolioPage = {
  seo: {
    title: "Portfolio | Alyssa Marie Creative Design",
    description:
      "Explore our portfolio of chic, modern event designs including corporate events, birthdays, and celebrations in San Diego.",
  },
  hero: {
    heading: "Our Work",
    subheading:
      "A curated collection of corporate events, social celebrations, and milestone moments designed with intention and precision.",
  },
  viewProject: "View Project",
  categories: ["All", "Corporate", "Social", "Showers"],
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Alyssa Marie Creative Design. All rights reserved.`,
};
