import sqlite3

db = sqlite3.connect("testdb")
cursor = db.cursor()
t ="""Default"""
print(cursor.execute("""SELECT cat FROM conversation""").fetchall())
db.commit()
db.close()