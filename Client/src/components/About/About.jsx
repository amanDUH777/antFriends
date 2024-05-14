import React from "react";
import './about.css'

const About = () => {

    return (
        <>
            <div className='about-company'>
                <h3>
                    &#123;fullstackFriends&#125; is a blooming creation from the minds of new developers.

                </h3>

                <p className="company-description">

                    This creation started as an idea. An idea for an instant messaging app geared towards connecting web
                    developers from across the world. Shortly after the gears started to grind, tasks were deligated, and titles
                    were handed out, reality struck and we understood this was a long term project taking more time than there was available at the time.
                    So, from the burning desire to create - and create no matter what - <b> &#123;fullTasck&#125; </b>was imagined.
                    <br />
                    <br />
                    As new developers, we understood our limitations but refused to quit. While the team here at <b> &#123;fullstackFriends&#125; </b>
                    continues to work on the ultimate goal of a message application for IT professionals we present you with a way to
                    build out your team tasks for any project.
                   
              
                    <br />
                    <br />
                    Happy <code>Coding</code>! <br />
                    Your <b>&#123;fullstackFriends&#125;</b> Representative.
                </p>
            </div>

            <div className='company-info'>
                <p>&copy;fullstackFriends2023</p>
            </div>

        </>
    )
}

export default About