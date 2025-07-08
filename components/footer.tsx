"use client"
import { socials } from '@/utils/links'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex">
                <span className="text-sm text-gray-300">
                    © 2025 <a href="" className="hover:underline">EA Codes</a>.
                    All Rights Reserved.
                </span>
                <div className="flex sm:justify-center sm:mt-0">
                    {socials.map((link, index) => (
                        <Link key={index} href={link.href} className='text-gray-300 hover:text-gray-900 dark:hover:text-white ms-5'>
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </footer >
    )
}

export default Footer