import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function MovieDetail({ params }) {
  //서버에서 url로 받은거
  const [title, id] = params || [];

  //브라우저에서 url로 받은거
  //컴포넌트 내부에서 router를 사용하면 프론트에서만 실행됨
  const router = useRouter();
  const { overview, poster, release } = router.query;
  return (
    <div>
      <Seo title={title} />
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} />
      </div>
      <div>
        <h4>{title}</h4>
        <h4>Release Date: {release}</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
}

//SEO 좋게 하기 위해 url로 정보 받아오기
//ctx.params.params
export async function getServerSideProps({ params: { params } }) {
  return { props: { params } };
}
