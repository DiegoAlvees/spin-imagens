export default function Apresentacao() {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-blue-950  to-black text-white px-8">
        
        <section className="flex flex-col items-center gap-8" data-aos="fade-up" data-aos-duration="2000">
          <div className="w-4/5 lg:w-2/3">
            <img
              src="/img-plataforma.jpg"
              alt="Plataforma 360°"
              className="w-full h-auto rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
  
          <div className="text-center max-w-2xl">
            <p className="text-xl lg:text-2xl font-semibold leading-relaxed">
              <span className="block text-2xl font-extrabold">Plataforma 360° em</span>
              <strong className="text-4xl text-yellow-400">Led Infinity</strong> | Paris
            </p>
          </div>
        </section>
        {/* <section>
            <h1>Realizamos eventos para casamentos, aniversários, confraternizações e muitas outras ocasiões especiais.</h1>
        </section> */}
      </div>
    );
  }
  