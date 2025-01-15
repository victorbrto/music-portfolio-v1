import React, { useEffect } from "react";
import { motion } from "motion/react";
import SocialLinks from "./Components/SocialLinks";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Arpejo";
    }, []);

    return (
        <div className="min-h-screen w-full bg-cover bg-center">
            <div className="flex items-center justify-center min-h-screen">
                <motion.div
                    className="font-merriweather flex flex-col space-y-1 text-white text-shadow text-left"
                    initial={{ opacity: 0, filter: "blur(9px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-xs italic uppercase">Remixes / Production / Soundtracks / Anything audio-related:</h1>
                    <a
                        href="mailto:tito@arpejo.com"
                        className="text-2xl underline underline-offset-1">tito@arpejo.com
                    </a>
                    <SocialLinks />
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;