"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

type TService = {
    num: string;
    title: string;
    desc: string;
    href: string;
}

const services: TService[] = [
    {
        num: '01',
        title: 'Web Development',
        desc: 'I develop websites using modern technologies and frameworks like React, Next.js, and Tailwind CSS.',
        href: "/",
    },
    {
        num: '02',
        title: 'UI/UX Design',
        desc: 'I design user interfaces and user experiences that are intuitive and visually appealing.',
        href: "/",
    },
    {
        num: '03',
        title: 'Web Security',
        desc: 'I secure websites and web applications from cyber attacks and data breaches.',
        href: "/",
    },
    {
        num: '04',
        title: 'Database Management',
        desc: 'I manage databases and ensure that data is stored and retrieved efficiently.',
        href: "/",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ 
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            delay: 2.4,
                            ease: 'easeIn'
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"><BsArrowDownRight className="text-primary text-3xl"/></Link>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            <p className="text-white/60">{service.desc}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;
