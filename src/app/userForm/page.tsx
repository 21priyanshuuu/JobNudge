"use client";
import { useState } from "react";
import axios from "axios";
import router, { useRouter } from "next/navigation";

const UserForm = () => {
  const router = useRouter(); // Initialize useRouter

  const [formData, setFormData] = useState({
    userId: "user",
    jobRecommendation: "job", // Initial value, will be updated with prediction
    logical_quotient: 0.0,
    hackathons: 0,
    coding_skills: 0.0,
    public_speaking: 0.0,
    self_learning: "no",
    extra_courses: "no",
    certifications: "app development",
    workshops: "cloud computing",
    reading_writing: "excellent",
    memory_capability: "excellent",
    interested_subjects: "Computer Architecture",
    interested_career_area: "Business process analyst",
    company_type: "BPA",
    senior_inputs: "no",
    book_type: "Action and Adventure",
    management_or_technical: "Management",
    worker_type: "hard worker",
    teamwork: "no",
    introvert: "no",
  });

  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (formData: any) => {
    try {
      console.log("submitForm is called!!!!!");
      const response = await axios.post("/api/userInfo", formData); // Adjust the endpoint as necessary
      console.log("Form submitted successfully");
      router.push("/dashboard"); // Use router.push for redirection
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const predictionResponse = await axios.post("/api/predict", formData);
      const predictedJob = predictionResponse.data.prediction;

      setPrediction(predictedJob);
      setError(null);

      // Update formData with the predicted job
      const updatedFormData = { ...formData, jobRecommendation: predictedJob };
      setFormData(updatedFormData);

      // Submit the form data with the predicted job
      await submitForm(updatedFormData);
    } catch (error) {
      console.error("Error during prediction:", error);
      setError("An error occurred during prediction.");
      setPrediction(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <h1 className="text-4xl font-bold mb-8 text-green-600">
        Career Recommendation
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-lg border-green-600 border-2 max-w-4xl w-full"
      >
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Logical Quotient:
            <input
              type="number"
              step="0.1"
              name="logical_quotient"
              value={formData.logical_quotient}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Hackathons:
            <input
              type="number"
              name="hackathons"
              value={formData.hackathons}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Coding Skills:
            <input
              type="number"
              step="0.1"
              name="coding_skills"
              value={formData.coding_skills}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Public Speaking:
            <input
              type="number"
              step="0.1"
              name="public_speaking"
              value={formData.public_speaking}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Self Learning Capability:
            <select
              name="self_learning"
              value={formData.self_learning}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Extra Courses:
            <select
              name="extra_courses"
              value={formData.extra_courses}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Certifications:
            <select
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="app development">App Development</option>
              <option value="distro making">Distro Making</option>
              <option value="full stack">Full Stack</option>
              <option value="hadoop">Hadoop</option>
              <option value="information security">Information Security</option>
              <option value="machine learning">Machine Learning</option>
              <option value="python">Python</option>
              <option value="r programming">R Programming</option>
              <option value="shell programming">Shell Programming</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Workshops:
            <select
              name="workshops"
              value={formData.workshops}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="cloud computing">Cloud Computing</option>
              <option value="data science">Data Science</option>
              <option value="database security">Database Security</option>
              <option value="game development">Game Development</option>
              <option value="hacking">Hacking</option>
              <option value="system designing">System Designing</option>
              <option value="testing">Testing</option>
              <option value="web technologies">Web Technologies</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Reading and Writing Skills:
            <select
              name="reading_writing"
              value={formData.reading_writing}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="excellent">Excellent</option>
              <option value="medium">Medium</option>
              <option value="poor">Poor</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Memory Capability:
            <select
              name="memory_capability"
              value={formData.memory_capability}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="excellent">Excellent</option>
              <option value="medium">Medium</option>
              <option value="poor">Poor</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Interested Subjects:
            <input
              type="text"
              name="interested_subjects"
              value={formData.interested_subjects}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Interested Career Area:
            <input
              type="text"
              name="interested_career_area"
              value={formData.interested_career_area}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Company Type:
            <input
              type="text"
              name="company_type"
              value={formData.company_type}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Senior Inputs:
            <select
              name="senior_inputs"
              value={formData.senior_inputs}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Book Type:
            <select
              name="book_type"
              value={formData.book_type}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="Action and Adventure">Action and Adventure</option>
              <option value="Biography">Biography</option>
              <option value="Business">Business</option>
              <option value="Classics">Classics</option>
              <option value="Fantasy">Fantasy</option>~
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Management or Technical:
            <select
              name="management_or_technical"
              value={formData.management_or_technical}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="Management">Management</option>
              <option value="Technical">Technical</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Worker Type:
            <select
              name="worker_type"
              value={formData.worker_type}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="hard worker">Hard Worker</option>
              <option value="smart worker">Smart Worker</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Teamwork:
            <select
              name="teamwork"
              value={formData.teamwork}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-black mb-2">
            Introvert:
            <select
              name="introvert"
              value={formData.introvert}
              onChange={handleChange}
              className="block w-full mt-1 p-4 border border-gray-300 rounded-md text-lg"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 text-lg"
        >
          Submit
        </button>
      </form>
      {prediction && (
        <div className="mt-8 p-6 bg-white border border-green-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Recommended Career:
          </h2>
          <p>{prediction}</p>
        </div>
      )}
      {error && (
        <div className="mt-8 p-6 bg-red-100 border border-red-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
