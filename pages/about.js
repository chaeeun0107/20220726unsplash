import Head from "next/head";

export default function About(){
    return(
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>About Page</h1>
        </div>
    )
}