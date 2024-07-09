"use client";

import { ReactElement } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa"; 
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

type TObjType = {
    title: string;
    descrip: string;
    icon?: string;
    info?: {
        fieldName: string;
        fieldValue: string;
    }[];
    items?: {
        institution?: string;
        position?: string;
        duration?: string;
        icon?: ReactElement;
        title?: string;
    }[];
}

const about: TObjType = {
    title: "About Me",
    descrip: "I am a full-stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Khanh Bao"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+84) 386 204 932"
        },
        {
            fieldName: "Experience",
            fieldValue: "3 years"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Email",
            fieldValue: "nbaokhanh1243@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Vietnamese"
        },
        {
            fieldName: "Country",
            fieldValue: "Ha Noi"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Vietnamese"
        },
    ]
}

const experience: TObjType = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    descrip: "I have 3 years of experience working as a full-stack developer. I have worked on a variety of projects, including e-commerce websites, blogs, and more. I am comfortable working with both front-end and back-end technologies, and I am always looking to learn new things and improve my skills.",
    items: [
        {
            institution: "Freelance",
            position: "Full-stack Intern",
            duration: "2020 - Present",
        },
        {
            institution: "Freelance",
            position: "Front-end Intern",
            duration: "2020 - Present",
        },
        {
            institution: "Freelance",
            position: "Back-end Intern",
            duration: "2020 - Present",
        },
    ]
}

const education: TObjType = {
    icon: '/assets/resume/badge.svg',
    title: "My education",
    descrip: "I have 3 years of experience working as a full-stack developer. I have worked on a variety of projects, including e-commerce websites, blogs, and more. I am comfortable working with both front-end and back-end technologies, and I am always looking to learn new things and improve my skills.",
    items: [
        {
            institution: "Online Course Platform",
            position: "Full-stack Web Development Course",
            duration: "2023",
        },
        {
            institution: "Youtube Channel Web Design Tutorials",
            position: "Front-end Web Development Course",
            duration: "2020",
        },
        {
            institution: "Codecademy",
            position: "Back-end Web Development Course",
            duration: "2021 - 2022",
        },
        {
            institution: "F8 Academy",
            position: "React.js Course Node.js Course",         
            duration: "2023",
        },
        {
            institution: "Coursera",
            position: "Next.js Course",
            duration: "2024",
        },
    ]
}

const skills: TObjType = {
    title: "My skills",
    descrip: "I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.",
    items: [
        {
            icon: <FaHtml5 />,
            title: "HTML",
        },
        {
            icon: <FaCss3 />,
            title: "CSS",
        },
        {
            icon: <FaJs />,
            title: "JavaScript",
        },
        {
            icon: <FaReact />,
            title: "React",
        },
        {
            icon: <FaNodeJs />,
            title: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            title: "Tailwind CSS",
        },
        {
            icon: <SiNextdotjs />,
            title: "Next.js",
        },
        {
            icon: <FaFigma />,
            title: "Figma",
        },
    ] 
}

const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.descrip}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items?.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.descrip}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items?.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.descrip}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.items?.map((item, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {item.icon}
                                                        </div>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.title}</p>
                                                        </TooltipContent>
                                                    </TooltipTrigger>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0">{about.descrip}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                                    {about.info?.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-lg">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;
