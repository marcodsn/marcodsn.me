import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { ListPosts } from "@/components/blog/list-posts"
import DefaultLayout from '@/components/layout/default-layout';


export const getStaticProps: GetStaticProps = async () => {
    const postsDirectory = path.join(process.cwd(), '/posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts: Post[] = filenames.map((filename): Post => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace(/\.mdx$/, ''),
            date: data.date,
            title: data.title,
            description: data.description,
            thumbnail: data.thumbnail,
            fileName: filename.substring(0, filename.length - 4),
            author: data.author,
        };
    });

    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        props: {
            posts: sortedPosts,
        },
    };
};


type Post = {
    slug: string;
    date: string;
    title: string;
    description: string;
    thumbnail: string;
    fileName: string;
    author: string;
};

const Posts = ({ posts }: { posts: Post[] }) => {
    const numberOfPosts = posts.length;
    const postsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const nextButtonVisibility = () => {
        if (indexOfLastPost >= numberOfPosts) {
            return 'hidden';
        } else {
            return 'visible';
        }
    }

    const previousButtonVisibility = () => {
        if (currentPage === 1) {
            return 'hidden';
        } else {
            return 'visible';
        }
    }

    // Simplified version: Render static content or a subset of posts
    return (
        <DefaultLayout>
            <ListPosts posts={currentPosts} />
            <div className="flex justify-center mt-0 mb-8">
                <button onClick={handlePreviousPage} className={`text-sm font-medium flex flex-row items-center gap-1 p-3 pr-4 rounded-md hover:bg-accent transition ${previousButtonVisibility()}`}>
                    <ChevronLeft className="h-4 w-4" /> <span>Previous</span>
                </button>
                <button onClick={handleNextPage} className={`text-sm font-medium flex flex-row items-center gap-1 p-3 pl-4 rounded-md hover:bg-accent transition ${nextButtonVisibility()}`}>
                    <span>Next</span> <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </DefaultLayout>
    );
};

export default Posts;