import sqlite3

db = sqlite3.connect("testdb")
cursor = db.cursor()
cats = """CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT NOT NULL, user TEXT NOT NULL)"""
cursor.execute(cats)
db.commit()
cursor.execute("""INSERT INTO categories (name, user) VALUES ('Math Problem', 'Aiden'), ('Code Generation', 'Aiden'), ('Multiple Choice', 'Aiden'), ('Essay Generation', 'Aiden')""")
db.commit()
db.close()