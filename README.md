Setup
Playwright installation
-------------------
1) Nodejs
2) VS Code Editor
3) Create project folder  and  open it in VSCode

4) Install playwright  using terminal
   npm init playwright@latest

package.json  --- node project management file
playwright.config.js  -- playwright configuration
tests --- we can all teh playwright tests

npm playwright -v   -- return installed version of playwright.

5) install playwright using vs code extension

Run the playwright test
-----------
npx playwright test
npx playwright test --headed

HTML report
-------------
npx playwright show-report


Step 1 - Create a new file under test folder

Step 2 - Add module ‘playwright/test’
const { test, expect } = require('@playwright/test');

** test, expect  ------ functions from @playwright/test module
Playwright Test provides a test function to declare tests and expect function to write assertions

Step 3 - Create a test block - test(title, testFunction)
The keyword 'async' before a function makes the function return a promise
The keyword 'await' before a function makes the function wait for a promise

Step 4 - Run the test

1.npx playwright test --project=chromium --headed  FirstTest.spec.js

2.npx playwright test                 runs all tests on all browsers in headless mode

3.npx playwright test  MyTest1.spec.js            runs a specific test file

4.npx playwright test  MyTest1.spec.js  MyTest2.spec.js           runs the files specified

5.npx playwright test -g "test title"             runs test with the title

6.npx playwright test --project=chromium      runs on specific browser

7.npx playwright test --headed        runs tests in headed mode

8.npx playwright test --debug         debug tests

9.npx playwright test example.spec.js --debug           debug specific test file