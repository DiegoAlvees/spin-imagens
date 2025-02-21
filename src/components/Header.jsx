import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { text: "Home", target: "/" },
    { text: "Sobre nós", target: "/sobre" },
    { text: "Portfólio", target: "clientes" },
    { text: "Feedback", target: "Feedback" },
  ];

  return (
    <div>
      <nav className="flex justify-between items-center text-[16px] gap-6 fixed top-0 left-0 z-50 w-full h-16 bg-black/50 backdrop-blur-sm px-3">
        <div className="flex gap-3">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.target}
              className="text-green-50 font-semibold transition-all duration-300 hover:text-green-300 hover:scale-105"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href="https://wa.me/5519999055138?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-50 hover:text-green-300"
          >
            <img className="w-8" src="/svg_redes/svg_whatsapp.svg" alt="WhatsApp Logo" />
          </a>
          <a
            href="https://www.instagram.com/spinimagens/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-50 hover:text-green-300"
          >
            <img className="w-8" src="/svg_redes/svg_instagram.svg" alt="Instagram Logo" />
          </a>
        </div>
      </nav>
    </div>
  );
}
