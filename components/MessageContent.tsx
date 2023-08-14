// components/MessageContent.tsx
import React from 'react';
import MonacoCode from './MonacoCode';

export default function MessageContent({ content }: { content: string }) {
  const codeRegex = /```(.*?)(?:\n([\s\S]*?)(?:```|$))/g;

  const parseContent = () => {
    let match;
    const elements = [];
    let lastIndex = 0;

    while ((match = codeRegex.exec(content)) !== null) {
      const [fullMatch, language, code = ''] = match;

      // Add text before code block to elements, maintaining line breaks
      if (lastIndex !== match.index) {
        const subContent = content.slice(lastIndex, match.index);
        subContent.split("\n").forEach((textBlock, idx) => {
          elements.push(<p key={`${lastIndex}-${idx}`}>{textBlock || '\u00A0'}</p>);
        });
      }

      // Add code block to elements
      elements.push(<MonacoCode key={`code-${match.index}`} code={code} language={language} />);

      lastIndex = match.index + fullMatch.length;
    }

    // Add any remaining text after the last code block, maintaining line breaks
    if (lastIndex < content.length) {
      const remainingContent = content.slice(lastIndex);
      remainingContent.split("\n").forEach((textBlock, idx) => {
        elements.push(<p key={`${lastIndex}-${idx}`}>{textBlock || '\u00A0'}</p>);
      });
    }

    return elements;
  };


  return <>{parseContent()}</>;
}
