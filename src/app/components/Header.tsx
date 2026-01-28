import Button from "../ui/Button"
import Logo from "@/public/svg/Logo"
import HeaderSection from "./HeaderSection"

type HeaderProps = {buttons: string[]}

export default function Header({buttons} : HeaderProps){

    return (
        <div className="grid grid-cols-2 h-[8vh] fixed w-full">
            <div className="flex items-center ml-3 col-span-1">
                <Button variant="transparent" size="medium" disabled={false} icon={<Logo className="text-white"/>} children={"Banco Bendis"} additionalClass="flex"/>
            </div>
            <div className="hidden items-center justify-end mr-3 lg:flex col-span-1">
                {
                    buttons.map(btn => (
                        <Button variant="transparent" size="medium" disabled={false} children={btn} key={btn} additionalClass="mr-3"/>                        
                    ))
                }
            </div>
            <div className="flex justify-end lg:hidden  col-span-1">
                <HeaderSection buttons={buttons} />
            </div>
        </div>
    )

}