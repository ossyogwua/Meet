Objective


To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

Key Features:

 Filter Events by City.
 Show/Hide Event Details.
 Specify Number of Events.
 Use the App When Offline.
 Add an App Shortcut to the Home Screen.
 Display Charts Visualizing Event Details.


 Feature: Filter Events By City

Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
Given events app is open When I view the list of upcoming events
Then I should see events from all cities

Scenario: User should see a list of suggestions when they search for a city. 
Given events app is open When I start typing in the city search bar
Then I should see a list of suggested cities

Scenario: User can select a city from the suggested list.
Given events app is open When I select a city from the suggested list
Then the list of upcoming events for the selected city will display

Feature: Show/Hide Event Details

Scenario: An event element are hidden by default.
Given the events app is open When I view the list of events. When no action is taken on an event
Then each event element should be hidden

Scenario: User can expand an event to see details.
Given the events app is open When I click on an event element
Then the details of that event should be displayed

Scenario: User can collapse an event to hide details.
Given the events app is open And an event details are visible When I click on the collapse button Then the details of that event should be hidden

Feature: Specify Number of Events

Scenario: When user hasn’t specified number of events , all events are shown by default. 
Given the events app is open When I have not filtered event by city 
Then I should see all events displayed

Scenario: When user has selected a number of events to be displayed. 
Given the events app is open When I select a specific number of events 
Then I should see the  specific number of events displayed

Feature: Use the App When Offline

Scenario: Show cached data when offline. 
Given the events app is open And there is no or poor internet connection When I view the list of events 
Then I should see cached event data

Scenario: Show error when user changes search settings when offline. 
Given the events app is openned offline When I try to change search settings 
Then I should see an error message

Feature: Add an App Shortcut to the Home Screen

Scenario: User can add the app as a shortcut on their device home screen.
Given the events app is open
When I choose to add the app to the home screen 
Then a shortcut to the app should be added to the device home screen

Feature: Display Charts Visualizing Event Details

Scenario: Show a chart of upcoming events in each city.
Given the events app is open When I navigate to the charts section 
Then I should see a chart displaying the number of upcoming events in each city

Technical Structures:

The app is a React application.
The app is built using the TDD technique.
The app uses the Google Calendar API and OAuth2 authentication flow.
The app uses serverless functions (AWS lambda is preferred) for the authorization server
The app is hosted on GitHub.
The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera
as on IE11.
The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
The app passes Lighthouse’s PWA checklist.
The app works offline or in slow network conditions with the help of a service worker.
Users will be able to install the app on desktop and add the app to their home screen on mobile. 
The app is deployed on GitHub Pages.
The app implements an alert system using an OOP approach to show information to the
user.
The app makes use of data visualization.
The app is be covered by tests with a coverage rate >= 90%.
The app is monitored using an online performance monitoring tool.


Serverless functions


The Meet app, is strictly built with no backend maintenance. The serverless function makes the app more scalable and cost-effective.  It will also handle authorization for accessing information on public calendar events from the Google Calendar API. Users would need to be authorized before retrieving event information from the app. The serverless functions will generate and provide access tokens, ensuring secure access to the Google Calendar API. AWS Lambda will be the chosen cloud-service provider for implementing these serverless functions. 





