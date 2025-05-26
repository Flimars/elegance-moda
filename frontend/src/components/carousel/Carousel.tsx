'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Importe os estilos do react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  slides: {
    image: string;
    alt: string;
    title?: string;
    subtitle?: string;
  }[];
  autoplay?: boolean;
  speed?: number;
  dots?: boolean;
  arrows?: boolean;
  className?: string;
}

const Carousel = ({
  slides,
  autoplay = true,
  speed = 500,
  dots = true,
  arrows = true,
  className = '',
}: CarouselProps) => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
        onClick={onClick}
      >
        <FaChevronRight className="text-gray-800" size={20} />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
        onClick={onClick}
      >
        <FaChevronLeft className="text-gray-800" size={20} />
      </button>
    );
  };

  const settings = {
    dots: dots,
    infinite: true,
    speed: speed,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    nextArrow: arrows ? <NextArrow /> : undefined,
    prevArrow: arrows ? <PrevArrow /> : undefined,
    dotsClass: 'slick-dots custom-dots',
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center items-center mt-4"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 mx-1 bg-gray-300 hover:bg-rose-400 rounded-full transition-colors" />
    ),
  };

  return (
    <div className={`carousel-container relative ${className}`}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] md:h-[600px]">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            {(slide.title || slide.subtitle) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-20">
                {slide.title && (
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
