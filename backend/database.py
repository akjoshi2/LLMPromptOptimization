import sqlite3

db = sqlite3.connect("testdb")
cursor = db.cursor()
t ="""Default"""
cursor.execute("""INSERT INTO conversation(name,value,cat) VALUES (?,?,?)""", ('default', t, 'other'))
db.commit()
db.close()