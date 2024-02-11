import React from "react";

function BotCollection({bots,handleClick}) {

    const allBots = bots.map((bot) => {
        return <div key={bot.name}>
            <img src={bot.avatar_url} alt="Bot"/>
            <ul>
                <li >Name: {bot.name}</li>
                <li >Armor: ${bot.armor}</li>
                <li >Bot class: {bot.bot_class}</li>
                <li >Catchphrase: {bot.catchphrase}</li>
                <li >Created at: {bot.created_at}</li>
                <li >Damage: {bot.damage}</li>
                <li >Health: {bot.health}</li>
                <li >Updated at: {bot.updated_at}</li>     
            </ul>
            <button onClick={() => handleClick(bot)}>Add to army</button>

        </div>
    })
    
    return(
        <div>
            <h4>Bot Collection:</h4>
            <div className="botList">
                {allBots}
            </div>
        </div>
    );
}

export default BotCollection;