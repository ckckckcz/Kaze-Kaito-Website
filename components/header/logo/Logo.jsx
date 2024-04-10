import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="logo-wrapper">
        <img className="logo-img" src="/images/kaze.png" alt="Kaze Kaito Logo" />
      </div>
    </Link>
  );
}
