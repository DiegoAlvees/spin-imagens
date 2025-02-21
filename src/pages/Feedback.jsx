import { useEffect, useState, useRef } from "react";

export default function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    fetch("/feedback.json")
      .then((response) => response.json())
      .then((data) => setFeedback([...data, ...data]));
  }, []);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX.current) * 2; // Ajuste a sensibilidade aqui
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-t from-blue-950 to-black min-h-screen">
      <div className="absolute top-10 pt-10 px-10 text-center text-white text-2xl font-semibold">
        <h1>
          Experiência de nossos <span className="text-yellow-300">clientes</span> com a plataforma{" "}
          <span className="text-yellow-300">360°</span>
        </h1>
      </div>
      
      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden pt-10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div className="flex space-x-4 pt-24 w-max animate-scroll">
          {feedback.map((feed, index) => (
            <div key={index} className="shrink-0 w-64">
              <img className="rounded-lg" src={feed.src} alt="feedbacks dos clientes" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
