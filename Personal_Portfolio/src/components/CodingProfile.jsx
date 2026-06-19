import { FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-4xl text-[#FFA116]" />,
    primaryLabel: "Rating",
    primaryValue: "1623",
    secondaryLabel: "Problems Solved",
    secondaryValue: "450+",
    link: "https://leetcode.com/u/sharda808",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-4xl text-blue-400" />,
    primaryLabel: "Rating",
    primaryValue: "1247",
    secondaryLabel: "Rank",
    secondaryValue: "Pupil",
    link: "https://codeforces.com/profile/sharda808",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-4xl text-amber-500" />,
    primaryLabel: "Rating",
    primaryValue: "3⭐",
    secondaryLabel: "Global Rank",
    secondaryValue: "16432",
    link: "https://www.codechef.com/users/sharda808",
  },
  {
    name: "HackerRank",
    icon: <FaHackerrank className="text-5xl text-[#2EC866]" />,
    special: true,
    stars: "5⭐",
    text: "Problem Solving",
    link: "https://www.hackerrank.com/profile/sharda808",
  },
];

const CodingProfile = () => {
  return (
    <div className="bg-[#0B1120] border border-[#1E293B] rounded-3xl p-8 hover:border-purple-500 transition-all duration-300">


      <div className="flex items-center gap-3 mb-8">
        <FaCode className="text-purple-500 text-xl" />
        <h2 className="text-2xl font-semibold text-purple-400">
          Coding Profiles
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {profiles.map((profile, index) => (
          <div
            key={index}
            className="
            bg-[#111827]
            border border-[#1E293B]
            rounded-2xl
            p-5
            hover:border-purple-500
            hover:-translate-y-1
            transition-all duration-300
            "
          >
           
            <div className="mb-4">
              {profile.icon}
            </div>

          
            <h3 className="text-white font-semibold text-lg mb-5">
              {profile.name}
            </h3>

            {profile.special ? (
              <div className="text-center py-4 mb-4">
                <h2 className="text-3xl font-bold text-white">
                  {profile.stars}
                </h2>

                <p className="text-gray-400 mt-2">
                  {profile.text}
                </p>
              </div>
            ) : (
              <div className="flex justify-between mb-6">

                <div>
                  <p className="text-xs text-gray-500">
                    {profile.primaryLabel}
                  </p>

                  <h2 className="text-3xl font-bold text-white">
                    {profile.primaryValue}
                  </h2>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    {profile.secondaryLabel}
                  </p>

                  <h2 className="text-2xl font-semibold text-white">
                    {profile.secondaryValue}
                  </h2>
                </div>

              </div>
            )}

            {/* View Profile */}
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-1
              text-purple-400
              hover:text-purple-300
              font-medium
              mt-4
              "
            >
              View Profile

              <IoIosArrowRoundForward className="text-2xl" />
            </a>

          </div>
        ))}

      </div>
    </div>
  );
};

export default CodingProfile;