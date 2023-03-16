import './banner.css';
import banner from '../../assets/banner.jpg';
function Banner() {
    return ( <>
        <div className='banner'>
            <div className='banner__img'>
                <img src={banner} />
            </div>
            <div className='banner__content'>
            <h5>Our Categories </h5>
            <p>Activewear/Coats & Jackets / <span>Dresses</span> Skirts & Tops</p>
            <p>Jumpsuits & Playsuits / Bikinis & Swimsuits/Accessories</p>
            </div>
        </div>
    </> );
}

export default Banner;