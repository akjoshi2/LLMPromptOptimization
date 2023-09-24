import sqlite3

db = sqlite3.connect("testdb")
cursor = db.cursor()
cats = """ALTER TABLE conversation ADD name TEXT"""
cursor.execute(cats)
db.commit()
cursor.execute("""UPDATE conversation SET name='Aiden'""")
db.commit()
db.close()