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

    function handleDelete(){
      alert("I am  a bot")
    }
  return (
    <div>
      <header id="header">
        <h1>Welcome to <em>Bot Battlr</em></h1>
        <p>The one and only spot in the known universe where you can custom build your own Bot Army!</p>
      </header>
      <YourBotArmy bots={addBot} handleDelete={handleDelete}/>
      <BotCollection bots={botList} handleClick={handleAdd}/>
    </div>
  );
}

export default App
