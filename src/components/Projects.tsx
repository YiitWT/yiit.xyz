
const Projects = () => {
    const projects = [
        {
            title: "Project One",
            description: "This is a description of project one.",
            tags: ["React", "JavaScript", "CSS"],
            image: "https://placehold.co/600x400",
            link: "/project-one"
        },
                {
            title: "Project One",
            description: "This is a description of project one.",
            tags: ["React", "JavaScript", "CSS"],
            image: "https://placehold.co/600x400",
            link: "/project-one"
        },
                {
            title: "Project One",
            description: "This is a description of project one.",
            tags: ["React", "JavaScript", "CSS"],
            image: "https://placehold.co/600x400",
            link: "/project-one"
        },
                {
            title: "Project One",
            description: "This is a description of project one.",
            tags: ["React", "JavaScript", "CSS"],
            image: "https://placehold.co/600x400",
            link: "/project-one"
        },
                {
            title: "Project One",
            description: "This is a description of project one.",
            tags: ["React", "JavaScript", "CSS"],
            image: "https://placehold.co/600x400",
            link: "/project-one"
        }
    ];
    return (
        <div className="bg-background w-full py-12">
            <div className="text-4xl text-white flex items-center  ml-96">
                <h1 className="text-white"><span className="text-primary">#</span>projects</h1>
                <div className="h-[1px] bg-primary w-1/2 ml-8"></div>
                <a href="/projects" className="ml-32 text-lg">View all →</a>
            </div>
            <div className="grid grid-cols-3 gaps-2 w-fit items-center justify-center m-auto mt-10">
                {projects.map((project, index) => (
                <div key={index} className="border-secondary border-2 w-96 m-5 pb-4">
                    <img src={project.image} alt="Project İmage" />
                    <p className="border-2 border-secondary">
                    {project.tags.map((tags)=>(
                        <span key={tags} className="text-primary text-sm mr-2">#{tags}</span>
                    ))}
                    </p>
                    <h1 className="text-2xl text-white font-bold p-2">{project.title}</h1>
                    <p className="p-2 mb-5">{project.description}</p>
                    <a href={project.link} className="border-primary border-2 m-2 text-lg p-2 ">View Project</a>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects