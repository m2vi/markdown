import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import 'tailwindcss/tailwind.css';
import '../styles/colors.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp);
