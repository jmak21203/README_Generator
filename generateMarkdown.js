// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  console.log(data);
  return `# ${data.title}
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
    ${data.description}  

  ## Table of Contents
  * [Install](#install)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)
  * [GitHub](#gitHub)
  * [Email](#email)

## Install
 ${data.install}
## Usage
 ${data.usage}
## Contribution
 ${data.contribution}
## Test 
 ${data.test}
## License
 * This application is covered under ${data.license}.

## Contact
* [Github](https://github.com/${data.gitHub})
* Email: ${data.email}`;
}

module.exports = generateMarkdown;
