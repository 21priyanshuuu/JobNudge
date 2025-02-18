import { NextResponse } from "next/server";

const jobs = [
  // Mobile Applications Developer
  {
    id: 1,
    career: "Mobile Applications Developer",
    title: "React Native Developer",
    location: "Remote",
    description: "Build mobile apps using React Native.",
    pay: "$80,000 - $100,000",
    experience: "3+ years",
  },
  {
    id: 2,
    career: "Mobile Applications Developer",
    title: "iOS Developer",
    location: "San Francisco, CA",
    description: "Develop iOS applications for Apple devices.",
    pay: "$90,000 - $120,000",
    experience: "2+ years",
  },
  {
    id: 3,
    career: "Mobile Applications Developer",
    title: "Android Developer",
    location: "New York, NY",
    description: "Create mobile apps for Android platforms.",
    pay: "$85,000 - $110,000",
    experience: "3+ years",
  },
  {
    id: 4,
    career: "Mobile Applications Developer",
    title: "Flutter Developer",
    location: "Los Angeles, CA",
    description: "Develop cross-platform apps using Flutter.",
    pay: "$95,000 - $125,000",
    experience: "2+ years",
  },
  {
    id: 5,
    career: "Mobile Applications Developer",
    title: "Mobile UI/UX Designer",
    location: "San Diego, CA",
    description: "Design user interfaces and experiences for mobile apps.",
    pay: "$80,000 - $110,000",
    experience: "3+ years",
  },
  {
    id: 6,
    career: "Mobile Applications Developer",
    title: "Mobile App Architect",
    location: "Seattle, WA",
    description: "Design and oversee the architecture of mobile applications.",
    pay: "$110,000 - $140,000",
    experience: "5+ years",
  },
  {
    id: 7,
    career: "Mobile Applications Developer",
    title: "Senior Mobile Developer",
    location: "Austin, TX",
    description: "Lead development of complex mobile applications.",
    pay: "$120,000 - $150,000",
    experience: "5+ years",
  },
  {
    id: 8,
    career: "Mobile Applications Developer",
    title: "Mobile Game Developer",
    location: "San Jose, CA",
    description: "Develop and optimize mobile games.",
    pay: "$95,000 - $130,000",
    experience: "4+ years",
  },
  {
    id: 9,
    career: "Mobile Applications Developer",
    title: "Mobile Security Engineer",
    location: "New York, NY",
    description: "Ensure the security of mobile applications.",
    pay: "$105,000 - $140,000",
    experience: "4+ years",
  },
  {
    id: 10,
    career: "Mobile Applications Developer",
    title: "Mobile App QA Engineer",
    location: "Chicago, IL",
    description: "Test mobile applications for quality and performance.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },

  // CRM Technical Developer
  {
    id: 11,
    career: "CRM Technical Developer",
    title: "Salesforce Developer",
    location: "Chicago, IL",
    description: "Develop and customize Salesforce applications.",
    pay: "$95,000 - $125,000",
    experience: "4+ years",
  },
  {
    id: 12,
    career: "CRM Technical Developer",
    title: "Microsoft Dynamics Developer",
    location: "Seattle, WA",
    description: "Build and maintain Microsoft Dynamics CRM solutions.",
    pay: "$100,000 - $130,000",
    experience: "3+ years",
  },
  {
    id: 13,
    career: "CRM Technical Developer",
    title: "HubSpot Developer",
    location: "Austin, TX",
    description: "Implement and customize HubSpot CRM functionalities.",
    pay: "$90,000 - $120,000",
    experience: "2+ years",
  },
  {
    id: 14,
    career: "CRM Technical Developer",
    title: "Zoho CRM Developer",
    location: "San Francisco, CA",
    description: "Develop and integrate Zoho CRM solutions.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 15,
    career: "CRM Technical Developer",
    title: "SugarCRM Developer",
    location: "Atlanta, GA",
    description: "Customize and manage SugarCRM systems.",
    pay: "$80,000 - $110,000",
    experience: "2+ years",
  },
  {
    id: 16,
    career: "CRM Technical Developer",
    title: "CRM Integration Specialist",
    location: "Boston, MA",
    description: "Integrate CRM systems with other business tools.",
    pay: "$95,000 - $125,000",
    experience: "4+ years",
  },
  {
    id: 17,
    career: "CRM Technical Developer",
    title: "CRM Business Analyst",
    location: "Dallas, TX",
    description: "Analyze CRM requirements and recommend solutions.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 18,
    career: "CRM Technical Developer",
    title: "CRM Data Analyst",
    location: "Denver, CO",
    description: "Analyze CRM data to provide insights and recommendations.",
    pay: "$90,000 - $120,000",
    experience: "3+ years",
  },
  {
    id: 19,
    career: "CRM Technical Developer",
    title: "CRM Solution Architect",
    location: "Philadelphia, PA",
    description: "Design and implement CRM solutions and strategies.",
    pay: "$110,000 - $140,000",
    experience: "5+ years",
  },
  {
    id: 20,
    career: "CRM Technical Developer",
    title: "CRM Project Manager",
    location: "San Diego, CA",
    description: "Manage CRM implementation and customization projects.",
    pay: "$100,000 - $130,000",
    experience: "4+ years",
  },

  // Database Developer
  {
    id: 21,
    career: "Database Developer",
    title: "SQL Database Developer",
    location: "Atlanta, GA",
    description: "Design and manage SQL databases.",
    pay: "$85,000 - $115,000",
    experience: "4+ years",
  },
  {
    id: 22,
    career: "Database Developer",
    title: "NoSQL Database Developer",
    location: "Boston, MA",
    description: "Work with NoSQL databases like MongoDB and Cassandra.",
    pay: "$80,000 - $110,000",
    experience: "3+ years",
  },
  {
    id: 23,
    career: "Database Developer",
    title: "Oracle Database Developer",
    location: "Dallas, TX",
    description: "Develop and maintain Oracle databases.",
    pay: "$90,000 - $120,000",
    experience: "5+ years",
  },
  {
    id: 24,
    career: "Database Developer",
    title: "PostgreSQL Developer",
    location: "Seattle, WA",
    description: "Design and manage PostgreSQL databases.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 25,
    career: "Database Developer",
    title: "Database Administrator",
    location: "San Francisco, CA",
    description: "Manage and maintain database systems.",
    pay: "$90,000 - $120,000",
    experience: "4+ years",
  },
  {
    id: 26,
    career: "Database Developer",
    title: "MySQL Developer",
    location: "New York, NY",
    description: "Develop and optimize MySQL databases.",
    pay: "$80,000 - $110,000",
    experience: "3+ years",
  },
  {
    id: 27,
    career: "Database Developer",
    title: "Database Engineer",
    location: "Chicago, IL",
    description: "Design and implement database solutions.",
    pay: "$95,000 - $125,000",
    experience: "5+ years",
  },
  {
    id: 28,
    career: "Database Developer",
    title: "Data Warehouse Developer",
    location: "Austin, TX",
    description: "Develop and maintain data warehousing solutions.",
    pay: "$100,000 - $130,000",
    experience: "4+ years",
  },
  {
    id: 29,
    career: "Database Developer",
    title: "Data Analyst",
    location: "Los Angeles, CA",
    description: "Analyze and interpret complex data sets.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 30,
    career: "Database Developer",
    title: "ETL Developer",
    location: "San Diego, CA",
    description: "Develop ETL processes and data integration solutions.",
    pay: "$90,000 - $120,000",
    experience: "4+ years",
  },

  // Network Security Engineer
  {
    id: 31,
    career: "Network Security Engineer",
    title: "Cybersecurity Analyst",
    location: "San Jose, CA",
    description: "Monitor and protect network security.",
    pay: "$100,000 - $140,000",
    experience: "3+ years",
  },
  {
    id: 32,
    career: "Network Security Engineer",
    title: "Network Security Engineer",
    location: "Los Angeles, CA",
    description: "Implement and manage network security protocols.",
    pay: "$110,000 - $150,000",
    experience: "4+ years",
  },
  {
    id: 33,
    career: "Network Security Engineer",
    title: "Information Security Engineer",
    location: "Miami, FL",
    description: "Protect information systems and networks.",
    pay: "$105,000 - $145,000",
    experience: "5+ years",
  },
  {
    id: 34,
    career: "Network Security Engineer",
    title: "Security Operations Center (SOC) Analyst",
    location: "San Francisco, CA",
    description: "Monitor and respond to security incidents.",
    pay: "$95,000 - $130,000",
    experience: "3+ years",
  },
  {
    id: 35,
    career: "Network Security Engineer",
    title: "Penetration Tester",
    location: "New York, NY",
    description: "Conduct security assessments and penetration tests.",
    pay: "$110,000 - $150,000",
    experience: "4+ years",
  },
  {
    id: 36,
    career: "Network Security Engineer",
    title: "Security Consultant",
    location: "Chicago, IL",
    description: "Advise on security best practices and solutions.",
    pay: "$120,000 - $160,000",
    experience: "5+ years",
  },
  {
    id: 37,
    career: "Network Security Engineer",
    title: "Network Security Architect",
    location: "Seattle, WA",
    description: "Design and implement network security strategies.",
    pay: "$125,000 - $170,000",
    experience: "6+ years",
  },
  {
    id: 38,
    career: "Network Security Engineer",
    title: "Cloud Security Engineer",
    location: "Austin, TX",
    description: "Ensure security of cloud-based systems.",
    pay: "$110,000 - $150,000",
    experience: "4+ years",
  },
  {
    id: 39,
    career: "Network Security Engineer",
    title: "Incident Response Specialist",
    location: "San Diego, CA",
    description: "Manage and respond to security incidents.",
    pay: "$100,000 - $140,000",
    experience: "3+ years",
  },
  {
    id: 40,
    career: "Network Security Engineer",
    title: "Ethical Hacker",
    location: "Los Angeles, CA",
    description: "Identify and exploit vulnerabilities in systems.",
    pay: "$115,000 - $155,000",
    experience: "4+ years",
  },

  // Software Developer
  {
    id: 41,
    career: "Software Developer",
    title: "Full Stack Developer",
    location: "Denver, CO",
    description: "Develop both front-end and back-end systems.",
    pay: "$90,000 - $120,000",
    experience: "3+ years",
  },
  {
    id: 42,
    career: "Software Developer",
    title: "Backend Developer",
    location: "Philadelphia, PA",
    description: "Focus on server-side logic and databases.",
    pay: "$85,000 - $115,000",
    experience: "4+ years",
  },
  {
    id: 43,
    career: "Software Developer",
    title: "Frontend Developer",
    location: "Portland, OR",
    description: "Create user interfaces and experiences.",
    pay: "$80,000 - $110,000",
    experience: "2+ years",
  },
  {
    id: 44,
    career: "Software Developer",
    title: "DevOps Engineer",
    location: "San Jose, CA",
    description: "Manage and optimize deployment processes.",
    pay: "$95,000 - $125,000",
    experience: "3+ years",
  },
  {
    id: 45,
    career: "Software Developer",
    title: "Software Development Engineer in Test (SDET)",
    location: "New York, NY",
    description: "Develop and execute tests for software quality.",
    pay: "$90,000 - $120,000",
    experience: "4+ years",
  },
  {
    id: 46,
    career: "Software Developer",
    title: "Mobile Software Developer",
    location: "Austin, TX",
    description: "Develop software applications for mobile platforms.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 47,
    career: "Software Developer",
    title: "Game Developer",
    location: "Los Angeles, CA",
    description: "Create and optimize video games.",
    pay: "$100,000 - $130,000",
    experience: "4+ years",
  },
  {
    id: 48,
    career: "Software Developer",
    title: "Software Development Manager",
    location: "San Diego, CA",
    description: "Lead and manage a team of software developers.",
    pay: "$120,000 - $160,000",
    experience: "5+ years",
  },
  {
    id: 49,
    career: "Software Developer",
    title: "Software Engineer in Machine Learning",
    location: "Seattle, WA",
    description: "Develop and implement machine learning models.",
    pay: "$110,000 - $150,000",
    experience: "4+ years",
  },
  {
    id: 50,
    career: "Software Developer",
    title: "Software Engineer in AI",
    location: "San Francisco, CA",
    description:
      "Work on artificial intelligence and machine learning projects.",
    pay: "$120,000 - $160,000",
    experience: "5+ years",
  },

  // Software Engineer
  {
    id: 51,
    career: "Software Engineer",
    title: "Software Engineer I",
    location: "San Diego, CA",
    description: "Work on various software engineering tasks.",
    pay: "$85,000 - $115,000",
    experience: "1+ years",
  },
  {
    id: 52,
    career: "Software Engineer",
    title: "Software Engineer II",
    location: "Seattle, WA",
    description: "Develop and maintain software applications.",
    pay: "$95,000 - $125,000",
    experience: "3+ years",
  },
  {
    id: 53,
    career: "Software Engineer",
    title: "Senior Software Engineer",
    location: "Austin, TX",
    description: "Lead development projects and teams.",
    pay: "$120,000 - $160,000",
    experience: "5+ years",
  },
  {
    id: 54,
    career: "Software Engineer",
    title: "Lead Software Engineer",
    location: "San Francisco, CA",
    description: "Oversee and guide the software engineering team.",
    pay: "$130,000 - $170,000",
    experience: "6+ years",
  },
  {
    id: 55,
    career: "Software Engineer",
    title: "Software Engineer in Cloud Computing",
    location: "New York, NY",
    description: "Develop and manage cloud-based applications.",
    pay: "$115,000 - $150,000",
    experience: "4+ years",
  },
  {
    id: 56,
    career: "Software Engineer",
    title: "Software Engineer in Data Science",
    location: "Chicago, IL",
    description: "Develop and implement data science solutions.",
    pay: "$120,000 - $160,000",
    experience: "5+ years",
  },
  {
    id: 57,
    career: "Software Engineer",
    title: "Software Engineer in DevOps",
    location: "Los Angeles, CA",
    description: "Manage and optimize development and operations processes.",
    pay: "$110,000 - $140,000",
    experience: "4+ years",
  },
  {
    id: 58,
    career: "Software Engineer",
    title: "Software Engineer in Embedded Systems",
    location: "Austin, TX",
    description: "Develop software for embedded systems and devices.",
    pay: "$100,000 - $130,000",
    experience: "5+ years",
  },
  {
    id: 59,
    career: "Software Engineer",
    title: "Full Stack Software Engineer",
    location: "San Diego, CA",
    description: "Work on both front-end and back-end software development.",
    pay: "$105,000 - $140,000",
    experience: "4+ years",
  },
  {
    id: 60,
    career: "Software Engineer",
    title: "Software Engineer in Cybersecurity",
    location: "San Francisco, CA",
    description: "Focus on software solutions for cybersecurity.",
    pay: "$120,000 - $160,000",
    experience: "5+ years",
  },

  // Software Quality Assurance (QA)/Testing
  {
    id: 61,
    career: "Software Quality Assurance (QA)/Testing",
    title: "QA Engineer",
    location: "Chicago, IL",
    description: "Test and ensure software quality.",
    pay: "$80,000 - $110,000",
    experience: "3+ years",
  },
  {
    id: 62,
    career: "Software Quality Assurance (QA)/Testing",
    title: "Software Tester",
    location: "New York, NY",
    description: "Perform manual and automated testing.",
    pay: "$75,000 - $105,000",
    experience: "2+ years",
  },
  {
    id: 63,
    career: "Software Quality Assurance (QA)/Testing",
    title: "QA Analyst",
    location: "San Francisco, CA",
    description: "Analyze and validate software functionality.",
    pay: "$85,000 - $115,000",
    experience: "4+ years",
  },
  {
    id: 64,
    career: "Software Quality Assurance (QA)/Testing",
    title: "Test Automation Engineer",
    location: "Austin, TX",
    description: "Develop and maintain automated tests.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 65,
    career: "Software Quality Assurance (QA)/Testing",
    title: "QA Lead",
    location: "San Diego, CA",
    description: "Lead QA teams and ensure software quality.",
    pay: "$95,000 - $125,000",
    experience: "5+ years",
  },
  {
    id: 66,
    career: "Software Quality Assurance (QA)/Testing",
    title: "Performance Tester",
    location: "Philadelphia, PA",
    description: "Conduct performance testing for software applications.",
    pay: "$80,000 - $110,000",
    experience: "4+ years",
  },
  {
    id: 67,
    career: "Software Quality Assurance (QA)/Testing",
    title: "Manual Tester",
    location: "Boston, MA",
    description: "Perform manual testing of software applications.",
    pay: "$75,000 - $105,000",
    experience: "2+ years",
  },
  {
    id: 68,
    career: "Software Quality Assurance (QA)/Testing",
    title: "Mobile QA Tester",
    location: "San Francisco, CA",
    description: "Test mobile applications for quality assurance.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 69,
    career: "Software Quality Assurance (QA)/Testing",
    title: "QA Engineer in Automation",
    location: "New York, NY",
    description: "Specialize in automated testing and quality assurance.",
    pay: "$90,000 - $120,000",
    experience: "4+ years",
  },
  {
    id: 70,
    career: "Software Quality Assurance (QA)/Testing",
    title: "QA Consultant",
    location: "Los Angeles, CA",
    description: "Provide QA consulting and strategies for projects.",
    pay: "$95,000 - $125,000",
    experience: "5+ years",
  },

  // System Security Administrator
  {
    id: 71,
    career: "System Security Administrator",
    title: "System Administrator",
    location: "Denver, CO",
    description: "Manage and secure systems and networks.",
    pay: "$90,000 - $120,000",
    experience: "3+ years",
  },
  {
    id: 72,
    career: "System Security Administrator",
    title: "IT Security Specialist",
    location: "Los Angeles, CA",
    description: "Implement security measures and policies.",
    pay: "$95,000 - $125,000",
    experience: "4+ years",
  },
  {
    id: 73,
    career: "System Security Administrator",
    title: "Network Security Administrator",
    location: "Seattle, WA",
    description: "Ensure network and system security.",
    pay: "$100,000 - $130,000",
    experience: "5+ years",
  },
  {
    id: 74,
    career: "System Security Administrator",
    title: "Information Systems Security Officer",
    location: "San Francisco, CA",
    description: "Develop and enforce security policies for systems.",
    pay: "$105,000 - $135,000",
    experience: "5+ years",
  },
  {
    id: 75,
    career: "System Security Administrator",
    title: "Security Operations Center (SOC) Analyst",
    location: "Chicago, IL",
    description: "Monitor and respond to security incidents.",
    pay: "$100,000 - $130,000",
    experience: "3+ years",
  },
  {
    id: 76,
    career: "System Security Administrator",
    title: "Cybersecurity Specialist",
    location: "New York, NY",
    description: "Implement cybersecurity measures and strategies.",
    pay: "$110,000 - $145,000",
    experience: "4+ years",
  },
  {
    id: 77,
    career: "System Security Administrator",
    title: "IT Risk Manager",
    location: "San Jose, CA",
    description: "Identify and manage IT risks and security vulnerabilities.",
    pay: "$115,000 - $150,000",
    experience: "5+ years",
  },
  {
    id: 78,
    career: "System Security Administrator",
    title: "Cloud Security Specialist",
    location: "Austin, TX",
    description: "Ensure security of cloud-based infrastructure.",
    pay: "$110,000 - $140,000",
    experience: "4+ years",
  },
  {
    id: 79,
    career: "System Security Administrator",
    title: "Forensic Security Analyst",
    location: "Los Angeles, CA",
    description:
      "Conduct investigations and forensic analysis of security breaches.",
    pay: "$120,000 - $155,000",
    experience: "5+ years",
  },
  {
    id: 80,
    career: "System Security Administrator",
    title: "Network Security Engineer",
    location: "San Diego, CA",
    description: "Design and manage network security solutions.",
    pay: "$105,000 - $140,000",
    experience: "4+ years",
  },

  // Technical Support
  {
    id: 81,
    career: "Technical Support",
    title: "IT Support Specialist",
    location: "Chicago, IL",
    description: "Provide technical support and troubleshooting.",
    pay: "$60,000 - $85,000",
    experience: "2+ years",
  },
  {
    id: 82,
    career: "Technical Support",
    title: "Technical Support Engineer",
    location: "San Francisco, CA",
    description: "Assist with technical issues and solutions.",
    pay: "$65,000 - $90,000",
    experience: "3+ years",
  },
  {
    id: 83,
    career: "Technical Support",
    title: "Help Desk Technician",
    location: "Austin, TX",
    description: "Resolve user issues and provide assistance.",
    pay: "$55,000 - $80,000",
    experience: "1+ years",
  },
  {
    id: 84,
    career: "Technical Support",
    title: "Technical Support Analyst",
    location: "New York, NY",
    description: "Provide support and troubleshooting for technical issues.",
    pay: "$60,000 - $85,000",
    experience: "2+ years",
  },
  {
    id: 85,
    career: "Technical Support",
    title: "IT Support Technician",
    location: "San Diego, CA",
    description: "Offer technical assistance and support for IT systems.",
    pay: "$55,000 - $80,000",
    experience: "1+ years",
  },
  {
    id: 86,
    career: "Technical Support",
    title: "Customer Support Engineer",
    location: "Chicago, IL",
    description: "Assist customers with technical support and solutions.",
    pay: "$60,000 - $85,000",
    experience: "2+ years",
  },
  {
    id: 87,
    career: "Technical Support",
    title: "IT Help Desk Manager",
    location: "Portland, OR",
    description: "Manage IT help desk operations and team.",
    pay: "$70,000 - $95,000",
    experience: "3+ years",
  },
  {
    id: 88,
    career: "Technical Support",
    title: "Technical Account Manager",
    location: "Seattle, WA",
    description: "Provide technical support and account management.",
    pay: "$65,000 - $90,000",
    experience: "3+ years",
  },
  {
    id: 89,
    career: "Technical Support",
    title: "Field Service Technician",
    location: "San Francisco, CA",
    description: "Provide on-site technical support and service.",
    pay: "$60,000 - $85,000",
    experience: "2+ years",
  },
  {
    id: 90,
    career: "Technical Support",
    title: "IT Support Coordinator",
    location: "Austin, TX",
    description: "Coordinate and manage IT support operations.",
    pay: "$65,000 - $90,000",
    experience: "3+ years",
  },

  // UX Designer
  {
    id: 91,
    career: "UX Designer",
    title: "UX Designer",
    location: "San Francisco, CA",
    description: "Design user experiences and interfaces.",
    pay: "$90,000 - $120,000",
    experience: "3+ years",
  },
  {
    id: 92,
    career: "UX Designer",
    title: "Senior UX Designer",
    location: "Los Angeles, CA",
    description: "Lead UX design projects and teams.",
    pay: "$110,000 - $145,000",
    experience: "5+ years",
  },
  {
    id: 93,
    career: "UX Designer",
    title: "UX Researcher",
    location: "New York, NY",
    description: "Conduct user research and analysis.",
    pay: "$85,000 - $115,000",
    experience: "4+ years",
  },
  {
    id: 94,
    career: "UX Designer",
    title: "UI/UX Designer",
    location: "Austin, TX",
    description: "Design user interfaces and user experiences.",
    pay: "$95,000 - $125,000",
    experience: "4+ years",
  },
  {
    id: 95,
    career: "UX Designer",
    title: "Lead UX Designer",
    location: "Chicago, IL",
    description: "Oversee and guide UX design projects and teams.",
    pay: "$120,000 - $155,000",
    experience: "6+ years",
  },
  {
    id: 96,
    career: "UX Designer",
    title: "UX/UI Researcher",
    location: "San Diego, CA",
    description: "Conduct research and analyze user experience and interfaces.",
    pay: "$85,000 - $115,000",
    experience: "3+ years",
  },
  {
    id: 97,
    career: "UX Designer",
    title: "UX Strategist",
    location: "Seattle, WA",
    description: "Develop and implement UX strategies and plans.",
    pay: "$100,000 - $130,000",
    experience: "5+ years",
  },
  {
    id: 98,
    career: "UX Designer",
    title: "UX/UI Designer",
    location: "Portland, OR",
    description: "Design both user interfaces and experiences.",
    pay: "$90,000 - $120,000",
    experience: "3+ years",
  },
  {
    id: 99,
    career: "UX Designer",
    title: "Junior UX Designer",
    location: "Boston, MA",
    description: "Assist with UX design tasks and projects.",
    pay: "$70,000 - $95,000",
    experience: "1+ years",
  },
  {
    id: 100,
    career: "UX Designer",
    title: "UX/UI Designer - Contract",
    location: "San Francisco, CA",
    description: "Contract role designing user interfaces and experiences.",
    pay: "$85,000 - $110,000",
    experience: "2+ years",
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const career = searchParams.get("career");

  if (!career) {
    return NextResponse.json(
      { error: "Career query parameter is missing" },
      { status: 400 }
    );
  }

  const filteredJobs = jobs.filter(
    (job) => job.career.toLowerCase() === career.toLowerCase()
  );

  if (filteredJobs.length === 0) {
    return NextResponse.json(
      { error: "No jobs found for the specified career" },
      { status: 404 }
    );
  }

  return NextResponse.json(filteredJobs);
}
