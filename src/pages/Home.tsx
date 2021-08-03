import {Container,Grid} from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFlip,Pagination,Navigation} from 'swiper/core';
import {HomeImageCard} from 'molecules/HomeMolecules'
import {HomeImageContent} from 'interfaces/Content'

SwiperCore.use([EffectFlip,Pagination,Navigation]);

export const Home = () => {
    
  const imageContents : ReadonlyArray<HomeImageContent> = [
    {title:"slide1",src:"/slide/slide1.jpeg"},
    {title:"slide2",src:"/slide/slide2.jpeg"},
    {title:"slide3",src:"/slide/slide3.jpeg"},
    {title:"slide4",src:"/slide/slide4.jpeg"},
  ]

  return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} spacing={3}>
          </Grid>
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

          <Grid item xs={12} spacing={3}>
          </Grid>
        </Grid>
      </Container>
    );
}
