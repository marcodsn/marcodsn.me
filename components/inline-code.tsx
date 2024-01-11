import React from 'react';

interface InlineCodeProps {
    children: React.ReactNode;
}

const InlineCode: React.FC<InlineCodeProps> = ({ children }) => {
    return (
        <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </span>
    );
};

export default InlineCode;
