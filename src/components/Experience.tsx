
import { useTranslation } from "../i18n/TranslationProvider";

const AboutMe = () => {
  const { t } = useTranslation();
  // @ts-ignore: Allow custom translation keys for experience fields
  const experiences = [
    {
      year: "2025",
      title: t("exp_intern_title"),
      company: t("exp_intern_company"),
      duration: t("exp_intern_duration"),
      skills: [t("exp_intern_skill_oop"), t("exp_intern_skill_agile"), t("exp_intern_skill_webdev"), t("exp_intern_skill_hr")],
      description: t("exp_intern_desc"),
      color: "bg-primary"
    },
    {
      year: "2024",
      title: t("exp_indie_title"),
      company: t("exp_indie_company"),
      duration: t("exp_indie_duration"),
      skills: [t("exp_indie_skill_nodejs"), t("exp_indie_skill_discordjs"), t("exp_indie_skill_react"), t("exp_indie_skill_hosting"), t("exp_indie_skill_modding")],
      description: t("exp_indie_desc"),
      color: "bg-secondary"
    },
    {
      year: "2023",
      title: t("exp_student_title"),
      company: t("exp_student_company"),
      duration: t("exp_student_duration"),
      skills: [t("exp_student_skill_fundamentals"), t("exp_student_skill_problem"), t("exp_student_skill_collab")],
      description: t("exp_student_desc"),
      color: "bg-primary"
    },
    {
      year: "2022",
      title: t("exp_freelance_title"),
      company: t("exp_freelance_company"),
      duration: t("exp_freelance_duration"),
      skills: [t("exp_freelance_skill_html"), t("exp_freelance_skill_css"), t("exp_freelance_skill_js"), t("exp_freelance_skill_freelancing")],
      description: t("exp_freelance_desc"),
      color: "bg-secondary"
    },
    {
      year: "2021",
      title: t("exp_hobby_title"),
      company: t("exp_hobby_company"),
      duration: t("exp_hobby_duration"),
      skills: [t("exp_hobby_skill_nodejs"), t("exp_hobby_skill_discordjs"), t("exp_hobby_skill_botdev")],
      description: t("exp_hobby_desc"),
      color: "bg-primary"
    }
  ];


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