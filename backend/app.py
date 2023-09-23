from flask import Flask
import requests
import boto3
import sqlite3

app = Flask(__name__)
session = boto3.session.Session()
client = session.client(
    service_name='secretsmanager',
    region_name="us-east-2"
)
apikey = client.get_secret_value(
        SecretId="arn:aws:secretsmanager:us-east-2:786987962169:secret:openaiapikey-D5xsWn"
    )

@app.route("/categorize")
def cat_nlp():
    endpoint = "https://api.openai.com/v1/chat/completions"
    headers= {"Authorization" : "Bearer " + apikey, "Content-Type": "application/json"}
    body = {"model" : "gpt-3.5-turbo"}
    requests.post(endpoint, json=body, headers=headers)
    return {"answer" : }
@app.route("/")
def hello_world():
    db = sqlite3.connect("/mnt/lambda/testdb")
    create_schema(db)
    return "<p>Hello, World!</p>"

def create_schema(db):
    c = db.cursor()
    cats = """CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT NOT NULL)"""
    c.execute(cats)
    c.commit()
    c.close()