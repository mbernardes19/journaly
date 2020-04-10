exports.saveJournalEntry = async (journalEntry) => {
    try {
        await fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: new Headers().append('Content-Type', 'application/json'),
            body: { content: journalEntry }
        });
    } catch(err) {
        console.error("Error connecting to the server")
    }
} 

exports.deleteJournal = (journalEntry) => {
    fetch(process.env.REACT_APP_API_URL);
} 