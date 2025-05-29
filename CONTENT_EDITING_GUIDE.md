# Content Editing Guide

This guide explains how to edit the website content using the JSON files located in the `/data/` directory.

## Overview

The website content is now managed through JSON files, making it easy to update text, descriptions, and other content without touching the code. All content is stored in three main files:

- `data/homepage.json` - Homepage content
- `data/projects.json` - Project details and data
- `data/pages.json` - Development, IT Operations, and Creative page content

## File Structure

### Homepage Content (`data/homepage.json`)
```json
{
  "hero": {
    "title": "Page title",
    "subtitle": "Page subtitle"
  },
  "intro": {
    "heading": "Section heading",
    "description": "Section description"
  }
  // ... more sections
}
```

### Project Content (`data/projects.json`)
```json
{
  "projectKey": {
    "title": "Project Title",
    "description": "Project description",
    "status": "Project status",
    "metrics": {
      "metric1": "value1",
      "metric2": "value2"
    },
    "challenges": ["challenge1", "challenge2"],
    "timeline": [
      {
        "date": "Date",
        "event": "Event description"
      }
    ]
  }
}
```

### Page Content (`data/pages.json`)
```json
{
  "development": {
    "header": {
      "title": "Page title",
      "subtitle": "Page subtitle"
    },
    "recentProjects": {
      "heading": "Section heading",
      "projects": [...]
    }
  },
  "itops": { ... },
  "creative": { ... }
}
```

## How to Edit Content

1. **Find the content you want to edit** in the appropriate JSON file
2. **Edit the text values** (keep the JSON structure intact)
3. **Save the file**
4. **Restart the server** for changes to take effect: `npm start`

## Common Editing Tasks

### Updating Project Descriptions
Edit the `description` field in `data/projects.json`:
```json
"amazonFlywheel": {
  "description": "Your new project description here"
}
```

### Changing Homepage Headlines
Edit the `title` and `subtitle` in `data/homepage.json`:
```json
"hero": {
  "title": "Your new headline",
  "subtitle": "Your new subtitle"
}
```

### Updating Skills and Capabilities
Edit the arrays in `data/pages.json`:
```json
"capabilities": [
  {
    "title": "New capability",
    "description": "Description of capability"
  }
]
```

## Important Notes

- **Always maintain valid JSON syntax** (proper quotes, commas, brackets)
- **Test your changes** by viewing the website after editing
- **Back up files** before making major changes
- **Restart the server** after editing for changes to appear

## JSON Validation

If you get errors after editing, check:
- All strings are in quotes: `"text"`
- All objects end with commas except the last one
- All brackets and braces are properly closed
- No trailing commas after the last item in arrays/objects

You can use online JSON validators to check your syntax if needed.
