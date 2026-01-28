import { buttonVariants, Variant } from "./ButtonVariants"
import { ButtonSizes, Size } from "./ButtonSizes";

type ButtonProps = {variant: Variant, disabled: boolean, children: any, size: Size, additionalClass?: string, icon?: any, onClick?: () => void}

export default function Button({variant, disabled,  children,  size,  additionalClass = "", icon, onClick} : ButtonProps){

  const btnClass = [
    buttonVariants[variant].base,
    disabled ? buttonVariants[variant].disabled : " " ,
    !disabled ? buttonVariants[variant].hover : " ",
    !disabled ? buttonVariants[variant].active : " ",
    ButtonSizes[size],
    additionalClass
  ].join(" ");

    return(
        <button className={btnClass} disabled={disabled} onClick={onClick}>
        {icon && <span className="mr-2">{icon}</span>} {children}
        </button>
    )
}