import Card from "../Card/Card";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  movies?: IC[];
};

type IC = {title: string, poster_path: string}

export default function MoviesArticle({ movies }: Props) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      slidesPerView={5}
      slidesPerGroup={5}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      centeredSlidesBounds={true}
      centeredSlides={true}
      // loopAdditionalSlides={1}
    >
      {
        movies?.map((movie, idx)=>{
          return(
            <SwiperSlide key={idx}><Card title={movie.title} poster_path={movie.poster_path}/></SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}
