import sqlite3

db = sqlite3.connect("testdb")
cursor = db.cursor()
res = db.cursor().execute("SELECT value FROM conversation WHERE cat=?", [("Math Problem")]).fetchone()
print(res[0])
db.commit()
db.close()