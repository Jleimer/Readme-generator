const fs = require('fs');
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Test](#tests)
    * [Credits](#credits)
    * [License](#license)
  
  ## Installation

  ${data.install}

  ## Usage

  ${data.usageInfo}

  ## Contributing

  ${data.guidelines}

  ## Tests

  ${data.testInstructions}

  ## Credits
  ${data.credits}

  ## Licenses
  ${data.license}

  ## Questions
  If you have any questions about this project please email at:
  ${data.email}
  ${data.github}
  ${data.link}
  


`;
}

module.exports = generateMarkdown;
