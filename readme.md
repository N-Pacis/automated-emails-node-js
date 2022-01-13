## CLONE THE PROJECT AND RUN IT IN TERMINAL USING THE FOLLOWING COMMANDS
- yarn install
- node app.js

This is a program that automates sending email to users using a specified period of time and uses node-cron module
## Let us learn about node-cron
- we schedule the cron job and it's format is cron.schedule('minute hour date month dayOfTheWeek',function())
- The function is a callback function that is executed at the specified time
- If we don't want to mention any of the above time parameters we replace it with asterisks and for the provided example this means that the cron job will be executed every Monday(1) at 8:00

You can go ahead and replace the array values of users array in app.js in order to send emails to specific users and you can adjust the defined time in node-cron.schedule parameters.
And then head to .env file to add auth email address and password and make sure in the provided email address 'less-secure apps is enabled'

## DON'T FORGET TO STAR THE PROJECT AND TO CONTRIBUTE
