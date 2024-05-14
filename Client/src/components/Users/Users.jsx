import React, { useState } from "react";
import './users.css'
import UserPhoto from '../Images/userPic.jpg';
import UserPhoto2 from '../Images/userPic2.jpg';
import UserPhoto3 from '../Images/userPic3.jpg';
import UserPhoto4 from '../Images/userPic4.jpg';
import UserPhoto5 from '../Images/userPic5.jpg';
import UserPhoto6 from '../Images/userPic6.jpg';
import UserPhoto7 from '../Images/userPic7.jpg';
import UserPhoto8 from '../Images/userPic8.jpg';

const Users = ({message, setMessage}) => {
    const [imgModal, setImgModal] = useState(false)
    const [messageEmail, setMessageEmail] = useState('')

    const openImg = () => {
        setImgModal(true)
    }

    const closeImg = () => {
        setImgModal(false)
    }

    const handleChange = (e) => {
        setMessageEmail('')
        setImgModal(false)
    };

    return (
        <div
            className='img-div'
        >
            {imgModal && (

                <form
                    className="email-modal"
                >
                    <div className="close-button">
                        <span
                            onClick={closeImg}
                            className="closeBtn2"
                        >
                            &times;
                        </span>
                    </div>

                    <p className="team-msg">Send the team a message!</p>
                    <input
                        type="email"
                        className="emailInputs"
                        placeholder="Email..."
                        value={messageEmail}
                        onChange={(e) => setMessageEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="emailInputs"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        cols="30"
                        rows="10"
                        placeholder="Msg here...."
                    >
                    </textarea>

                    <button
                        type="button"
                        className="sendBtn"
                        onClick={handleChange}
                    >
                        Send Msg
                    </button>
                </form>
            )}
            <div className='row'>
                <div className='column '>
                    <img
                        onClick={openImg}
                        src={UserPhoto}
                        alt='user'
                        className='img-home user1'
                    />
                </div>

                <div className='column'>
                    <img
                        onClick={openImg}
                        src={UserPhoto2}
                        alt='user'
                        className='img-home user2'
                    />
                </div>

                <div className='column'>
                    <img
                        onClick={openImg}
                        src={UserPhoto3}
                        alt='user'
                        className='img-home user3'
                    />
                </div>

                <div className='column'>
                    <img
                        onClick={openImg}
                        src={UserPhoto4}
                        alt='user'
                        className='img-home user4'
                    />
                </div>
                <div className='column'>
                    <img
                        onClick={openImg}
                        src={UserPhoto5}
                        alt='user'
                        className='img-home user5'
                    />
                </div>
                <div className='column'>
                    <img
                        onClick={openImg}
                        src={UserPhoto6}
                        alt='user'
                        className='img-home user6'
                    />
                </div>
                <div className='column'>
                    <img
                        onClick={openImg}
                        src={UserPhoto7}
                        alt='user'
                        className='img-home user7'
                    />
                </div>
                <div className='column'>
                    <img
                        onClick={openImg}
                        src={UserPhoto8}
                        alt='user'
                        className='img-home user8'
                    />
                </div>
            </div>
        </div>
    )
}

export default Users
