import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { useState } from 'react';

import { ListPosts } from "@/components/blog/list-posts"
import DefaultLayout from '@/components/layout/default-layout';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


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
    const postsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Simplified version: Render static content or a subset of posts
    return (
        <DefaultLayout>
            <ListPosts posts={currentPosts} />
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </DefaultLayout>
    );
};

export default Posts;