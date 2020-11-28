import React, { FC } from 'react';
import './spinner.scss';

export const Spinner: FC = () => {
    return (
        <div className='spinner-container'>
            <div className='loading-spinner'>
                <div className='spinner'>
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
