import { SocialMediaIcons } from "@/components/social-media-icons"

export default function Home() {
    return ( 
        <main>
            <div className="font-light text-neutral-700 dark:text-neutral-300">
                <p className="my-5">
                    Hey there. Welcome to my brain dump—a place where I offload insights and musings on all things computer science.
                </p>
                <div className="my-5">
                    <SocialMediaIcons />
                </div>
            </div>
        </main>
    )
}