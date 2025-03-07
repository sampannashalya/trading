import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Trading App</h1>
      <Link href="/login"><button>Login</button></Link>
      <Link href="/register"><button>Register</button></Link>
    </div>
  );
}
