import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import shoe1 from "../../assets/pegasus1.webp"
import shoe2 from "../../assets/pegasus2.webp"
import shoe3 from "../../assets/pegasus3.webp"
import shoe4 from "../../assets/pegasus4.webp"
import shoe5 from "../../assets/pegasus5.webp"
import "./styles.css"
import { Icon } from '@iconify/react';



const ImageSlider = () => {

    const removeInlineStyles = () => {
        var allBodyTag = document.body.getElementsByClassName("thumb");
        var allthumbs = document.body.getElementsByClassName("thumbs animated");
        console.log(allthumbs)
        
        for (var i = 0; i < allBodyTag.length; i++) {
            console.log(allBodyTag[i])
            allBodyTag[i].removeAttribute("style");
        }
        
        
        for (var i = 0; i < allthumbs.length; i++) {
            console.log(allthumbs[i])
            allthumbs[i].removeAttribute("style");
        }
    }

    useEffect(() => {
        removeInlineStyles()
    },[])

    
    
  return (
    <div className=''>
    <Carousel  
    renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
           
            onClick={clickHandler}
          >
            <Icon icon="material-symbols:arrow-circle-left-rounded" className='current-img-left-arrow'/>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
           
            onClick={clickHandler}
          >
            <Icon icon="material-symbols:arrow-circle-right-rounded" className='current-img-right-arrow'/>
          </div>
        );
      }}
     className='item-detail-size' autoPlay infiniteLoop showArrows={true} showThumbs={true} showStatus={false} dynamicHeight={true}>
        <div  className='item-detail-size'>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"5px"}} alt='image1' src={shoe1} />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div  className='item-detail-size'>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"5px"}} alt='image2' src={shoe2} />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div  className='item-detail-size'>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"5px"}} alt='image3' src={shoe3} />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div  className='item-detail-size'>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"5px"}} alt='image3' src={shoe4} />
            {/* <p className="legend">Legend 3</p> */}
        </div>
        <div  className='item-detail-size'>
            <img style={{height:"100%",objectFit:"cover",borderRadius:"5px"}} alt='image3' src={shoe5} />
            {/* <p className="legend">Legend 3</p> */}
        </div>
    </Carousel>
    </div>
  )
}

export default ImageSlider

