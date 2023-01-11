import Head from "next/head";
import Template from "../../components/Project/Template";
import * as ToolConstants from "../../src/constants/ToolConstants";

const QuoteGuessing = () => {
    const projectName = 'Quote Guessing Game';
    const projectSummary = 'Simple game where the player guesses the author of a randomly generated quote.';
    const githubLink = 'https://github.com/duckevinwu/quote-game';
    const tools = [
        ToolConstants.NODEJS,
        ToolConstants.REACT,
        ToolConstants.CSS
    ]
    const coverImage = 'https://i.imgur.com/QjXJg2X.png';
    const galleryImages = [
        'https://i.imgur.com/QjXJg2X.png',
        'https://i.imgur.com/eyTrnJW.png',
        'https://i.imgur.com/xdVLPwm.png'
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
                        A player gets a random quote and two authors.
                        Their objective is to guess as many correct quote authors as they can in a row.
                    </p>
                    <br/>
                    <p>
                        Randomly generated quotes and quote authors are pulled from the Quotable API.
                        A list of authors is retrieved and cached serverside to be used as the incorrect option in the game.
                        The server is coded in NodeJS and the client uses ReactJS and CSS.
                    </p>
                </div>
            </Template>
        </>
    )
}

export default QuoteGuessing;