import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Settings from '../Settings/Config'

interface Project {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
}

function GithubProjects()  {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `https://api.github.com/users/${Settings.Github_Username}/repos`
                );

                setProjects(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();
    }, []);

    const openGithubProject = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <div className="grid gap-4 sm:grid-cols-2  lg:grid-cols-3 mt-8 w-[80%] mx-auto">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div className='flex flex-col justify-between transition duration-500 transform hover:scale-110 w-full'>
                        <div
                            key={project.id}
                            className="flex flex-col gradient-border justify-between"
                            onClick={() => openGithubProject(project.html_url)}
                        >
                            <h3 className="text-white text-xl font-bold">{project.name}</h3>
                            <p className="text-base text-gray-500">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img
                                        src="/images/GithubStar.svg"
                                        alt="Yıldız"
                                        className="w-4 h-4 mr-2"
                                    />
                                    <span>{project.stargazers_count}</span>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src="/images/GithubFork.svg"
                                        alt="Çatal"
                                        className="w-4 h-4 mr-2"
                                    />
                                    <span>{project.forks_count}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>😴 No projects found.</p>
                )}
            </div>
        </div>

    );
};

export default GithubProjects;