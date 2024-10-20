import { useEffect } from 'react';
import emailjs from 'emailjs-com';

function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
    } else {
      console.error('NEXT_PUBLIC_EMAILJS_USER_ID is not defined');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
