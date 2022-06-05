// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return `![badge](https://img.shields.io/badge/licenses-${license}-blue)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
## ${data.description}  
## ${data.install}
## ${data.usage}
## ${data.test}

${renderLicenseBadge(data.email)}
`;
}

module.exports = generateMarkdown;
