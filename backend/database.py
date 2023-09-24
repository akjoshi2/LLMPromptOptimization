import sqlite3

db = sqlite3.connect("testdb")
cursor = db.cursor()
t ="""When translating, try to craft sentences that match the meaning of the original sentences. Do not simply translate every word."""
cursor.execute("""INSERT INTO categories(name,user) VALUES ('Translation', 'default')""")
cursor.execute("""INSERT INTO conversation(name,value,cat) VALUES (?,?,?)""", ('default', t, 'Translation'))
db.commit()
db.close()