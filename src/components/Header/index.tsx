import { HeaderButton, HeaderButtonContainer, Headercontainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom";

export function Header(){
  return(
    <Headercontainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill"/>
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </Headercontainer>
  )
}