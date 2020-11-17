import React from 'react';
import './spiner.scss';

const Spiner = () => {
    return (
        <div className='spiner-container'>
            <div className='loading-spinner'>
                <div className='spiner'>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spiner;