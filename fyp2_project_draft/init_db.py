import sqlite3

# Connect to SQLite DB (creates one if not exists)
conn = sqlite3.connect("attendance.db")
c = conn.cursor()

# Create users table
c.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('student', 'lecturer')),
    matric_no TEXT
)
""")

# Create attendance table
c.execute("""
CREATE TABLE IF NOT EXISTS attendance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    status TEXT NOT NULL,
    session_id TEXT NOT NULL,
    FOREIGN KEY(student_id) REFERENCES users(id)
)
""")

conn.commit()
conn.close()
print("✅ Database initialized successfully.")
