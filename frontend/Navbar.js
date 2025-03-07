import Link from "next/link";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/dashboard">Dashboard</Link></li>
      <li><Link href="/portfolio">Portfolio</Link></li>
    </ul>
  </nav>
);

export default Navbar;
