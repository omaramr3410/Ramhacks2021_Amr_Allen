
from flask import Flask, flash, request, redirect, jsonify, url_for, render_template
import pymysql
import requests
import pandas as pd
import MySQLdb
import xlrd
import json
from datetime import datetime, timedelta, date
import numpy as np
import getpass
import os
import json

app = Flask(__name__)


@app.route('/')
def index():
    print("asdknasljkbnsdajklhasdjkhhbdsajk")
    return render_template('home.html')


@app.route('/submit')
def submit():
    form = request.form
    print("INSIDE SUBMIT",form)
    # , columns=['a', 'b', 'c'], table_data={"1": {"col1": "1", "col2": "2", "col3": "3"}, "2": {"col1": "113", "col2": "212", "col3": "354"}})
    return render_template('data.html', bulletins = [{'title': 'HIII', 'date': 'DATEE VALUE'}, {'title': 'HIII AGAIN', 'date': 'THE SECOND VALUE'}])


@app.route('/receive', methods=['GET', 'POST'])
def receive():
    print("INSIDE RECIEVE")
    JSON_data = request.form.get('JSON_data')
    JSON_data = json.loads(JSON_data)
    platform = request.form.get('platform')
    print("OUR COSTAR DATA", type(JSON_data), platform)
    #save JSON data as JSON file locally
    file_path = 'platform_jobs/'+'jobs_'+platform+'.json'
    if os.path.exists(file_path):
        os.remove(file_path)
    else:
        print("The file does not exist")

    open(file_path,'x')
    with open(file_path, 'w') as outfile:
        json.dump(JSON_data, outfile)
    
    return json.dumps(JSON_data)
