# CreditWorksTestApp
Test App to complete for CreditWorks as part of a position application

The folder structure is as follows:
  frontend: An Angular web app that has all the required functionality specified in the CreditWorksTest description
  backend: A .Net Backend that uses Entity Framework MVC to handle and store all information from the frontend into a MSSQL Database.
  DatabaseAndTablesCreate.sql: A file that needs to be executed in order for the database and required tables to be created and the tables populated with required specified dummy data.
  Connection string.txt: This file contains the default connection string that was issued to me when installing my database. It additionally contains the command I had to run in order to setup the models for entity framework.

Backend Installation and Running:
  Going of the assumption that you already have MSSQL and Visual studio installed you would be able to run the backend of this app.
  You will need to first create the database by opening the script file called: DataDatabaseAndTablesCreate.sql and pressing the 'Execute' (run query) button.
  Once the database and table have been created by the query you will now be able to setup the MVC framework that will handle all the requests from the backend to the database.
  After cloning the backend folder to your machine and opening the solution in visual studio you will need to run a command found in the 'Connection string.txt' file that is located with the frontend and backend folders.
  The command should be run in the Package Manager Window (Tools > NuGet Package Manager > Package Manager Console). This command will use the default connection string to set up the database connection and model creation.
  You might need to amend the connection string used in the command if you have special security set up on your database.
  Once the setup of the models has completed successfully you will be able to build and run the backend that will accept requests from the frontend web app.

Frontend Installation and Running:
  After cloning the repository down to your machine you will need to navigate to the frontend folder and run the command 'npm install'. This will install some of the required packages that angular uses, and that I have used.
  To start the application you run the following command in the frontend folder: 'ng serve'. This will start the application (hopefully without errors).
  Once started you can open your browser and navigate to the following url: https://localhost:4200.
  You should see the app that started on the home page.

Feel free to contact me if you encounted any issues related to the setup of the application:
hoppies@live.co.za, oppermanhannu@gmail.com, +64 21 031 0380

I hope the application is developed straight-forward enough that I would not need to explain too much about how it works.
Forgive the lack of styling as that has never been a strong point of mine :)
Have fun playing around with the app and feel free to contact me with any and all concerns.

Have a Great day!
Stephanus Johannes (Hannu) Opperman - Auckland, NZ
