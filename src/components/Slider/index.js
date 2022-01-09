import React, {useContext, useState, useEffect} from "react";
import {
  SliderContainer,
  ActiveImgContainer,
  ActiveImg,
  ArrowLeft,
  ArrowRight,
  SliderNav,
  SliderNavItem,
  Img,
} from "./style";
import {GlobalContext} from '../../context/globalState';
import Lightbox from '../Lightbox';

const Slider = () => {
  const {product} = useContext(GlobalContext);
  const [images,setImages] = useState([]);
  const [coverImg, setCoverImg] = useState({});
  const [isLightboxActive, setIsLightboxActive] = useState(false);
  const setCoverHandler = (image) => {
    setCoverImg(image);
  }
  const arrowHandler = (isNext=true)=>{
    let newIndex;
    if(isNext){
      if(coverImg.index + 1 == images.length){
        newIndex = 0;
      }else{
        newIndex = coverImg.index + 1;
      }
    }
    else{
      if(coverImg.index == 0){
        newIndex = images.length - 1;
      }else{
        newIndex = coverImg.index -1;
      }
    }
    setCoverImg(images[newIndex]);
  }
  const lightboxHandler = ()=>{
    setIsLightboxActive(!isLightboxActive);
  }
  const closeLightboxHandler = () =>{
    setIsLightboxActive(false)
  }
  useEffect(() => {
    setImages(product.imgGallery.map((img, index)=>{
      return {...img,index}
    }));
    setCoverImg({...product.imgGallery[0],index:0});
  }, []);

  return (
    <SliderContainer>
      <ActiveImgContainer>
        <ActiveImg
          src={`${process.env.PUBLIC_URL}/images/${coverImg?.src}`}
          alt={coverImg?.alt}
          onClick={()=>lightboxHandler()}
        />
        <ArrowLeft onClick={()=>arrowHandler(false)} />
        <ArrowRight onClick={()=>arrowHandler(true)} />
      </ActiveImgContainer>
      <SliderNav>
       {
         images.map((image,index) => 
         ( <SliderNavItem className={coverImg?.index == index ? 'active':''} key={index} onClick={()=>setCoverHandler(image)} >
            <Img
              src={`${process.env.PUBLIC_URL}/images/${image?.src}`}
              alt={image?.alt}
            />
         </SliderNavItem>
         ))
       }
      </SliderNav>
      <Lightbox images={images} isActive={isLightboxActive} closeLightbox={closeLightboxHandler}/>
    </SliderContainer>
  );
};

export default Slider;
