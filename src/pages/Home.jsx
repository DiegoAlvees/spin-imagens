export default function Home() {
  return (
    <div>
      {/* Seção do vídeo de fundo */}
      <div className="relative w-full h-screen bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
        >
          <source src="/spin-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-bold text-white">Spin</h1>
          <h2 className="text-4xl text-gray-300">imagens</h2>
          <p className="text-lg text-white leading-relaxed pt-6">
            Momentos especiais <br /> merecem um olhar 360°
          </p>
        </div>
      </div>

      {/* Seção Apresentação */}
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-blue-950 to-black text-white px-8">
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
      </div>
    </div>
  );
}