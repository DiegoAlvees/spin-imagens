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
      .then((data) => setFeedback([...data, ...data, ...data]));
  }, []);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;

    // Se estiver no final da rolagem, volta para o início sem animação
    if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 3 * 2) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3;
    }

    // Se estiver no início, volta para o meio
    if (carouselRef.current.scrollLeft <= 0) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth / 3;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    e.stopPropagation();
    const x = e.touches[0].pageX;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
  const carousel = carouselRef.current;
  if (!carousel) return;

  carousel.addEventListener("touchmove", handleTouchMove, { passive: false });

  return () => {
    carousel.removeEventListener("touchmove", handleTouchMove);
  };
}, []);

  return (
    <div className="flex flex-col  items-center bg-gradient-to-t from-black to-blue-950 min-h-screen">
      <div className="w-full text-center text-white pb-9">
        <h1 className="text-3xl pt-24  font-bold tracking-wide">
          <span className="text-yellow-300">O que nossos clientes</span> dizem sobre a  
          <span className="text-yellow-300"> experiência 360°</span>
        </h1>
      </div>

      <div
        ref={carouselRef}
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div className="flex justify-center space-x-4 w-max animate-scroll">
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
