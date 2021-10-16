import Link from "next/link";

//element
import LinkCustom from "../../elements/LinkCustom";

//assets
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaPinterest, FaShoppingCart, FaSearch } from "react-icons/fa";
import { AiOutlineMail, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";


function Header(): JSX.Element {


  return (
    <header className="header">
      <div className="container">
        <div className="header__contacts">
          <div className="contacts__item contacts__phone-email">
            <span className="header__phone">
              <FaPhoneAlt className="icon-component-base" />+1 123 456 789
            </span>
            <span className="contacts__vertical-line"/>
            <span className="header__email">
              <AiOutlineMail className="icon-component-base"/>info@company.com
            </span>
          </div>
          <div className="contacts__item contacts__socials">
            <div className="socials__item">
              <FaFacebookF className={"icon-component-base"}/>
            </div>
            <div className="socials__item">
              <AiOutlineTwitter className={"icon-component-base"}/>
            </div>
            <div className="socials__item">
              <FaInstagram className={"icon-component-base"}/>
            </div>
            <div className="socials__item">
              <FaPinterest className={"icon-component-base"}/>
            </div>
            <div className="socials__item">
              <AiFillYoutube className={"icon-component-base"}/>
            </div>
          </div>
        </div>
        <div className="header__navigation">
          <div className="navigation__item navigation__logo">
            <Link href={"/"}><a className="logo"><span className="primary-color">Renoshop</span>bee</a></Link>
          </div>
          <ul className="navigation__item navigation__menu">
            <li>
              <LinkCustom label="Home" className="navigation__link navigation__link_active" href="/"/>
            </li>
            <li>
              <LinkCustom label="Store" className="navigation__link" href="/category/all"/>
            </li>
            <li>
              <LinkCustom label="Wishlist" className="navigation__link" href="/wishlist"/>
            </li>
          </ul>
          <div className="navigation__item navigation__actions">
            <Link href={"/cart"}>
              <a className="actions__item">
                <div className="actions__cart-quantity">2</div>
                <FaShoppingCart className={"icon-component-base"}/>
              </a>
            </Link>
            <div className="actions__item">
              <FaSearch className={"icon-component-base"}/>
            </div>
            <LinkCustom href="/login" className="actions__item">
              <RiLoginCircleFill className={"icon-component-base"}/>
            </LinkCustom>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
