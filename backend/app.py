from flask import Flask, request
import requests
from flask_cors import CORS
import boto3
import sqlite3
import json
import openai
import os 
app = Flask(__name__)
CORS(app)

# session = boto3.session.Session()
# client = session.client(
#     service_name='secretsmanager',
#     region_name="us-east-2"
# )
# apikey = client.get_secret_value(
#         SecretId="arn:aws:secretsmanager:us-east-2:786987962169:secret:openaiapikey-D5xsWn"
#     )
if(os.path.exists("/etc/secrets/openaikey")):
    apikey = open("/etc/secrets/openaikey").read()
else:
    apikey = open("apikey").read()

@app.route("/categorize", methods=["POST"])
def cat_nlp():
    print(request.form)
    '''endpoint = "https://api.openai.com/v1/chat/completions"
    headers= {"Authorization": "Bearer " + json.loads(apikey["SecretString"])["openai"], "Content-Type" : "application/json"}
    print(headers)
    messages = [
      #  {"role" :  "system", "content" : "Your role is to classify the submitted text into one of these categories. Select the category that matches the submitted text. Categories: Math Problem, Essay Generation, Multiple Choice Question"},
       # {"role" : "user", "content" : "Text: " + request.form["sentence"]}
       {"role": "user", "content": "What is the OpenAI Mission?"}
    ]   
    print(messages)
    body = {"model" : "gpt-3.5-turbo", "messages" : messages,  "temperature" : .2, "max_tokens": 1024}
    resp = requests.post(endpoint, json=json.dumps(body), headers=headers)
    print(resp)
    print(resp.status_code)
    return resp.json()["choices"]["message"]'''
    openai.api_key = apikey
    db = sqlite3.connect("testdb")
    categories = [i[0] for i in db.cursor().execute("SELECT name from categories").fetchall()]
    print(categories)
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Your role is to classify the submitted text into one of these categories. Select the exact category that matches the submitted text. Categories: " + ", ".join(categories)},
        {"role": "user", "content": "Text: " + request.form["sentence"]}
    ]
    )
    queryType = completion.choices[0].message.content
    print(queryType)
    if ("Math Problem" in queryType):
        res = db.cursor().execute("SELECT value FROM conversation WHERE cat=?", [("Math Problem")]).fetchone()[0]
        return {"data" : res + request.form["sentence"], "label" : queryType}
    elif("Code Generation" in queryType):
        pass
    elif("Multiple Choice" in queryType):
        pass
    elif("Essay Generation" in queryType):
        pass
    else:
        pass
    return {"Error" : True}
    #return comple tion.choices[0].message
@app.route("/")
def hello_world():
    db = sqlite3.connect("testdb")
    create_schema(db)
    return "<p>Hello, World!</p>"
@app.route("/getcat", methods=["GET"])
def gc():
    db = sqlite3.connect("testdb")
    c = db.cursor()
    return {"res" : [i[0] for i in db.cursor().execute("SELECT name from categories").fetchall()]}
    
@app.route("/set", methods=["POST"])
def s():
    db = sqlite3.connect("testdb")
    c = db.cursor()
    c.execute("""REPLACE INTO conversation(name,value,cat) VALUES (?,?,?)""", [('Aiden', requests.form["value"], requests.form["type"])])
    db.commit()
    return {}

@app.route("/get", methods=["GET"])
def g():
    db = sqlite3.connect("testdb")
    c = db.cursor()
    return {"value" : c.execute("""SELECT value,cat FROM conversations WHERE cat=?""", [(requests.args["type"])]).fetchone()}
    
def create_schema(db):
    c = db.cursor()
    cats = """CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT NOT NULL)"""
    c.execute(cats)
    db.commit()
    db.close()

    

if __name__ == "__main__":
    app.run()