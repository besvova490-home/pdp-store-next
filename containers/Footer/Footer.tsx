import { ToastContainer } from "react-toastify";

//assets
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaCcAmazonPay,
  FaCcStripe
} from "react-icons/fa";
import { AiOutlineMail, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";


function Footer(): JSX.Element {


  return (
    <footer className="footer">
      <div className="container">
        <div className="socials-share">
          <p className="socials-share__description shor-description">We’re confident we’ve provided all the best for
        you. Stay conne</p>
          <div className="socials-share__logos">
            <div className="socials-share__item"><FaFacebookF/></div>
            <div className="socials-share__item"><FaInstagram/></div>
            <div className="socials-share__item"><FaPinterest/></div>
            <div className="socials-share__item"><AiOutlineTwitter/></div>
            <div className="socials-share__item"><AiFillYoutube/></div>
          </div>
          <div className="empty"/>
        </div>
      </div>
      <div className="footer__navigation">
        <div className="footer-navigation__block">
          <h3 className="footer-navigation__title bold-text">Information</h3>
          <div className="footer-navigation__links">
            <p className="footer-navigation__link">Delivery Information</p>
            <p className="footer-navigation__link">Discount</p>
            <p className="footer-navigation__link">Sitemap</p>
            <p className="footer-navigation__link">Privacy Policy</p>
            <p className="footer-navigation__link">My Acc</p>
          </div>
        </div>
        <div className="footer-navigation__block">
          <h3 className="footer-navigation__title bold-text">My account</h3>
          <div className="footer-navigation__links">
            <p className="footer-navigation__link">Sign In</p>
            <p className="footer-navigation__link">View Cart</p>
            <p className="footer-navigation__link">My wishlist</p>
            <p className="footer-navigation__link">Check out</p>
            <p className="footer-navigation__link">Track my order</p>
          </div>
        </div>
        <div className="footer-navigation__block">
          <h3 className="footer-navigation__title bold-text">help</h3>
          <div className="footer-navigation__links">
            <p className="footer-navigation__link">F.A.Q</p>
            <p className="footer-navigation__link">Shipping</p>
            <p className="footer-navigation__link">Contact Us</p>
            <p className="footer-navigation__link">Privacy Policy</p>
          </div>
        </div>
        <div className="footer-navigation__block">
          <h3 className="footer-navigation__title bold-text">Contact info</h3>
          <div className="footer-navigation__links">
            <div className="footer-navigation__link">
              <GiEarthAmerica className="link__icon"/>
              <span className="link__text">1234 Your Address, Country.</span>
            </div>
            <div className="footer-navigation__link">
              <FaPhoneAlt className="link__icon"/>
              <span className="link__text">+1 234 5678 9999</span>
            </div>
            <div className="footer-navigation__link">
              <AiOutlineMail className="link__icon"/>
              <span className="link-text">mail@domain.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <p className="payment__description">Copyright 2017 RenoshopBee all right reserved - Design by Bee</p>
        <div className="payment__cards">
          <FaCcAmazonPay className="payment__card"/>
          <FaCcMastercard className="payment__card"/>
          <FaCcPaypal className="payment__card"/>
          <FaCcStripe className="payment__card"/>
          <FaCcVisa className="payment__card"/>
        </div>
      </div>
      <ToastContainer/>
    </footer>);
}

export default Footer;
