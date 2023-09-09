# NextJS 연습

## Link

### Link

- `<Link href="/">Home</Link>`
  Next.js에서는 `"next/link"`에서 가져온 Link 컴포넌트로 페이지를 네비게이트 할 수 있다.

- Link는 nextjs의 클라이언트 사이드 네비게이션을 제공한다.

### useRouter()

- `const router = useRouter()`
  Next.js에서는 `"next/router"`에서 useRouter를 가져와 라우터를 바로 사용할 수 있다.

## css 추가하기

### css module

1. 오브젝트의 프로퍼티 형식으로 가져와 사용한다.
   `{styles.nav}`

2. html 코드로 표현될 때 클래스네임이 무작위로 생성되기 때문에 클래스이름으로 인한 충돌이 없다.

3. 하지만 클래스이름 자체를 구현하는게 꽤 복잡하다. 특히 조건자일 때.

```js
className={`${styles.link} ${
          router.pathname === "/about" ? styles.active : ""
        }`}
```
