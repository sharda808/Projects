import { FaTrophy } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
const Achievements = () => {
return (
<div className="bg-[#0B1120] border border-[#1E293B] rounded-3xl p-8 pb-12 hover:border-purple-500 transition duration-300">
  
  <div className="flex items-center gap-3 mb-6">
    <FaTrophy className="text-yellow-500 text-2xl" />
    <h2 className="text-3xl font-semibold text-yellow-400">
      Achievements
    </h2>
  </div>

  <div className="mt-6 space-y-4">
    <div className="flex items-center gap-3">
<FaRegCheckCircle className="text-xl text-purple-50 flex flex-items" />
    <p className="text-gray-300">
      Solved 500+ DSA problems on various platforms
    </p>
   </div>
    <div className="flex items-center gap-3">
<FaRegCheckCircle className="text-xl text-purple-50 flex flex-items" />
    <p className="text-gray-300">
      Selected in Flipkart Grid 7.0
    </p>
    </div>
      <div className="flex items-center gap-3">
<FaRegCheckCircle className="text-xl text-purple-50 flex flex-items" />
    <p className="text-gray-300">
      Participated in HackVega 2.0
    </p>
  </div>
      <div className="flex items-center gap-3">
<FaRegCheckCircle className="text-xl text-purple-50 flex flex-items" />
    <p className="text-gray-300">
      Secure 1st position in college contest
    </p>
  </div>
      <div className="flex items-center gap-3">
<FaRegCheckCircle className="text-xl text-purple-50 flex flex-items" />
    <p className="text-gray-300 pb-2">
      Participated microsoft imagine cup 2026
    </p>
  </div>
</div>

</div>
)
}
export default Achievements;