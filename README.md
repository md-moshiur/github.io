# MetalHeat Academy - Metallurgical Heat Treatment Website

A comprehensive educational website covering metallurgical heat treatment processes including annealing, quenching, tempering, nitriding, carburizing, and advanced surface treatments.

## 🌟 Features

- **Interactive Charts**: Temperature-time cycles and property comparisons using Chart.js
- **Responsive Design**: Mobile-friendly interface built with TailwindCSS
- **Educational Content**: Detailed explanations of heat treatment processes
- **Process Parameters**: Comprehensive tables with technical specifications
- **Modern UI**: Clean, professional design with smooth animations

## 🏗️ Project Structure

```
metallurgy-heat-treatment/
├── index.html                    # Homepage with process overview
├── assets/
│   └── js/
│       └── main.js              # Interactive charts and functionality
└── processes/
    ├── annealing.html           # Annealing process details
    ├── quenching.html           # Quenching process details
    ├── tempering.html           # Tempering process details
    ├── nitriding.html           # Nitriding process details
    ├── carburizing.html         # Carburizing process details
    └── surface-treatments.html  # Advanced surface treatments
```

## 🚀 Quick Start

### Option 1: Simple HTTP Server (Recommended)
```bash
# Using Node.js serve package
npx serve .

# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000
```

### Option 2: Local File Access
Simply open `index.html` in your web browser. All external dependencies (TailwindCSS, Chart.js, Font Awesome) are loaded via CDN.

## 📋 Dependencies

All dependencies are loaded via CDN - no local installation required:

- **TailwindCSS**: Modern CSS framework for styling
- **Chart.js**: Interactive charts and data visualization
- **Font Awesome**: Icon library for visual elements

## 🌐 Live Demo

The website is deployed and accessible at: https://cu767ije.scispace.co

## 📚 Content Coverage

### Heat Treatment Processes
- **Annealing**: Softening treatments, types, microstructural changes
- **Quenching**: Rapid cooling, martensite formation, quenching media
- **Tempering**: Property balancing, secondary hardening stages
- **Nitriding**: Surface hardening, alloying element effects
- **Carburizing**: Carbon enrichment, case hardening
- **Surface Treatments**: PVD, CVD, plasma treatments

### Interactive Features
- Temperature-time cycle visualizations
- Hardness vs temperature charts
- Property comparison tools
- Process parameter tables

## 🎯 Educational Objectives

- Understanding heat treatment fundamentals
- Learning process parameters and applications
- Visualizing microstructural changes
- Comparing different treatment methods
- Industrial application knowledge

## 🔧 Customization

### Adding New Processes
1. Create a new HTML file in the `processes/` directory
2. Follow the existing template structure
3. Add navigation links in `index.html`
4. Update the footer links

### Modifying Charts
Edit the Chart.js configurations in `assets/js/main.js` to:
- Change data values
- Modify chart types
- Update styling
- Add new datasets

## 📱 Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## 📄 License

Educational content for metallurgical engineering learning purposes.

## 🤝 Contributing

This is an educational resource. Suggestions for improvements or additional content are welcome.

---

**MetalHeat Academy** - Master the science of steel transformation through controlled heating and cooling processes.