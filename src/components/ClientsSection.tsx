"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  { name: "AFDC", logo: "/clients/afdc.png" },
  { name: "Afghan Brothers", logo: "/clients/afghan brothers.png" },
  { name: "Alshaya", logo: "/clients/alshaya.svg" },
  { name: "Bakemart", logo: "/clients/bakemart-logo.png" },
  { name: "Burger King", logo: "/clients/burgerKing.png" },
  { name: "Dominos", logo: "/clients/dominos.png" },
  { name: "Goan Fresh", logo: "/clients/GoanFresh.png" },
  { name: "Grand", logo: "/clients/grand.png" },
  { name: "GWC", logo: "/clients/gwc.svg" },
  { name: "Jacme", logo: "/clients/jacme.webp" },
  { name: "KFC", logo: "/clients/kfc.svg" },
  { name: "LG", logo: "/clients/lg-logo-14412.png" },
  { name: "Lulu", logo: "/clients/LuLu-Logo.png" },
  { name: "Milma", logo: "/clients/Milma.png" },
  { name: "MRA", logo: "/clients/mra.png" },
  { name: "Nesto", logo: "/clients/nesto.png" },
  { name: "Papa John’s", logo: "/clients/papajohns.svg" },
  { name: "Parisons", logo: "/clients/parisons.png" },
  { name: "Qadco", logo: "/clients/qadcoo.png" },
  { name: "Qatar University", logo: "/clients/qatarUcity.svg" },
  { name: "Snowy Ice Creams", logo: "/clients/snowyicecreams-removebg-preview.png" },
  { name: "T-Coco", logo: "/clients/Tcoco.png" },
  { name: "Yashaswi Surimi", logo: "/clients/yashaswisurimi.png" },
];

const ClientsSection = () => {
  return (
    <section className="py-2 mb-16 bg-gradient-to-b from-white via-nrs-light-blue/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Title + Intro */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-nrs-navy mb-4">
            Our <span className="text-nrs-blue">Clients</span>
          </h2>
          <p className="text-nrs-dark-gray max-w-3xl mx-auto leading-relaxed text-base">
            We are proud to partner with global leaders and trusted local names. 
            From <strong>KFC</strong>, <strong>Burger King</strong>, and <strong>Domino’s</strong>, 
            to <strong>Lulu Group</strong>, <strong>Nesto</strong>, and many more — 
            our cold storage solutions help them maintain quality and efficiency.
          </p>
        </div>

        {/* Clients Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          className="max-w-7xl"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-24 p-4 bg-gradient-to-tr from-white to-gray-50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                {/* Logo */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 object-contain group-hover:scale-110 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSection;
