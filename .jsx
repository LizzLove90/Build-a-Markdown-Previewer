import React, { useState } from 'react';
import marked from 'marked';

function MarkdownPreviewer() {
  const defaultMarkdown = `
    # Heading 1
    ## Heading 2
    [Link to Google](https://www.google.com/)
    \`Inline Code\`
    \`\`\`
    // Code Block
    const example = "Hello, world!";
    console.log(example);
    \`\`\`
    - List Item 1
    - List Item 2
    > Blockquote
    ![Image](https://via.placeholder.com/150)
    **Bolded Text**
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <div className="editor">
        <textarea id="editor" value={markdown} onChange={handleMarkdownChange} />
      </div>
      <div className="preview" id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
}

export default MarkdownPreviewer;
