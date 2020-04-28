import * as hljs from 'highlight.js/lib/highlight'
import * as javascript from 'highlight.js/lib/languages/javascript'
import * as python from 'highlight.js/lib/languages/python'
import * as bash from 'highlight.js/lib/languages/bash'
import * as html from 'highlight.js/lib/languages/htmlbars'
import * as json from 'highlight.js/lib/languages/json'
import * as ts from 'highlight.js/lib/languages/typescript'
import * as dart from 'highlight.js/lib/languages/dart'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('html', html)
hljs.registerLanguage('json', json)
hljs.registerLanguage('ts', ts)
hljs.registerLanguage('dart', dart)
import "highlight.js/styles/github.css";
import "github-markdown-css";
const highlightCode = () => {
    const preEl = document.querySelectorAll("pre code");

    preEl.forEach(el => {
        hljs.highlightBlock(el);
    });
};

export default highlightCode;
