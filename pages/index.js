import Seo from "@/components/Seo";

export default function Home({ results }) {
  // const [movies, setMovies] = useState();
  // //fetch data
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`/api/movies`);
  //     const { results } = await response.json();

  //     setMovies(results);
  //   })();
  // }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {results.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//- 이 코드는 서버에서 실행되기 때문에 클라이언트한테 보여질 일이 없음
//- 따라서 API Key를 여기서 바로 써도 괜찮으므로 rewrites 안써도 됨
///api/movies 이 주소는 프론트에서만 작동함, 프론트엔드에는 이미 브라우저에 url이 있다.
// 따라서 http//localhost:3000/api/movies 다 적어야함
//서버에서 데이터도 모두 렌더링한 후 html 초기화 하여 pre-render
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await res.json();
  return { props: { results } }; //반환 값을 props으로 페이지에게 줄 수 있음
}

//이제 로딩 안해도 됨, 근데 그 말은 API가 들어오기 전 까지는 화면에 아무것도 안보인다.
