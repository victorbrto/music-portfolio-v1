import React from "react";

const Contact = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center bg-[url('/images/bg.jpg')]">
            <div className="flex items-center justify-center h-screen">
                <div className="font-merriweather flex flex-col space-y-4 text-sm">
                    <h1 className="text-right uppercase text-white text-shadow">Remixes/Production/Soundtracks/Anything audio-related:</h1>
                    <p className="text-justify text-white text-shadow">tito@arpejo.com</p>
                    <h2 className="text-center text-red-600">SoundCloud</h2>
                    <h3>YouTube</h3>
                    <p className="text-justify text-white text-shadow text-xs">©Arpejo, Inc. | 2024</p>
                </div>

            </div>
        </div>

    );

}

export default Contact;