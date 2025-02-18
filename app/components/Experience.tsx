"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "One97 Communications Ltd.(Paytm)",
      location: "Noida, India",
      period: "December 2022 – Present",
      role: "Senior Software Engineer - EDC Team",
      responsibilities: [
        "Architected and optimized 30+ microservices handling 5M+ daily POS transactions using Java Spring Boot and Node.js",
        "Implemented comprehensive monitoring system using Prometheus and Grafana, reducing MTTR by 40%",
        "Designed and deployed distributed logging architecture using ELK stack (Elasticsearch, Logstash, Kibana) for real-time transaction monitoring",
        "Established automated alerting system with custom dashboards in Grafana, achieving 99.99% system uptime",
        "Implemented circuit breakers and rate limiting patterns to handle peak loads of 10K TPS",
        "Led performance optimization initiatives resulting in 30% reduction in transaction processing time",
      ],
    },
    {
      company: "One97 Communications Ltd.(Paytm)",
      location: "Noida, India",
      period: "August 2022 – November 2022",
      role: "Senior Software Engineer - HR Tech",
      responsibilities: [
        "Developed serverless automation pipeline using AWS Lambda and Google Vertex AI, processing 1000+ HR documents monthly",
        "Architected end-to-end document generation system using Google AppScript and Puppeteer, reducing manual effort by 80%",
        "Implemented message queuing system using AWS SQS for scalable document processing",
        "Designed and deployed ML-powered document classification system using Vertex AI with 95% accuracy",
        "Created automated relieving letter generator integrated with Google Workspace, saving 20+ man-hours weekly",
        "Implemented retry mechanisms and dead-letter queues for robust error handling",
      ],
    },
    {
      company: "One97 Communications Ltd.(Paytm)",
      location: "Noida, India",
      period: "May 2022 – July 2022",
      role: "Senior Software Engineer - Paytm Money",
      responsibilities: [
        "Led development of React.js based user onboarding journey, improving conversion rate by 35%",
        "Implemented micro-frontend architecture using Module Federation, reducing bundle size by 40%",
        "Developed reusable component library using TypeScript and Styled Components",
        "Integrated real-time KYC verification system handling 50K+ daily verifications",
        "Implemented A/B testing framework using Feature Flags, enabling rapid experimentation",
        "Optimized client-side performance achieving 90+ Lighthouse score",
      ],
    },
    {
      company: "One97 Communications Ltd.(Paytm)",
      location: "Noida, India",
      period: "February 2022 – April 2022",
      role: "Senior Software Engineer - Insurance Team",
      responsibilities: [
        "Developed MyGarage feature using Vue.js and Vuex, managing 100K+ vehicle profiles",
        "Implemented real-time insurance quote comparison system processing 10K+ daily requests",
        "Created responsive insurance flow UI with 40% improvement in mobile conversion rates",
        "Integrated multiple insurance provider APIs using microservices architecture",
        "Implemented caching strategies reducing API calls by 50%",
        "Developed automated testing suite achieving 85% code coverage",
      ],
    },
    {
      company: "Appwrk IT Solutions",
      location: "Noida, India",
      period: "November 2022 – July 2023",
      role: "Team Lead",
      responsibilities: [
        "Led development of Co-Learn online test platform enabling teachers to create and manage tests",
        "Managed development of NoteWorthy.ai, implementing AI-based electric pole fault detection",
        "Led teams of 4-8 developers using Agile methodologies",
        "Architected solutions using ReactJS, React Native, Node.js, and PostgreSQL",
        "Implemented cloud solutions using AWS and Google Cloud Services",
      ],
    },
    {
      company: "Imbibe Technologies",
      location: "Bangalore, India",
      period: "May 2017 - November 2019",
      role: "Software Engineer",
      responsibilities: [
        "Developed modules for large-scale travel agency CRM system",
        "Implemented trip planning and financial management features",
        "Built solutions using .NET, C#, Entity Framework, and MSSQL",
        "Worked with team of 6 developers on production systems",
      ],
    },
    {
      company: "Xurmo Technologies",
      location: "Bangalore, India",
      period: "August 2015 - May 2017",
      role: "Test Automation Engineer",
      responsibilities: [
        "Created test automation framework in core Java for Big Data Based Platform testing",
        "Developed automated tests for data ingestion and processing workflows",
        "Implemented test suites for AI model execution workflows",
        "Utilized Core Java, Gradle, TestNG, Jenkins, and Shell Scripting",
        "Collaborated in a team of 4 engineers to ensure comprehensive test coverage",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

