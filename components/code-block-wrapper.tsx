import React, { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

interface CustomCodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

const CustomCodeBlock: React.FC<CustomCodeBlockProps> = ({ children, className }) => {
    const [isCopied, setIsCopied] = useState(false);

    const extractText = (node: React.ReactNode): string => {
        if (typeof node === 'string') {
            return node;
        } else if (Array.isArray(node)) {
            return node.map(extractText).join('');
        } else if (node && typeof node === 'object' && 'props' in node) {
            return extractText(node.props.children);
        }
        return '';
    };

    // const handleCopy = () => {
    //     const textToCopy = extractText(children);
    //     navigator.clipboard.writeText(textToCopy);
    //     setIsCopied(true);
    //     setTimeout(() => setIsCopied(false), 1000); // Reset after 1 second
    // };

    const handleCopy = () => {
        const textToCopy = extractText(children);
    
        // Fallback method for copying to clipboard
        const copyWithFallback = (text: string) => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            document.body.removeChild(textarea);
        };
    
        // Try to use the Clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => setIsCopied(true))
                .catch((err) => {
                    console.error('Clipboard API failed:', err);
                    copyWithFallback(textToCopy);
                });
        } else {
            // Use fallback if Clipboard API is not available
            copyWithFallback(textToCopy);
            setIsCopied(true);
        }
    
        // Reset after 1 second
        setTimeout(() => setIsCopied(false), 1000);
    };    

    return (
        <div className="relative group my-6 ring-1 pr-3 ring-neutral-800 rounded-md bg-neutral-900">
            <pre className={`p-4 rounded-md overflow-x-auto text-sm ${className}`}>{children}</pre>
            <button
                onClick={handleCopy}
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

export default CustomCodeBlock;
