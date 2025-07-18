import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Globe, Phone, Mail } from 'lucide-react'

const PressMedia = () => {
    return (
        <div id="Press" className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-6'>
                    <h2 className='text-4xl font-bold text-gray-900 mb-3'>
                        Press & Media Center
                    </h2>
                    <p className='text-xl text-gray-600 mx-auto'>
                        For all media inquiries, interviews, and press releases related to Junior Pastry Indian Cup 2025
                    </p>
                </div>

                {/* Main Content Card */}
                <div className='bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-[#70e1b2]'>
                    <div className='grid md:grid-cols-2 gap-8 p-8 items-center'>

                        {/* Left Column - Branding & Description */}
                        <div className='space-y-6'>
                            <div className='text-center md:text-left'>
                                {/* Logo */}
                                <div className='w-48 h-24 bg-white rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4 shadow-sm'>
                                    <img
                                        src="/sponsors/ashwinipublicity.png"
                                        alt="Ashwini Publicity"
                                        className='max-w-full max-h-full object-contain p-2'
                                    />
                                </div>

                                <div className='text-lg font-semibold text-[#70e1b2] mb-2'>
                                    &ldquo;Infinite Ideas... Behold.&rdquo;
                                </div>

                                <div className='text-sm text-gray-600 font-medium mb-4'>
                                    Official PR Partner for Junior Pastry Indian Cup 2025
                                </div>
                            </div>

                            <div className='text-gray-700'>
                                <p className='mb-4'>
                                    All media coverage, press releases, and journalist inquiries for Junior Pastry Indian Cup 2025
                                    are handled exclusively by our official PR partner, Ashwini Publicity.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Contact Information */}
                        <div className='space-y-6'>
                            <div className='bg-gray-50 rounded-lg p-6'>
                                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                                    Media Contact
                                </h3>

                                <div className='space-y-4'>
                                    <div>
                                        <div className='font-semibold text-gray-900 mb-2'>
                                            Shraddha Jadhav
                                        </div>
                                        <div className='text-gray-600 text-sm mb-3'>
                                            PR Manager
                                        </div>
                                    </div>

                                    <div className='space-y-3'>
                                        <div className='flex items-center'>
                                            <Phone className='text-[#70e1b2] mr-3' size={16} />
                                            <a href="tel:+919869100555" className='text-gray-700 hover:text-[#70e1b2] transition-colors'>
                                                (+91) 9869 100 555
                                            </a>
                                        </div>

                                        <div className='flex items-center'>
                                            <Mail className='text-[#70e1b2] mr-3' size={16} />
                                            <a href="mailto:shraddha.jadhav@ashwinipublicity.com" className='text-gray-700 hover:text-[#70e1b2] transition-colors text-sm'>
                                                shraddha.jadhav@ashwinipublicity.com
                                            </a>
                                        </div>

                                        <div className='flex items-center'>
                                            <Globe className='text-[#70e1b2] mr-3' size={16} />
                                            <a href="https://www.ashwinipublicity.com" target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-[#70e1b2] transition-colors'>
                                                www.ashwinipublicity.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Notice */}
                <div className='text-center mt-8 text-gray-600'>
                    <p className='text-sm'>
                        <strong>Note:</strong> Please direct all media inquiries to Ashwini Publicity.
                        Event organizers will not respond to direct press requests.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PressMedia 