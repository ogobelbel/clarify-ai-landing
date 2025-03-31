'use client'
import Logo from "./logo";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getBrowserConfig} from "@/app/helpers";
import {Browser} from "@/components/hero-home";

export default function Header() {
    const [browserConfig, setBrowserConfig] = useState<Browser>();
    useEffect(() => {
        setBrowserConfig(getBrowserConfig());
    }, []);

    return (
        <header className="fixed top-2 z-30 w-full md:top-6">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div
                    className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    <div className="flex flex-1 items-center">
                        <Logo/>
                    </div>
                    <ul className="flex flex-1 items-center justify-end gap-3">
                        <li>
                            <Link
                                target="_blank"
                                referrerPolicy="no-referrer"
                                href={browserConfig?.link || ''}
                                className="btn-sm bg-white text-gray-800 shadow-current hover:bg-gray-50"
                            >
                                Download
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
