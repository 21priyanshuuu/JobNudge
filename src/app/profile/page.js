// src/pages/profile.js
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { FaSignOutAlt } from "react-icons/fa"; // Importing the logout icon

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

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Profile Page</h1>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md space-y-4">
        <p className="text-xl font-semibold dark:text-white">ID: {id}</p>
        <p className="text-lg dark:text-gray-300">Email: {email}</p>
        <p className="text-lg dark:text-gray-300">First Name: {given_name}</p>
        <p className="text-lg dark:text-gray-300">Last Name: {family_name}</p>

        <p className="text-lg dark:text-gray-300">Username: {username}</p>
        <p className="text-lg dark:text-gray-300">
          Phone Number: {phone_number}
        </p>

        <h2 className="text-2xl font-semibold mt-4 dark:text-white">
          Address Information
        </h2>
        <p className="text-lg dark:text-gray-300">
          City: {usr_city || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          Industry: {usr_industry || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          Job Title: {usr_job_title || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          Middle Name: {usr_middle_name || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          Postcode: {usr_postcode || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          Salutation: {usr_salutation || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          State/Region: {usr_state_region || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          Street Address: {usr_street_address || "Not provided"}
        </p>
        <p className="text-lg dark:text-gray-300">
          Street Address 2: {usr_street_address_2 || "Not provided"}
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <LogoutLink className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors">
          <FaSignOutAlt />
          <span>Logout</span>
        </LogoutLink>
      </div>
    </div>
  );
};

export default Profile;
