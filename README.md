# Ramhacks2021_Amr_Allen
Repo to hold submittions to our RamHacks contest in 2021

**Part 1**
To start up, run the Chrome Extension by going Chrome, clicking the top right dots, more Tools, Extensions, toggle Dev mode at the top right, then click Load unpacked, and select the Chrome Extension folder in this repo

At this point, the CE with gather the data and send it over to the API 

**Part 2**

To setup the server, navigate to the Flask folder in this repo, then run the three commands to start the server <br />
(Windows) <br />
set FLASK_APP=app <br />
set FLASK_ENV=development <br />
flask run--

(Mac) <br />
export FLASK_APP=app <br />
export FLASK_ENV=development <br />
flask run <br />

at this point, the CE can gather the data and package it to the server, and the server can analyze and present to the user

Now go to http://127.0.0.1:5000/ and type in your key words to find your jobs!
Have fun!
