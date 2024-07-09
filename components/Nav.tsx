"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TLink } from "@/types";

const links: TLink[] = [
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

const Nav = () => {
    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link key={index} href={link.path}
                    className={
                        cn(
                            link.path === pathName && "text-accent border-b-2 border-accent",
                            "capitalize font-medium hover:text-accent transition-all"
                        )
                    }
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}

export default Nav;
