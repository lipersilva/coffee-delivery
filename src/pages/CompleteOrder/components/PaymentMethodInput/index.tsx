import { CreditCard } from "phosphor-react";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { PaymentMethodContainer, ContentContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement, 
  PaymentMethodInputProps
  >(({ 
    id, 
    icon, 
    label, 
    ...props},
    ref) => {
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
})