import React, { useState, useEffect } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';

interface CodeProps {
    children: string;
    language: string;
}

const Code: React.FC<CodeProps> = ({ children, language }) => {
    const [highlightedCode, setHighlightedCode] = useState('');

    useEffect(() => {
        highlightCode(children, language).then(setHighlightedCode);
    }, [children, language]);

    return (
        <pre className="my-4 p-4 ring-1 ring-neutral-800 rounded-md bg-neutral-900 overflow-x-auto">
            <code
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
        </pre>
    );
};

async function highlightCode(code: string, language: string): Promise<string> {
    // console.log(code);
    // console.log(language);
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            theme: 'catppuccin-macchiato',
            keepBackground: false,
            defaultLang: language,
        })
        .use(rehypeStringify)
        .process(code);

    return String(file);
}

export default Code;
