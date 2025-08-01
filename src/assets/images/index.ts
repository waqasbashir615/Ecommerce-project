import logo from "./logo.png";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import girl from "./girl.webp";
import bag from "./bag.avif";
import watch from "./watch.jpg";
import Headphone from "./watch.png";
import shoes from "./shoes.jpg";
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


interface ImageMap {
  [key: string]: string;
}

const IMAGES: ImageMap = {
  LOGINPAGE :loginpage,
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
