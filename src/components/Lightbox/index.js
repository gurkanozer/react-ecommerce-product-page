import React, { useState, useEffect } from "react";
import {
  ActiveImage,
  LightboxContainer,
  LightboxInner,
  LightboxHeader,
  LightboxFooter,
  LightboxBody,
  LightboxCloseButton,
  LightboxNav,
  LightboxNavItem,
  Img,
  ArrowRight,
  ArrowLeft
} from "./style";
import Overlay from "../Overlay";

const Lightbox = ({ images, isActive, closeLightbox }) => {
  const [activeImage, setActiveImage] = useState();
  const setActiveImageHandler = (image) => {
    setActiveImage(image);
  }
  const arrowHandler = (isNext=true)=>{
    let newIndex;
    if(isNext){
      if(activeImage.index + 1 == images.length){
        newIndex = 0;
      }else{
        newIndex = activeImage.index + 1;
      }
    }
    else{
      if(activeImage.index == 0){
        newIndex = images.length - 1;
      }else{
        newIndex = activeImage.index -1;
      }
    }
    setActiveImage(images[newIndex]);
  }
  useEffect(() => {
    setActiveImage(images.find((img) => img.index == 0));
  }, [images]);
  return (
    <LightboxContainer className={isActive ? 'active':''}>
      <LightboxInner>
        <LightboxHeader>
            <LightboxCloseButton onClick={()=>closeLightbox()}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/></svg>
            </LightboxCloseButton>
        </LightboxHeader>
        <LightboxBody>
          <ActiveImage
            src={`${process.env.PUBLIC_URL}/images/${activeImage?.src}`}
            alt={activeImage?.alt}
          />
          <ArrowRight onClick={()=>arrowHandler(true)} >
            <svg viewBox="-6 -4 26 36" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="4" fill="none" fillRule="evenodd"/></svg>
          </ArrowRight>
          <ArrowLeft onClick={()=>arrowHandler(false)} >
          <svg viewBox="-4 -4 26 36" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="4" fill="none" fillRule="evenodd"/></svg>
          </ArrowLeft>
        </LightboxBody>
        <LightboxFooter>
            <LightboxNav>
                {
                    images.map((image,index) => (
                        <LightboxNavItem key={index}
                        onClick={()=>setActiveImageHandler(image)} 
                        >
                            <Img 
                            src={`${process.env.PUBLIC_URL}/images/${image?.src}`}
                            alt={image?.alt}
                            />
                        </LightboxNavItem>
                    ))
                }
                
            </LightboxNav>
        </LightboxFooter>
      </LightboxInner>
      <Overlay isActive={true}  onClick={closeLightbox}/>
    </LightboxContainer>
  );
};

export default Lightbox;
