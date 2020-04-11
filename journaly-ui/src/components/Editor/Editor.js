import React, {useState} from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import './Editor.css';
import journalEntryApi from '../../api/journalEntryApi'
import {SERVER_ERROR_MESSAGE} from '../../utils/Messages'
import NotifyService from '../../services/NotifyService'

function TextEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const editor = React.useRef(null);

    const _contentStateToString = (contentState) => {
        let contentStateString = "";
        contentState.blocks.forEach(block => {
            contentStateString += block.text;
        })
        return contentStateString;
    }

    const _focusEditor = () => {
        editor.current.focus();
    }

    const saveContent = async () => {
        const contentState = editorState.getCurrentContent(); 
        const content = _contentStateToString(convertToRaw(contentState))
        try {
            await journalEntryApi.saveJournalEntry(content);
            NotifyService.notifySuccess();
        } catch(e) {
            NotifyService.notifyError();
            console.error(SERVER_ERROR_MESSAGE);
        }
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