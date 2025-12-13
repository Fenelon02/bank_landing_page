import Header from "./Header"
import Button from "../ui/Button"

export default function HeroSection(){
    return(
        <div className="bg-black w-full">
            <Header buttons={["Soluções", "Preços", "Sobre Nós", "Conteúdos"]}/>
            <div className="grid grid-cols-2 h-[60vh]">
               <div className="flex flex-col justify-center ml-30">
                    <h1 className="text-6xl text-blue-400 font-bold my-4">Banco Bendis</h1>
                    <p className="text-lg text-amber-50">O banco que mais cresce em toda América Latina</p>
                    <Button variant="primary" size="medium" children={"Criar Conta"} disabled={false} additionalClass="w-40 my-4"/>
               </div>
               <div>
                <img src="/images/HeroImage.png" alt="pessoa no telefone" className="w-full h-full object-cover" />
               </div>
            </div>
        </div>
    )
}