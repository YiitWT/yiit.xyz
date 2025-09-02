
const AboutMe = () => {
  const experiences = [
    {
      year: "2025",
      title: "Software Development Intern",
      company: "MayITC",
      duration: "May 2025 - Aug 2025",
      skills: ["OOP", "Agile", "Web Development", "HR"],
      description: "Completed my first international internship in Barcelona through the EU Erasmus+ program. Gained hands-on experience in professional workflows, contributed to real projects, and continued to sharpen my development skills.",
      color: "bg-primary"
    },
    {
      year: "2024",
      title: "Independent Developer",
      company: "Freelance & Personal Projects",
      duration: "Jan 2024 - Dec 2024",
      skills: ["Node.js", "Discord.js", "React", "Hosting Services", "Modding"],
      description: "Launched several projects, including Discord bots, Minecraft mods, and hosting services. Built and maintained websites for two bridal companies, applying both technical and client-facing skills.",
      color: "bg-secondary"
    },
    {
      year: "2023",
      title: "High School Student",
      company: "Arkas Meslek Lisesi",
      duration: "Sep 2023 - Present",
      skills: ["Software Engineering Fundamentals", "Problem Solving", "Collaboration"],
      description: "Began studies at Arkas Vocational High School, specializing in software engineering. Balanced coursework with personal development and freelance projects.",
      color: "bg-primary"
    },
    {
      year: "2022",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "[I DONT REMEMBER THE DATES]",
      skills: ["HTML", "CSS", "JavaScript", "Freelancing"],
      description: "Started building websites independently and took on freelance projects through Fiverr, delivering solutions to real clients and learning to manage end-to-end development.",
      color: "bg-secondary"
    },
    {
      year: "2021",
      title: "Hobby Developer",
      company: "Self-Learning",
      duration: "Sep 2021 - []",
      skills: ["Node.js", "Discord.js", "Bot Development"],
      description: "Discovered coding as a hobby by creating Discord bots using Node.js and Discord.js, which sparked my passion for programming.",
      color: "bg-primary"
    }
  ]


  return (
    <div className="py-12 w-full" id="experience">
      {/* Section Title */}
      <div className="text-4xl text-white flex md:ml-24 xl:ml-96 ml-4 items-center mb-16">
        <h1 className="text-white">
          <span className="text-primary">#</span>experience
        </h1>
        <div className="h-[1px] bg-primary md:w-1/2 w-32 ml-8"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative md:ml-36 xl:ml-96  mr-4">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary to-secondary"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline Dot */}
              <div className={`absolute left-6 w-5 h-5 ${exp.color} rounded-full border-4 border-background shadow-lg`}>
                <div className={`w-full h-full ${exp.color} rounded-full animate-pulse opacity-75`}></div>
              </div>

              {/* Year Badge */}
              <div className="absolute left-16 -top-2">
                <span className={`px-3 py-1 text-sm font-bold text-white ${exp.color} rounded-full shadow-lg`}>
                  {exp.year}
                </span>
              </div>

              {/* Experience Card */}
              <div className="ml-20  border border-primary rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-primary group w-full max-w-2xl">
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 sm:mt-0">{exp.duration}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-primary text-sm rounded-full border border-gray-600 hover:border-primary hover:bg-gray-600 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline End */}
        <div className="absolute left-6 bottom-0 w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-lg animate-pulse"></div>
      </div>

    </div>
  );
};

export default AboutMe;