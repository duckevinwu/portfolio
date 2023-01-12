import Head from "next/head";
import Template from "../../components/Project/Template";
import * as ToolConstants from "../../src/constants/ToolConstants";

const OpenInnovatonVersionOne = () => {
    const projectName = 'Open Innovation Platform v1';
    const projectSummary = 'A platform where anyone can solve challenges revolving around tech for good - Take 1.';
    const githubLink = 'https://github.com/duckevinwu/smart-cities';
    const tools = [
        ToolConstants.NODEJS,
        ToolConstants.REACT,
        ToolConstants.CSS,
        ToolConstants.AWS,
        ToolConstants.MYSQL
    ]
    const coverImage = 'https://i.imgur.com/F0oqo0V.png';
    const galleryImages = [
        'https://i.imgur.com/F0oqo0V.png',
        'https://i.imgur.com/xCIFAVe.png',
        'https://i.imgur.com/YQcZEin.png',
        'https://i.imgur.com/GjT14SB.png',
        'https://i.imgur.com/YBOMH3k.png',
        'https://i.imgur.com/uVlElBk.png',
        'https://i.imgur.com/hmXiJfP.png',
        'https://i.imgur.com/Mo6Eyyb.png',
        'https://i.imgur.com/pmA0NWO.png'
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
                        This project provides a platform for cities and other organizations to post open ended challenges they are facing, 
                        allowing anyone to propose solutions to them in exchange for a potential award.
                        There is functionality for two kinds of users: admins and solvers.
                        Admins are the ones who post the challenges and review solutions.
                        Solvers are the people who tackle the challenges posted and submit solutions.
                    </p>
                    <br />
                    <p>
                        All data involved in this project (user data, challenge data, etc) is stored in a AWS RDS MySQL instance.
                        A Node.js + Express server handles client requests and database access.
                        Full user account and authentication is implemented, including email confirmation, forgot password functionality, and admin only routes.
                    </p>
                    <br />
                    <p>
                        The web client is built using ReactJS and custom CSS.
                        For several forms, the open source WYSIWYG editor Quill was integrated to allow rich text content.
                    </p>
                </div>
            </Template>
        </>
    )
}

export default OpenInnovatonVersionOne;