import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "*";
    if (!formData.mensagem) newErrors.mensagem = "*";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "*";
    if (!formData.tel) newErrors.tel = "*";
    return newErrors;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFormSubmit(true);  // Marca o formulário como enviado
      // Aqui você pode enviar os dados, ou realizar outra ação necessária, como um envio de API
      console.log('Formulário enviado com sucesso!', formData);
    }
  };

  return (
    <div className="flex flex-col text-center bg-gradient-to-t from-blue-950 to-black min-h-screen px-8 py-10 space-y-4">
      <div className="space-y-4">
        <h1 className="text-yellow-300 text-3xl font-bold pt-10">Fale conosco!</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Sinta-se à vontade para se conectar conosco através das nossas redes sociais.
        </p>
      </div>

      <div className="flex flex-row justify-center w-full gap-4">
        <a href="https://www.instagram.com/spinimagens/" target="_blank" rel="noopener noreferrer">
          <img className="w-12" src="/svg_redes/svg_instagram.svg" alt="Instagram Logo" />
        </a>
        <a href="https://wa.me/5519999055138?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!" target="_blank" rel="noopener noreferrer">
          <img className="w-12" src="/svg_redes/svg_whatsapp.svg" alt="WhatsApp Logo" />
        </a>
      </div>

      <div>
        <p className="text-lg leading-relaxed text-gray-300">
          Ou, se preferir, preencha o formulário abaixo e entraremos em contato com você:
        </p>
      </div>

      <form onSubmit={handleSubmit} className="pt-6 mt-8 max-w-4xl mx-auto grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="nome" className="block text-left font-semibold text-gray-300">
            Nome {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <input
            id="nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className={`w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 ${errors.name ? "border-2 border-red-500" : "focus:ring-yellow-300"}`}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefone" className="block text-left font-semibold text-gray-300">
            Telefone {errors.tel && <span className="text-red-500">{errors.tel}</span>}
          </label>
          <input
            id="telefone"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            type="tel"
            className={`w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 ${errors.tel ? "border-2 border-red-500" : "focus:ring-yellow-300"}`}
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label htmlFor="email" className="block text-left font-semibold text-gray-300">
            E-mail {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className={`w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 ${errors.email ? "border-2 border-red-500" : "focus:ring-yellow-300"}`}
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label htmlFor="mensagem" className="block text-left font-semibold text-gray-300">
            Mensagem {errors.mensagem && <span className="text-red-500">{errors.mensagem}</span>}
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="4"
            className={`w-full mt-2 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 ${errors.mensagem ? "border-2 border-red-500" : "focus:ring-yellow-300"}`}
            placeholder="Nos conte sua dúvida ou solicite um orçamento!"
          ></textarea>
        </div>

        <div className="col-span-2">
          <button type="submit" className="w-full py-2 mt-4 bg-yellow-300 text-blue-950 font-bold rounded-md hover:bg-yellow-400 transition duration-300">
            Enviar
          </button>
        </div>
      </form>

      {formSubmit && (
        <div className="mt-4 text-green-500 font-semibold">
          Formulário enviado com sucesso! Entraremos em contato em breve.
        </div>
      )}
    </div>
  );
}
