import Head from "next/head";
import Template from "../../components/Project/Template";
import * as ToolConstants from "../../src/constants/ToolConstants";

const QuoteGuessing = () => {
    const projectName = 'Nonprofit Affiliate Fundraising';
    const projectSummary = 'A platform for nonprofits to leverage affiliate peer-to-peer fundraising.';
    const githubLink = 'https://github.com/duckevinwu/nonprofit-donate';
    const tools = [
        ToolConstants.NODEJS,
        ToolConstants.REACT,
        ToolConstants.TAILWIND,
        ToolConstants.CSS,
        ToolConstants.AIRTABLE
    ]
    const coverImage = 'https://i.imgur.com/Vx865ze.png';
    const galleryImages = [
        'https://i.imgur.com/5ctnUWq.png',
        'https://i.imgur.com/9jP5t4L.png',
        'https://i.imgur.com/MZnre8b.png',
        'https://i.imgur.com/w16xSPU.png',
        'https://i.imgur.com/Vx865ze.png',
        'https://i.imgur.com/1NT1wiM.png',
        'https://i.imgur.com/NohW4Mz.png',
        'https://i.imgur.com/9ZH9ozh.png',
        'https://i.imgur.com/b2wZzQk.png',
        'https://i.imgur.com/TpKDbF4.png'
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
                        This project was created to apply the idea of affiliate marketing to nonprofit peer-to-peer fundraising.
                        People find a nonprofit to fundraise for on the platform and receive rewards based off how much they raise.
                        The site also provides detailed information on best ways to fundraise as well as a custom built help center.
                    </p>
                    <br />
                    <p>
                        The list of nonprofits on the platform and their information is stored in Airtable.
                        A NodeJS + Express server interacts with the Airtable API to access data.
                        Donations are managed through GiveButter, a fundraising platform for nonprofits, and their API.
                    </p>
                    <br />
                    <p>
                        The web client is built using ReactJS, TailwindCSS, and custom CSS.
                        All pages are built using mobile first design and are fully responsive.
                    </p>
                </div>
            </Template>
        </>
    )
}

export default QuoteGuessing;