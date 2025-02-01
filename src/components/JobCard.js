import { useState } from "react";

export default function JobCard({ job }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="border p-4 rounded shadow-md flex flex-col bg-white">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-700">{job.career}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-gray-600 mt-2">{job.description}</p>
      <p className="text-gray-800 mt-1">Pay: {job.pay}</p>
      <p className="text-gray-800 mt-1">Experience: {job.experience}</p>
      <div className="mt-auto flex gap-2">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Apply
        </button>
        <button
          onClick={openDialog}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          View Details
        </button>
      </div>

      {/* Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-bold">{job.title}</h3>
            <p className="text-gray-700 mt-2">{job.career}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-600 mt-2">{job.description}</p>
            <p className="text-gray-800 mt-1">Pay: {job.pay}</p>
            <p className="text-gray-800 mt-1">Experience: {job.experience}</p>
            <button
              onClick={closeDialog}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
