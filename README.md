This repo contains source codes for a personality test web app.

The app is developed in pure javascript, CSS and HTML5 - No frameworks.

Try it out here: https://effiongcharles.github.io/personalitytest/

Video of the running app: https://youtu.be/EQchDOmYID0

Unit testing for some key functions is done using JEST framework.

In order to execute the testcases:

(1) Ensure you have npm and jest installed  
(2) From terminal do: npm run test  
(3) You should see an output similar to the following:

> personality@1.0.0 test  
> jest

> PASS js/getquestion.test.js  
> PASS js/result.test.js  
> PASS js/getanswercat.test.js  
> PASS js/getquestionobj.test.js  
> PASS js/getanswer.test.js  
> PASS js/randindexes.test.js

> Test Suites: 6 passed, 6 total  
> Tests: 6 passed, 6 total  
> Snapshots: 0 total  
> Time: 0.78 s, estimated 1 s  
> Ran all test suites.
