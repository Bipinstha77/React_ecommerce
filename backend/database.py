import flask
from flask import request, jsonify
import mysql.connector
from flask_cors import CORS


app = flask.Flask(__name__)
CORS(app, resources={
    r"/signup": {"origins": "http://localhost:5173",
                 "methods": ["GET", "POST"], 
                 "allow_headers": ["Content-Type"]
                },
    r"/login": {"origins": "http://localhost:5173",
                "methods": ["POST"], 
                "allow_headers": ["Content-Type"]
               }
})

# Create MySQL connection
db = mysql.connector.connect(
    host='localhost',
    user='root', 
    password='1234',
    database='ecommerce'
)

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email") 
    address = data.get("address")
    phone = data.get("phone")
    password = data.get("password")

    try:
        cursor = db.cursor()
        cursor.execute("INSERT INTO users (name, email, address, phone, password) VALUES (%s, %s, %s, %s, %s)", 
                      (name, email, address, phone, password))
        db.commit()
        cursor.close()
        return jsonify({"success": True, "message": "User created successfully"}), 200
    except mysql.connector.Error as err:
        return jsonify({"success": False, "message": f"Error: {str(err)}"}), 400
    finally:
        if 'cursor' in locals():
            cursor.close()




@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()
    cursor.close()
    if user:
        return jsonify({"success": True, "message": "Login successful"}), 200
    else:
        return jsonify({"success": False, "message": "Invalid email or password"}), 400





@app.route("/categories", methods=["POST"])
def categories():
    data = request.json
    category = data.get("category")
    description = data.get("description")
    
    cursor = db.cursor()
    cursor.execute("INSERT INTO categories (name, description) VALUES (%s, %s)", (category, description))
    db.commit()
    cursor.close()
    if cursor.rowcount > 0:
        return jsonify({"success": True, "message": "Category created successfully"}), 200
    else:
        return jsonify({"success": False, "message": "Failed to create category"}), 400

if __name__ == "__main__":
    app.run(debug=True)