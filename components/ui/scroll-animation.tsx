'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
    children: React.ReactNode
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
}

export const ScrollAnimation = ({ 
    children, 
    direction = 'up', 
    delay = 0.2 
}: ScrollAnimationProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    const variants = {
        hidden: { 
            opacity: 0,
            ...(direction === 'up' && { y: 75 }),
            ...(direction === 'down' && { y: -75 }),
            ...(direction === 'left' && { x: 75 }),
            ...(direction === 'right' && { x: -75 })
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: 'easeOut'
            }
        }
    }

    return (
        <div ref={ref}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    )
}
