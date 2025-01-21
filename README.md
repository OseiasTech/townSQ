# townSQ

This project is intended for Front-end E2E test automation.

### Tools Used

- Cypress
- JavaScript
- Cucumber

### Running the Project

Installing all dependencies:

- `yarn install`

Running the tests:

- `npx cypress open`: This command opens Cypress for manual executions.

### Project Architecture :gear:

e2e:

- This folder contains files written in BDD with Gherkin.

Support:

- **Elements**: The Elements folder is dedicated to containing all the element mapping files.
  
- **PageObjects**: The PageObjects folder holds all the logic and interactions with the application.

- **Step**: The Steps folder contains the file responsible for linking the described scenario with the code to interact with the application.

fixtures:

- This folder contains all the login JSON data.

### Machine Setup

- JavaScript
- Node.js
- VSCode
- Plugins:
  - Babel JavaScript
  - Bracket Pair Colorizer 2
  - Color Highlight
  - Cucumber (Gherkin) Full Support
  - Cucumber (Gherkin) Support enhanced for Behat
  - Feature Syntax Highlight and Snippets (Cucumber/Gherkin)
  - Snippets and Syntax Highlight for Gherkin (Cucumber)
  - Cucumber Quick

### Created by

- Oseias Gomes
