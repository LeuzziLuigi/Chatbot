// components/MonacoCode.tsx
import React from 'react';
import Editor from '@monaco-editor/react';

export default function MessageContent({ code, language }: { code: string, language: string }) {
    console.log()
    return (
        <Editor
          height="200px" // Or whatever height you want
          defaultLanguage={language}
          defaultValue={code}
          options={{ readOnly: true }} // Making it read-only if needed
        />
      );
  }
  