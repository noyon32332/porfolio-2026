# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a beautiful design with smooth animations, interactive elements, and a mobile-friendly layout.

## Features

- ✨ **Modern Design**: Clean, professional layout with gradient accents
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Smooth Animations**: Engaging scroll animations and hover effects
- 🧭 **Easy Navigation**: Sticky navbar with smooth scrolling
- 💼 **Portfolio Showcase**: Display your projects with images and descriptions
- 🛠️ **Skills Section**: Animated skill bars showing your expertise
- 📧 **Contact Form**: Ready-to-use contact form (backend integration needed)
- ⚡ **Lightweight**: No heavy frameworks, pure vanilla JavaScript

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal information and statistics
3. **Projects**: Portfolio showcase with project cards
4. **Skills**: Technical skills with animated progress bars
5. **Contact**: Contact information and form

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## Customization

### Personal Information

1. **Name and Title**: Update the hero section in `index.html`
   ```html
   <span class="name">Your Name</span>
   <span class="title">Full Stack Developer</span>
   ```

2. **About Section**: Edit the about text and statistics in `index.html`

3. **Contact Information**: Update email, phone, and location in the contact section

4. **Social Links**: Replace `#` with your actual social media profiles

### Projects

Add or modify projects in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-laptop-code"></i>
        </div>
        <div class="project-overlay">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
    </div>
</div>
```

### Skills

Modify skills in the skills section. Update the percentage in the `style` attribute:

```html
<div class="skill-progress" style="width: 90%"></div>
```

### Colors

Customize the color scheme in `styles.css` by modifying CSS variables:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Images

Replace the placeholder icons with your actual images:

1. Add your profile image to the `hero-image` and `about-image` sections
2. Add project screenshots to the `project-image` sections

Example:
```html
<img src="path/to/your/image.jpg" alt="Description">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS with minimal dependencies
- Vanilla JavaScript for fast loading
- Font Awesome icons loaded via CDN
- Smooth scroll animations with Intersection Observer API

## Contact Form

The contact form currently shows an alert on submission. To make it functional:

1. Set up a backend service (Node.js, PHP, Python, etc.)
2. Update the form submission handler in `script.js`
3. Add server-side validation and email sending

Example with fetch API:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

## License

This project is open source and available under the MIT License.

## Credits

- Font Awesome for icons: https://fontawesome.com/
- Modern CSS techniques and best practices

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contribute to the project.

---

**Made with ❤️ for developers**

