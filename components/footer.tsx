"use client"
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {

    const handleMail = () => {
        window.open("mailto:lalitv94r@gmail.com");
    }

    return (
        <footer className="w-full pb-10 mb-[100px]" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">Ready to take <span className="text-purple">your</span> digital presence to the next level?</h1>
            </div>
            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let's discss how I can help you achieve your goals.</p>
            <div className="w-full flex justify-center items-center">
                <MagicButton
                    title={"Let's get in touch"}
                    icon={<FaLocationArrow />}
                    iconPositon="right"
                    onPress={() => handleMail()}
                />
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright &#169; 2024 NexusCode</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {
                        socialMedia?.map((profile)=>(
                            <div key={profile?.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backgrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                <img src={profile?.img} alt={profile?.id?.toString()} width={20} height={20}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;