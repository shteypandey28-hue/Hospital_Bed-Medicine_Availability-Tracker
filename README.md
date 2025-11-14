Hospital Bed & Medicine Availability Tracker (HBMT)
A real-time tracking system for hospital bed availability and essential medicine stock across different regions. Built for public health monitoring and emergency situations.
📋 Table of Contents
Overview
Features
Tech Stack
Project Structure
Setup Instructions
API Documentation
Usage
Screenshots
Contributing
License
🎯 Overview
The Hospital Bed & Medicine Availability Tracker is a full-stack web application designed to help healthcare administrators and the public monitor real-time availability of:
Hospital Beds: General beds, ICU beds, and oxygen availability
Essential Medicines: Stock levels, shortages, and critical alerts
The system integrates with OpenFDA Drug API to fetch real-time drug shortage data and adverse event information, providing accurate and up-to-date medicine availability tracking.
✨ Features
🏥 Hospital Tracking
Real-time Bed Availability: Monitor available beds vs. total capacity
ICU Monitoring: Track ICU bed availability and occupancy rates
Oxygen Status: Check oxygen availability at each hospital
City-based Filtering: Filter hospitals by specific cities
Visual Indicators: Color-coded status (green/yellow/red) based on availability
💊 Medicine Tracking
OpenFDA Integration: Real-time data from FDA Drug Shortage API
Stock Levels: Current stock vs. required stock with percentage indicators
Status Classification:
🟢 Normal (adequate stock)
🟡 Low (below threshold)
🔴 Critical (severe shortage)
Source Tracking: Identifies medicines from OpenFDA API
City Distribution: Medicine availability across different cities
📊 Dashboard & Analytics
Overview Statistics:
Total hospitals
Available beds and ICU capacity
Bed/ICU occupancy percentages
Critical and low stock medicine counts
Trending Charts: 7-day historical data visualization using Chart.js
Real-time Updates: Auto-refreshes every 2 minutes
🚨 Alert System
Critical Bed Shortages: Alerts when bed availability < 10%
ICU Shortages: Alerts when ICU availability < 5%
Oxygen Unavailability: Notifications for hospitals without oxygen
Medicine Shortages: Critical alerts for medicines with low stock
Visual Alerts: Prominent alert panel with severity indicators
🔍 Search & Filter
Global Search: Search hospitals and medicines by name or city
City Filtering: Dropdown to filter by specific cities
Real-time Results: Instant search results as you type
🎨 User Interface
Dark Theme: Modern, eye-friendly dark color scheme
Responsive Design: Works on desktop, tablet, and mobile devices
Smooth Animations: Hover effects and transitions
Progress Bars: Visual representation of availability percentages
🛠️ Tech Stack
Backend
Flask 2.3.3: Python web framework
Flask-CORS 4.0.0: Cross-origin resource sharing
Requests 2.31.0: HTTP library for API calls
python-dotenv 1.0.0: Environment variable management
Python 3.7+: Programming language
Frontend
React 18.2.0: UI library
Chart.js 4.4.0: Data visualization
react-chartjs-2 5.2.0: React wrapper for Chart.js
Axios 1.6.0: HTTP client (available but using fetch)
CSS3: Modern styling with gradients and animations
APIs Integrated
OpenFDA Drug API:
Drug Shortage endpoint
Adverse Events endpoint
Base URL: https://api.fda.gov/drug
📁 Project Structure
HBMT/├── backend/│   ├── app.py                 # Flask application (main backend)│   ├── requirements.txt        # Python dependencies│   ├── .env                    # Environment variables (API key)│   └── venv/                   # Virtual environment (not in git)│├── frontend/│   ├── public/│   │   └── index.html         # HTML template│   ├── src/│   │   ├── App.js              # Main React component│   │   ├── App.css             # Main styles│   │   ├── index.js            # React entry point│   │   ├── index.css           # Global styles│   │   └── components/         # React components│   │       ├── Header.js       # Header component│   │       ├── Dashboard.js    # Statistics dashboard│   │       ├── AlertPanel.js   # Critical alerts│   │       ├── HospitalList.js  # Hospital cards│   │       ├── MedicineList.js # Medicine cards│   │       ├── TrendingChart.js # Chart visualization│   │       └── SearchBar.js    # Search functionality│   └── package.json           # Node dependencies│└── .gitignore                  # Git ignore rules
🚀 Setup Instructions
Prerequisites
Python 3.7+ installed
Node.js 14+ and npm installed
Git (optional, for cloning)
Backend Setup
Navigate to backend directory:
   cd backend
Activate virtual environment:
macOS/Linux:
   source venv/bin/activate
Windows:
   venv\Scripts\activate
Install dependencies:
   pip install -r requirements.txt
Create .env file:
   # Create .env file in backend directory   echo "OPENFDA_API_KEY=your_api_key_here" > .env
Get your API key from: https://open.fda.gov/apis/authentication/
Note: While an API key is optional, it's recommended for higher rate limits (240 requests/minute vs 60 without).
Run the Flask server:
py
   python app.py
The backend will start on: http://localhost:5001
Frontend Setup
Open a new terminal and navigate to frontend directory:
   cd frontend
Install dependencies:
install
   npm install
Start the development server:
   npm start
The frontend will automatically open in your browser at: http://localhost:3000
Quick Start (One-liner)
Backend (macOS/Linux):
cd backend && source venv/bin/activate && python app.py
Frontend:
cd frontend && npm start
