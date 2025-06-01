import lucy from "../assets/lucy.png";


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
    <div className="bg-background py-12 w-full" id="stats">
      {/* Section Title */}
      <div className="text-4xl text-white flex md:ml-96 ml-4 items-center ">
        <h1 className="text-white">
          <span className="text-primary">#</span>stats
        </h1>
        <div className="h-[1px] bg-primary md:w-1/2 w-32 ml-8"></div>
      </div>

      {/* Content */}
      <div className="flex md:overflow-hidden overflow-auto">
        <div className="flex  gap-6 md:ml-96 mt-6 p-12 md:w-1/2 ">

          <div className="border-2 border-secondary w-fit min-w-52">
            <div className="border-b-2 border-secondary py-2 pr-24 pl-2">
              <h1 className="text-white text-lg">My Stats</h1>
            </div>
            <div className="">
              <li className="list-none p-2">
                {myStats.map((stat, index) => (
                  <ul key={index} className="text-secondary text-lg">
                    {stat}
                  </ul>
                ))}

              </li>
            </div>
          </div>

          <div className="border-2 border-secondary w-fit ">
            <div className="border-b-2 border-secondary py-2 pr-24 pl-2">
              <h1 className="text-white text-lg">Languages</h1>
            </div>
            <div className="">
              <li className="list-none p-2">
                {Languages.map((language, index) => (
                  <ul key={index} className="text-secondary text-lg">
                    {language}
                  </ul>
                ))}

              </li>
            </div>
          </div>

          <div className="border-2 border-secondary w-fit min-w-52">
            <div className="border-b-2 border-secondary py-2 pr-24 pl-2">
              <h1 className="text-white text-lg">Tools</h1>
            </div>
            <div className="">
              <li className="list-none p-2">
                {Frameworks.map((framework, index) => (
                  <ul key={index} className="text-secondary text-lg">
                    {framework}
                  </ul>
                ))}

              </li>
            </div>
          </div>

          <div className="border-2 border-secondary w-fit min-w-52">
            <div className="border-b-2 border-secondary py-2 pr-24 pl-2">
              <h1 className="text-white text-lg">Frameworks</h1>
            </div>
            <div className="">
              <li className="list-none p-2">
                {Tools.map((tool, index) => (
                  <ul key={index} className="text-secondary text-lg">
                    {tool}
                  </ul>
                ))}

              </li>
            </div>
          </div>

          <div className="border-2 border-secondary w-fit min-w-52">
            <div className="border-b-2 border-secondary py-2 pr-24 pl-2">
              <h1 className="text-white text-lg">Database(s)</h1>
            </div>
            <div className="">
              <li className="list-none p-2">
                {Database.map((database, index) => (
                  <ul key={index} className="text-secondary text-lg">
                    {database}
                  </ul>
                ))}

              </li>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default Stats