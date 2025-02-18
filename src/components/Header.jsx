import { Link } from "react-router-dom"

export default function Header() {
  const links = [
    { text: "Home", target: "/" },
    { text: "Sobre nós", target: "/sobre" },
    { text: "Portfólio", target: "clientes" },
    { text: "Contato", target: "contato" },
  ];

  return (
    <nav className="flex justify-center items-center gap-6 fixed top-0 left-0 z-50 w-full h-14 bg-black/50 backdrop-blur-sm">
  {links.map((link, index) => (
    <Link
      key={index}
      to={link.target}
      className="text-green-50 text-lg font-semibold transition-all duration-300 hover:text-green-300 hover:scale-105"
    >
      {link.text}
    </Link>
  ))}
</nav>
  );
}
