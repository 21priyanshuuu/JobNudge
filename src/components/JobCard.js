import { useState } from "react";

export default function JobCard({ job }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          <p className="text-indigo-600 font-medium">{job.career}</p>
        </div>
        <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
          {job.location}
        </div>
      </div>
      
      <p className="text-gray-600 mt-4 line-clamp-3">{job.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-gray-500 text-sm">Compensation</p>
          <p className="text-gray-800 font-semibold">{job.pay}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-gray-500 text-sm">Experience</p>
          <p className="text-gray-800 font-semibold">{job.experience}</p>
        </div>
      </div>
      
      <div className="mt-6 flex gap-3">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 flex-1">
          Apply Now
        </button>
        <button
          onClick={openDialog}
          className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-2 px-4 rounded-md font-medium transition-colors duration-300"
        >
          Details
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-indigo-600 font-medium">{job.career}</p>
              </div>
              <button
                onClick={closeDialog}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm inline-block mb-4">
              {job.location}
            </div>
            
            <p className="text-gray-600 mb-6">{job.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-500 text-sm">Compensation</p>
                <p className="text-gray-800 font-semibold text-lg">{job.pay}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-500 text-sm">Experience Required</p>
                <p className="text-gray-800 font-semibold text-lg">{job.experience}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300">
                Apply For This Position
              </button>
              <button
                onClick={closeDialog}
                className="w-full mt-3 border border-gray-300 text-gray-600 hover:bg-gray-50 py-3 px-4 rounded-md font-medium transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}