import React, {useState, useEffect} from 'react';
import EventEmitter from '../../utils/EventEmitter';
import './Notify.css';

const Notify = ({position}) => {
    const [data, setData] = useState({})

    useEffect(() => {
        EventEmitter.subscribe('notification', (notification) => { setData(notification) })
    }, [])

    return data.type === 'success' ? (
        <div className={position}>
            <div className='notify-success'>
                {data.message}
            </div>
        </div>
    ) : (
        <div className={position}>
            <div className='notify-error'>
                {data.message}
            </div>
        </div>
    )
}

export default Notify