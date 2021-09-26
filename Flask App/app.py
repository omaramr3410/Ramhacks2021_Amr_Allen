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
    print("INSIDE SUBMIT",request.args, request.args.get('fname'))
    skills = request.args.get('skills')
    degree = request.args.get('degree')
    major = request.args.get('major')
    location = request.args.get('location')

    main_JSON = []#main JSON to display to user

    #search through Costar DATA
    with open('jobs_Costar.json') as f:
        costar_data = json.load(f)

    with open('jobs_Parsons.json') as f:
        parsons_data = json.load(f)

    for x in costar_data:
        if(location in x['name'] or location in x['job_info'] or location in x['link']):
            x['Platform'] = 'Costar'
            main_JSON.append(x)
            continue
        if(major in x['name'] or major in x['job_info'] or major in x['link']):
            x['Platform'] = 'Costar'
            main_JSON.append(x)
            continue
        if(degree in x['name'] or degree in x['job_info'] or degree in x['link']):
            x['Platform'] = 'Costar'
            main_JSON.append(x)
            continue
        if(skills in x['name'] or skills in x['job_info'] or skills in x['link']):
            x['Platform'] = 'Costar'
            main_JSON.append(x)
            continue

    #search through Parsons data
    for x in parsons_data:
        if(location in x['name'] or location in x['job_info'] or location in x['link']):
            x['Platform'] = 'Parsons'
            main_JSON.append(x)
            continue
        if(major in x['name'] or major in x['job_info'] or major in x['link']):
            x['Platform'] = 'Parsons'
            main_JSON.append(x)
            continue
        if(degree in x['name'] or degree in x['job_info'] or degree in x['link']):
            x['Platform'] = 'Parsons'
            main_JSON.append(x)
            continue
        if(skills in x['name'] or skills in x['job_info'] or skills in x['link']):
            x['Platform'] = 'Parsons'
            main_JSON.append(x)
            continue

    print(main_JSON[0])

    # , columns=['a', 'b', 'c'], table_data={"1": {"col1": "1", "col2": "2", "col3": "3"}, "2": {"col1": "113", "col2": "212", "col3": "354"}})
    return render_template('index2.html', bulletins=main_JSON)


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

    # try:
    #     os.mkdir(file_path)
    # except FileExistsError as e:
    #     print("TRIED MAKING DIR")
    #     print(e)
    #     pass
    if os.path.exists('jobs_'+platform+'.json'):
        os.remove('jobs_'+platform+'.json')
    else:
        print("Can not delete the file as it doesn't exists")
    
    # open(file_path,'x')
    with open('jobs_'+platform+'.json', 'x') as outfile:
        json.dump(JSON_data, outfile)
    
    return json.dumps(JSON_data)
