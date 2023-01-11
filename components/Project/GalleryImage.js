import Image from "next/image";

const GalleryImage = (props) => {
    return (
        <div className="relative h-64 sm:h-80 md:h-96 mb-16 rounded-lg shadow-xl overflow-hidden transition duration-300 md:hover:scale-105 border border-gray-300">
            <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
            <Image
                src={props.src}
                alt={props.alt}
                fill="true" 
                style={{
                    objectFit: 'cover'
                }} />
        </div>
    )
}

export default GalleryImage;