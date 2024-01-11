import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
// import RootLayout from '@/app/layout';
import MdxLayout from '@/components/blog/mdx-layout';
import CodeBlock from '@/components/code-block';
import Code from '@/components/code';
import InlineCode from '@/components/inline-code';
import CustomCodeBlock from '@/components/code-block-wrapper';
import '@/app/globals.css';
import './mdx-style.css';
import rehypePrettyCode from 'rehype-pretty-code';
import { Pluggable } from 'unified';

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
    Code,
    CodeBlock,
    InlineCode,
    code: CustomCodeBlock,
};

// Define PostPage component
interface PostPageProps {
    source: MDXRemoteSerializeResult;
    frontmatter: {
        title: string;
        date: string; // Adjust the type based on your date format
        thumbnail: string;
    };
}

const PostPage: NextPage<PostPageProps> = ({ source, frontmatter }) => {
    // Define or import Layout and FormattedDate components
    return (
        <MdxLayout>
            <div className='my-5'>
                <p className='text-muted-foreground text-sm my-2'>
                    Published on {frontmatter.date}
                </p>
                <h1 className='text-5xl font-bold mb-8'>{frontmatter.title}</h1>
                <Image
                    src={frontmatter.thumbnail}
                    alt={frontmatter.thumbnail}
                    width={1920}
                    height={1080}
                    className='rounded-md mb-6'
                />
                <div className='mdx'>
                    <MDXRemote {...source} components={components} />
                </div>

            </div>
        </MdxLayout>
    );
};

export default PostPage;