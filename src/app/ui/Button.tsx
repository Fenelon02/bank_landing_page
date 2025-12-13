import { buttonVariants, Variant } from "./buttonVariants"
import { ButtonSizes, Size } from "./ButtonSizes";

type ButtonProps = {variant: Variant, disabled: boolean, children: any, size: Size, additionalClass?: string, icon?: any}

export default function Button({variant, disabled,  children,  size,  additionalClass = "", icon} : ButtonProps){

  const btnClass = [
    buttonVariants[variant].base,
    disabled ? buttonVariants[variant].disabled : " " ,
    !disabled ? buttonVariants[variant].hover : " ",
    !disabled ? buttonVariants[variant].active : " ",
    ButtonSizes[size],
    additionalClass
  ].join(" ");

    return(
        <button className={btnClass} disabled={disabled}>
        {icon && <span className="mr-2">{icon}</span>} {children}
        </button>
    )
}