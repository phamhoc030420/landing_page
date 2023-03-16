import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../assets/saller_1.jpg';
import img2 from '../../assets/saller_2.png';
import img3 from '../../assets/saller_3.png';
import img4 from '../../assets/saller_4.png';
import './saller.css';
import { FaEye, FaStar } from "react-icons/fa";
import { useState } from "react";
function Saller() {
    const [active,setActive]=useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow:2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
      };
    return ( <>
        <div className="saller">
        <h2> Best Sellers</h2>
        <Slider {...settings}>
          <div className="saller_img1">
            <img src={img1} />
            <div className="saller__img1_content">
                <h3>Classy Fashion</h3>
                <button>VIEW ALL</button>
            </div>
          </div>
          <div className='saller_img2'>
           <FaEye className="eye"></FaEye>
          <img className="img_second" src={img2} />

        
          <button className="button">ADD TO CARD</button>
            <div className="saller__content hoc">
                <div className="saller_multi">
                    <div style={{backgroundColor:'#71543A'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#CCCCCC'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#7F756C'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#505332'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#4B6978'}} className="saller_color"></div>
                    
                    {active===true?<>
                    <div style={{backgroundColor:'#FADDCB'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#AF5217'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#523621'}} className="saller_color"></div>
                    </>:<span style={{fontSize:'12px',cursor:'pointer'}}  onClick={()=>{
                        setActive(true)
                    }}>+3 more</span>}
                </div>
                <p>(Product 1) Sample-Clothing For Sale</p>
                <span className="saller__star"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                <p ><span className="saller__total">$1,560</span> &nbsp;  <span className="saller_sale">$1,200</span></p>
               
            </div>

            {/*  */}
           
          </div>
          <div className='saller_img3'>
          <FaEye className="eye3"></FaEye>
          <img className="img_second3"  src={img3} />
          <button className="button3">ADD TO CARD</button>

          <div className="saller__content hoc3">
          <div className="saller_multi">
                    <div style={{backgroundColor:'#6A372D'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#3A7079'}} className="saller_color"></div>
                    <div style={{backgroundColor:'#E49B49'}} className="saller_color"></div>
                    
                </div>
                <p>(Product 2) Sample-Clothing For Sale</p>
                <span className="saller__star"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                <p> $199.00</p>
               
          </div>
          </div>
          <div className='saller_img4'>
          <FaEye className="eye4"></FaEye>
          <img className="img_second4"  src={img4} />
          <button className="button4">ADD TO CARD</button>

            <div className="saller__content hoc4">
            <p>(Product 3) Sample-Clothing For Sale</p>
                <span className="saller__star"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                <p> $639.00</p>
               
            </div>

          </div>
          
        </Slider>
      </div>
    </> );
}

export default Saller;