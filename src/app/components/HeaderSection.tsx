"use client"
import { useState } from "react";
import Button from "../ui/Button";

type HeaderProps = {buttons: string[]}

export default function HeaderSection({ buttons} : HeaderProps){
    const [open, setOpen] = useState(false);

    return (
        <div className={`p-2 rounded-xl flex flex-col justify-end items-end absolute mr-3 mt-1`}>
            <Button onClick={() => setOpen(!open)}  variant="transparent" size="medium" disabled={false}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-7" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>
            {open && (
                <div>
                    <div className="flex flex-col">
                         {buttons.map(btn => (
                            <Button variant="transparent" size="medium" disabled={false} children={btn} key={btn} additionalClass="mr-3 mt-2"/>                        
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

