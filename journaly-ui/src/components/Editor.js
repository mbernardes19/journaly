import React from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import './Editor.css';
import journalEntryApi from '../api/journalEntryApi'

function TextEditor(props) {
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    const editor = React.useRef(null);

    const _focusEditor = () => {
        editor.current.focus();
    }

    const saveContent = () => {
        const contentState = editorState.getCurrentContent(); 
        const content = _contentStateToString(convertToRaw(contentState))
        journalEntryApi.saveJournalEntry(content);
    }

    const _contentStateToString = (contentState) => {
        let contentStateString = "";
        contentState.blocks.forEach(block => {
            contentStateString += block.text;
        })
        return contentStateString;
    }

    return (
        <div class="editor">
            <div class="editor-container" data-testid="editor-container" onClick={_focusEditor}>
                <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
            </div>
            <div class="button-wrapper">
                <button class="save-button" onClick={saveContent}>Save</button>
            </div>
        </div>
    );
}

export default TextEditor;