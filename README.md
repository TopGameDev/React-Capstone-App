# Capstone RS-Player Tracker

For my Capstone Project I decided to create a Player Tracker for one of my favorite games, Runescape. I've been playing since a friend of mine introduced me to it in elementary school. 

I used a 3 stack approach to my web application:

- React - Frontend
- Flask - Backend
- Postgres - Database

I built this project because Ive always wanted to make a website that could help players keep track of their progress as there are so many different elements in the game that its hard to keep track of them all.

I learned a lot from this assignment. Mainly in how the database works with the front end and how to connect the two. Soon I will be adding a lot of other features that will challenge and enhance my ability to connect the frontend with the backend of my application. I also had the chance to get to know the React framework to a greater extent. I also got the opportunity to work more with Typescript and Promises, using Promises to pull data from my flask backend and from external API's. 

As of right now my application only has a few features:

- Track Player Stats & Boss Kill Counts 
- Post to a HUB for all to see
   - Ability to Edit Post
   - Ability to Delete Post
- Edit Profile

In the near future I will be adding these features:

- Chat
- Spawn Alerts
- Market Data on Items
- Ability to Team up with other users
- Shop

## How To Run The Program

You will need to have both the flask backend and this web application running at the same time to explore:

- Flask Backend Startup:

```js
   Clone Repository:
      1. cd to folder you want to clone in the terminal
      2. ~ git clone <git hub link>
      3. cd into cloned folder
      4. ~ Code . | To open folder in vs-code

   Start up a virtual environment
      python3 -m venv venv for MacOs
      source venv/bin/activate

      python -m venv for Windows
      venv\Scripts\activate

      pip install -r requirements.txt

   To run program
      flask run

   To close program
      Control + C
```

- React Application Startup:

```js
   Clone Repository:
      1. cd to folder you want to clone in the terminal
      2. ~ git clone <git hub link>
      3. cd into cloned folder
      4. ~ Code . | To open folder in vs-code

   Add Packages:
      1. ~ npm i react-router-dom
      2. ~ npm i axios
      
   To run program
      npm dev run

   To close program
      Control + C
```

Once you have flask and my application running:

- Click the sign up link to register for a new account.
- Once registered head to the log in link and sign in with your credentials
- Once signed in click the dashboard link to see the player tracker and post. There will be a side nav for navigating the dashboard.

