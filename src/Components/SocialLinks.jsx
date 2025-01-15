import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faYoutube, faBandcamp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
    return (
        <div className="flex space-x-4 mt-6">
            <a href="https://www.soundcloud.com/arpejo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500"><FontAwesomeIcon icon={faSoundcloud} /></a>
            <a href="https://www.youtube.com/@tito_apiari" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://arpejo.bandcamp.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400"><FontAwesomeIcon icon={faBandcamp} /></a>
            <a href="https://www.instagram.com/victorbrit0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    );
}

export default SocialLinks