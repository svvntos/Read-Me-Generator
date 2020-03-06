function generateMarkdown (data){
    return `
    # ${data.title} 
    ![](https://img.shields.io/badge/License-${data.license}-important)

    # Description
    ${data.description}

    # Table of Contents

    *[Installation] (#installation)
    *[Tests] (#tests)
    *[Usage] (#usage)
    *[Contributing] (#contributing)
    *[License] (#license)
    *[Questions] (#questions)

    # Installation
    Run This Snippet to run Dependencies

    \`\`\`
    ${data.installation}
    \`\`\`
    
    # Tests
    Run The Tests With This Snippet
    \`\`\`
    ${data.tests}
    \`\`\`

    # Usage 
    ${data.usage}

    # Contributing
    How Users can Contribute <br />
    ${data.contributing}

    # Liscence <br />
    ${data.license}

    # Questions

    If you have any Questions, You can reach me at my [Email]${data.email}

    <img src="${data.avatar_url}" alt="Github Avatar" style="border-radius:50px" width=100px"/>

    `;
}
module.exports = generateMarkdown;