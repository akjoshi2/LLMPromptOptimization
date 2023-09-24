import sqlite3

db = sqlite3.connect("testdb")
cursor = db.cursor()
t ="""Hint: Use PrintWriter"""
cursor.execute("""INSERT INTO conversation(name,value,cat) VALUES (?,?,?)""", ('default', t, 'Code Generation'))
db.commit()
db.close()