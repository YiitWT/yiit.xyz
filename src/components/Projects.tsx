import { useEffect, useState } from "react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
}

const Projects = () => {
    const githubURL = "https://github.com/yiitwt/";

    const [projects] = useState<Project[]>([
        {
            title: "yiit.xyz",
            description: "This website, build on Vite (react), nothing fancy",
            tags: ["react", "nodejs", "typescript"],
            image: "https://placehold.co/600x400/3b82f6/ffffff?text=Portfolio",
            link: `${githubURL}yiit.xyz`
        },
        {
            title: "DiscordReporter",
            description: "A lightweight Discord-logger minecraft plugin to keep your server safe and moderated.",
            tags: ["java", "spigot", "plugin"],
            image: "https://placehold.co/600x400/10b981/ffffff?text=DiscordReporter",
            link: `${githubURL}DiscordReporter`
        },
        {
            title: "igVideoYoinker",
            description: "An Instagram bot that automatically reposts reels from direct messages with automated video processing and rate limit handling.",
            tags: ["python", "automated", "bot"],
            image: "https://placehold.co/600x400/f59e0b/ffffff?text=Video+Downloader",
            link: `${githubURL}igVideoYoinker`
        },
        {
            title: "Toaster.js",
            description: "A lightweight, vanilla JavaScript toast notification library for displaying user-friendly messages in web applications.",
            tags: ["JavaScript", "responsive", "basic"],
            image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Toaster.JS",
            link: `${githubURL}Toaster.js`
        },
        {
            title: "WebhookPanel ",
            description: "A basic webhook generator panel for discord. Nothing too crazy.",
            tags: ["discord", "nodejs", "nodejs", "realtime"],
            image: "https://placehold.co/600x400/ef4444/ffffff?text=WebhookPanel",
            link: `${githubURL}WebhookPanel`
        },
        {
            title: "barber-booking",
            description: "[NOT-COMPLATED] Full-stack barber booking platform built with Next.js, featuring a customer booking page and a management dashboard.",
            tags: ["nextjs", "prisma", "postgresql", "markdown"],
            image: "https://placehold.co/600x400/06b6d4/ffffff?text=Barber+Booking",
            link: `${githubURL}barber-booking`
        }
    ]);

    const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className="bg-background w-full py-12" id="projects">
            {/* Header Section */}
            <div className="text-4xl text-white flex items-center md:ml-24 xl:ml-96 ml-4">
                <h1 className="text-white">
                    <span className="text-primary">#</span>projects
                </h1>
                <div className="h-[1px] bg-primary w-1/2 ml-4 md:ml-8"></div>
                <a
                    href={githubURL}
                    target="_blank"
                    className="ml-4 md:ml-32 text-sm md:text-lg hover:text-primary transition-colors"
                >
                    View more →
                </a>
            </div>

            {/* Projects Grid */}
            <div className={`
                ${isMobile
                    ? 'flex flex-col items-center px-4'
                    : 'grid grid-cols-3 gap-6 max-w-7xl mx-auto px-4'
                } 
                mt-10
            `}>
                {currentProjects.map((project, index) => (
                    <div
                        key={`${project.title}-${index}`}
                        className={`
                            border-secondary border-2 pb-4 flex flex-col transition-all duration-300
                            ${isMobile
                                ? 'w-full max-w-sm h-auto mb-6 min-h-[300px]'
                                : 'w-full max-w-sm mx-auto min-h-[350px] m-5'
                            }
                        `}
                    >
                        {/* Project Image */}
                        <div className="h-32 md:h-40 bg-secondary flex items-center justify-center overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

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
                            <p className="text-secondary flex-1 text-sm md:text-base line-clamp-4 mb-4">
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