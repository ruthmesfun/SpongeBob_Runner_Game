# Spongebob Runner README

## Project Overview

Spongebob Runner is a game in which a user must jump over obstacles for as long as possible in order to achieve the highest score. After losing, a user can enter their name and if their score is high enough, it will be shown on the leaderboard which displays the top ten highest scores. 

## Technologies Used

Javascript, Ruby on Rails (Rails API backend), HTML, CSS, JSON, GoogleFonts

## BackEnd Setup

### Prerequisites
To use, clone down this repo and open with your preferred text editor. This project uses Ruby on Rails, so you’ll need to make sure you have both installed (if you don’t, visit this link for instructions: Digital Ocean: Install Ruby and Set Up Local Environment as well as PostgreSQL as the database resource.

### Installing
The project gemfile specifies Ruby 2.3.3, so make sure you have Ruby 2.3.3 or higher. Open terminal and in the root of the project directory run:

`bundle install` or simply `bundle`

to install gem dependencies. Once that completes successfully, run:

`rails db:create && rails db:migrate`

to facilitate backend set up. You can then seed the data by running:

`rails db:seed`

To activate the rails server, run:

`rails s`

and once the terminal says it’s running, navigate to http://localhost:3000. If there’s “Yay! You’re on Rails!” welcome page, then it’s time for the frontend setup. 

## FrontkEnd Setup

### Prerequisites
Before anything else, if you haven’t already, make sure to set up the project backend as well (directions above), which will ensure you have rails 2.3.3 or higher installed on your machine. This is a vanilla JavaScript project using node package manager, so once you have it open in your local environment, run the following:

`npm install`

terminal command from the root of the project to install dependencies.

### Installing
Once npm is finished installing and you’re back to a working terminal, jump over to the backend project root and run:

`rails s`

to start the server (if you haven't already).  Back in the terminal, run:

`open index.html`

which will launch Spongebob Runner in your browser. Enjoy the game! 

## Demo Video

[Spongebob Runner](https://youtu.be/HVlvjwGVETM)

## Authors

**Ruth Mesfun**
**Gabrielle  Bellini**

