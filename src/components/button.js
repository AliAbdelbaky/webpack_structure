import '../css/active.css';
class JS_BUTTON {
    render(text_content, className) {
        text_content: String;
        className: String;
        const body = document.body,
            button = document.createElement('button');
        button.innerText = text_content;
        button.classList.add(className);
        body.appendChild(button);
    }
}
export default JS_BUTTON;