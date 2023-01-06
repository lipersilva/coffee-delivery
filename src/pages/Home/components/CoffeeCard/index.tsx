import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import americano from "../../../../../public/coffees/americano.png";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
  description: string;
  id: number;
  tags: string[];
  name: string;
  price: number;
  photo: string;
}
interface CoffeeCardProps {
  coffee: Coffee;
}
export function CoffeeCard({ coffee }: CoffeeCardProps) {
  
  const { addCoffeeToCart } = useCart();
  const [quantity, setQuatity] = useState(1);
  const formattedPrice = formatMoney(coffee.price);
  
  function handleIncrease(){
    setQuatity(state => state + 1);
  };

  function handleDecrease(){
    setQuatity(state => state - 1);
  };

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return(
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={quantity}/>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill"/>
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}

function addCoffeeToCart(coffeeToAdd: { quantity: number; description: string; id: number; tags: string[]; name: string; price: number; photo: string; }) {
  throw new Error("Function not implemented.");
}
