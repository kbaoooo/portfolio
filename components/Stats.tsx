"use client";

import { cn } from "@/lib/utils";
import CountUp from "react-countup";

type TStats = {
    title: string;
    count: number;
}

const stats: TStats[] = [
    {
        title: "Projects Completed",
        count: 13,
    },
    {
        title: "Technologies Used",
        count: 8,
    },
    {
        title: "Code Commites",
        count: 523,
    },
    {
        title: "Working Hours",
        count: 10000,
    },

]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp 
                                end={stat.count}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p 
                                className={cn(
                                    stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]",
                                    'leading-snug text-white/80'
                                )}
                            >
                                {stat.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
