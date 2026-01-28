"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import FeatureCard from "../ui/FeatureCard"
import CreditCrad from "@/public/svg/CreditCard"
import AmericanExpressLogo from "@/public/svg/AmericanExpressLogo"
import Graphic from "@/public/svg/Graphic"


type BankFeature = {
    msg: string;
    image: React.ReactNode;
    variant: "primary" | "secondary" | "tertiary";
};


export default function FeaturesCarousel() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const BankFeature: BankFeature[] = [
        {
            msg: "Menores Taxas de Maquininha Disponíveis no Mercado",
            image: <AmericanExpressLogo />,
            variant: "primary",
        },
        {
            msg: "Cashback de 5% em Compras",
            image: <CreditCrad />,
            variant: "secondary",
        },
        {
            msg: "IA Integrada Para Ajudar em suas Finanças",
            image: <Graphic />,
            variant: "tertiary",
        },
    ];


    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className="relative w-full max-w-7xl px-12 md:px-16"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {BankFeature.map((feature, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 ">
                        <div className="">
                            <FeatureCard msg={feature.msg} image={feature.image} variant={feature.variant} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


