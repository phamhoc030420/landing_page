import './outfit.css'
import img1 from '../../assets/outfits_left.jpg'
import img2 from '../../assets/outfit_right.jpg'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Outfit() {
    // useEffect(()=>{
    //     AOS.init({duration:2000})
    // },[])
    return ( <>
    <div className="outfit">
        <div className='outfit__content'>
            <h2>Our Exclusively Designed Outfits</h2>
            <p>The dresses are delicately cut, the exclusive designs from our designers guarantee to meet all the require- ments of customers even the most difficult ones.</p>
           <button>SHOP NOW</button>

        </div>
        <div className='outfit__image1'>
        <img src={img1} />

        </div>
        <div className='outfit__image2' data-aos='fade-left'>

            <img src={img2} />
        </div>
    </div>
    </>
     );
}

export default Outfit;