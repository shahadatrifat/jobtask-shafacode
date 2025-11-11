import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '../components/ui/button';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "Nurture Your Green Paradise",
      subtitle: "Premium Plants & Tools",
      image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1200&q=80",
    },
    {
      id: 2,
      title: "Grow Your Dream Garden",
      subtitle: "Discover the Joy of Plants",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    },
    {
      id: 3,
      title: "Expert Plant Care Solutions",
      subtitle: "Your Green Companion",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    },
  ];

  return (
    <section className="relative w-full h-[600px] mt-[70px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-8 h-full flex flex-col justify-center items-start text-secondary">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg"
                    className="bg-[#CC7722] hover:bg-[#CC7722] text-secondary font-semibold hover:text-secondary-foreground px-8"
                  >
                    Shop Now
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-[#CC7722] hover:bg-[#CC7722]  text-secondary hover:text-secondary-foreground font-semibold px-8"
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #f97316;
          opacity: 1;
        }
        
      `}</style>
    </section>
  );
}