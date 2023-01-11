import Head from "next/head";
import Template from "../../components/Project/Template";
import * as ToolConstants from "../../src/constants/ToolConstants";

const QRScan = () => {
    const projectName = 'QR Scan for Repeat Customers';
    const projectSummary = 'An application that helps small/local businesses get repeat customers through QR codes + special deals.';
    const githubLink = 'https://github.com/duckevinwu/qr-scan';
    const tools = [
        ToolConstants.NEXTJS,
        ToolConstants.REACT,
        ToolConstants.TAILWIND
    ]
    const coverImage = 'https://i.imgur.com/BrC7xTA.png';
    const galleryImages = [
        'https://i.imgur.com/BrC7xTA.png',
        'https://i.imgur.com/nuc8S5A.png',
        'https://i.imgur.com/Ne69OaN.png',
        'https://i.imgur.com/aQG06G1.png'
    ]

    return (
        <>
            <Head>
                <title>{projectName}</title>
                <meta name="description" content={projectSummary} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Template
                projectName={projectName}
                projectSummary={projectSummary}
                githubLink={githubLink}
                tools={tools}
                coverImage={coverImage}
                galleryImages={galleryImages}>
                <div className="text-lg">
                    <p>
                        The problem this project was solving was that brick and mortar small businesses don't have a good way to get repeat customers.
                        This application provides MVP functionality to subscribe people to loyalty programs via QR scanning and special deals distributed through text.
                    </p>
                    <br />
                    <p className="mb-3">In short, the process works as follows:</p>
                    <ol>
                        <li className="mb-3">1. Someone visits a brick and mortar shop and scans a QR code</li>
                        <li className="mb-3">2. They are taken to a webpage where they can sign up to receive special deals through text</li>
                        <li>3. Business owners now have a channel to reach their previous customers</li>
                    </ol>
                    <br/>
                    <p>
                        Data for this MVP is stored in npoint.io, a one-way JSON store.
                        QR codes are generated that are mapped to a URL that will dynamically populate a sign up page with business info.
                        Text sign ups and special deals are managed through Klaviyo.
                        The UI layer is made with ReactJS + TailwindCSS and uses the NextJS framework.
                        Graphics were made using Figma.
                    </p>
                </div>
            </Template>
        </>
    )
}

export default QRScan;