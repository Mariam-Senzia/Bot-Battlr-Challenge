import React from "react";

function YourBotArmy({bots}) {
    const armyBots = bots.map((bot) => {
        return <div key={bot.name}>
            <img src={bot.avatar_url} id="botList" alt="Bot"/>
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
            <button >Remove from army</button>
        </div>
    });

    return (
        <div id="army">
            <h4>Your bot army:</h4>
            <div className="botList">
                {armyBots}
            </div>
            
        </div>
    );
}

export default YourBotArmy;