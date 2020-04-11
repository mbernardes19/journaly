import React, {useState} from 'react';
import EventEmitter from '../EventEmitter';

const Notify = () => {
    const [data, setData] = useState({})

    EventEmitter.subscribe('notification', (notification) => {setData(notification)})

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