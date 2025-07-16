"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export const Project = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const progress = (current * 100) / count;

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {data.map((work) => (
                    <Card key={work.id} {...work} />
                ))}
            </div> */}

            <div className="py-4 px-10">
                <Carousel setApi={setApi} className="w-full max-w-full mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card className='rounded-none'>
                                    <CardContent className="flex aspect-video items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
                    <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
                </Carousel>
                <Progress value={progress} className="mt-4 w-24 ml-auto" />

                <div className="text-white mx-auto space-y-4 mt-8">
                    <h2 className='text-xl font-bold'>
                        Building Once UI, a customizable Design System
                    </h2>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className='text-sm'>
                        Development of a flexible and highly customizable design system using Next.js for front-end and Figma for design collaboration.
                    </p>
                    <div className='mt-1'>
                        <Link href="#" className='text-cyan-500 hover:underline'>
                            View Project
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
