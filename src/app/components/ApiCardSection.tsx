import ApiCardSvg from "@/public/svg/ApiCardSVG";

export default function ApiCardSection() {
    return (
        <div className="m-4 md:m-10 bg-blue-900 rounded-3xl lg:h-[38vh] grid grid-cols-2 lg:grid-cols-3">
            <div className="p-4 md:p-7 text-3xl md:text-4xl font-bold text-white col-span-1 lg:col-span-2 text-left ">
                <h2>
                    API de pagamentos de fácil integração com diferentes sistemas
                </h2>
            </div>
            <div className="col-span-1 overflow-hidden">
                <ApiCardSvg />
            </div>
        </div>
    )
}