from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the To-Do API!"

tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return {'tasks': tasks}

@app.route('/tasks', methods=['POST'])
def add_task():
    new_task = {'title': 'New Task'}
    tasks.append(new_task)
    return new_task, 201

if __name__ == '__main__':
    app.run()

