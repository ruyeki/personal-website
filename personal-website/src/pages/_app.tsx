// pages/_app.tsx
import "@/app/globals.css"
import Layout from "@/app/layout";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) { //Component = page user is visiting, pageProps = any data that the page needs
  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  );
}
