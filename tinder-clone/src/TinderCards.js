import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {
    const [people, setpeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.businessinsider.in/thumb/msid-65733454,width-700,resizemode-4,imgsize-86338/Teslas-board-is-terrible-at-its-job-its-shown-it-has-no-interest-in-controlling-Elon-Musk-or-sticking-up-for-investors.jpg"
        },
        {
            name: 'Jeff Bezos',
            url: "https://resized.space.rga.com/image/upload/c_fill,fl_progressive,q_auto:low,fl_lossy,f_auto,h_512,w_1024/v1493818300/production/file-5909dbbcd4bc50fb7a4ce95d"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + "left the screen!!");
    };
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person) => (
                    <TinderCard
                       className='swipe'
                       key={person.name}
                       preventSwipe = {["up", "down"]}
                       onSwipe = {(dir) => swiped(dir, person.name)}
                       onCardLeftScreen = {() => outOfFrame(person.name)}
                    >

                        <div
                            style={{backgroundImage: "url(" + person.url + ")"}}
                            className = 'card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}

            </div>


        </div>
    )
}

export default TinderCards