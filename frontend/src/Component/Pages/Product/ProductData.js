import bottle1 from "../../Image/Product/Bottle.jpg";
import bottle2 from "../../Image/Product/bottle2.jpg";
import paper_refill from "../../Image/Product/paper_refill.jpg";
import mechanic_pencil from "../../Image/Product/Mechanical_Pencil.jpg";
import iPhone15 from "../../Image/Product/iphone15.jpg";
import airPurifier from "../../Image/Product/air_purifier.jpg";
import appleWatch from "../../Image/Product/appleWatch.jpg";
import beatXpWatch from "../../Image/Product/beatXP.jpg";
import fireBoult from "../../Image/Product/firebolt.jpg";
import onePlus from "../../Image/Product/oneplus.jpg";
import vivo from "../../Image/Product/vivo.jpg";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$8",
    imageSrc: `${bottle1}`,
    //   "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    category: "bottle",
  },
  {
    id: 2,
    name: "Focus Paper Refill",
    href: "#",
    price: "$19",
    imageSrc: `${paper_refill}`,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    category: "pen",
  },
  {
    id: 4,
    name: "Nomad Tumbler",
    href: "#",
    price: "$5",
    imageSrc: `${bottle2}`,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    category: "bottle",
  },
  {
    id: 6,
    name: "Iphone 15 Pro Max",
    href: "#",
    price: "$40000",
    imageSrc: `${iPhone15}`,
    imageAlt: "iphone15",
    category: "phone",
  },
  {
    id: 8,
    name: "Air Purifier",
    href: "#",
    price: "$2100",
    imageSrc: `${airPurifier}`,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "pen",
  },
  {
    id: 10,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$25",
    imageSrc: `${mechanic_pencil}`,
    imageAlt: "purifier.",
    category: "purifier",
  },
  {
    id: 12,
    name: "Apple Watch",
    href: "#",
    price: "$220",
    imageSrc: `${appleWatch}`,
    imageAlt: "AppleWatch",
    category: "watch",
  },
  {
    id: 14,
    name: "Vivo phone",
    href: "#",
    price: "$550",
    imageSrc: `${vivo}`,
    imageAlt: "Vivo phone",
    category: "phone",
  },
  {
    id: 16,
    name: "BeatXp Watch",
    href: "#",
    price: "$90",
    imageSrc: `${beatXpWatch}`,
    imageAlt: "BeatXpWatch",
    category: "watch",
  },
  {
    id: 18,
    name: "OnePlus Phone",
    href: "#",
    price: "$680",
    imageSrc: `${onePlus}`,
    imageAlt: "OnePlus Phone",
    category: "phone",
  },
  {
    id: 20,
    name: "FireBolt Watch",
    href: "#",
    price: "$110",
    imageSrc: `${fireBoult}`,
    imageAlt: "FireBolt Watch",
    category: "watch",
  },
];
export default products;
