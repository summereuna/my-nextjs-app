import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

//흔하게 쓰이는 기능들을 이런 패키지들로 구현할 수 있음
