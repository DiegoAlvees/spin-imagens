import PhoneSvg from "/pngwing.com.png";
import LogoSvg from "/logo.svg";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 bg-gradient-to-t from-blue-950 to-black md:items-center md:h-screen lg:overflow-x-hidden">
      <div className="relative w-full  h-screen bg-black  md:w-72 md:ml-[8rem] md:flex  md:h-[500px] lg:order-2 lg:col-span-1 lg:bg-transparent lg:h-[425px] lg:w-[256px] lg:left-[6rem]">
        <img
          src={PhoneSvg}
          alt=""
          className="hidden md:flex md:w-[300px] h-[494px] absolute top-0 left-0 z-20 lg:z-30 scale-110 lg:h-[420px] lg:w-[255px]"
        />
        <video
          className="absolute top-0 left-0 l-5 w-full h-full  object-cover  opacity-80 md:opacity-100 video-bg md:rounded-lg lg:z-20
           "
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          tabIndex="-1"
        >
          <source src="/spin-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent md:rounded-lg"></div>

        {/* div apenas mobile */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center md:hidden">
          <img src={LogoSvg} alt="logo spin imagens" className="w-72" />
          <p className="text-lg text-gray-300 leading-relaxed pt-3">
            Momentos especiais <br /> merecem um olhar{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-2xl font-bold">
              360°
            </span>
          </p>
        </div>
      </div>

      {/* div apenas no desktop */}

      <div className="hidden md:flex md:flex-col md:items-center lg:justify-center
      lg:h-screen lg:pt-[] lg:order-1 lg:col-span-1 lg:relative lg:left-[8rem]">
        <img
          src={LogoSvg}
          alt="logo spin imagens"
          className="w-72 md:w-[330px] lg:w-[380px]"
        />
        <p className="text-lg md:text-[24px] text-gray-300 leading-relaxed pt-3 text-center">
          Momentos especiais <br /> merecem um olhar{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-2xl font-bold">
            360°
          </span>
        </p>
      </div>

      {/* div para telas grandes */}
      <div className="hidden lg:flex lg:order-3 lg:col-span-2 lg:overflow-hidden lg:h-screen">
        <img src="/img-plataforma/img2.jpg" alt="plataforma" className="object-cover clip-moon z-10 w-full"/>
      </div>

      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-t from-blue-950 to-black text-white pl-8 pr-8 md:hidden">
        <section
          className="flex flex-col items-center gap-8 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="w-4/5 md:w-full md:max-h-screen md:overflow-hidden">
            <img
              src="/img-plataforma/img1.jpg"
              alt="Plataforma 360°"
              className="w-full h-auto rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className=" text-center max-w-2xl md:hidden">
            <p className="text-xl lg:text-2xl font-semibold leading-relaxed">
              <span className="block text-2xl font-extrabold">
                Plataforma 360° em
              </span>
              <strong className="text-4xl text-yellow-400">Led Infinity</strong>{" "}
              | Paris
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
