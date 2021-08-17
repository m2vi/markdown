import React, { useEffect, useState } from 'react';

import CodeEditor from 'react-simple-code-editor';

import hljs from 'highlight.js';
import marked, { MarkedOptions } from 'marked';

import 'highlight.js/styles/github-dark.css';
import { renderToString } from 'react-dom/server';
const defaultCode = `### title`;

import pdf from 'html-pdf';

const Editor = () => {
  const [code, setCode] = useState(defaultCode);

  const compile = (code: string) => {
    const options: MarkedOptions = {
      highlight: (code, lang) => {
        try {
          if (lang === 'math') {
            return code;
          }
          return hljs.highlight(code, { language: lang, ignoreIllegals: true })
            .value;
        } catch (err) {
          return code;
        }
      },
    };
    return marked(code, options);
  };

  return (
    <div
      className='grid gap-2 min-h-wide'
      style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
    >
      <CodeEditor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => hljs.highlight(code, { language: 'md' }).value}
        padding={10}
        className='rounded-5 highlight language-markdown mb-4 h-full'
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          backgroundColor: 'var(--color-neutral-600)',
        }}
      />
      <div
        className='mb-4 rounded-5 min-h-textarea p-2 markdown-compiled h-full'
        style={{ backgroundColor: 'var(--color-neutral-600)' }}
        dangerouslySetInnerHTML={{ __html: compile(code) }}
      ></div>
    </div>
  );
};

export default Editor;
