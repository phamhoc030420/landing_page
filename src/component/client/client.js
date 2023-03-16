import { FaCertificate } from 'react-icons/fa';
import './client.css';
import start from '../../assets/start.jpg'
function Client() {
    return ( <>
        <div className="client">
        <div className="client__content">

        <h3>What Our Client Says</h3>
        <img src={start} style={{height:'20px',width:'100px'}}/>
        <p>
        "Your products are really amazing, thanks to it I don't have to think much about what to wear every day. And from the attached accessories, I can coordinate a lot of different outfits without being boring. I really recommend it for women who are busy but still want to show their high fashion sense every day."
        </p>
        <h4>
        Elizabeth Jane
        </h4>
        <p>

    OFFICE STAFF
        </p>
        </div>

        </div>
    </> );
}

export default Client;