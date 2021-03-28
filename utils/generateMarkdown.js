// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (!license) {
    return 'no license';
  } 
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GPL v2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  if (license === 'GPL v3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }
  if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } 
  if (license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/'
  }
  if (license === 'Apache 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  if (license === 'GPL v2') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html'
  }
  if (license === 'GPL v3') {
    return 'https://www.gnu.org/licenses/'
  }
  if (license === 'ISC') {
    return 'https://choosealicense.com/licenses/isc/'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  ## License

  This application is covered under the [${license}](${renderLicenseLink(license)}) license.
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license[0])}

  # ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ${renderLicenseSection(data.license[0])}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  You can contact me at: ${data.email}

  GitHub: [${data.username}](https://github.com/${data.username})

  `;
};

module.exports = generateMarkdown;
