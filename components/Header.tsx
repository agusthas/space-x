import Link from "next/link";

const Header: React.FC = () => (
  <header className="py-10 flex items-center justify-center">
    <Link href="/">
      <a className="font-semibold text-center">Home</a>
    </Link>
  </header>
);

export default Header;
