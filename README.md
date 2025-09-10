# SethDev - Personal Portfolio

This is the source code for my personal portfolio, an interactive and animated single-page website built with SvelteKit. It was designed to be my digital business card, showcasing my front-end development skills, projects, and interests.

### [➡️ View Live Demo](https://your-domain.com) <!-- << ADD YOUR FINAL URL HERE! -->

---


*(Tip: You can record a short GIF of the animation using a tool like [ScreenToGif](https://www.screentogif.com/) or [LICEcap](https://www.cockos.com/licecap/), upload it to a service like Imgur, and then replace the link above.)*

## ✨ Key Features

- **Dynamic Profile Animation**: A fluid animation that reveals information about me, featuring a "fire trail" effect created with pure CSS.
- **Automated Projects via GitHub API**: The projects section updates automatically by fetching my latest public repositories directly from my GitHub account, eliminating the need for manual updates.
- **Multi-Language Support**: The site automatically detects the visitor's browser language and displays content in either Romanian or English.
- **Modern Design (Glassmorphism)**: The interface uses a "frosted glass" style (glassmorphism) for a clean and modern look.
- **SEO & Social Media Optimized**: Comprehensive meta tags (Open Graph, Twitter Cards, JSON-LD) for optimal Google indexing and perfect link previews on social platforms like Discord or Twitter.
- **Fully Responsive**: The design seamlessly adapts to any device, from desktop to mobile.

## 🚀 Tech Stack

- **Framework**: [**SvelteKit**](https://kit.svelte.dev/)
- **Styling**: **Pure CSS** (with modern features like Flexbox, Grid, and CSS Variables)
- **Hosting**: [**Cloudflare Pages**](https://pages.cloudflare.com/)

## ⚙️ Setup and Local Development

To run this project on your local machine, follow the steps below.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18.x or newer) installed.

### 2. Clone the Repository
```
git clone https://github.com/sethdev17/about-me.git
cd about-me
```
3. Install Dependencies
```
npm install
```
4. Configure Environment (Crucial Step)
The project uses the GitHub API to fetch repositories. To avoid rate limits, a personal access token is required.
Create a .env file in the root of the project.
Generate a GitHub Personal Access Token. You only need the public_repo scope.
Add the token to your .env file:
 ```
 nano .env

# Your personal token from GitHub
GITHUB_TOKEN="ghp_YOUR_TOKEN_HERE"
```
5. Run the Development Server
Once everything is configured, start the development server:
```
npm run dev

# Or start the server and open it in a new browser tab:
npm run dev -- --open
```
The application will be available at http://localhost:5173.

©️ Copyright and License
Copyright © 2024 SethDev. All Rights Reserved.
This project is private intellectual property. You do not have permission to copy, modify, distribute, or use this source code in any way, in whole or in part, without the express written consent of the author (SethDev).
Any unauthorized use of this code constitutes a violation of copyright law and will be addressed accordingly.
📫 Contact
GitHub - @sethdev17
Discord - kurumi362
Email - gg079331@gmail.com
