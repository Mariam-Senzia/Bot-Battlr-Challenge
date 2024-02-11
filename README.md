# Bot Battlr
Welcome to Bot Battlr, the ultimate platform in the known universe where you can assemble your own Bot Army! This React application empowers you to browse through a catalog of powerful robots, view their details, and enlist them into your formidable army.

# Instructions
Follow these steps to set up the project and get started:

-Clone this repository to your local machine.
-Ensure you have Node.js installed on your system.
-Open a terminal and navigate to the project directory.
-Install dependencies by running npm install.
-Create a new file named db.json in the project directory.
-Populate db.json with the provided data from the link.
-Start the backend server by running json-server --watch db.json.
-Test your server by visiting http://localhost:8001/bots in your browser.

# Core Features
## Bot Collection
-Browse through profiles of all available bots.
-Click on a bot to view its details.

## Your Bot Army
-Enlist a bot into your army by clicking on it. The selected bot will appear in the Your Bot Army section.
-Release a bot from your army by clicking on it. The bot will be removed from the Your Bot Army section.
-Permanently discharge a bot from service by clicking the red "x" button. This action deletes the bot from both the backend and the Your Bot Army section.

## API Endpoints
GET /bots
Example Response:

json
Copy code
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
DELETE /bots/:id
Example Response:

json
Copy code
{}
Project Structure