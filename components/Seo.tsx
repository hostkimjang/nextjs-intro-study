import Head from "next/head";

export default function Seo({ title }: { title: string }) {
  const message = `${title} | Next Movies`;
  /*https://github.com/vercel/next.js/discussions/38256
    Warning: A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes 
    as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering
    at title
    at head
    at Head (webpack-internal:///./node_modules/next/dist/pages/_document.js:258:1)
    at html
    at Html (webpack-internal:///./node_modules/next/dist/pages/_document.js:676:132)
    at Document (webpack-internal:///./node_modules/next/dist/pages/_document.js:692:1) */
  return (
    <Head>
      <title>{message}</title>
    </Head>
  );
}
