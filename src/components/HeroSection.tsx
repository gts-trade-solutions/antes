import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4"; 

const HeroSection = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
            CHILL & COLD STORAGE SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-shadow">
            Today, integrating electronics is a key element that allows our
            customer to monitor, manage, control and optimize their operation
            their equipment efficiently.
          </p>
          <Button
            size="lg"
            className="bg-white text-nrs-navy hover:bg-nrs-light-blue hover:text-white px-8 py-3 text-lg font-semibold"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
