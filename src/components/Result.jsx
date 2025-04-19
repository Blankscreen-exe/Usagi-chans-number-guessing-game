//Result
//This module is dedicated to show the game state where the final outcome of the game is displayed.
//Will also show the reward the player gets based on points.
import React from 'react'

//loading reward images
import luckyClover from '/rewards/lucky_clover.png'
import cuteBurger from '/rewards/cute_burger.png'
import mysteriousEgg from '/rewards/mysterious_egg.png'
import mysticalHarp from '/rewards/mystical_harp.png'
import strangeDog from '/rewards/strange_dog.png'
import rainbowDiamond from '/rewards/rainbow_diamond.png'
import goldenRabbit from '/rewards/golden_rabbit.png'

export default function Result(props) {

    let result;
    let reward = {};
    if (props.playerData.points <= 5) {
        result = "Out of luck maybe?"
        reward["img"] = luckyClover
        reward["text"] = "Lucky Clover!"
        reward["description"] = "guess you'll need it"
    } else if (props.playerData.points <= 10) {
        result = "You're getting better"
        reward["img"] = cuteBurger
        reward["text"] = "Cute Burger!"
        reward["description"] = "so cute that you wouldn't want to eat it"
    } else if (props.playerData.points <= 25) {
        result = "Nice work! keep it up"
        reward["img"] = mysteriousEgg
        reward["text"] = "Mysterious Egg!"
        reward["description"] = "I wonder what's inside"
    } else if (props.playerData.points <= 50) {
        result = "Great! but there are more heights to achieve"
        reward["img"] = mysticalHarp
        reward["text"] = "Mystical Harp!"
        reward["description"] = "Used for playing mystical music"
    } else if (props.playerData.points <= 75) {
        result = "Awesome!"
        reward["img"] = strangeDog
        reward["text"] = "Strange Dog!?"
        reward["description"] = "What breed is this anyway?"
    } else if (props.playerData.points < 100) {
        result = "Splendid!"
        reward["img"] = rainbowDiamond
        reward["text"] = "Rainbow Diamond!"
        reward["description"] = "It's so rare"
    } else if (props.playerData.points >= 100) {
        result = "Be proud! people rarely make this far"
        reward["img"] = goldenRabbit
        reward["text"] = "Golden Rabbit!"
        reward["description"] = "Only a few gets this"
    }

    function changeState() {
        props.setPlayerData(() => {
            return {
                turns: 0,
                lives: 3,
                points: 0
            }
        })
        props.setGameState(0)
    }

    function saveDaRecord() {
        //TODO: function to save html by "html-to-img" pack
    }

    return (
        <div>
            <span className='font-[yoster] text-[19pt] text-[brown]'>{result}</span><br />
            <span className='text-[15px]'>You won a <span className='text-orange-600 font-bold underline'>{reward.text}</span></span><br />
            <span><img src={reward.img} className="w-[75px] inline" /></span><br />
            <span className='text-[15px]'>{reward.description}</span><br />
            <hr className='mt-3 mb-4 [border-style:inset] border-1' />
            {/* <p className='save-record-text'>Press <span className='highlight'>Record</span> to save your name on my roster</p> */}
            <p>
                {/* <input name="name" className='name-input-box' type="text" placeholder='Enter your name'/>
                <button className="io-button save-record-button">🥕 Save Record !</button> */}
                <button className="border-4 border-[#e12407] btn-shadow p-[5px] ml-2.5 text-[14pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0" onClick={changeState}>🥕 Play Again ? 🥕</button>

            </p>
        </div>
    )
}
