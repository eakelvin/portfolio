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
import data from '@/utils/data';
import Image from 'next/image';

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
        <div className="py-4 px-10">
            {data.map((work) => (
                <div key={work.id} className="mb-10">
                    <Carousel setApi={setApi} className="w-full max-w-full mx-auto">
                        <CarouselContent>
                            {work.logo.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Card className='rounded-none'>
                                        <CardContent className="flex aspect-video items-center justify-center p-6">
                                            <Image
                                                src={image}
                                                alt={`Image ${index + 1}`}
                                                className='w-full h-full object-contain'
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
                        <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
                    </Carousel>

                    <Progress value={progress} className="mt-4 w-24 ml-auto invisible" />

                    <div className="text-white mx-auto space-y-4 mt-8">
                        <h2 className='text-xl font-bold'>
                            {work.title}
                        </h2>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className='text-sm'>
                            {work.description}
                        </p>
                        <div className='mt-1'>
                            <Link
                                href={work.website}
                                className='text-cyan-200 hover:underline'
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
