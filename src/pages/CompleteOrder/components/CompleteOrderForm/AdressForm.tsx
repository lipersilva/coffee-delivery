import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AdressForm() {
  return(
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro"/>
      <Input placeholder="Cidade"/>
      <Input placeholder="UF"/>
    </AddressFormContainer>
  );
}