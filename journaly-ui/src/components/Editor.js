import React from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import './Editor.css';

function TextEditor(props) {
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    const editor = React.useRef(null);

    const focusEditor = () => {
        editor.current.focus();
    }

    const saveContent = () => {
        const contentState = editorState.getCurrentContent(); 
        const content = contentStateToString(convertToRaw(contentState))
        fetch('http://localhost:8080/', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({content: content})
        })
        .then(res => console.log(res))
        .catch(res => console.log(res));
    }

    const contentStateToString = (contentState) => {
        let contentStateString = "";
        contentState.blocks.forEach(block => {
            contentStateString += block.text;
        })

        return contentStateString;
    }
    
    return (
        <div class="editor">
            <div class="editor-container" onClick={focusEditor}>
                <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
            </div>
            <div class="button-wrapper">
                <button class="save-button" onClick={saveContent}>Save</button>
            </div>
        </div>
    );
}

export default TextEditor;