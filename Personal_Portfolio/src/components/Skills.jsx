import { FaCode } from "react-icons/fa";
const Skills = () => {
  const skills = {
    Languages:["C++", "JavaScript", "Python", "Java"],
    "Web Development" :[
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js"
    ],
    Tools:[
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      
    ],
    Databases:[
      "MongoDB",
      "MySQL",
    ],
  };
return (

<div className="bg-[#0B1120] border border-[#1E293B] rounded-3xl p-8 hover:border-purple-500 transition duration-300">
<div className="flex items-center gap-3 mb-8">
<FaCode className="text-purple-500 text-2xl" />
<h2 className="font-bold text-2xl text-purple-500 ">Skills

</h2>
</div>
<div className="space-y-8"> {Object.entries(skills).map(([category, items]) => ( <div key={category} className="grid md:grid-cols-[180px_1fr] gap-6 items-start" > <h3 className="text-white font-semibold text-lg"> {category} </h3> <div className="flex flex-wrap gap-4"> {items.map((skill) => ( <span key={skill} className="px-4 py-2 rounded-xl border border-[#312E81] bg-[#111827] text-gray-300 text-sm hover:border-purple-500 hover:text-white transition duration-300 cursor-default" > {skill} </span> ))} </div> </div> ))} </div> </div>
  );
}
export default Skills;