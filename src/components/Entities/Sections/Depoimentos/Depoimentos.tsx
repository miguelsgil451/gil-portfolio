import Slider from "react-slick";
import depoimentos from "../../../../data/Depoimentos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DepoimentoCard from "./DepoimentoCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};


export default function DepoimentosSection(){
    return (
        <section
        id="depoimentos"
        className="w-full py-10 flex justify-center items-center bg-zinc-900/20"
      >
        <div className="w-full max-w-5xl px-4">
          <h2 className="text-3xl md:text-4xl text-emerald-500 font-extrabold mb-8 font-mono text-center">
            DEPOIMENTOS
          </h2>
  
          <div className="w-full relative overflow-hidden">
            <Slider {...settings}>
              {depoimentos.map((depoimento, index) => (
                <DepoimentoCard depoimento={depoimento} key={index}/>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    )
}