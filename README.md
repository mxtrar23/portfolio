# Portfolio Website

This repository contains the source code for a personal portfolio website built using modern web technologies such as HTML, CSS, and JavaScript. The website showcases the developer's skills, projects, and professional experience.

## Project Structure

```text
/
├── public/
│   ├── images/
│   │   └── profile.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── ProjectCard.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── ...
│   ├── styles/
│   │   ├── global.css
│   │   └── ...
│   ├── utils/
│   │   └── ...
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

The project is structured as follows:

- `public/`: This directory contains static assets like images and the website favicon.
- `src/components/`: This directory contains reusable React components used throughout the website.
- `src/pages/`: This directory contains the main pages of the website, each represented as a separate React component.
- `src/styles/`: This directory contains CSS files for styling the website.
- `src/utils/`: This directory contains utility functions and other helper modules.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm start`               | Starts the development server                    |
| `npm run build`           | Builds the production-ready website             |
| `npm run preview`         | Previews the production build locally           |
| `npm run lint`            | Runs linting checks on the codebase             |
| `npm run format`          | Formats the codebase using Prettier             |

## Installation

1. Clone the repository: `git clone https://github.com/your-username/portfolio-website.git`
2. Navigate to the project directory: `cd portfolio-website`
3. Install dependencies: `npm install`

## Usage

To start the development server, run:

```
npm start
```

The website will be accessible at `http://localhost:3000`.

To build the production-ready website, run:

```
npm run build
```

The built files will be located in the `dist/` directory.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
