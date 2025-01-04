'use client';

import { useState } from "react";
import {motion} from "framer-motion"
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { navigationLinks } from "./navigation-data";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* logo */}
                    <Link href='#hero'>
                        <motion.div 
                            initial={{opacity: 0, x:-20}}
                            animate={{opacity: 1, x:0}}
                            className="flex items-center gap-2"
                        >
                            <Zap  className="w=8 h-8 text-purple-500" />
                            <span className="font-bold text-xl">SEO Agency</span>
                        </motion.div>
                    </Link>

                    {/* desktop navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navigationLinks.map((link, index)=>(
                            <motion.div 
                                key={link.href}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1}}
                            >
                                <NavLink href={link.href}>{link.label}</NavLink>
                            </motion.div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.div
                        initial={{opacity:0, x: 20}}
                        animate={{opacity:1, x: 0}} 
                        transition={{duration:0.5}}
                        className="hidden md:block"
                    >
                        <Button>Join Waitlist</Button>
                    </motion.div>

                    {/* Mobile Menu */}
                    <button
                        className="md:hidden p-2"
                        onClick={()=>setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X  className="w-6 h-6"/>
                        ):(
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* mobile navigation */}
            <MobileNav isOpen={isOpen} onClose={()=>setIsOpen(false)} />
        </header>
    )
}