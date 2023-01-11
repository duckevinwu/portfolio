import Head from "next/head";
import Image from "next/image";

// components
import { ReactToolPill, NodeToolPill, AWSToolPill } from "../../components/Project/ToolPills";
import GalleryImage from "../../components/Project/GalleryImage";
import Link from "../../components/Link/Link";

const Template = () => {
    return (
        <>
            <Head>
                <title>Project Template</title>
                <meta name="description" content="Project template for portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section className="mt-12">
                    <div className="container mx-auto px-3 lg:px-5">
                        <Link className="text-xl" href="/">
                            <i className="bi-arrow-left"> </i>back
                        </Link>
                        <div className="mt-12 flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <div className="relative h-64 sm:h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
                                    <Image 
                                        src="/placeholder.png"
                                        alt="placeholder"
                                        fill="true" 
                                        style={{
                                            objectFit: 'cover'
                                        }} />
                                </div>
                            </div>
                            <div className="mt-12 md:w-1/2 md:pl-12 md:mt-0">
                                <h1 className="text-5xl">Template Project Name</h1>
                                <h2 className="text-xl mt-6">Template project descrption</h2>
                                <div className="flex flex-wrap mb-6">
                                    <ReactToolPill />
                                    <NodeToolPill />
                                    <AWSToolPill />
                                </div>
                                <a className="p-3 bg-black text-white rounded-md cursor-pointer border border-black hover:bg-white hover:text-black transition duration-300">
                                    <i className="bi-github text-lg mr-2"></i>Github
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-12">
                    <div className="container mx-auto px-3 lg:px-5">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <h2 className="text-4xl pt-16 md:sticky md:top-0">technical breakdown</h2>
                            </div>
                            <div className="mt-8 md:w-1/2 md:pl-12 md:mt-0 md:pt-16">
                                <p className="text-xl">Description in paragraphs about what happened in this project</p>
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
                                <GalleryImage src="/placeholder.png" alt="placeholder" />
                                <GalleryImage src="/placeholder.png" alt="placeholder" />
                                <GalleryImage src="/placeholder.png" alt="placeholder" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Template;