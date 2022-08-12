import Container from "./Container";
import CardProvider from "./Context/CardProvider";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";

export const CardItems= Object.assign({},{
    Container,
    Name,
    Price,
    Description,
    Provider: CardProvider
})