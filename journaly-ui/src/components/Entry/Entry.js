import React from 'react';
import './Entry.css';
import { _convertDate } from '../../utils/DateUtils'

const Entry = ({content, date}) => {
    const formatedDate = _convertDate(date);

    return (
        <div className="entry">
            <h3 className="entry-header">{formatedDate}</h3>
            <p className="entry-content">{content}</p>
        </div>
    );
}

export default Entry;