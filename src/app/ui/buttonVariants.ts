export const buttonVariants = {
    primary: {
        base: "bg-blue-300 text-black rounded-lg cursor-pointer",
        hover: "hover:bg-blue-400",
        active: "active:scale-95",
        disabled: "opacity-50 cursor-not-allowed",
    }, secordary: {
        base: "bg-amber-100 text-white rounded-lg cursor-pointer",
        hover: "hover:bg-amber-200",
        active: "activate:scale-95",
        disabled: "opacity-50 cursor-not-allowed",
    }, outline: {
        base: "bg-transparent text-blue-700 border border-blue-700 rounded-lg cursor-pointer",
        hover: "hover:bg-blue-700 text-white transition-color delay-50",
        active: "activate:scale-95",
        disabled: "opacity-50 cursor-not-allowed",
    }, transparent: {
        base: "bg-white/12 backdrop-blur-xs border outline-none shadow shadow-gray-600 border-white/20 rounded-lg cursor-pointer text-blue-300",
        hover: "hover:backdrop-blur-sm hover:shadow hover:shadow-gray-700",
        active: "activate:scale-95",
        disabled: "opacity-50 cursor-not-allowed",
    }, link: {
        base: "text-blue-500 bg-transparent cursor-pointer",
        hover: "hover:underline hover:text-blue-700",
        active: "",
        disabled: "opacity-50 cursor-not-allowed",        
    }
}


export type Variant = keyof typeof buttonVariants