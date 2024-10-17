import '../src/styles/globals.css';

import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import { store } from '../src/stores/index';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pluto health care</title>
        <meta
          name='viewport'
          content='initial-scale=1, minimum-scale=1, maximum-scale=2.0, user-scalable=yes'
        />
      </Head>
      <NextTopLoader showSpinner={false} />
      <Provider store={store}>
              <main>
                <Component {...pageProps} suppressHydrationWarning={true} />
              </main>
      </Provider>
    </>
  );
}

export default MyApp;
