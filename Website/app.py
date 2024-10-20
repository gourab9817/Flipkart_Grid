from flask import Flask, render_template

app = Flask(__name__)

# Route for the dashboard page
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

# Route for the freshness detection page
@app.route('/freshness_detection')
def freshness_detection():
    return render_template('freshness_detection.html')

# Main route to handle homepage redirection
@app.route('/')
def home():
    return dashboard()  # Redirecting to the dashboard page by default

if __name__ == '__main__':
    app.run(debug=True)
