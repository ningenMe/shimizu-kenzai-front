import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFlip,Pagination,Navigation} from 'swiper/core';
import {HomeImageCard} from 'molecules/HomeMolecules'
import {HomeImageContent} from 'interfaces/Content'
import {Alert} from 'react-bootstrap'

SwiperCore.use([EffectFlip,Pagination,Navigation]);

export const NotificationFrame = () => {

  const prefix : string = "この環境は env です。";
  const env = process.env.REACT_APP_ENV;

  if(env === "stg") {
    return (
      <Alert variant={"danger"}>
        {prefix.replace("env",env)}
      </Alert>
    );
  }
  if(env === "dev") {
    return (
      <Alert variant={"success"}>
        {prefix.replace("env",env)}
      </Alert>
    );
  }
  return <></>      
}

export const ImageSlideFrame = () => {
  const prefix = process.env.REACT_APP_PATH_PREFIX;

  const imageContents : ReadonlyArray<HomeImageContent> = [
    {title:"slide1",src: prefix + "/slide/slide1.jpeg"},
    {title:"slide2",src: prefix + "/slide/slide2.jpeg"},
    {title:"slide3",src: prefix + "/slide/slide3.jpeg"},
    {title:"slide4",src: prefix + "/slide/slide4.jpeg"},
  ]

  return (
    <Swiper
    effect={'flip'}
    grabCursor={true}
    spaceBetween={300}
    slidesPerView={1}
    pagination={{"clickable": true}}
    navigation={true}
    style={{
      padding:"50px"
    }}
  >
    {imageContents.map((content:HomeImageContent) => {
      return (
        <SwiperSlide>
          <HomeImageCard content={content} />
        </SwiperSlide>  
      );
    })}
  </Swiper>
  );

}
