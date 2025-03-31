
export default function Apresentacao() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-black to-blue-950 text-white px-8 py-10">
      <div className="text-center space-y-8 mt-14 lg:grid lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="/dum_fer.jpg"
            alt="Foto dos proprietários"
            className="w-72 h-72 lg:w-[500px] lg:h-[500px] rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-yellow-300">
            Conheça a Nossa Equipe
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 lg:pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia, nisl nec malesuada dictum, enim urna vehicula ligula, sit
            amet maximus lorem nunc id enim. Ut egestas erat sit amet orci
            malesuada, nec iaculis tortor placerat. Aliquam erat volutpat. Nulla
            facilisi.
          </p>
        </div>
      </div>
    </div>
  );
}
