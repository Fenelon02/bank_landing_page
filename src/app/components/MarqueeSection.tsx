import Marquee from "./Marquee";

export default function MarqueeSection(){
    return(
        <div className="flex flex-col items-center justify-center my-5">
            <h2 className="text-center text-3xl text-blue-200 font-bold">Nossos Parceiros Comerciais</h2>
            <Marquee/>
            <div className="h-1 bg-blue-200 w-full"></div>
        </div>
    )
}
