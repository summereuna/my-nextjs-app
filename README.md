# NextJS 연습

## 📚 라이브러리 vs 프레임워크

- 라이브러리는 내가 라이브러리를 호출
- 프레임워크는 프레임워크가 내 코드를 호출
  프레임워크가 정한 규칙에 따라 코드를 작성해야 한다.

## 📚 CSR(Client Side Rendering) vs SSR(Server Side Rendering)

### ReactJS 앱

CRA(create-react-app)로 만든 react.js app의 경우 때때로 로딩 시 유저에게 흰 화면을 보여준다.

클라이언트 사이드 렌더링의 특징은 브라우저가 유저가 보는 UI를 만드는 모든 것을 한다는 것이다. 초기에 HTML로 렌더링 될 때, react.js로 렌더링 된 모든 것들이 HTML 소스 코드 안에 포함되지 않은 채로 렌더링 된다.

- 브라우저가 HTML을 가져올 때 `id=root`인 빈 div를 가져온다.
- 그러고 나서 브라우저는 모든 JavaScript를 요청(request)하여 브라우저가 JavaScript와 reactJS를 실행(run)시킨다.
- 그러고 나서 UI가 만들어지기 때문에 어플리케이션이 유저에게 보인다.
- 따라서 초기에 로딩될 때 유저가 흰 화면을 보게 될 수도 있다.

### NextJS 앱

이에 반해 NextJS는 HTML 소스 코드 안에 이미 코드가 포함된 채로 유저에게 제공된다.
유저가 페이지를 요청하면, 이미 초기화된 코드 안에 코드가 포함되어 있는 것이다. 즉, pre-rendering 된 채로 유저에게 보여진다.

- next.js는 react.js를 백엔드에서 동작시켜 페이지를 미리 만든다.
- 백엔드에서 react.js가 컴포넌트를 렌더하고, 렌더가 끝나면 HTML이 된다.
- next.js는 그 HTML을 페이지의 소스 코드에 넣는다.
- 그럼 유저는 js나 react.js가 로딩되지 않더라고 컨텐츠를 볼 수 있게 된다. 페이지를 열면 미리 렌더링된 HTML을 바로 볼 수 있다.
- 그리고 react.js가 클라이언트로 전송될 때, react 앱이 된다. react.js를 프론트엔드 안에서 실행하는 것을 `hydration`이라고 한다. 그래서 useState()같은걸 쓸 수 있다.

## 📝 네비게이션

지정된 📍`/pages` 폴더에 `페이지`를 만들 수 있다.

- `/` 페이지: 📍`/pages/index.js`
- `/about` 페이지: 📍`/pages/about.js`

```jsx
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
```

### ⭐️ 1. Link

Next.js에서는 `"next/link"`에서 가져온 Link 컴포넌트로 페이지를 네비게이트 할 수 있다.

- `<Link href="/">Home</Link>`

Link는 nextjs의 클라이언트 사이드 네비게이션을 제공한다.

### ⭐️ 2. useRouter()

Next.js에서는 `"next/router"`에서 useRouter를 가져와 라우터를 바로 사용할 수 있다.

- `const router = useRouter()`

## 📝 [NextJS에 css 추가하기](https://nextjs.org/docs/app/building-your-application/styling)

Next.js는 다음 항목들을 포함하여 애플리케이션 스타일을 지정하는 다양한 방법을 지원한다.

1. **Global CSS**
   기존 CSS 경험이 있는 사람들에게는 사용이 간편하고 익숙하지만, 애플리케이션이 성장함에 따라 CSS 번들이 더 커지고 스타일 관리가 어려워질 수 있다.

2. **CSS-in-JS**
   CSS를 JavaScript 구성 요소에 직접 삽입하여 동적이고 범위가 지정된 스타일을 사용할 수 있다.

- 경고: 런타임 JavaScript가 필요한 CSS-in-JS 라이브러리는 현재 서버 컴포넌트에서 지원되지 않는다. 서버 컴포넌트 및 스트리밍과 같은 최신 React 기능과 함께 CSS-in-JS를 사용하려면 라이브러리 작성자가 최신 버전의 React를 지원해야 한다.
- `styled-jsx`, `styled-components` 등의 라이브러리는 `app` 디렉터리의 클라이언트 컴포넌트에서 지원된다.
- 서버 컴포넌트 스타일을 지정하려면 `CSS Modules`이나 PostCSS 또는 `Tailwind CSS`와 같은 CSS 파일을 출력하는 기타 솔루션을 사용하는 것이 좋다.

3. **CSS Modules**
   클래스네임 충돌을 방지하고 유지 관리성을 향상시키기 위해 로컬 범위의 CSS 클래스를 만든다.

- Next.js에는 `.module.css` 확장자를 사용하여 CSS 모듈을 기본적으로 지원한다.
- CSS Modules은 고유한 클래스 이름을 자동으로 생성하여 CSS 범위(scope)를 지역적으로 지정한다. 이를 통해 충돌에 대한 걱정 없이 다른 파일에서 동일한 클래스 이름을 사용할 수 있다. 이러한 동작으로 인해 CSS Modules은 컴포넌트-수준 CSS를 포함하는 이상적인 방법이다.

4. **Tailwind CSS**
   유틸리티 클래스를 구성하여 신속한 사용자 정의 디자인을 허용하는 유틸리티 우선 CSS 프레임워크로 Next.js와 매우 잘 작동한다.

5. **Sass**
   변수, 중첩 규칙, 믹스인과 같은 기능으로 CSS를 확장하는 인기 있는 CSS 전처리기이다.

- Next.js에는 `.scss` 및 `.sass` 확장자를 모두 사용하여 Sass를 기본적으로 지원한다. CSS Modules 및 `.module.scssor` 이나 `.module.sass` 확장자를 통해 컴포넌트-레벨의 Sass를 사용할 수 있다.

<br>

### ⭐️ 1. css module

1. 오브젝트의 프로퍼티 형식으로 가져와 사용한다.
   `{styles.nav}`

2. html 코드로 표현될 때 클래스네임이 무작위로 생성되기 때문에 클래스이름으로 인한 충돌이 없다.

3. 하지만 클래스이름 자체를 구현하는게 꽤 복잡하다. 특히 조건자일 때.

```js
className={`${styles.link} ${
          router.pathname === "/about" ? styles.active : ""
        }`}
```

<br>

### ⭐️ 2. Styled JSX

- styled jsx는 NextJS의 고유 방법이라고 할 수 있다.
- 파일을 따로 임포트 하지 않아도 되서 편하다.
- 어떤 클래스네임을 사용하든 클래스네임이 무작위로 생성되므로 충돌을 피할 수 있다.
- styled jsx를 사용하면 스타일의 범위(scope)가 오직 그 컴포넌트 내부로 한정되어 적용된다.

#### 사용법

1. 일반 html 태그인 style 태그를 연다.
2. jsx 프롭을 넣는다.
3. style 태그 내용으로 중괄호 안에 백틱` {``} `을 넣는다.
4. 백틱 사이에 css를 작성하면 된다.

```jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link className={router.pathname === "/" ? "active" : ""} href="/">
        Home
      </Link>
      <Link
        className={router.pathname === "/about" ? "active" : ""}
        href="/about"
      >
        About
      </Link>
      <style jsx global>{`
        nav {
          background-color: tomato;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .active {
          color: white;
        }
      `}</style>
    </nav>
  );
}
```

- styled jsx는 단순한 자바스크립트 문자열이기 때문에 props으로 받은 color를 스타일에 적용할 수도 있다.

```jsx
//...
return (
  <style jsx>{`
    .active {
      color: ${props.color};
    }
  `}</style>
);
```

#### global styles 추가하기

📍 `/pages/_app.js`는 청사진과 같다.
Next.js는 `App` 컴포넌트를 사용하여 페이지를 초기화한다.
앱 컴포넌트를 재정의하고 페이지 초기화를 제어할 수 있다. 또한,

- 페이지 변경 사이에 공유 레이아웃 만들기
- 페이지에 추가 데이터 삽입
- global(전역) CSS 추가

1. 사용방법

```jsx
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

- `Component` prop은 활성(active) `페이지`이므로, 경로 사이를 탐색할 때마다, `Component`가 새 `페이지`로 변경된다.
  따라서 `Component`에 보내는 모든 prop은 `페이지`에서 수신된다.

- `pageProps`는 데이터 가져오기 메서드 중 하나에 의해 페이지에 미리 로드된 초기 props가 포함된 객체(오브젝트)이거나 빈 객체이다.

2. 커스텀 앱에 전역 CSS 추가하기

```jsx
import NavBar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
```

- `커스텀 App` 이외의 파일에서는 css파일을 import할 수 없다. css를 임포트하고 싶다면 반드시 module 형태(`.module.css`)여야 한다. 이는 글로벌 css간의 충돌을 피하기 위해서이다.
- 따라서 `globals.css` 파일을 `_app.js` 에 import 해서 사용하면된다.

## 패턴: Layout 패턴

1. `Layout.js`라는 react component를 만든다.

```js
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
```

- Layout 컴포넌트는 react.js가 제공하는 `prop.children`을 가지는데, `children`은 하나의 컴포넌트를 다른 컴포넌트 안에 넣을 때 사용할 수 있다.

2. `_app.js`의 jsx를 `Layout` 컴포넌트로 감싼다.

```js
import "../styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

- Layout 컴포넌트로 감싸진 부분인 `<Component {...pageProps} />`가 `children`이 된다.

너무 큰 `_app.js` 파일을 원하지 않으므로 레이아웃 패턴을 많이 사용한다.
