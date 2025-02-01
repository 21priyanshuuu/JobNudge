import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

export default function JobRecommendations() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      description:
        "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      company: "Innovative Apps",
      location: "New York, NY",
      description:
        "Join our team as a Backend Developer. Experience with Node.js and Express is required.",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Hub",
      location: "Remote",
      description:
        "We need a Full Stack Developer to build scalable web applications. Experience with MERN stack is a plus.",
    },
  ];

  return (
    <div>
      <Navbar username="John Doe" />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Job Recommendations</h1>
        <div className="flex flex-wrap">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
