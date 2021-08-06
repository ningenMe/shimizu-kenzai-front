import {Card,CardMedia,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFlip,Pagination,Navigation} from 'swiper/core';
import {PresidentImageContent} from 'interfaces/Content'
import {HomeImageCard,HomeSlideTitle} from 'molecules/HomeMolecules'
import {HomeImageContent} from 'interfaces/Content'
import {Alert} from 'react-bootstrap'
import {KosugiMaruStyle} from 'styles/FontStyle'
 
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

export const TopCardFrame = () => {

  const prefix = process.env.REACT_APP_PATH_PREFIX;

  return (
    <Card elevation={10}>
      <CardMedia
        component="img"
        title={"top"}
        alt={"top"}
        src={prefix + "/top_demo.jpg"}
        style = {{height:600, width:1230, padding:"10px"}}
      />
    </Card>
  );
}


export const PresidentFrame = () => {

  const prefix = process.env.REACT_APP_PATH_PREFIX;
  const content : PresidentImageContent = {
    title:"社長の言葉", 
    bodyList: ["清水建材株式会社は","色んなことを","頑張る会社です"],
    imageTitle: "president",
    src: prefix + "/president.jpeg",
  }

  return (
    <Card 
      elevation={10}
      style={{margin:"80px"}}
    >
      <Grid container>
        <Grid xs={12} sm={8} item>
          <CardMedia
            component="img"
            title={content.imageTitle}
            alt={content.imageTitle}
            src={content.src}
            style = {{height:400, width:600}}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <Divider
            style = {{
              height:5
            }}
          />
          <CardContent>
            <Typography variant="h4" style={KosugiMaruStyle}>
              {content.title}
            </Typography>
            <Divider
              style = {{
                height:5
              }}
            />
            {content.bodyList.map((body:string) => 
              <Typography variant="body1" style={KosugiMaruStyle}>
                {body}
              </Typography>          
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
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
    <>
      <HomeSlideTitle/>
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
  </>
  );

}
