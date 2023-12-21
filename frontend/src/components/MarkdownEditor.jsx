import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

function MarkdownEditor(props) {
    // eslint-disable-next-line react/prop-types
    const { handleEditorChange, editorValue } = props;
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    return (
        <>
            <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                value={editorValue}
            />
        </>
    );
}

export default MarkdownEditor;
