import Head from "next/head";
import Template from "../../components/Project/Template";
import * as ToolConstants from "../../src/constants/ToolConstants";

const Wordle = () => {
    const projectName = 'Enhanced Wordle Clone';
    const projectSummary = 'A Wordle clone with a timer and the ability to challenge friends to words you found interesting or difficult.';
    const githubLink = 'https://github.com/duckevinwu/wordle';
    const tools = [
        ToolConstants.REACT,
        ToolConstants.NODEJS,
        ToolConstants.SQL,
        ToolConstants.TAILWIND
    ]
    const coverImage = 'https://i.imgur.com/9f7ts6I.png';
    const galleryImages = [
        'https://i.imgur.com/zKntq0u.png',
        'https://i.imgur.com/1UcmY3w.png',
        'https://i.imgur.com/9f7ts6I.png',
        'https://i.imgur.com/nT3thA5.png',
        'https://i.imgur.com/uy0PBKD.png',
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
                        This project was a clone of Wordle with a couple added features.
                        The first additional feature was a timer that tracks how long it takes to solve the puzzle.
                        Once the puzzle is finished, the player will see statistics for the word, including what percentage of people solved it and how long on average they took.
                        The other additional feature was a sharing mechanism.
                        Once a player finishes a game, they have the ability to share the same game with the same word through a generated link.
                    </p>
                    <br/>
                    <p>
                        Data related to word statistics and challenges is stored in a local SQLite database.
                        A Node.js + Express server handles requests from the client and manages data access.
                        Valid 5 letter words and guesses (retrieved from the offical Wordle game) are loaded and cached in memory upon server start.
                        Unique ID generation for sharing links is done through a simplified version of Snowflake IDs.
                    </p>
                    <br/>
                    <p>
                        The UI layer is made with ReactJS + TailwindCSS and is mobile responsive.
                        User input is captured through keyboard input as well as the buttons on the screen.
                    </p>
                </div>
            </Template>
        </>
    )
}

export default Wordle;