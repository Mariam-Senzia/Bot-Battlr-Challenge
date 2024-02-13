import React,{useEffect,useState} from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";

function App() {
  const [botList, setBotList] = useState([]);
  const [addBot, setAddBot] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then((res) => res.json())
        .then((bots) => {
        setBotList(bots)
        });
    },[]);

    function handleAdd(bot) {
      const botExists = addBot.includes(bot);
      if (!botExists){
      setAddBot([...addBot,bot]);
      }
    }

    function handleDelete(bot){
      const upDatedBots = addBot.filter((b) => {
        return b.name !== bot.name   
      })
      setAddBot(upDatedBots)
    }

    function dischargeBot(bot) {
        fetch(`http://localhost:3000/bots/${bot.id}`)
        .then((res) => res.json())
        .then(() => {
           const discharge = addBot.filter((nb) => {
            return nb.name !== bot.name
          });
          setAddBot(discharge)
        });
    }

  return (
    <div>
      <header id="header">
        <h1>Welcome to <em>Bot Battlr</em></h1>
        <p>The one and only spot in the known universe where you can custom build your own Bot Army!</p>
      </header>
      <YourBotArmy bots={addBot} handleDelete={handleDelete} dischargeBot={dischargeBot}/>
      <BotCollection bots={botList} handleClick={handleAdd}/>
    </div>
  );
}

export default App
