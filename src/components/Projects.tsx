import { useEffect, useState, useRef, useCallback } from "react";

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
    const [error, setError] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);
    const mountedRef = useRef(true);
    const projectsPerPage = 3;

    const fetchProjects = useCallback(async () => {
        // Cancel any existing request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Create new abort controller
        abortControllerRef.current = new AbortController();
        
        try {
            setIsLoading(true);
            setError(null);
            
            const response = await fetch("https://api.github.com/users/yiitwt/repos", {
                signal: abortControllerRef.current.signal
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Only update state if component is still mounted
            if (!mountedRef.current) return;
            
            const filteredData = data.filter((repo: any) => repo.name !== "YiitWT");
            const formattedProjects: Project[] = filteredData.reverse().map((repo: any) => ({
                title: repo.name,
                description: repo.description || "No description provided.",
                tags: repo.topics || [],
                image: "https://placehold.co/600x400",
                link: repo.html_url,
            }));
            
            setProjects(formattedProjects);
        } catch (error: any) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
                return;
            }
            console.error("GitHub API error:", error);
            if (mountedRef.current) {
                setError(error.message);
                setProjects([]);
            }
        } finally {
            if (mountedRef.current) {
                setIsLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        fetchProjects();

        // Cleanup function
        return () => {
            mountedRef.current = false;
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [fetchProjects]);

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
            <div className="bg-background w-full py-12">
                <div className="text-4xl text-white flex items-center ml-96">
                    <h1 className="text-white">
                        <span className="text-primary">#</span>projects
                    </h1>
                    <div className="h-[1px] bg-primary w-1/2 ml-8"></div>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <div className="text-white text-xl">Loading projects...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-background w-full py-12">
                <div className="text-4xl text-white flex items-center ml-96">
                    <h1 className="text-white">
                        <span className="text-primary">#</span>projects
                    </h1>
                    <div className="h-[1px] bg-primary w-1/2 ml-8"></div>
                </div>
                <div className="flex justify-center items-center mt-20">
                    <div className="text-red-500 text-xl">Error loading projects: {error}</div>
                    <button 
                        onClick={fetchProjects}
                        className="ml-4 border-2 border-primary p-2 text-white hover:bg-primary hover:text-black"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background w-full py-12">
            <div className="text-4xl text-white flex items-center ml-96">
                <h1 className="text-white">
                    <span className="text-primary">#</span>projects
                </h1>
                <div className="h-[1px] bg-primary w-1/2 ml-8"></div>
                <a href="https://github.com/yiitwt" className="ml-32 text-lg">
                    View all →
                </a>
            </div>
            <div className="grid grid-cols-3 gap-6 w-fit items-stretch justify-center m-auto mt-10">
                {currentProjects.map((project, index) => (
                    <div
                        key={index}
                        className="border-secondary border-2 w-96 m-5 pb-4 flex flex-col h-[500px]"
                    >
                        <img src={project.image} alt="Project" />
                        <div className="flex flex-col flex-1">
                            <p className="border-2 border-secondary p-2">
                                {project.tags.length > 0 ? 
                                
                                project.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="text-primary text-sm mr-2">
                                        #{tag}
                                    </span>
                                ))
                                    
                                : "No tags available"}
                            </p>
                            <h1 className="text-2xl text-white font-bold p-2">{project.title}</h1>
                            <p className="p-2 text-secondary flex-1 line-clamp-3">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                className="border-primary border-2 m-2 text-lg p-2 inline-block self-start text-white"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center mt-8 gap-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 0 || isAnimating}
                        className={`border-2 border-primary p-3 text-white transition-all duration-300 transform hover:scale-110 ${
                            currentPage === 0 || isAnimating
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30'
                        }`}
                    >
                        ← Previous
                    </button>
                    
                    <span className="text-white text-lg transition-all duration-300">
                        {currentPage + 1} / {totalPages}
                    </span>
                    
                    <button
                        onClick={nextPage}
                        disabled={currentPage >= totalPages - 1 || isAnimating}
                        className={`border-2 border-primary p-3 text-white transition-all duration-300 transform hover:scale-110 ${
                            currentPage >= totalPages - 1 || isAnimating
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30'
                        }`}
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;