# NextJS 연습

## 📝 네비게이션

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
