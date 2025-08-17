const Stats = () => {
  const Languages = ["JavaScript", "TypeScript", "Python", "Java"];
  const Tools = ["VSCode", "Git", "oh-my-posh", "Figma", "Zen Browser"];
  const Frameworks = ["React", "Vite", "Express.js", "Astro"];
  const Database = ["MongoDB", "NoSQLite", "SQLite", "MySQL"];
  const myStats = [
    "Age: 16",
    "Gender: Male",
    "Location: Turkiye",
    "Experience: 3 Yrs",
    "Projects: 20+",
    "Commits: 100+",
  ]

  return (
    <div className="bg-background my-24 w-full overflow-x-hidden" id="stats">
      {/* Section Title */}
      <div className="container mx-auto px-4">
        <div className="text-4xl text-white flex items-center mb-8 md:ml-96 ml-4">
          <h1 className="text-white">
            <span className="text-primary">#</span>stats
          </h1>
          <div className="h-[1px] bg-primary flex-1 ml-8 max-w-md"></div>
        </div>

        {/* Content - Centered and Responsive */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl w-full">

            <div className="border-2 border-secondary w-full">
              <div className="border-b-2 border-secondary py-2 px-4">
                <h1 className="text-white text-lg">My Stats</h1>
              </div>
              <div className="p-4">
                {myStats.map((stat, index) => (
                  <div key={index} className="text-secondary text-lg mb-1">
                    {stat}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-secondary w-full">
              <div className="border-b-2 border-secondary py-2 px-4">
                <h1 className="text-white text-lg">Languages</h1>
              </div>
              <div className="p-4">
                {Languages.map((language, index) => (
                  <div key={index} className="text-secondary text-lg mb-1">
                    {language}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-secondary w-full">
              <div className="border-b-2 border-secondary py-2 px-4">
                <h1 className="text-white text-lg">Tools</h1>
              </div>
              <div className="p-4">
                {Tools.map((tool, index) => (
                  <div key={index} className="text-secondary text-lg mb-1">
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-secondary w-full">
              <div className="border-b-2 border-secondary py-2 px-4">
                <h1 className="text-white text-lg">Frameworks</h1>
              </div>
              <div className="p-4">
                {Frameworks.map((framework, index) => (
                  <div key={index} className="text-secondary text-lg mb-1">
                    {framework}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-secondary w-full">
              <div className="border-b-2 border-secondary py-2 px-4">
                <h1 className="text-white text-lg">Database(s)</h1>
              </div>
              <div className="p-4">
                {Database.map((database, index) => (
                  <div key={index} className="text-secondary text-lg mb-1">
                    {database}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats