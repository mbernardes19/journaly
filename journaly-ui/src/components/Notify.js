import React from 'react';

const Notify = ({data}) => {
    return data.type === 'success' ? (
        <div className='notify-success'>
            {data.message}
        </div>
    ) : (
        <div className='notify-error'>
            {data.message}
        </div>
    )
}

export default Notify