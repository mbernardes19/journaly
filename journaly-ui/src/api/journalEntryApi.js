exports.saveJournalEntry = async (journalEntry) => {
        return fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: new Headers().append('Content-Type', 'application/json'),
            body: { content: journalEntry }
        });
} 

exports.deleteJournal = (journalEntry) => {
    fetch(process.env.REACT_APP_API_URL);
} 