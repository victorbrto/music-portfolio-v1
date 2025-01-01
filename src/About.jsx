import React, { useEffect } from 'react';
import { motion } from "motion/react";

const About = () => {
    useEffect(() => {
        document.title = "About | Arpejo";
    }, []);

    return (
        <div className="min-h-screen w-full bg-cover bg-center">
            <motion.div
                className="flex items-center justify-center h-screen"
                initial={{ opacity: 0, filter: "blur(9px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
            >
                <div className="font-merriweather flex flex-col space-y-4 text-sm max-w-md">
                    <h1 className="text-right text-white text-shadow text-xs">Info</h1>
                    <p className="text-justify text-white text-shadow">Tito Apiari was born 27 November 2003 in Brazil. Tito is an electronic musician based in Salvador, Brazil.</p>
                    <p className="text-justify text-white text-shadow">Synthesized and recorded entirely on his computer, Apiari's work can mainly be described as emotive, idiosyncratic and heartfelt. For the moment, it can only be found on his <a href="https://www.soundcloud.com/arpejo" target="_blank" className="text-red-600 hover:text-red-900 font-extrabold underline underline-offset-1">SoundCloud</a> and <a href="https://www.youtube.com/@tito_apiari" target="_blank" className="text-red-600 hover:text-red-900 font-extrabold underline underline-offset-1">YouTube</a> accounts.</p>
                    <p className="text-justify text-white text-shadow">Music has always been a significant part of Apiari's life. He began making music in the autumn of 2020, during a harsh period of isolation and emotional distress, as a means of self-expression. He kept making music in secret until the spring of 2023, when he were finally confident enough to share it with his peers.</p>
                    <p className="text-justify text-white text-shadow">Apiari plans to release his first EP sometime in 2025.</p>
                    <p className="text-left text-white text-shadow text-xs">©Arpejo, Inc. | 2024</p>

                </div>
            </motion.div>
        </div>
    );
}

export default About;