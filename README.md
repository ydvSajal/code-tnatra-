# Code Tantra - Online Coding Platform

A modern, full-featured online coding platform for competitive programming and technical assessments.

## Features

- 🎯 **10 Advanced C++ Problems** - Challenging data structure questions including:
  - Segment Trees
  - Tries
  - Red-Black Trees
  - Disjoint Set Union
  - Fenwick Trees
  - KD-Trees
  - Splay Trees
  - Persistent Segment Trees
  - Heavy-Light Decomposition

- 💻 **Code Editor** with syntax highlighting for C++
- 📊 **Question Navigation** - Easy sidebar navigation through all problems
- ⏱️ **Timer** - Track your exam time
- 📝 **Test Cases** - Sample inputs and expected outputs
- 🖥️ **Fullscreen Mode** - Focus on coding without distractions
- 📱 **Responsive Design** - Works on all screen sizes
- 🎨 **Dark Theme** - Easy on the eyes for long coding sessions

## Live Demo

Visit the live platform: [Code Tantra](https://ydvsajal.github.io/code-tnatra-/)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ydvSajal/code-tnatra-.git
```

2. Open `index.html` in your browser

That's it! No build process or dependencies required.

### Local Development

Simply open `index.html` in your favorite browser. The platform is built with vanilla HTML, CSS, and JavaScript - no frameworks or build tools needed.

## Project Structure

```
code-tantra/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── assets/             # Images and resources
│   └── BU_Logo_Horizontal-Web-RGB.jpg
└── README.md          # This file
```

## Features Overview

### Code Editor
- Syntax highlighting for C++
- Line numbers
- Tab support
- Auto-indentation
- Dark theme

### Question Management
- 10 pre-loaded advanced C++ questions
- Collapsible question sections
- Sample test cases
- Clear problem descriptions

### User Interface
- Clean, modern design
- Fullscreen toggle
- Resizable panels
- Sidebar navigation
- Timer countdown

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Customization

### Adding Questions

Edit the `questions` array in `script.js`:

```javascript
const questions = [
    {
        id: 1,
        title: "Your Question Title",
        description: "Question description...",
        inputFormat: ["Format line 1", "Format line 2"],
        outputFormat: ["Output format..."],
        testCase: {
            input: "Sample input",
            output: "Expected output"
        }
    }
];
```

### Changing Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --color-accent-blue: #4299e1;
    --color-code-bg: #1e2532;
    /* ... more variables */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Sajal Kumar**
- GitHub: [@ydvSajal](https://github.com/ydvSajal)
- Student ID: S24CSEU1704

## Acknowledgments

- Bennett University for the logo
- Inspired by competitive programming platforms like Codeforces and LeetCode

---

Made with ❤️ for coding enthusiasts
