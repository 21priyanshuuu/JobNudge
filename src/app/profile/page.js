import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { FaSignOutAlt, FaUser, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const Profile = async () => {
  // Fetch user data server-side
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  // Destructure the user data
  const {
    id,
    email,
    family_name,
    given_name,
    picture,
    username,
    phone_number,
    properties: {
      usr_city,
      usr_industry,
      usr_job_title,
      usr_middle_name,
      usr_postcode,
      usr_salutation,
      usr_state_region,
      usr_street_address,
      usr_street_address_2,
    } = {},
  } = user;

  // Format full name
  const fullName = [
    usr_salutation,
    given_name,
    usr_middle_name,
    family_name
  ].filter(Boolean).join(" ");

  // Format full address
  const fullAddress = [
    usr_street_address,
    usr_street_address_2,
    usr_city,
    usr_state_region,
    usr_postcode
  ].filter(Boolean).join(", ");

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600">
         <div className="text-center p-20 font-bold text-4xl">{given_name } {family_name}</div>
          <div className="absolute top-4 right-4">
            <LogoutLink className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors">
              <FaSignOutAlt />
              <span>Logout</span>
            </LogoutLink>
          </div>
        </div>

        {/* User Info Section */}
        <div className="pt-20 pb-6 px-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{fullName || username || "User"}</h1>
          {usr_job_title && (
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{usr_job_title}{usr_industry ? ` • ${usr_industry}` : ""}</p>
          )}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information Card */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FaUser className="mr-2 text-indigo-500 dark:text-indigo-400" />
                Personal Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 flex-shrink-0 text-indigo-500 dark:text-indigo-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">{email || "Not provided"}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 flex-shrink-0 text-indigo-500 dark:text-indigo-400">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white">{phone_number || "Not provided"}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 flex-shrink-0 text-indigo-500 dark:text-indigo-400">
                    <FaUser />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Username</p>
                    <p className="text-gray-900 dark:text-white">{username || "Not provided"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information Card */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-indigo-500 dark:text-indigo-400" />
                Address Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 flex-shrink-0 text-indigo-500 dark:text-indigo-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                    <p className="text-gray-900 dark:text-white">{fullAddress || "Not provided"}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 flex-shrink-0 text-indigo-500 dark:text-indigo-400">
                    <FaBuilding />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Industry</p>
                    <p className="text-gray-900 dark:text-white">{usr_industry || "Not provided"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Account Details Section */}
          <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Details</h2>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400">Account ID</p>
              <p className="font-mono text-gray-900 dark:text-white break-all">{id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;