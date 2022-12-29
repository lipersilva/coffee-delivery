import { HeaderButton, HeaderButtonContainer, Headercontainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header(){
  return(
    <Headercontainer>
      <div className="container">
        <img src={coffeeLogoImg} alt="" />
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill"/>
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </Headercontainer>
  )
}