import FeatureCard from "../ui/FeatureCard"
import CreditCrad from "@/public/svg/CreditCard"
import AmericanExpressLogo from "@/public/svg/AmericanExpressLogo"
import Graphic from "@/public/svg/Graphic"

export default function FeatureSection(){
    return(
        <div className="flex bg-blue-300 justify-around py-10 items-center">
            <div>
                <FeatureCard msg={"Menores Taxas de Maquininha Disponíveis no Mercado"} image={<AmericanExpressLogo/>} variant="primary"/>
            </div>
            <div>
                <FeatureCard msg={"Cashback de 5% em Compras"} image={<CreditCrad/>} variant="secondary"/>
            </div>
            <div>
                <FeatureCard msg={"IA Integrada Para Ajudar em suas Finanças"} image={<Graphic/>} variant="tertiary"/>
            </div>
        </div>
    )
}