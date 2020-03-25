import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "github-markdown-css";
const highlightCode = () => {
    const preEl = document.querySelectorAll("pre code");

    preEl.forEach(el => {
        hljs.highlightBlock(el);
    });
};

export default highlightCode;
