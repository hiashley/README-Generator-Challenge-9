// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-brightgreen)`;
  } else if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-MIT-yellow)`;
  } else if (license === 'Mozilla 2.0') {
    return `![License](https://img.shields.io/badge/License-Mozilla%202.0-red)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache 2.0') {
    return 'Read more about Apache 2.0 here:';
  } else if (license === 'MIT') {
    return 'Read more about MIT here:';
  } else if (license === 'Mozilla 2.0') {
    return 'Read more about Mozilla 2.0 here:';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [License](#License)
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## Tests 
  ${data.test}

  ## Questions
  * GitHub: https://github.com/${data.github}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
