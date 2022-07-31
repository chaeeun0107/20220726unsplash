import Header from "../src/shared/header";
import {wrapper} from "../src/redux/store";

import 'antd/dist/antd.css';
import '../styles/globals.css'
import Layout from "../src/shared/layout/Layout";


function MyApp({Component, pageProps}) {

    const AppLayout = Component.getLayout || Layout;
    return (
        <AppLayout>
            <Component {...pageProps}/>
        </AppLayout>
    );
}

export default wrapper.withRedux(MyApp)
