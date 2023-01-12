import { HeaderButton, HeaderButtonContainer, Headercontainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";

// interface Location {
//   city?: string;
//   state?: string;
// }

// interface Coords {
//   latitude?: number;
//   longitude?: number;
// }


export function Header(){
  const { cartQuantity } = useCart();
  // const apiKey = '952442dc1cce43b880e6622e23353cff';

  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (err) => setError(error)
    );
  }, []);

  useEffect(() => {
    if (location) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=751d8760d88a9320d168bddef82ac1c8`
        )
        .then((response: { data: any; }) => {
          setWeatherData(response.data);
        })
        .catch((error: SetStateAction<null>) => {
          setError(error);
        });
    }
  }, [location]);

  if (!weatherData) {
    return <div></div>;
  }
  // const [location, setLocation] = useState<Location>({});

  // async function getLocation() {
    
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     axios
  //     .get(
  //       `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${apiKey}`
  //     )
  //     .then((response) => {
  //       const city = response.data.results[0].components.town;
  //       const state = response.data.results[0].components.state_code;
  //       setLocation({ city:city, state:state });
  //       console.log(response.data)
  //     });
  //   });
  // }

  // useEffect(() => {
  //   getLocation();
  // }, []);


  return(
    <Headercontainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill"/>
            {weatherData.name}, {weatherData.sys.country}
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >=  1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill"/>
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </Headercontainer>
  )
}