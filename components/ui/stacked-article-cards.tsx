'use client'

import React from 'react'
import { MouseEventHandler, useState } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }>(
    ({ className, variant, size, ...props }, ref) => (
        <button ref={ref} className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            variant === "outline" ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground" :
                variant === "ghost" ? "hover:bg-accent hover:text-accent-foreground" :
                    variant === "link" ? "text-primary underline-offset-4 hover:underline" :
                        variant === "secondary" ? "bg-white/10 text-white hover:bg-white/20" :
                            "bg-primary text-primary-foreground hover:bg-primary/90",
            size === "sm" ? "h-9 px-3" : size === "lg" ? "h-11 px-8" : size === "icon" ? "h-10 w-10" : "h-10 px-4 py-2",
            className
        )} {...props} />
    )
);
Button.displayName = "Button";


interface ArticleItem {
    url: string
    title: string
    subTitle: string
    img: string
}

const DefaultArticleItems: ArticleItem[] = [
    {
        url: 'https://github.com/DEVASANJAY001',
        title: 'GitHub',
        subTitle: 'GitHub — Explore my open source projects and contributions.',
        img: 'https://images.unsplash.com/photo-1618401471353-b98aadebc25b?w=200&h=200&fit=crop&q=80',
    },
    {
        url: 'https://www.linkedin.com/in/devasanjay-natarajan/',
        title: 'LinkedIn',
        subTitle: 'LinkedIn — Let\'s connect and grow our professional network.',
        img: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&h=200&fit=crop&q=80',
    },
    {
        url: 'https://leetcode.com/u/devasanjay/',
        title: 'LeetCode',
        subTitle: 'LeetCode — Solving complex algorithms and sharing progress.',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop&q=80',
    },
    {
        url: 'https://www.hackerrank.com/profile/devasanjaynatar1',
        title: 'HackerRank',
        subTitle: 'HackerRank — Competitive programming and skill verification.',
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop&q=80',
    },
]

/** Stacked top offset when collapsed (cards peek behind each other) */
const COLLAPSED_OFFSETS = [
    'top-6',
    'top-[calc(1.5rem_+_0.75rem)]',
    'top-[calc(1.5rem_+_1.5rem)]',
    'top-[calc(1.5rem_+_2.25rem)]',
]

/** Spread top offset when expanded */
const EXPANDED_OFFSETS = [
    'top-6',
    'top-[calc(1.5rem_+_112px_+_1rem)]',
    'top-[calc(1.5rem_+_224px_+_2rem)]',
    'top-[calc(1.5rem_+_336px_+_3rem)]',
]

interface StackedArticleCardsProps {
    items?: ArticleItem[]
    className?: string
}

export default function StackedArticleCards({
    items = DefaultArticleItems,
    className,
}: StackedArticleCardsProps) {
    const [isActive, setIsActive] = useState(false)

    const handleExpand = () => {
        setIsActive(true)
    }

    const handleCollapse: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        setIsActive(false)
    }

    return (
        <div
            className={cn('relative min-h-[550px] w-full max-w-xl mx-auto', className)}
            onClick={handleExpand}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        'absolute inset-x-0 flex h-28 cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-white/10 dark:border-white/5 dark:bg-white/3 dark:hover:bg-white/[0.07]',
                        isActive ? EXPANDED_OFFSETS[index] : COLLAPSED_OFFSETS[index],
                        !isActive && index > 0 && "scale-[0.98] blur-[1px]",
                        !isActive && index > 1 && "scale-[0.96] blur-[2px]",
                        !isActive && index > 2 && "scale-[0.94] blur-[3px]"
                    )}
                >
                    <a
                        href={item.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={cn(
                            'flex w-full items-center gap-4 no-underline',
                            isActive ? 'pointer-events-auto' : 'pointer-events-none'
                        )}
                    >
                        <div className='size-16 shrink-0 overflow-hidden rounded-xl ring-2 ring-white/10'>
                            <img
                                src={item.img}
                                alt={item.title}
                                className='h-full w-full object-cover transition-transform duration-500 hover:scale-110'
                            />
                        </div>
                        <div className='min-w-0 flex-1 text-left'>
                            <p className='text-white mb-1 truncate text-lg font-bold uppercase tracking-tight'>
                                {item.title}
                            </p>
                            <p className='text-white/40 line-clamp-2 text-sm leading-relaxed font-light'>
                                {item.subTitle}
                            </p>
                        </div>
                    </a>
                </div>
            ))}

            {/* Show less toggle */}
            <div
                className={cn(
                    'absolute top-[calc(1.5rem_+_448px_+_4rem)] left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out',
                    isActive
                        ? 'pointer-events-auto visible opacity-100'
                        : 'pointer-events-none invisible opacity-0'
                )}
                onClick={handleCollapse}
            >
                <Button variant={'secondary'} size='sm' className="rounded-full px-8">
                    Show less
                </Button>
            </div>

            {!isActive && (
                <div className="absolute inset-x-0 bottom-0 text-center text-white/20 text-xs uppercase tracking-widest animate-pulse pointer-events-none">
                    Click to expand connections
                </div>
            )}
        </div>
    )
}
