import logo from "./logo.png";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import girl from "./girl.webp";
import bag from "./bag.avif";
import watch from "./watch.jpg";
import Headphone from "./watch.png";
import shoes from "./shoes.jpg";
import shoess from "./shoess.png";
import shoesv from "./shoes-sv.svg";
import troser1 from "./troser1.webp";
import troser2 from "./troser2.webp";
import banner1 from "./banner1.jpg";
import banner2 from "./banner2.jpg";
import img18 from "./img18.jpg";
import img19 from "./img19.jpg";
import img20 from "./img20.jpg";
import img21 from "./img21.jpg";
import img22 from "./img22.jpg";
import img23 from "./img23.jpg";
import img24 from "./img24.jpg";
import img25 from "./img25.jpg";
import men2 from "./men2.webp";
import men3 from "./men3.webp";
import men4 from "./men4.webp";
import men5 from "./men5.webp";
import men6 from "./men6.webp";
import men7 from "./men7.webp";
import loginpage from "./loginpage.jpg";
import MensClothing from "./mens-clothing.jpg";
import Payapl from "./paypal.svg";
import SkrillLogo from "./skrill-logo.svg";
import GooglePay from "./google-pay.svg";
import VisaCard from "./visa.svg";
import MasterCard from "./master-card.svg";
import BackPack from "../images/svg-icons/backpack.svg";
import Beannie from "../images/svg-icons/beannie.svg";
import Bra from "../images/svg-icons/bra.svg";
import Briefs from "../images/svg-icons/briefs.svg";
import Dress from "../images/svg-icons/dress.svg";
import Flip from "../images/svg-icons/flip.svg";
import Hanger from "../images/svg-icons/hanger.svg";
import Heels from "../images/svg-icons/heels.svg";
import Hoodies from "../images/svg-icons/hoodie.svg";
import Pants from "../images/svg-icons/pants.svg";
import Polo from "../images/svg-icons/polo.svg";
import Ragged from "../images/svg-icons/ragged.svg";
import Shirt from "../images/svg-icons/shirt.svg";
import Snapback from "../images/svg-icons/snapback.svg";
import Socks from "../images/svg-icons/socks.svg";
import Tanktop from "../images/svg-icons/tanktop.svg";
import Vans from "../images/svg-icons/vans.svg";
import Coat from "../images/svg-icons/coat.svg";
import Party from "../images/svg-icons/party.svg";
import Ties from "../images/svg-icons/ties.svg";
import HighHeels from "../images/svg-icons/high-heels.svg";
import Fax from "../images/svg-icons/fax.svg";


interface ImageMap {
  [key: string]: string;
}

const IMAGES: ImageMap = {
  // svg icons
  LOGINPAGE :loginpage,
  BACKPACK:BackPack,
  BEANNIE:Beannie,
  BRA:Bra,
  FAX:Fax,
  HIGHHEELS:HighHeels,
  TIES:Ties,
  PARTY:Party,
  COAT:Coat,
  BRIEFS: Briefs,
  DRESS:Dress,
  FLIP:Flip,
  HANGER:Hanger,
  HEELS:Heels,
  HOODIES:Hoodies,
  PANTS:Pants,
  POLO:Polo,
  RAGGED:Ragged,
  SHIRT:Shirt,
  SNAPBACK:Snapback,
  SOCKS:Socks,
  TANKTOP:Tanktop,
  VANS:Vans,
  
  MEN2 :men2,
  MEN3 :men3,
  MEN4 :men4,
  MEN5 :men5,
  MEN6 :men6,
  MEN7 :men7,
  LOGO: logo,
  IMG3: img3,
  IMG4: img4,
  IMG5: img5,
  GIRL: girl,
  BAG: bag,
  WATCH: watch,
  SHOES: shoes,
  SHOESS: shoess,
  SHOESV: shoesv,
  TROSER1: troser1,
  TROSER2: troser2,
  BANNER1: banner1,
  BANNER2: banner2,
  IMG18: img18,
  IMG19: img19,
  IMG20: img20,
  IMG21: img21,
  IMG22: img22,
  IMG23: img23,
  IMG24: img24,
  IMG25: img25,
  MENS_CLOTHING: MensClothing,
  PAYPAL: Payapl,
  SkrillLogo: SkrillLogo,
  GOOGLEPAY: GooglePay,
  VISA: VisaCard,
  MASTER: MasterCard,
  HEADPHONE:Headphone,
};

export default IMAGES;
