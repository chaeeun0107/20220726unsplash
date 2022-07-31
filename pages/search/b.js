import Head from "next/head";
import LayoutWithSearchLnb from "../../src/shared/layout/LayoutWithSearchLnb";

export default function B(){
    return(
        <div>
            <Head>
                <title>B</title>
                <meta name="description" content="b" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>B</h1>
        </div>
    )
}

B.getLayout = LayoutWithSearchLnb;