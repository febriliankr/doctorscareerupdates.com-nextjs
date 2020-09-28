import Link from 'next/link'

function Navbar() {
  return (
    <div className="navbar">
      <span>
      <img src="dlogo.png" alt="DCU"/>
      <Link href="/">🗡DCU2020</Link></span>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/examplehookform">Quiz</Link></li>
        <li><Link href="/examplehookform">About</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
