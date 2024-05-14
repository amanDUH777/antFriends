import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Devs from '../Devs/Devs';
import inboxImg from '../Images/inboxImg.png';

const ToDo = ({ 
    loadTasks, 
    setLoadTask, 
    currentPerson, 
    message }) => {
    const [countTasks, setCountTasks] = useState(1)
    const [todosArray, setTodosArray] = useState([])
    const [inputItem, setInputItem] = useState('')
    const [deleteItems, setDeleteItems] = useState('')
    const [searchInput, setSearchInput] = useState([])
    const [searchResults, setSearchResults] = useState("")
    const [inboxModal, setInboxModal] = useState(false)
    const [countMessages, setCountMessages] = useState(2)


    useEffect(() => {
        setCountMessages(countMessages + 1)
    }, [])

    useEffect(() => {
        setTodosArray(todosArray.concat(loadTasks[0]))
    }, [loadTasks, currentPerson])

    useEffect(() => {
        const filterArray = todosArray.filter((item) => item !== deleteItems);
        setTodosArray(filterArray)
    }, [deleteItems])

    const openInbox = () => {
        setInboxModal(true)
    }

    const closeInbox = () => {
        setInboxModal(false)
        setCountMessages(0)
    }

    const newArrays = (str) => {
        setDeleteItems(str)
        setCountTasks(countTasks - 1)
    }

    const theChange = (e) => {
        e.preventDefault()
        setInputItem(e.target.value)
    }

    const showItems = (e) => {
        setCountTasks(countTasks + 1)
        setTodosArray(todosArray.concat(inputItem))
        setInputItem("")
    }

    const searchBar = () => {
        const filteredSearch = todosArray.filter((a) => a.includes(searchInput))
        if (filteredSearch == searchInput == true) {
            setSearchResults(filteredSearch)
            setSearchResults('Match Found Below')
        } else {
            setSearchResults("No Matches Found")
        }
    }

    return (
        <>

            <div className="topBar">

                <button
                    onClick={openInbox}
                    className='notification'
                >

                    Inbox
                    <span
                        className='badge'
                    >
                        {countMessages}
                    </span>
                </button>

                <Link
                    to='/survey'
                    className='exitLinkTwo'
                >
                    Contact
                </Link>

                <div className='searchBar'>
                    <input
                        type='text'
                        className='mySearch'
                        placeholder='Search..'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                     <button type="button" className='searchBtn' onClick={searchBar}>Search</button>
                </div>

            
                <Link
                    to='/'
                    className='exitLinkOne'
                    onClick={() => setLoadTask([])}
                >
                    Sign Out
                </Link>

            </div>

            <div className='content'>
                <h1 className='main-title'>&#123;fullTasck&#125;</h1>

            </div>

            {inboxModal && (

                <div className='inbox-modal'>

                    <div>
                        <span
                            onClick={closeInbox}
                            className='closeInbox'
                        >
                            &times;

                        </span>
                    </div>

                    {message && (
                        <>
                            <div className='inbox-message'>
                                <img src={inboxImg} className='inbox-img' />
                                <p>{message}</p>
                            </div>

                            <div className='inbox-message'>
                                <img src={inboxImg} className='inbox-img' />
                                <p>Round of applause for Dickerson and Rolle </p>
                            </div>

                            <div className='inbox-message'>
                                <img src={inboxImg} className='inbox-img' />
                                <p>Thank you for attending our presentation today!</p>
                            </div>
                        </>
                    )}
                </div>
            )}



            <Devs />

            <div className='slogan'>
                <p>{searchResults}</p>
            </div>

            <div className='slogan'>
                <p>{`You have ${countTasks} tasks`}</p>
            </div>

            <div
                className='header'
            >
                <h2 className='sub-titles'>Add project tasks below:</h2>

                <input
                    type='text'
                    className='taskInput'
                    value={inputItem}
                    onChange={theChange}
                    placeholder='Task....+ team member'
                />

                <button onClick={showItems} className='addBtn'>Add</button>

                {todosArray.map((item, index) => {
                    return (
                        <li
                            className='todo ' key={index}>{item}<span className='spans'>
                                <button onClick={() => newArrays(item)} className='deleteBtn'>&times;</button>
                            </span>
                        </li>
                    )
                })}

            </div>



        </>
    );
};

export default ToDo;
