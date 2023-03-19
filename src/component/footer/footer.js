import './footer.css'
import { Col, Input, Row } from 'antd';
import {FacebookFilled, InstagramFilled, LinkedinFilled, MailOutlined, TwitterCircleFilled, UpSquareOutlined, YoutubeFilled} from '@ant-design/icons';
import img from '../../assets/footer.jpg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCcAmazonPay, FaCcDiscover, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import AOS from 'aos'
// import 'aos/dist/aos.css'
import { useEffect } from 'react';
function Footer() {
    useEffect(()=>{
        AOS.init({duration:2500})
    },[])
    var  emailIcon = <MailOutlined  size={10}  />;
    return ( <>
        <div className="footer">
        <div className='footer__first'>
            <h1>Classy</h1>
            <p>Sign Up for execlusive updates, new arrivals & insider only discounts!</p>
            {/* <MailOutlined /> */}
            <Input placeholder='Email Address &emsp;&emsp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBSCRIBE &#8594;' className='footer__input'></Input>
            <p className='footer__by'><UpSquareOutlined /> By providing email, you consent to out Privacy Policy and Terms & Conditions.</p>

        </div>
        <div className='footer__contact' data-aos='zoom-out'>
            <Row gutter={[8, 16]}>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Shop</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Further Info</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Customer Service</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>New In</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>About Us</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Search Terms</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Trend Now</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Contact Us</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Advances Search</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Best Sellers</Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Customer Service</Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Orders & Returns</Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Collections</Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Shipping & Returns</Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Contact Us</Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Lookbook</Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Private Policy</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Theme FAQs</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Top Brands</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Terms & Conditions</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Consultant</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}></Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Blog</Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} span={8}>Store Locations</Col>
            </Row>
        </div>
        <div className='footer__left footer__about'>
            <p>685 Market Street,</p>
            <p>San Francisco, CA 94105,</p>
            <p>United States</p>
            <p>Call us: + 1-(123)-456-CLASSY</p>
            <p>Email: phamhoc2902@gmail.com</p>
            <div className='footer__icon'>
            <FacebookFilled />
            <TwitterCircleFilled />
            <InstagramFilled />
            <YoutubeFilled />
            <LinkedinFilled />
            </div>
            <p className='footer_name'>More Way to Shop</p>
            <img style={{height:'50px',width:'200px'}} src={img} />
        </div>   
        <div className='footer__left'>
            <hr />
            <div className='footer_last'>
            &#169; 2022 Class Fashion. Powered by PhamHoc
            
            <FaCcAmazonPay></FaCcAmazonPay>
            <FaCcDiscover></FaCcDiscover>
            <FaCcAmazonPay></FaCcAmazonPay>
            <FaCcPaypal></FaCcPaypal>
            <FaCcMastercard></FaCcMastercard>
            <FaCcVisa></FaCcVisa>
            </div>
        </div>     

        </div>
    </> );
}

export default Footer;