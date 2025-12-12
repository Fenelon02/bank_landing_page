import Button from "../ui/Button"
import Logo from "@/public/svg/Logo"

type HeaderProps = {buttons: string[]}

export default function Header({buttons} : HeaderProps){

    

    return (
        <div className="grid grid-cols-2 h-[8vh] z-0 fixed w-full">
            <div className="flex items-center ml-3">
                <Button variant="transparent" size="medium" disabled={false} icon={<Logo className="text-white"/>} children={"Banco Bendis"} additionalClass="flex"/>
            </div>
            <div className="flex items-center justify-end mr-3">
                {
                    buttons.map(btn => (
                        <Button variant="transparent" size="medium" disabled={false} children={btn} key={btn} additionalClass="m-2"/>                        
                    ))
                }
            </div>
        </div>
    )

}