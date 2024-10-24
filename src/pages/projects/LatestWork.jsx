import React from "react";
import myCharity from "../../assets/images/charity.png";

const LatestWork = () => {
  return (
    <div className="py-6">
      <h2 className="text-center pt-5 text-4xl md:text-5xl lg:text-6xl font-bold border-b-2 border-red-500 p-5">
        Latest Work
      </h2>

      {/* Charity Web Application */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-screen px-4">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl text-pink-700 font-bold pb-4">
            Charity Web Application
          </h3>
          <p className="text-gray-400 mb-4">
            The charity web application aims to bridge the gap between
            individuals in need and organizations willing to provide assistance
            in areas such as healthcare, education, and support for the elderly.
            Users can submit requests for help through an intuitive contact
            form, which requires proof of identification and a video description
            of their needs. The application incorporates a robust verification
            system for organizations to assess the legitimacy of requests,
            ensuring that assistance reaches those who truly require it.
            Additionally, AI integration will enhance the user experience,
            making the application more responsive and efficient. By fostering
            connections between donors and beneficiaries, this platform aspires
            to create a positive impact on the community.
          </p>
          <ul className="list-none flex flex-wrap gap-3 pt-4">
            <li className="text-center border border-red-500 w-[90px] rounded-[10px] p-2 text-sm">
              #React
            </li>
            <li className="text-center border border-red-500 w-[90px] rounded-[10px] p-2 text-sm">
              #Tailwind CSS
            </li>
            <li className="text-center border border-red-500 w-[90px] rounded-[10px] p-2 text-sm">
              #MongoDB
            </li>
            <li className="text-center border border-red-500 w-[90px] rounded-[10px] p-2 text-sm">
              #NodeJS
            </li>
            <li className="text-center border border-red-500 w-[90px] rounded-[10px] p-2 text-sm">
              #ExpressJS
            </li>
          </ul>
        </div>
        {/* Right Column */}
        <div className="flex justify-center items-center">
          <img
            src={myCharity}
            alt="Charity Web Application"
            className="w-full max-w-[450px] h-auto border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
