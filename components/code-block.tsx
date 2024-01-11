import React, { useState, useEffect } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { FiCopy, FiCheck } from 'react-icons/fi';


interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    console.log(code);
    const [highlightedBlock, setHighlightedBlock] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        highlightBlock(code).then(setHighlightedBlock);
    }, [code]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000); // Reset after 1 second
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="relative group my-4 ring-1 pr-3 ring-neutral-800 rounded-md bg-neutral-900">
            <section
                className="p-4 rounded-md overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: highlightedBlock }}
            />
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 m-1 bg-none text-white rounded-md hover:bg-neutral-800 transition-colors"
                aria-label="Copy to clipboard"
              >
                {isCopied ? (
                    <FiCheck size={14} />
                ) : (
                    <FiCopy size={14} />
                )}
            </button>
        </div>
    );
};

async function highlightBlock(codeBlock: string): Promise<string> {
    // Extract the language from the end of the code block
    codeBlock = codeBlock.replace(/`/g, '');
    const { language, code } = extractLanguageAndCode(codeBlock);

    // Split the block into lines
    const lines = code.split('\n');

    // Process each line
    const highlightedLines = await Promise.all(lines.map(async (line) => {
        // console.log(`\`${line}{:${language}}\``);
        return highlightCode(`\`${line}{:${language}}\``);
    }));

    // Combine the lines back into a single string
    return highlightedLines.join('');
}

function extractLanguageAndCode(input: string): { language: string, code: string } {
    const languageRegex = /[\r\n\s]*\{:(\w+)\}\s*$/;
    const match = input.match(languageRegex);

    if (match && match[1]) {
        // Extract the language
        const language = match[1];

        // Remove the language part from the input
        const code = input.replace(languageRegex, '');

        return { language, code };
    } else {
        // No language found, return the input as is
        return { language: '', code: input };
    }
}

// This function is used to highlight a line of code; if given a block of code, it will consider it as a single line
async function highlightCode(code: string) {
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            // your configuration options here
            theme: 'catppuccin-macchiato',
            keepBackground: false,
        })
        .use(rehypeStringify)
        .process(code);

    return String(file);
}

// async function splitCode(code: string) {
//     const lines = code.split('\n').map((line, index) => {
//         const lineNumber = index + 1;
//         return `<span class="line" data-line-number="${lineNumber}">${line}</span>`;
//     });
//     return lines.join('\n');
// }

export default CodeBlock;
