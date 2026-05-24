import { useState, useEffect } from "react";
import EnvelopeIntro from "./EnvelopeIntro";
import MusicToggle from "./MusicToggle";
import { useWeddingMusic } from "./useWeddingMusic";

// Import gallery images
import img1 from "./assets/wedding/IRN06176.jpg";
import img2 from "./assets/wedding/IRN06180.jpg";
import img3 from "./assets/wedding/IRN06184.jpg";
import img4 from "./assets/wedding/IRN06190.jpg";
import img5 from "./assets/wedding/IRN06194.jpg";
import img6 from "./assets/wedding/IRN06207.jpg";
import img7 from "./assets/wedding/IRN06216.jpg";
import img8 from "./assets/wedding/IRN06247.jpg";
import img9 from "./assets/wedding/IRN06262.jpg";
import img10 from "./assets/wedding/IRN06276.jpg";
import img11 from "./assets/wedding/IRN06280.jpg";
import img12 from "./assets/wedding/IRN06310.jpg";

// Import home background and location images
import homeHero from "./assets/asset/RED04586.jpg";
import churchLocation from "./assets/asset/Church.png";
import receptionLocation from "./assets/asset/Reception.png";

export default function App() {

  const calculateTimeLeft = () => {
    const weddingDate = new Date("June 6, 2026 08:00:00").getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isOpened, setIsOpened] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { play, toggleMute, isPlaying, isMuted } = useWeddingMusic();

  // Gallery images array using imports
  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(slideTimer);
    };
  }, [galleryImages.length]);

  // Gallery slide functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const palette = ["#7b001c", "#a94a5a", "#c9818b", "#e5b8c3", "#ffffff"];
  
  const entourage = {
    groomsMen: [
      "Mr. Jaybee De Guzman",
      "Mr. Clarenz Soriano",
      "Mr. Aldrin Dimaisip",
      "Mr. Jairo Alindugan",
      "Mr. Justine De Sagun",
      "Mr. Justine Paolo Diaz",
      "Mr. Ian Carl Cabungcal",
      "Mr. Johnloyd De Sagun",
      "Mr. Edcel Dacillo",
      "Mr. Jake Ivan Pujante",
      "Mr. Jose Olayres",
      "Mr. Jhun-Jhun Dimaisip",
    ],
    bridesMaids: [
      "Ms. Shervil De Ocampo",
      "Ms. Yana Laurice Valencia",
      "Ms. Cristine De Ocampo",
      "Ms. Nikylla Banaguas",
      "Ms. Aliyah Dimaisip",
      "Ms. Bernalyn Manalo",
      "Ms. Rayzelle Dimaisip",
      "Ms. Sandy Ruby Legaspi",
      "Ms. May Manalo",
      "Ms. Jessica Paquibot",
      "Ms. Rizza Joie Cantalejo",
      "Ms. Mary Gelli Panes",
    ],
  };

  const ceremonial = {
    bestMan: "Mr. AJ Dimaisip",
    maidOfHonor: "Ms. Mary Glenne Gabia",
    toLightOurPath: [
      { name: "Mr. Paolo Javier", spouse: "Mrs. Rica Joy Javier" },
      { name: "Mr. Alden Kobe Maranan", spouse: "Mrs. Miriam Maranan" },
    ],
    toClotheAsOne: [
      { name: "Mr. Ar-Jay Cabungcal" },
      { name: "Mr. Regie Dimaisip" },
      { name: "Ms. Ma. Jialen Clavillas" },
      { name: "Ms. Alleen Dimaisip" },
    ],
    toBindUsTogether: [
      { name: "Mr. Paul Nino Manalese" },
      { name: "Mr. Louie Cabungcal" },
      { name: "Ms. Judi De Los Reyes" },
      { name: "Ms. Michelle Botial" },
    ],
  };

  const sponsors = {
    groomParents: ["Mr. Ogie Dimaisip", "Mrs. Aileen Dimaisip"],
    brideParents: ["Mr. Melion Apas", "Mrs. Anna Marie Garcia"],
    principalSponsors: [
      "Mr. Jayar Basco",
      "Mr. Randy Manalo",
      "Mr. Romel Escueta",
      "Mr. Marsel Cue",
      "Mr. Ryan Mendoza",
      "Mr. Melencio Hernandez",
      "Mr. Rolando Cabral",
      "Mr. Ranny Caringal",
      "Mr. Cesar Basaquing",
      "Mr. Rolando Rivera",
      "Mr. Estelito Lopez",
      "Mr. Florentino Dela Cuesta",
      "Mr. Jayson Dinamarca",
      "Mrs. Michelle Basco",
      "Mrs. Melissa Manalo",
      "Mrs. Janice Escueta",
      "Mrs. Mary Ann Zarra",
      "Mrs. Roselyn Hermosa",
      "Mrs. Herminia Hernandez",
      "Mrs. Melanie Cabral",
      "Mrs. Noime Caringal",
      "Mrs. Michelle Basquiquin",
      "Mrs. Richelle Cabungcal",
      "Mrs. Regina Lopez",
      "Mrs. Marita Dela Cuesta",
      "Mrs. Lovely Ann Dinamarca",
      "Mrs. Marissa Granada",
      "Mrs. Marlineeth Cabungcal",
      "Ms. Jennifer Pernia",
    ],
  };

  const bearers = {
    loveBearers: ["Mr. Raven Kyle Garcia", "Ms. Yassy Dimaisip"],
    ringBearer: "Mr. Lanz Matthew Cabungcal",
    coinBearers: ["Mr. John Michael Lubiano"],
    bibleBearers: ["Mr. Jeiden Maranan"],
    flowerGirls: [
      "Ms. Althea Iroy",
      "Ms. Virberry Basco",
      "Ms. Faith Soguilon",
      "Ms. Jaycee Labrador",
      "Ms. Phia Paula Manalo",
    ],
  };

  if (!isOpened) {
    return (
      <EnvelopeIntro
        onOpenStart={play}
        onOpen={() => setIsOpened(true)}
      />
    );
  }

  return (
    <div className="bg-[#f7f3f3] text-[#7b001c] main-enter">
      <MusicToggle
        isPlaying={isPlaying}
        isMuted={isMuted}
        onToggle={toggleMute}
      />

        {/* NAVIGATION BAR */}
        <nav className="fixed top-0 left-0 right-0 bg-[#7b001c] text-white shadow-lg z-40">
          <div className="max-w-6xl mx-auto px-4 md:px-5 py-3 md:py-4 flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Playfair Display" }}>
              J & C
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 md:gap-8 items-center">
              <a href="#home" className="hover:text-[#f3c4c4] transition-colors text-xs md:text-sm">
                Home
              </a>
              <a href="#hero" className="hover:text-[#f3c4c4] transition-colors text-xs md:text-sm">
                The wedding feature
              </a>
              <a href="#gallery" className="hover:text-[#f3c4c4] transition-colors text-xs md:text-sm">
                Gallery
              </a>
              <a href="#home" className="hover:text-[#f3c4c4] transition-colors text-xs md:text-sm">
                Countdown
              </a>
              <a href="#details" className="hover:text-[#f3c4c4] transition-colors text-xs md:text-sm">
                Details
              </a>
              <a 
                href="#film" 
                className="px-4 md:px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#7b001c] transition-colors text-xs md:text-sm"
              >
                VIDEO
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#5a0015] backdrop-blur-md px-4 py-4 space-y-3 border-t border-[#d98a99]"
              style={{
                backgroundColor: "rgba(90, 0, 21, 0.95)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <a 
                href="#home" 
                className="block text-white hover:text-[#f3c4c4] transition-colors text-sm py-2 px-3 rounded hover:bg-[#7b001c]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#hero" 
                className="block text-white hover:text-[#f3c4c4] transition-colors text-sm py-2 px-3 rounded hover:bg-[#7b001c]" 
                onClick={() => setIsMenuOpen(false)}
              >
                The wedding feature
              </a>
              <a 
                href="#gallery" 
                className="block text-white hover:text-[#f3c4c4] transition-colors text-sm py-2 px-3 rounded hover:bg-[#7b001c]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#home" 
                className="block text-white hover:text-[#f3c4c4] transition-colors text-sm py-2 px-3 rounded hover:bg-[#7b001c]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Countdown
              </a>
              <a 
                href="#details" 
                className="block text-white hover:text-[#f3c4c4] transition-colors text-sm py-2 px-3 rounded hover:bg-[#7b001c]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Details
              </a>
              <a 
                href="#film" 
                className="block px-4 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-[#7b001c] transition-colors text-sm text-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                VIDEO
              </a>
            </div>
          )}
        </nav>

        {/* HOME SECTION */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 md:px-5 py-10 pt-20 md:pt-24 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${homeHero})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center z-10 w-full">
            <p className="text-xs md:text-sm tracking-[2px] md:tracking-[3px] text-white mb-3 md:mb-4" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
              COUNTDOWN TO JUNE 6, 2026
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight"
              style={{ fontFamily: "Playfair Display", textShadow: "3px 3px 10px rgba(0,0,0,0.5)" }}
            >
              JUSTIN & CRISTINE
            </h1>
            <p
              className="text-lg md:text-2xl lg:text-3xl text-white mb-6 md:mb-8"
              style={{ fontFamily: "Great Vibes", textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
            >
              Are Getting Married
            </p>

            <div className="rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl mx-auto backdrop-blur-md border border-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}>

              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-3 mb-6">
                {[

                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-white rounded-lg p-3 md:p-4 flex flex-col items-center min-w-[70px] md:min-w-20 backdrop-blur-sm border border-white border-opacity-30"
                    style={{
                      backgroundColor: "rgba(123, 0, 28, 0.6)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    <span className="text-lg md:text-2xl font-bold">{item.value}</span>
                    <span className="text-xs uppercase tracking-[1px] md:tracking-[2px] font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 md:px-8 py-2 md:py-3 text-white font-semibold rounded-full hover:scale-105 transition-all transform shadow-lg text-sm md:text-base backdrop-blur-sm border border-white border-opacity-20"
                style={{ 
                  fontFamily: "Playfair Display",
                  backgroundColor: "rgba(123, 0, 28, 0.7)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                View Invitation
              </button>
            </div>
          </div>
        </section>

        {/* HERO */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 md:px-5 py-8 md:py-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop')",
          }}
        >
          <div className="bg-white max-w-3xl w-full rounded-2xl md:rounded-[30px] shadow-2xl p-6 md:p-10 lg:p-16 text-center relative border border-[#7b001c]">

            <img
              src="https://png.pngtree.com/png-clipart/20230817/original/pngtree-watercolor-burgundy-flowers-bouquet-picture-image_8008404.png"
              alt="flowers"
              className="w-32 md:w-44 absolute left-1/2 -translate-x-1/2 -top-10 md:-top-12"
            />


            <p className="uppercase tracking-[3px] md:tracking-[5px] text-[#b75d73] text-xs md:text-sm mt-16 md:mt-20">
              Save The Date
            </p>

            <h2
              className="text-3xl md:text-5xl mt-3 md:mt-5"
              style={{ fontFamily: "Great Vibes" }}
            >
              We
            </h2>

            <h1
              className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mt-2 md:mt-3"
              style={{ fontFamily: "Playfair Display" }}
            >
              JUSTIN
              <span
                className="block text-2xl md:text-4xl text-[#b75d73] my-1 md:my-2"
                style={{ fontFamily: "Great Vibes" }}
              >
                and
              </span>
              CRISTINE
            </h1>

            <p className="mt-4 md:mt-6 text-xs md:text-base text-[#7d5a63] px-2">
              Together with our families ask for your presence
              as we are united on
            </p>

            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold mt-6 md:mt-10 leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              SATURDAY, 6TH OF
              <br />
              JUNE 2026
            </h2>

            <p className="mt-4 md:mt-6 leading-7 md:leading-8 text-xs md:text-base">
              AT EIGHT O'CLOCK IN THE MORNING
              <br />
              Please arrive thirty minutes before the start of the ceremony.
            </p>

            <div className="mt-6 md:mt-10">
              <h3
                className="text-xl md:text-2xl"
                style={{ fontFamily: "Playfair Display" }}
              >
                CEREMONY
              </h3>

              <p className="text-xs md:text-base">
                Parish of the Immaculate Conception,
                <br />
                Balayan, Batangas
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h3
                className="text-xl md:text-2xl"
                style={{ fontFamily: "Playfair Display" }}
              >
                WEDDING RECEPTION
              </h3>

              <p className="text-xs md:text-base">
                AGAP Building, Balayan Government Center
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-12 md:py-16 px-4 md:px-5 bg-gradient-to-b from-[#f7f3f3] to-white">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-3"
                style={{ fontFamily: "Playfair Display", color: "#7b001c" }}
              >
                Our Happy Moments
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#7b001c] via-[#d98a99] to-[#7b001c] mx-auto mb-6"></div>
              <p className="text-[#7d5a63] text-base md:text-lg" style={{ fontFamily: "Great Vibes" }}>
                Cherished memories leading up to our special day
              </p>
            </div>

            {/* Main Slideshow */}
            <div className="relative w-full mb-10 md:mb-14">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 md:h-[500px] lg:h-[600px] group bg-black">
                {galleryImages.map((src, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      i === currentSlide 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#7b001c] rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 z-20 shadow-lg backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <span className="text-2xl md:text-3xl font-bold">‹</span>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#7b001c] rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 z-20 shadow-lg backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <span className="text-2xl md:text-3xl font-bold">›</span>
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 bg-[#7b001c]/90 backdrop-blur-md text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg border border-[#d98a99]/50">
                  {currentSlide + 1} / {galleryImages.length}
                </div>

                {/* Image Title/Info */}
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white">
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#f3c4c4]">
                    Memory {currentSlide + 1}
                  </p>
                </div>
              </div>

              {/* Dot Navigation */}
              <div className="flex justify-center gap-2 md:gap-3 mt-8 flex-wrap">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`transition-all duration-300 rounded-full hover:scale-110 ${
                      i === currentSlide
                        ? "bg-[#7b001c] w-3 md:w-4 h-3 md:h-4 shadow-lg"
                        : "bg-[#d98a99] w-2 md:w-3 h-2 md:h-3 hover:bg-[#b75d73]"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="mt-14 md:mt-20">
              <h3
                className="text-center text-[#7d5a63] text-base md:text-lg mb-8"
                style={{ fontFamily: "Great Vibes", fontSize: "18px" }}
              >
                ✨ Explore all moments ✨
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {galleryImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square border-2 ${
                      i === currentSlide
                        ? "border-[#7b001c] ring-2 ring-offset-2 ring-[#d98a99] scale-105"
                        : "border-transparent hover:border-[#d98a99]"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7b001c]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-white text-xs md:text-sm font-semibold">View</span>
                    </div>

                    {/* Active Indicator */}
                    {i === currentSlide && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/0">
                        <div className="bg-white/90 rounded-full p-2">
                          <span className="text-[#7b001c] text-xl">▶</span>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Count Info */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-[#b75d73] text-sm md:text-base">
                <span className="font-bold text-[#7b001c] text-lg md:text-xl">{galleryImages.length}</span> treasured moments captured
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section id="film" className="w-full py-12 md:py-16 px-4 md:px-5 bg-gradient-to-b from-[#f7f3f3] to-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl text-center mb-6 md:mb-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              Save The Date Video
            </h2>
            <div className="relative w-full" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
              <iframe
                src="https://drive.google.com/file/d/1AcPcQB_gL4TTbYIw2UMzn1XgNNoQGn8J/preview"
                title="Wedding Film - Justin & Cristine"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(123, 0, 28, 0.2)",
                }}
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </section>

        {/* DETAILS / PROGRAM + COLOR PALETTE */}
        <section id="details" className="py-12 md:py-16 px-4 md:px-5 bg-white">
          <div className="max-w-4xl mx-auto">

            <h2
              className="text-3xl md:text-4xl text-center mb-6 md:mb-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              The Finer Details
            </h2>

            <p className="text-center text-[#7d5a63] mb-6 md:mb-8 text-sm md:text-base">
              Scanned program cards and the wedding color palette.
            </p>

            <div className="flex justify-center gap-3 md:gap-4 mb-8 flex-wrap">
              {palette.map((c) => (
                <div key={c} className="flex flex-col items-center">
                  <div
                    style={{ background: c }}
                    className="w-12 md:w-14 h-12 md:h-14 rounded-full border"
                    aria-hidden
                  />
                  <span className="mt-2 text-xs md:text-sm text-[#7d5a63]">{c}</span>
                </div>
              ))}
            </div>

            {/* THE BEARERS SECTION */}
            <div className="mb-8 md:mb-10 text-[#7d5a63] text-sm md:text-base">
              <h3 className="text-2xl md:text-3xl text-center mb-4 md:mb-6 font-semibold" style={{ fontFamily: "Playfair Display" }}>
                The Bearers
              </h3>
              
              <div className="bg-gradient-to-br from-[#d98a99] to-[#b75d73] rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center">
                <div className="mb-6 md:mb-8">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">LOVE BEARERS</h4>
                  <p className="text-sm md:text-base">{bearers.loveBearers.join(" / ")}</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">RING BEARER</h4>
                  <p className="text-sm md:text-base">{bearers.ringBearer}</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">COIN BEARER</h4>
                  <p className="text-sm md:text-base">{bearers.coinBearers.join(" / ")}</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">BIBLE BEARER</h4>
                  <p className="text-sm md:text-base">{bearers.bibleBearers.join(" / ")}</p>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">FLOWER GIRLS</h4>
                  <div className="text-sm md:text-base space-y-1">
                    {bearers.flowerGirls.map((f) => (
                      <p key={f}>{f}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* THE SPONSORS SECTION */}
            <div className="mb-8 md:mb-10 text-[#7d5a63] text-sm md:text-base">
              <h3 className="text-2xl md:text-3xl text-center mb-4 md:mb-6 font-semibold" style={{ fontFamily: "Playfair Display" }}>
                The Sponsors
              </h3>

              <div className="bg-gradient-to-br from-[#b75d73] to-[#7b001c] rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ fontFamily: "Playfair Display" }}>
                  DIMAISIP - APAS
                </h4>
                <p className="text-sm md:text-base mb-6 md:mb-8 italic">NUPTIAL</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  <div>
                    <h5 className="text-base md:text-lg font-semibold mb-2 md:mb-3" style={{ fontFamily: "Great Vibes", fontSize: "20px" }}>
                      Groom's Parents
                    </h5>
                    <div className="text-xs md:text-sm space-y-1">
                      {sponsors.groomParents.map((name) => (
                        <p key={name}>{name}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-base md:text-lg font-semibold mb-2 md:mb-3" style={{ fontFamily: "Great Vibes", fontSize: "20px" }}>
                      Bride's Parents
                    </h5>
                    <div className="text-xs md:text-sm space-y-1">
                      {sponsors.brideParents.map((name) => (
                        <p key={name}>{name}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Principal Sponsors</h5>
                  <p className="text-xs md:text-sm mb-3 md:mb-4 italic">To stand as witness to our vows</p>
                  <div className="text-xs md:text-sm grid grid-cols-2 gap-2 md:gap-3">
                    {sponsors.principalSponsors.map((name) => (
                      <p key={name}>{name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* THE CEREMONIAL ROLES SECTION */}
            <div className="mb-8 md:mb-10 text-[#7d5a63] text-sm md:text-base">
              <h3 className="text-2xl md:text-3xl text-center mb-4 md:mb-6 font-semibold" style={{ fontFamily: "Playfair Display" }}>
                The Ceremonial Roles
              </h3>

              <div className="bg-gradient-to-br from-[#b75d73] to-[#7b001c] rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ fontFamily: "Playfair Display" }}>
                  DIMAISIP - APAS
                </h4>
                <p className="text-sm md:text-base mb-6 md:mb-8 italic">NUPTIAL</p>

                <h5 className="text-base md:text-lg font-semibold mb-4 md:mb-6" style={{ fontFamily: "Great Vibes", fontSize: "22px" }}>
                  Ceremonial Roles
                </h5>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h6 className="text-base md:text-lg font-semibold mb-1 md:mb-2">BEST MAN</h6>
                    <p className="text-xs md:text-sm">{ceremonial.bestMan}</p>
                  </div>

                  <div>
                    <h6 className="text-base md:text-lg font-semibold mb-1 md:mb-2">MAID OF HONOR</h6>
                    <p className="text-xs md:text-sm">{ceremonial.maidOfHonor}</p>
                  </div>

                  <div>
                    <h6 className="text-base md:text-lg font-semibold mb-2 md:mb-3">TO LIGHT OUR PATH</h6>
                    <div className="text-xs md:text-sm space-y-1">
                      {ceremonial.toLightOurPath.map((p) => (
                        <p key={p.name}>{p.name} / {p.spouse}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-base md:text-lg font-semibold mb-2 md:mb-3">TO CLOTHE AS ONE</h6>
                    <div className="text-xs md:text-sm space-y-1">
                      {ceremonial.toClotheAsOne.map((p) => (
                        <p key={p.name}>{p.name}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-base md:text-lg font-semibold mb-2 md:mb-3">TO BIND US TOGETHER</h6>
                    <div className="text-xs md:text-sm space-y-1">
                      {ceremonial.toBindUsTogether.map((p) => (
                        <p key={p.name}>{p.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* THE ENTOURAGE SECTION */}
            <div className="text-[#7d5a63] text-sm md:text-base">
              <h3 className="text-2xl md:text-3xl text-center mb-4 md:mb-6 font-semibold" style={{ fontFamily: "Playfair Display" }}>
                The Entourage
              </h3>

              <div className="bg-gradient-to-br from-[#b75d73] to-[#7b001c] rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ fontFamily: "Playfair Display" }}>
                  DIMAISIP - APAS
                </h4>
                <p className="text-sm md:text-base mb-6 md:mb-8 italic">NUPTIAL</p>

                <h5 className="text-base md:text-lg font-semibold mb-6 md:mb-8" style={{ fontFamily: "Great Vibes", fontSize: "22px" }}>
                  The Entourage
                </h5>

                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div>
                    <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4">GROOM'S MEN</h6>
                    <div className="text-xs md:text-sm space-y-1">
                      {entourage.groomsMen.map((n) => (
                        <p key={n}>{n}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-base md:text-lg font-semibold mb-3 md:mb-4">BRIDE'S MAIDS</h6>
                    <div className="text-xs md:text-sm space-y-1">
                      {entourage.bridesMaids.map((n) => (
                        <p key={n}>{n}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 md:mt-8 text-center text-xs text-[#7d5a63]">
              If any names need correction, update the arrays at the top of this file.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#7b001c] text-white py-8 md:py-12 px-4 md:px-5">
          <div className="max-w-4xl mx-auto">
            
            {/* Hashtag Section */}
            <div className="text-center mb-8 md:mb-10">
              <p className="text-xs md:text-sm mb-2 md:mb-3">Please share your photos using our official hashtag</p>
              <div className="bg-white text-[#7b001c] py-2 md:py-3 px-4 md:px-6 rounded-lg inline-block">
                <p className="text-lg md:text-2xl font-bold" style={{ fontFamily: "Playfair Display" }}>
                  #creaTINewchapterwithTATIN
                </p>
              </div>
            </div>

            {/* Location Guide */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl text-center mb-6 md:mb-8" style={{ fontFamily: "Great Vibes" }}>
                Location Guide
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Church QR */}
                <div className="text-center">
                  <div className="bg-white p-3 md:p-4 rounded-lg inline-block mb-3 md:mb-4">
                    <img
                      src={churchLocation}
                      alt="Church location"
                      className="w-40 h-40 md:w-48 md:h-48 object-cover rounded"
                    />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">CHURCH</h4>
                  <p className="text-xs md:text-sm">
                    Parish of the Immaculate<br />
                    Conception, Balayan, Batangas
                  </p>
                </div>

                {/* Reception QR */}
                <div className="text-center">
                  <div className="bg-white p-3 md:p-4 rounded-lg inline-block mb-3 md:mb-4">
                    <img
                      src={receptionLocation}
                      alt="Reception location"
                      className="w-40 h-40 md:w-48 md:h-48 object-cover rounded"
                    />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">RECEPTION</h4>
                  <p className="text-xs md:text-sm">
                    AGAP Building, Balayan<br />
                    Government Center
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center border-t border-[#f3c4c4] pt-4 md:pt-6">
              <p className="text-xs md:text-sm">Justin & Cristine Wedding 2026</p>
            </div>

          </div>
        </footer>

      </div>
  );
}