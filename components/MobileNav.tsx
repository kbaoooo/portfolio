"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { TLink } from "@/types";
import { cn } from "@/lib/utils";


const links : TLink[] = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathName = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center"><CiMenuFries className="text-[32px] text-accent"/></SheetTrigger>
            <SheetContent className="felx flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Khanh Bao<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link key={index} href={link.path}
                            className={
                                cn(
                                    link.path === pathName && "text-accent border-b-2 border-accent",
                                    "capitalize text-xl hover:text-accent transition-all"
                                )
                            }
                        >
                            {link.name}
                        </Link>
                    
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
