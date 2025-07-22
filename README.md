# 🔍 GitHub Profile Finder

A sleek and responsive React-based application that allows users to search and view detailed GitHub profiles using the GitHub API.

## 🚀 Features

- 🔎 Search GitHub users by username  
- 👤 View profile details: Name, Bio, Location, Followers, Following, Public Repos  
- 📦 Display list of repositories with description and live link  
- 💾 Stores last searched profile in localStorage (auto-loads on reload)  
- 📱 Mobile-friendly design with responsive layout  
- ⚠️ Error handling for invalid usernames

## 📸 Demo

![GitHub Profile Finder Screenshot](https://your-screenshot-link-if-any.png)

##  Built With

- React.js
- Axios
- Tailwind CSS
- GitHub REST API

##  Installation

```bash
# Clone the repo
git clone https://github.com/saadparekh/github-profile-finder.git

# Navigate to the project directory
cd github-profile-finder

# Install dependencies
npm install

# Run the app
npm run dev

# Folder Structure:
src/
├── components/
│   ├── SearchBar.jsx
│   ├── ProfileCard.jsx
│   └── RepoList.jsx
├── pages/
│   └── Home.jsx
└── App.jsx

#  How It Works:
Enter a GitHub username in the search bar.

Fetches user profile and repositories from GitHub API.

Handles edge cases (e.g., user not found).

