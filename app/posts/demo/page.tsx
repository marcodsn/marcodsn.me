// Sample blog post with image
import Image from "next/image";

export default function Page() {
    return (
        <main className="my-5">
            <p className="my-2 text-neutral-500 dark:text-neutral-400">
                Published on <time dateTime="2021-01-01">January 1, 2021</time>
            </p>
            <h1 className="text-5xl font-bold">DEMO post</h1>
            <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate, voluptates, voluptatum, quibusdam, quia quod voluptas
                voluptatem unde quos dolorum quae. Quisquam, quia. Quisquam voluptate,
                voluptates, voluptatum, quibusdam, quia quod voluptas voluptatem unde
                quos dolorum quae. Quisquam, quia. Quisquam voluptate, voluptates,
            </p>
            <Image
                src="/next.svg"
                alt="Next.js logo"
                width={400}
                height={400}
            />
            <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate, voluptates, voluptatum, quibusdam, quia quod voluptas
                voluptatem unde quos dolorum quae. Quisquam, quia. Quisquam voluptate,
                voluptates, voluptatum, quibusdam, quia quod voluptas voluptatem unde
                quos dolorum quae. Quisquam, quia. Quisquam voluptate, voluptates,
            </p>
            <code className="block p-4 my-5 text-sm bg-secondary rounded-md">
                {"const foo = 'bar';"}
            </code>
        </main>
    );
}