import Head from 'next/head';

// components
import GridCard from '../components/GridCard/GridCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Wu</title>
        <meta name="description" content="I like to create fun things and use technology to make the world a better place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-3 lg:px-5">
        <section className="mt-24">
          <div className="">
            <h1 className="text-6xl mb-6">{"hi, i'm"} <font className="font-semibold">kevin</font></h1>
            <h2 className="text-xl">i like to create fun things and use technology to make the <font className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">world</font> a better place</h2>
          </div>
        </section>
        <section className="mt-16 mb-36">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            <GridCard 
              imageUrl="https://i.imgur.com/9f7ts6I.png"
              projectName="Enhanced Wordle Clone"
              href="/project/wordle" />
            <GridCard 
              imageUrl="https://i.imgur.com/BrC7xTA.png"
              projectName="QR Scan for Repeat Customers"
              href="/project/qrscan" />
            <GridCard 
              imageUrl="https://i.imgur.com/QjXJg2X.png"
              projectName="Quote Guessing Game"
              href="/project/quoteguessing" />
            <GridCard 
              imageUrl="https://i.imgur.com/Vx865ze.png"
              projectName="Nonprofit Affiliate Fundraising"
              href="/project/nonprofitfundraising" />
            <GridCard
              imageUrl="https://i.imgur.com/F0oqo0V.png"
              projectName="Open Innovation Platform v1"
              href="/project/openinnovationone" />
          </div>
        </section>
      </main>
    </>
  )
}
