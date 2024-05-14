import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './survey.css';

const Survey = () => {

    return (
        <div className='survey-container'>
            <div className='flip-box'>
                <div className='flip-box-inner'>
                    <div className='flip-box-front'>
                        <h2>Survey &amp;&amp; ContactUs</h2>
                        <p>hover here</p>
                    </div>
                    <div className='flip-box-back'>
                        <h2>Please Take our Survey</h2>
                        <form className='form-container'>
                            <input
                                type='text'
                                name='firstname'
                                className='survey-input'
                                placeholder='Your name..'
                            />
                            <input
                                type='text'
                                name='lastname'
                                className='survey-input'
                                placeholder='Your last name..'
                            />
                            <select
                                name='country'
                                className='survey-input'
                            >
                                <option value='australia'>Australia</option>
                                <option value='canada'>Canada</option>
                                <option value='usa'>USA</option>
                                <option value='russia'>Russia</option>
                                <option value='ukraine'>Ukraine</option>
                                <option value='england'>England</option>
                            </select>

                            <label htmlFor='usage'>
                                How often do you use this service:
                            </label>

                            <select
                                name='userUsage'
                                className='survey-input'
                            >
                                <option value='firstTime'>
                                    First Time User
                                </option>
                                <option value='oneTwo'>1-2 times</option>
                                <option value='everyProject'>
                                    Every Project
                                </option>
                            </select>
                            
                            <label className='checkbox-container'>
                                &#11088;
                                <input type='checkbox' />
                                <span className='checkmark'></span>
                            </label>

                            <label className='checkbox-container'>
                                &#11088;&#11088;
                                <input type='checkbox' />
                                <span className='checkmark'></span>
                            </label>

                            <label className='checkbox-container'>
                                &#11088;&#11088;&#11088;
                                <input type='checkbox' />
                                <span className='checkmark'></span>
                            </label>

                            <label className='checkbox-container'>
                                &#11088;&#11088;&#11088;&#11088;
                                <input type='checkbox' />
                                <span className='checkmark'></span>
                            </label>

                            <textarea
                              
                              id='subject'
                                name='subject'
                                className='survey-input'
                                placeholder='Write something..'
                            ></textarea>

                            <button className='submit'>
                                <Link to='/' className='surveyBtn'>Submit</Link>
                            </button>
                            <button className='submit'>
                                <Link to='/' className='surveyBtn'>Cancel</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Survey;
