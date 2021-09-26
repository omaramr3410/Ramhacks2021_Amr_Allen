from flask import Flask, render_template
from flask import Flask, flash, request, redirect, jsonify, url_for
import pymysql
import requests
import pandas as pd
import MySQLdb
import xlrd
import json
from datetime import datetime, timedelta, date
import numpy as np
import getpass

app = Flask(__name__)


@app.route('/')
def index():
    print("asdknasljkbnsdajklhasdjkhhbdsajk")
    return '''<form action="/submit">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" value="Mike"><br><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" value="Walker"><br><br>
        <input type="submit" value="Submit">
        </form>'''
    # return render_template('index.html')


@app.route('/submit')
def submit():
    print("INSIDE SUBMIT")
    return '''<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Meta Info-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>My Website</title>
    
    <!-- Website Icon -->
    <link rel="icon" href="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" type="x_icon">    
    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="style.css">

    <!-- import the webpage's javascript file -->
    <script src="script.js" defer></script>
  </head>  
  <body>
  </body>
</html>'''


@app.route('/receive', methods=['GET', 'POST'])
def receive():
    print("INSIDE RECIEVE")
    JSON_data = request.form.get('JSON_data')
    JSON_data = json.loads(JSON_data)
    platform = request.form.get('platform')
    print("OUR COSTAR DATA", JSON_data, platform)
    #save JSON data as JSON file locally
    return JSON_data
