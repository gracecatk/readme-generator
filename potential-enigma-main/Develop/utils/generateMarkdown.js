// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // You can define badge URLs for different licenses here
    // For example, if you're using shields.io for badges:
    // const badgeURL = `https://img.shields.io/badge/license-${license}-brightgreen.svg`;
    // Or use other sources for badges
    return `[![License](badgeURL)](licenseURL)`;
  }
  return ''; // Return an empty string if no license is provided
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // You can provide links to the full text of licenses or other relevant information
    // For example, if you have license URLs:
    // const licenseURL = 'https://www.example.com/license';
    return `[License](licenseURL)`;
  }
  return ''; // Return an empty string if no license is provided
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // You can provide a brief description or summary of the license here
    return `This project is licensed under the [${license} License](licenseURL).`;
  }
  return ''; // Return an empty string if no license is provided
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact ${data.email}.

GitHub: [${data.github}](https://github.com/${data.github})
`;

}

module.exports = generateMarkdown;