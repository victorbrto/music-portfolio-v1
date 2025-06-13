import React, { useState } from "react";

const VideoEmbed = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            {!showVideo ? (
                <button
                    onClick={handleClick}
                    className="text-4xl font-bold text-white hover:text-red-900 text-shadow"
                >
                    My name is Tito Apiari
                </button>
            ) : (
                <div className="w-full h-auto max-w-lg aspect-[3/2]">
                    <iframe
                        className="w-full h-full rounded-md"
                        src="https://www.youtube.com/embed/vV-lujhGYcg?si=3NNo2cqv0EM6d8M_"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            )}
        </div>
    );

};

export default VideoEmbed;