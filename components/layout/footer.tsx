"use client"

import AppConfig from "@/app/config"


export default function Footer() {
    return (
        <footer className="select-none bg-background mt-auto">
            <div className="flex flex-row justify-between items-center py-8">
                <p className="text-muted-foreground text-sm">
                    <span>© 2024 </span>
                    <a href={AppConfig.socialLinks.github} className="underline focus:outline-accent-foreground">Marco De Santis</a>
                    <span>. All rights reserved.</span>
                </p>
            </div>
        </footer>
    )
}