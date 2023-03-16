import './outfit.css'
import img1 from '../../assets/outfits_left.jpg'
import img2 from '../../assets/outfit_right.jpg'
function Outfit() {
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
        <div className='outfit__image2'>

            <img src={img2} />
        </div>
    </div>
    </>
     );
}

export default Outfit;