import Price from "./Price";
import StarsRate from "./StarsRate";
import Description from "./Description";
import ListCardProvider from "./ListCardProvider";
import Container  from './Container'
import Image from "./Image";
import Title from "./Title";
import FreeShipping from "./FreeShipping";
import LikeButton from "./LikeButton";
const items={}
export const CardItems= Object.assign(items, {
    Price,
    StarsRate,
    Description,
    Container,
    Image,
    Title,
    FreeShipping,
    LikeButton,
    Provider:ListCardProvider
})
