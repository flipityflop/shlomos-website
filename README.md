# Shlomo Friedman Portfolio Website

A professional portfolio website built with Node.js and Express.js, showcasing development projects, IT operations expertise, and creative work.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Multiple Sections**: 
  - Development & Project Management portfolio
  - IT Operations experience
  - Creative work and VFX projects
- **Project Showcases**: Detailed pages for major projects including:
  - Amazon Flywheel Dashboard
  - Sound Around Admin Portal
  - SereneLife Smart Home App
- **Professional Layout**: Clean, modern design with smooth animations

## Technology Stack

- **Backend**: Node.js with Express.js
- **Templating**: EJS with express-ejs-layouts
- **Styling**: Custom CSS with Google Fonts (Inter)
- **Development**: Nodemon for development server

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```

### Production Mode
Start the production server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
website-app/
├── public/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── script.js          # Client-side JavaScript
│   └── images/                # Static images
├── views/
│   ├── layout.ejs             # Main layout template
│   ├── index.ejs              # Home page
│   ├── development.ejs        # Development & PM page
│   ├── itops.ejs              # IT Operations page
│   ├── creative.ejs           # Creative work page
│   └── projects/              # Project detail pages
│       ├── amazon-flywheel.ejs
│       ├── sound-around.ejs
│       └── serenelife.ejs
├── server.js                  # Express server configuration
├── package.json
└── README.md
```

## Routes

- `/` - Home page with personal introduction
- `/development` - Development & PM projects
- `/itops` - IT Operations experience
- `/creative` - Creative work and VFX portfolio
- `/project/amazon-flywheel` - Amazon Flywheel Dashboard details
- `/project/sound-around` - Sound Around Admin Portal details
- `/project/serenelife` - SereneLife App details

## About the Content

This portfolio website showcases the work of Shlomo Friedman, featuring:

- **Technical Projects**: From Amazon marketplace dashboards to smart home applications
- **IT Operations**: Infrastructure management, helpdesk operations, and system administration
- **Creative Work**: VFX work for HBO and FX productions
- **Development Philosophy**: Focus on building technical products with creative solutions

## License

ISC License - See package.json for details
#   s h l o m o s - w e b s i t e 
 
 
