import "../styles/globals.sass";
import type { AppProps } from "next/app";
import NextNProgress from 'nextjs-progressbar';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  
  return (
    <NextIntlClientProvider
      locale={router.locale || 'uz'} // Default locale fallback
      messages={pageProps.messages || {}} // Default messages fallback
    >
      <NextNProgress />
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
};

export default MyApp;
