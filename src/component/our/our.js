import { useEffect, useState } from 'react';
import { FaBullseye, FaStar } from 'react-icons/fa';
import our_1 from '../../assets/our.jpg';
import our_2 from '../../assets/our_1.png';
import anh1 from '../../assets/saller_2.png'
import anh2 from '../../assets/saller_3.png'
import './our.css';
// import { Card } from 'antd';
// import AOS from 'aos'
// import 'aos/dist/aos.css'
function Our() {
    const [active,setActive]=useState(false);
    const [anh,setAnh]=useState(1);
    const imageOur=anh===1?our_2:(anh===2?anh1:anh2);
    // useEffect(()=>{
    //     AOS.init({duration:1000})
    // },[])
    return ( <>
    <h2>Our Collection</h2>
    <div className='our'>
        <div className='our__left'>
            <img src={our_1} />
            <div className='our__icon'>
            <FaBullseye onClick={()=>{
                setAnh(2)
            }}></FaBullseye>
            <FaBullseye onClick={()=>{
                 setAnh(3)
            }}></FaBullseye>
            <FaBullseye onClick={()=>{
               setAnh(1)
            }}></FaBullseye>

            </div>
        </div>


        <div className='our__right'>
            <img src={imageOur}/>
            <div className='our__content'>
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
                <p>(Product {anh}) Sample-Clothing For Sale</p>
                <span className={anh==2?'light__star':"saller__star"}><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>
                <p ><span className="saller__total">${620.00*anh}</span> &nbsp;  <span className="saller_sale">${625.00*anh}</span></p>
                <p className='pagination'>&#60;&emsp;&emsp;&ensp;&ensp; 1/3 &emsp;&emsp;&ensp;&ensp;&#62;</p>
            </div>
        </div>
    </div>
    </> );
}

export default Our;