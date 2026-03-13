CarAPI - Full Stack Car Registration App

An application built with C# .NET 9 & Angular that displays car data and monitors expiry status in real time.

Project Specifications:
1. A GET request that returns a list of cars with an optional query parameter of make.
2. Display returned data from step 1 in a table in your frontend @ ‘/’.
3. A background service that checks if the cars registration has expired.
4. Display a table that shows live data of a car’s current registration expiry status (valid or expired), using SignalR and the background service from step 3. This page will be @ ‘/registration’.

Getting Started:
Backend:
1. Open CarApi.sln in Visual Studio
2. Run the API

Frontend:
1. Navigate to car-app folder (open in VS Code)
2. Run npm-install
3. Run npm run start
4. Open http://localhost:4200

Pages / Navigations:
/ - displays the list of cars with optional filter of make
/registration - displays live registration expiry status of all cars, updated every 10 seconds via SignalR
