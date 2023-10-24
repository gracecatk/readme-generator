function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    // Add more cases for other licenses as needed
    default:
      return '';
  }
}
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GNU GPLv3':
      return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
    // Add more cases for other licenses as needed
    default:
      return '';
  }
}
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
  } else {
    return 'No license provided';
  }
}
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## License
${renderLicenseSection(data.license)}
`;
}
module.exports = generateMarkdown;