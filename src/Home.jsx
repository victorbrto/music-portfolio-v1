import React, { useEffect } from 'react';
import VideoEmbed from './Components/VideoEmbed';
import { motion } from 'motion/react';

const Home = () => {
    useEffect(() => {
        document.title = "Arpejo";
    }, []);
    return (
        <motion.div
            className="min-h-screen w-full bg-cover bg-center"
            initial={{ opacity: 0, filter: "blur(9px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
        >
            <VideoEmbed />
        </motion.div>
    );
}

export default Home;