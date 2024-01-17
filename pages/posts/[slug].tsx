import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Link from "next/link"
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import DefaultLayout from '@/components/layout/default-layout';
import InlineCode from '@/components/inline-code';
import CustomCodeBlock from '@/components/code-block-wrapper';
import '@/app/globals.css';
import rehypePrettyCode from 'rehype-pretty-code';
import AppConfig from "@/app/config"


// Define readFileContent function
const readFileContent = (slug: string): string => {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
    return fs.readFileSync(filePath, 'utf8');
};

// Define getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
    const filenames = fs.readdirSync(path.join(process.cwd(), 'posts'));
    const paths = filenames.map((filename) => ({
        params: { slug: filename.replace(/\.mdx$/, '') },
    }));
    return { paths, fallback: false };
};

// Define getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
    const slug = typeof context.params?.slug === 'string' ? context.params.slug : '';
    const content = readFileContent(slug);
    const { data, content: mdxContent } = matter(content);
    const source = await serialize(mdxContent, {
        mdxOptions: {
            rehypePlugins: [
                // Here, you integrate rehypePrettyCode
                [rehypePrettyCode as any, {
                    // Configuration options for rehypePrettyCode
                    theme: 'catppuccin-macchiato',
                    keepBackground: false,
                }],
            ],
        },
    });
    return { props: { source, frontmatter: data } };
};

// Define components
const components: any = {
    Image,
    InlineCode,
    code: CustomCodeBlock,
    img: (props: any) => <Image width={1920} height={1080} className='rounded-md my-6' {...props} />,
};

// Define PostPage component
interface PostPageProps {
    source: MDXRemoteSerializeResult;
    frontmatter: {
        title: string;
        date: string; // Adjust the type based on your date format
        thumbnail: string;
        author: string;
    };
}

const PostPage: NextPage<PostPageProps> = ({ source, frontmatter }) => {
    // Define or import Layout and FormattedDate components
    return (
        <DefaultLayout>
            <div className='my-5 md:mb-12'>
                {frontmatter.author === AppConfig.AIWriterKey && (
                    <div className='p-4 bg-warning outline outline-1 outline-warning-foreground rounded-md mb-4'>
                        <p className='text-sm text-warning-foreground'>DISCLAIMER: The content of this post is AI generated.</p>
                    </div>
                )}
                <p className='text-muted-foreground text-sm my-2'>
                    Published on {frontmatter.date}
                </p>
                <h1 className='text-4xl md:text-5xl font-bold mb-8'>{frontmatter.title}</h1>
                {frontmatter.thumbnail && (
                    <Image
                        src={frontmatter.thumbnail}
                        alt={frontmatter.thumbnail}
                        width={1920}
                        height={1080}
                        className='rounded-md mb-6'
                    />
                )}
                <div className='mdx'>
                    <MDXRemote {...source} components={components} />
                </div>
                <div className="h-px w-full bg-muted rounded-full mt-12" />
                <div className="flex justify-center mt-4">
                    <Link href="/posts" className="p-3 rounded-md hover:bg-accent transition">
                        <span className="text-sm font-medium">View all posts</span>
                    </Link>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default PostPage;
