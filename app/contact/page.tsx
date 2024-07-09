"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectValue
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { motion } from 'framer-motion';

type IInfo = {
    icon: JSX.Element,
    title: string,
    content: string,
}[];

const info: IInfo = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        content: '(+84) 386 204 932'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        content: 'kbao122003@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        content: 'c8, Kim Lien, DD, HN'
    }
]

const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, easeIn: 'easeIn'}}}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto esse laboriosam velit dignissimos eius, perspiciatis, explicabo alias fugiat obcaecati consequuntur itaque aut hic dolorum fuga quia tenetur, quidem quam eaque?</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input 
                                    type="firstname"
                                    placeholder="Firstname"
                                />
                                 <Input 
                                    type="lastname"
                                    placeholder="Lastname"
                                />
                                 <Input 
                                    type="email"
                                    placeholder="Email address"
                                />
                                 <Input 
                                    type="phone"
                                    placeholder="Phone number"
                                />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="wd">Web Development</SelectItem>
                                        <SelectItem value="uiuxd">UI/UX Design</SelectItem>
                                        <SelectItem value="ws">Web Security</SelectItem>
                                        <SelectItem value="dm">Database Management</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea 
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />

                            <Button size="md" className="mx-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[20px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.content}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
