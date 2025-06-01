import { useEffect, useState } from "react";

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
    const projectsPerPage = 3;

    // Function to extract first image URL from markdown content
    const extractImageFromMarkdown = (markdown: string): string => {
        // Look for markdown image syntax: ![alt](url)
        const markdownImageRegex = /!\[.*?\]\((.*?)\)/;
        const match = markdown.match(markdownImageRegex);
        
        if (match && match[1]) {
            let imageUrl = match[1];
            
            // If it's a relative path, convert to GitHub raw URL
            if (!imageUrl.startsWith('http')) {
                // Remove leading ./ or /
                imageUrl = imageUrl.replace(/^\.?\//, '');
                return imageUrl; // Return relative path, we'll handle it later
            }
            
            return imageUrl;
        }
        
        // Look for HTML img tags as fallback
        const htmlImageRegex = /<img[^>]+src\s*=\s*["']([^"']+)["'][^>]*>/i;
        const htmlMatch = markdown.match(htmlImageRegex);
        
        if (htmlMatch && htmlMatch[1]) {
            return htmlMatch[1];
        }
        
        return '';
    };

    // Function to fetch README content with caching and timeout
    const fetchReadmeImage = async (repoName: string, owner: string): Promise<string> => {
        try {
            // Try only the most common README names first for speed
            const readmeFiles = ['README.md', 'readme.md'];
            
            for (const fileName of readmeFiles) {
                try {
                    // Add timeout to prevent hanging requests
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
                    
                    const response = await fetch(
                        `https://api.github.com/repos/${owner}/${repoName}/contents/${fileName}`,
                        { signal: controller.signal }
                    );
                    
                    clearTimeout(timeoutId);
                    
                    if (response.ok) {
                        const data = await response.json();
                        
                        if (data.content) {
                            // Decode base64 content
                            const decodedContent = atob(data.content.replace(/\n/g, ''));
                            const imageUrl = extractImageFromMarkdown(decodedContent);
                            
                            if (imageUrl) {
                                // Convert relative paths to GitHub raw URLs
                                if (!imageUrl.startsWith('http')) {
                                    return `https://raw.githubusercontent.com/${owner}/${repoName}/main/${imageUrl}`;
                                }
                                return imageUrl;
                            }
                        }
                        break; // Found README, even if no image
                    }
                } catch (error) {
                    // Continue to next README filename or handle timeout
                    if (error.name === 'AbortError') {
                        console.warn(`Timeout fetching README for ${repoName}`);
                        break; // Don't try other files if we're timing out
                    }
                    continue;
                }
            }
        } catch (error) {
            console.error(`Error fetching README for ${repoName}:`, error);
        }
        
        return ''; // Return empty string if no image found
    };

    useEffect(() => {
        const fetchProjectsWithImages = async () => {
            try {
                const response = await fetch("https://api.github.com/users/yiitwt/repos");
                const data = await response.json();
                
                const filteredRepos = data.filter((repo: any) => repo.name !== "YiitWT");
                
                // First, quickly set projects with placeholders for immediate display
                const initialProjects: Project[] = filteredRepos.reverse().map((repo: any) => ({
                    title: repo.name,
                    description: repo.description || "No description provided.",
                    tags: repo.topics || [],
                    image: "https://placehold.co/600x400",
                    link: repo.html_url,
                }));
                
                setProjects(initialProjects);
                
                // Then fetch images in batches for better performance
                const batchSize = 3; // Process 3 repos at a time
                const batches = [];
                
                for (let i = 0; i < filteredRepos.length; i += batchSize) {
                    batches.push(filteredRepos.slice(i, i + batchSize));
                }
                
                // Process batches sequentially to avoid rate limiting
                for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
                    const batch = batches[batchIndex];
                    
                    const batchPromises = batch.map(async (repo: any, repoIndex: number) => {
                        const actualIndex = batchIndex * batchSize + repoIndex;
                        const readmeImage = await fetchReadmeImage(repo.name, repo.owner.login);
                        return { index: actualIndex, image: readmeImage };
                    });
                    
                    const batchResults = await Promise.all(batchPromises);
                    
                    // Update projects with new images as they come in
                    setProjects(prevProjects => {
                        const updatedProjects = [...prevProjects];
                        batchResults.forEach(({ index, image }) => {
                            if (image && updatedProjects[index]) {
                                updatedProjects[index] = {
                                    ...updatedProjects[index],
                                    image: image
                                };
                            }
                        });
                        return updatedProjects;
                    });
                    
                    // Small delay between batches to be nice to GitHub API
                    if (batchIndex < batches.length - 1) {
                        await new Promise(resolve => setTimeout(resolve, 100));
                    }
                }
                
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjectsWithImages();
    }, []);

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
                        <img 
                            src={project.image} 
                            alt={`${project.title} preview`}
                            className="w-full h-48 object-cover transition-opacity duration-300"
                            loading="lazy"
                            onLoad={(e) => {
                                // Fade in effect when image loads
                                (e.target as HTMLImageElement).style.opacity = '1';
                            }}
                            onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                (e.target as HTMLImageElement).src = "https://placehold.co/600x400";
                            }}
                            style={{ opacity: project.image === "https://placehold.co/600x400" ? '0.7' : '0' }}
                        />
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
                                className="border-primary border-2 m-2 text-lg p-2 inline-block self-start text-white hover:bg-primary hover:text-black transition-colors duration-300"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination Controls */}
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
        </div>
    );
};

export default Projects;