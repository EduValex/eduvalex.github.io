# Assets Directory

This directory contains all shared assets (images, documents, etc.) used across all framework implementations.

## Structure

```
assets/
├── images/
│   ├── profile.jpg          # Your profile photo (400x400px recommended)
│   ├── projects/            # Project screenshots
│   │   ├── ecommerce.jpg
│   │   ├── task-app.jpg
│   │   ├── weather.jpg
│   │   └── blog.jpg
│   └── companies/           # Company logos (optional)
│       ├── company1.png
│       └── company2.png
└── docs/
    └── cv-eduardo-valenzuela.pdf  # Your CV in PDF format
```

## Image Guidelines

### Profile Photo
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **File size**: < 100KB (use [TinyPNG](https://tinypng.com/) to optimize)
- **Style**: Professional, clear background, good lighting

### Project Screenshots
- **Size**: 1200x800px (3:2 ratio) or 1600x900px (16:9 ratio)
- **Format**: JPG or WebP
- **File size**: < 300KB each
- **Quality**: High-resolution, clear UI/UX showcase

### Company Logos
- **Format**: PNG with transparency
- **Size**: Variable (will be resized by CSS)
- **File size**: < 50KB each

## Optimization Tools

- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - WebP conversion
- [Remove.bg](https://www.remove.bg/) - Background removal

## Adding New Images

1. Place your image in the appropriate folder
2. Update `cv-data.json` with the path:
   ```json
   "photo": "/shared/assets/images/profile.jpg"
   ```
3. Ensure path starts with `/shared/assets/`

## Placeholder Images

Until you add your own images, you can use placeholder services:

- [Unsplash](https://unsplash.com/) - High-quality free photos
- [UI Faces](https://uifaces.co/) - Profile photos
- [Placeholder.com](https://placeholder.com/) - Simple placeholders

Example placeholder URL:
```
https://via.placeholder.com/400x400/3b82f6/ffffff?text=Profile
```
