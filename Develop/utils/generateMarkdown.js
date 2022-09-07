// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const MIT = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ";
const GNU = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) ";
const ISC = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) ";
const Apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ";


function renderLicenseBadge(license) {
	console.log(license)
	let badgeArr = [];

	if(license.includes("MIT") === true){
		badgeArr.push(MIT)
	}
	if(license.includes("GNU") === true){
		badgeArr.push(GNU)
	}
	if(license.includes("ISC") === true){
		badgeArr.push(ISC)
	}
	if(license.includes("Apache") === true){
		badgeArr.push(Apache)
	}
	
	return badgeArr.join(" ");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseText = "Licensed under the "
	for(let x of license){
		console.log(license.length)
		if(license.length > 1){
			licenseText += license + ", "
		} else{
			licenseText += x;
		}
		return licenseText;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Usage
---
${data.usage}

## Features
---
${data.features}

## Installation
---
${data.installation}

## License
---
${renderLicenseSection(data.license)}

## Questions?
---
Get in touch with me at ${data.email}

Link to my github: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;

//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

//[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

