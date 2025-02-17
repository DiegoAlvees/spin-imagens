export default function Contato() {
    return (
      <div className="flex flex-col text-center bg-gradient-to-t from-blue-950 to-black min-h-screen px-8 py-10 space-y-4">
        <div className="space-y-4">
          <h1 className="text-yellow-300 text-3xl font-bold pt-10">
            Fale conosco!
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Sinta-se à vontade para se conectar conosco através das nossas redes sociais.
          </p>
        </div>
  
        <div className="flex flex-row justify-center w-full gap-4">
          <a
            href="https://www.instagram.com/spinimagens/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-12"
              src="/svg_redes/svg_instagram.svg"
              alt="Instagram Logo"
            />
          </a>
          <a
            href="https://wa.me/5519999055138?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-12"
              src="/svg_redes/svg_whatsapp.svg"
              alt="WhatsApp Logo"
            />
          </a>
        </div>
  
        <div>
          <p className="text-lg leading-relaxed text-gray-300">
            Ou, se preferir, preencha o formulário abaixo e entraremos em contato com você:
          </p>
        </div>
  
        <form className="pt-6  mt-8 max-w-4xl mx-auto grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="nome"
              className="block text-left font-semibold text-gray-300"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              className="w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Digite seu nome"
            />
          </div>
  
          <div className="flex flex-col">
            <label
              htmlFor="telefone"
              className="block text-left font-semibold text-gray-300"
            >
              Telefone
            </label>
            <input
              id="telefone"
              type="tel"
              className="w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Digite seu telefone"
            />
          </div>
  
          <div className="flex flex-col col-span-2">
            <label
              htmlFor="email"
              className="block text-left font-semibold text-gray-300"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Digite seu e-mail"
            />
          </div>
  
          <div className="flex flex-col col-span-2">
            <label
              htmlFor="mensagem"
              className="block text-left font-semibold text-gray-300"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows="4"
              className="w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Nos conte sua dúvida ou solicite um orçamento!"
            ></textarea>
          </div>
  
          {/* Botão de Enviar */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-yellow-300 text-black rounded-md font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
  