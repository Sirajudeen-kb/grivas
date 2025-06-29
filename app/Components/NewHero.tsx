import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function NewHero() {
    return (
        <div className="container mx-auto px-4 py-6 lg:py-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#A3E635]" />
                            <span>Smart Control</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#A3E635]" />
                            <span>Customization</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#A3E635]" />
                            <span>Voice Activation</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Ultimate Home Intelligent{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#A3E635]">
                                Automation Solution
                            </span>

                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Experience Effortless Living with Cutting-Edge Technology, Seamlessly Integrating
                            Convenience, Efficiency, and Security into Every Aspect of Your Home Life from
                            Grivas.
                        </p>
                    </div>

                    {/* CTA Button and Stats */}
                    <div className="flex sm:flex-row items-start sm:items-center gap-8">
                        <Link href="/gallery">
                            <button className="group bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#86CC28] hover:to-[#2563EB] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Explore Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <div className="space-y-">
                            <div className="text-3xl font-bold text-gray-900">500+</div>
                            <div className="text-sm text-gray-600">Compatible Devices</div>
                        </div>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="w-full">
                    <img
                        src="/images/heroo.png"
                        alt="Home Automation Illustration"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewHero;
