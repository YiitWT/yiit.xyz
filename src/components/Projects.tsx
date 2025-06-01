import { useEffect, useState, useRef } from "react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const hasFetched = useRef(false);

    // Check if screen is mobile
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const projectsPerPage = isMobile ? 1 : 3;

    useEffect(() => {
        // Prevent multiple API calls
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("https://api.github.com/users/yiitwt/repos");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                const filteredData = data.filter((repo: any) => repo.name !== "YiitWT");
                const formattedProjects: Project[] = filteredData.reverse().map((repo: any) => ({
                    title: repo.name,
                    description: repo.description || "No description provided.",
                    tags: repo.topics || [],
                    image: "https://placehold.co/600x400",
                    link: repo.html_url,
                }));
                
                setProjects(formattedProjects);
            } catch (error) {
                console.error("GitHub API error:", error);
                // Set empty array on error to prevent infinite loading
                setProjects([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []); // Empty dependency array

    // Reset to first page when switching between mobile/desktop
    useEffect(() => {
        setCurrentPage(0);
    }, [isMobile]);

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = currentPage * projectsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setIsAnimating(false);
            }, 150);
        }
    };

    const prevPage = () => {
        if (currentPage > 0 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setIsAnimating(false);
            }, 150);
        }
    };

    if (isLoading) {
        return (
            <div className="bg-background w-full py-12" id="projects">
                <div className="text-4xl text-white flex items-center md:ml-96 ml-4">
                    <h1 className="text-white">
                        <span className="text-primary">#</span>projects
                    </h1>
             <div className="h-[1px] bg-primary md:w-1/2 w-32 ml-8"></div>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <div className="text-white text-xl">Loading projects...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background w-full py-12" id="projects">
            {/* Header Section */}
            <div className="text-4xl text-white flex items-center md:ml-96 ml-4">
                <h1 className="text-white">
                    <span className="text-primary">#</span>projects
                </h1>
                <div className="h-[1px] bg-primary w-4 md:w-1/2 ml-4 md:ml-8"></div>
                <a 
                    href="https://github.com/yiitwt" 
                    target="_blank"
                    className="ml-4 md:ml-32 text-sm md:text-lg hover:text-primary transition-colors"
                >
                    View all →
                </a>
            </div>

            {/* Projects Grid */}
            <div className={`
                ${isMobile 
                    ? 'flex flex-col items-center px-4' 
                    : 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-4'
                } 
                mt-10
            `}>
                {currentProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`
                            border-secondary border-2 pb-4 flex flex-col transition-all duration-300
                            ${isMobile 
                                ? 'w-full max-w-sm h-auto mb-6 min-h-[300px]' 
                                : 'w-full max-w-sm mx-auto min-h-[350px] m-5'
                            }
                        `}
                    >
                        
                        <div className="flex flex-col flex-1 p-4">
                            {/* Tags */}
                            <div className="border-2 border-secondary p-2 mb-3 w-full">
                                <p className="truncate">
                                    {project.tags.length > 0 ? 
                                    project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="text-primary text-xs md:text-sm mr-2">
                                            #{tag}
                                        </span>
                                    ))
                                : <span className="text-secondary text-xs md:text-sm">No tags available</span>}
                                </p>
                            </div>

                            {/* Title */}
                            <h1 className="text-xl md:text-2xl text-white font-bold mb-2 line-clamp-2">
                                {project.title}
                            </h1>

                            {/* Description */}
                            <p className="text-secondary flex-1 text-sm md:text-base line-clamp-4 mb-4 ">
                                {project.description}
                            </p>

                            {/* View Project Link */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-primary border-2 text-sm md:text-lg p-2 inline-block self-start text-white hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center mt-8 gap-4 px-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 0 || isAnimating}
                        className={`
                            border-2 border-primary p-2 md:p-3 text-sm md:text-base text-white 
                            transition-all duration-300 transform hover:scale-110
                            ${currentPage === 0 || isAnimating
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30'
                            }
                        `}
                    >
                        <span className="hidden md:inline">← Previous</span>
                        <span className="md:hidden">←</span>
                    </button>
                    
                    <span className="text-white text-base md:text-lg transition-all duration-300 mx-2">
                        {currentPage + 1} / {totalPages}
                    </span>
                    
                    <button
                        onClick={nextPage}
                        disabled={currentPage >= totalPages - 1 || isAnimating}
                        className={`
                            border-2 border-primary p-2 md:p-3 text-sm md:text-base text-white 
                            transition-all duration-300 transform hover:scale-110
                            ${currentPage >= totalPages - 1 || isAnimating
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30'
                            }
                        `}
                    >
                        <span className="hidden md:inline">Next →</span>
                        <span className="md:hidden">→</span>
                    </button>
                </div>
            )}

            {/* Mobile Project Counter */}
            {isMobile && projects.length > 0 && (
                <div className="text-center mt-4 text-secondary text-sm">
                    Showing {startIndex + 1} of {projects.length} projects
                </div>
            )}
        </div>
    );
};

export default Projects;