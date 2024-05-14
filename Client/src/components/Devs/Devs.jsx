import React from "react";
import './style.css'
import Coding1 from '../Images/coding1.jpg';
import Coding2 from '../Images/coding2.jpg';
import Coding3 from '../Images/coding3.jpg';

const Devs = () => {

    return (

        <div>
            <div className='img-row'>
                <div className='img-column'>
                    <img
                        src={Coding1}
                        alt='Coding Screen'
                        className='todo-img'
                    />
                </div>

                <div className='img-column'>
                    <img
                        src={Coding2}
                        alt='Coding Screen'
                        className='todo-img'
                    />
                </div>
                
                <div className='img-column'>
                    <img
                        src={Coding3}
                        alt='Coding Screen'
                        className='todo-img'
                    />
                </div>
            </div>
        </div>
    )
}

export default Devs
