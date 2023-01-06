import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: "md" | "sm";

}

export function QuantityInput({ quantity, onIncrease, onDecrease,size = "md"}: QuantityInputProps) {
  return(
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill"/>
      </IconWrapper>
      <input type="number" readOnly value={quantity}/>
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill"/>
      </IconWrapper>
    </QuantityInputContainer>
  )
}