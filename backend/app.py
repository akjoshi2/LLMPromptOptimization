from flask import Flask, request
import requests
from flask_cors import CORS
import boto3
import sqlite3
import json
import openai

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
apikey = open("/etc/secrets/openaikey").read()

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
    openai.api_key = json.loads(apikey["SecretString"])["openai"]

    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Your role is to classify the submitted text into one of these categories. Select the category that matches the submitted text. Categories: "},
        {"role": "user", "content": "Text: " + request.form["sentence"]}
    ]
    )
    queryType = completion.choices[0].message.content
    if (queryType == "Math Problem"):
        return ("Take a deep breath and solve the problem step by step.\n" + request.form["sentence"])
    #return completion.choices[0].message
@app.route("/")
def hello_world():
    db = sqlite3.connect("testdb")
    create_schema(db)
    return "<p>Hello, World!</p>"

def create_schema(db):
    c = db.cursor()
    cats = """CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT NOT NULL)"""
    c.execute(cats)
    db.commit()
    db.close()

    

if __name__ == "__main__":
    app.run()