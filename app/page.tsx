import { SocialMediaIcons } from "@/components/social-media-icons"

// Alternative text colors: text-neutral-900 dark:text-neutral-200

export default function Home() {
    return ( 
        <main>
            <div className="">
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