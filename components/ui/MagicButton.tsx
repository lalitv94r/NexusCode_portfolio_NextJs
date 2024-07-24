"use client"
import React from 'react'

type PosType= "left" | "right";

interface MagicButtonProps {
    title: string;
    disable?: boolean;
    onPress: () => void | null;
    icon?: React.ReactNode;
    iconPositon?: PosType;
    otherClasses?: string;
}
const MagicButton = ({
    title="",
    disable=false,
    onPress,
    icon="",
    iconPositon="left",
    otherClasses=""
}: MagicButtonProps) => {
    return (
        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none" disabled={disable}
            onClick={()=>onPress !== null && onPress()}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {iconPositon === "left" && icon}
                {title}
                {iconPositon === "right" && icon}
            </span>
        </button>
    );
}

export default MagicButton;