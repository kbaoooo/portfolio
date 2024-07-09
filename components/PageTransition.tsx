"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransition = ({ children } : { children : React.ReactNode } ) => {
    const pathname = usePathname();
    
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                    initial={{opacity: 1}} 
                    animate={{
                        opacity: 0,
                        transition: {duration: 0.4, delay: 1, ease: "easeInOut"}
                    }}
                    className="h-screen w-screen fixed bg-primary pointer-events-none top-0"
                />
            </div>
            {children}
        </AnimatePresence>
    );
}

export default PageTransition;
