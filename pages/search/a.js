import Head from "next/head";
import LayoutWithTopics from "../../src/shared/layout/LayoutWithTopics";
import LayoutWithSearchLnb from "../../src/shared/layout/LayoutWithSearchLnb";

export default function A(){
    return(
        <div>
            <Head>
                <title>A</title>
                <meta name="description" content="a" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>A</h1>
        </div>
    )
}

A.getLayout = LayoutWithSearchLnb;