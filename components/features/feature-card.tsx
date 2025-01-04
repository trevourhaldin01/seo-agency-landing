'use client';

import { LucideIcon } from 'lucide-react';
import {motion} from 'framer-motion'
interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
    index: number
}
export function FeatureCard({ title, description, icon: Icon,index, className = '' }: FeatureCardProps){
    return (
        <motion.div 
            className={`p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay:index*0.2 }}
        >
            <Icon className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.div>
    )

}