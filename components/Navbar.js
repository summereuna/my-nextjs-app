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
