import { useState } from 'react';
import Image from 'next/image';

const GridCard = (props) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="relative h-80 rounded-lg overflow-hidden shadow-xl"
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}>
            <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
            <Image 
                src={props.imageUrl}
                alt={props.projectName}
                fill="true" 
                style={{
                    objectFit: 'cover'
                }} />
            <div className={`absolute w-full h-full bg-gradient-to-b from-transparent to-neutral-600 transition duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex relative w-full h-full">
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white text-black rounded-md hover:bg-black hover:text-white transition duration-300">
                        <i className="bi-arrow-right mr-2"></i> View Project
                    </button>
                    <p className="mt-auto p-3 text-white text-xl">{props.projectName}</p>
                </div>
            </div>
        </div>
    )
}

export default GridCard;