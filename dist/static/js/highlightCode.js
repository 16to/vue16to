import * as hljs from 'highlight.js/lib/highlight'
import * as javascript from 'highlight.js/lib/languages/javascript'
import * as python from 'highlight.js/lib/languages/python'
import * as bash from 'highlight.js/lib/languages/bash'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)
import "highlight.js/styles/github.css";
import "github-markdown-css";
const highlightCode = () => {
    const preEl = document.querySelectorAll("pre code");

    preEl.forEach(el => {
        hljs.highlightBlock(el);
    });
};

export default highlightCode;
