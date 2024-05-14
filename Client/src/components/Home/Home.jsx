import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logins } from './data';
import './style.css';
import Users from '../Users/Users';
import About from '../About/About';
import codeScreen from '../Images/codescreen.png';


const Home = ({
    emailAdd, 
    setEmailAdd, 
    pass, 
    setPass, 
    setCurrentPerson, 
    message,
    setMessage
}) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
 
    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const newColor = () =>{
        setColorChange('light')
    }

    const verifying = () =>{
    const trueUser = logins.filter(a=>a.emails.includes(emailAdd)).filter(a=>a.passwords.includes(pass)).map(a=>a.passwords)
    if(trueUser !== pass){
        navigate("/")
        setShowModal(false)
      }if(trueUser == pass){
            const personFilter = logins.filter((person) => person.passwords === trueUser[0])
            setCurrentPerson(personFilter[0])
             navigate('/todo')
        }
    }

    return (
        <div className='container'>
            <h1 className='main-title'>&#123;fullstackFriends&#125;</h1>
            <div className='slogan'>
                <p>
                    Created <em>by</em> developers.
                    <br />
                    <em>For</em> developers.
                </p>
            </div>
            <Users message={message} setMessage={setMessage} />

            <div className='form-wrapper'>
                <div
                >
                    <button
                        className='loginBtn atag'
                        name='button-1'
                        onClick={openModal}
                    >
                        Login
                    </button>

                </div>
            </div>

            {showModal && (


                <div
                    className='modal'
                >
                    <form
                        className='modal-content animate'
                    >
                        <div className='img-container'>
                            <span
                                onClick={closeModal}
                                className='closeBtn'
                            >
                                &times;
                            </span>
                            <img
                                className='modalDefaultImg'
                                src={codeScreen}
                            />
                        </div>

                        <div className='container-form'>
                            <label htmlFor='uname'>
                                <b>Username</b>
                            </label>
                            <div
                                className='userInputs'
                            >
                                <input
                                    placeholder='Email'
                                    value={emailAdd}
                                    onChange={(e)=>setEmailAdd(e.target.value)}
                                    type='email'
                                    className='inputs'
                                    name='uname'
                                    required
                                />
                            </div>

                            <label htmlFor='psw'>
                                <b>Password</b>
                            </label>
                            <div
                                value={pass}
                                onChange={(e)=>setPass(e.target.value)}
                                className='userInputs'
                            >
                                <input
                                    placeholder='Password'
                                    type='password'
                                    className='inputs'
                                    required
                                />
                            </div>

                            <label>
                                <input
                                    type='checkbox'
                                    defaultChecked='checked'
                                    name='remember'
                                />
                                Remember me
                            </label>
                        </div>

                        <div className='container-modal'>
                            <button
                                type='submit'
                                className='loginBtn'
                                onClick={verifying}
                            >
                                <Link
                                    className='atag'
                                >
                                    Login
                                </Link>
                            </button>

                            <button
                                type='button'
                                onClick={closeModal}
                                className='cancelbtn'
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        
        <About />
        </div>
    );
};
export default Home;
