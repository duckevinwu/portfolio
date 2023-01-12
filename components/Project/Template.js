import Head from "next/head";
import Image from "next/image";

// components
import * as ToolPills from "./ToolPills";
import GalleryImage from "./GalleryImage";
import Link from "../Link/Link";
import * as ToolConstants from "../../src/constants/ToolConstants";

const Template = (props) => {
    const map = {
        [ToolConstants.AIRTABLE]: <ToolPills.AirtableToolPill />,
        [ToolConstants.AWS]: <ToolPills.AWSToolPill />,
        [ToolConstants.CSS]: <ToolPills.CSSToolPill />,
        [ToolConstants.NODEJS]: <ToolPills.NodeToolPill />,
        [ToolConstants.REACT]: <ToolPills.ReactToolPill />,
        [ToolConstants.SQL]: <ToolPills.SQLToolPill />,
        [ToolConstants.TAILWIND]: <ToolPills.TailwindToolPill />,
        [ToolConstants.NEXTJS]: <ToolPills.NextJSToolPill />,
        [ToolConstants.MYSQL]: <ToolPills.MySQLToolPill />
    }

    const getToolComponent = (tool) => {
        return map[tool];
    }

    return (
        <>
            <main>
                <section className="mt-12">
                    <div className="container mx-auto px-3 lg:px-5">
                        <Link className="text-xl" href="/">
                            <i className="bi-arrow-left"></i>back
                        </Link>
                        <div className="mt-12 flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <div className="relative h-64 sm:h-80 md:h-96 rounded-lg shadow-xl overflow-hidden border border-gray-300">
                                    <Image 
                                        src={props.coverImage}
                                        alt={`${props.projectName} cover`}
                                        fill="true" 
                                        style={{
                                            objectFit: 'cover'
                                        }} />
                                </div>
                            </div>
                            <div className="mt-12 md:w-1/2 md:pl-12 md:mt-0">
                                <h1 className="text-5xl">{props.projectName}</h1>
                                <h2 className="text-xl mt-8 mb-2">{props.projectSummary}</h2>
                                <div className="mt-8">
                                    <h3 className="uppercase text-sm tracking-widest">Tools</h3>
                                    <div className="flex flex-wrap mb-8">
                                        {props.tools.map((tool, i) => {
                                            return <span key={i}>{getToolComponent(tool)}</span>
                                        })}
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="uppercase text-sm tracking-widest mb-4">Links</h3>
                                    <a href={props.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-black text-white rounded-md cursor-pointer border border-black hover:bg-white hover:text-black transition duration-300">
                                        <i className="bi-github text-lg mr-2"></i>Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-24">
                    <div className="container mx-auto px-3 lg:px-5">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <h2 className="text-4xl pt-16 md:sticky md:top-0">technical breakdown</h2>
                            </div>
                            <div className="mt-8 md:w-1/2 md:pl-12 md:mt-0 md:pt-16">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-12 mb-24">
                    <div className="container mx-auto px-3 lg:px-5">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <h2 className="text-4xl pt-16 md:sticky md:top-0">gallery</h2>
                            </div>
                            <div className="mt-8 md:w-1/2 md:pl-12 md:mt-0 md:pt-16">
                                {props.galleryImages.map((imageUrl, i) => {
                                    return <GalleryImage key={i} src={imageUrl} alt={`${props.projectName} gallery ${i}`}/>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Template;