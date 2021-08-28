## EMAILY

###### Help you to create surveys for customers

---

## Description

A Full Stack App using MERN (Mongo, Express, React, Node) Stack to create Surveys and send them to single/multiple email addresses.

## Instructions

-   Login using your google account.
-   App requires users to maintain a credit balance. Add Credits upon login on the Credits page.
-   Click on the "pay with card" button to create a new Survey.
-   Fill out the Survey Form and send to the desired email addresses.
-   Customers (people receiving Survey emails), can respond to the Survey through a Yes/No option from the email.
-   To track all the Surveys, navigate to the Surveys tab. Users can view details of any Survey and get to know how many customers have responded to the Surveys.

## Tech Stack

#### Backend

-   The backend of this project uses Express and MongoDB. Mongo is a No-SQL database.
-   Backend provides API to connect with our React front-end application. Each route has a validator to check and validate before persisting to the database.
-   Backend uses several middlewares as bodyParser and passport manage authentication.
-   App uses SendGrid API to send emails to customers. The API allows sending emails to multiple email addresses and allows reply functionality once a customer clicks on Yes/No option. This is useful for tracking Surveys. Users can not only send Surveys but also know how many responses have they recieved for a given Survey. For example if a user sends a Survey to 100 people to which 60 replied as Yes and 40 as No, User is able to get this information on the Survey Details page.
-   App uses StripePayment API to mock payments. This project is designed for learning purposes therefore No real payments are accepted. Stripe provides a test credit card number (4242 4242 4242 4242) to be used on the credits payments page. Once a user has enough credits, the user can now start sending Surveys. Each Survey costs 1 credit.
-   Authentication is supported by Passport.JS that uses the following Strategies

    -   Passport Google OAuth 2.0 : [View Documentation](http://www.passportjs.org/packages/passport-google-oauth20/ "passport-google-oauth20")

-   Note:
    -   SendGrid API to create emails
    -   Stripe API to mock payments which are required to purchase credits. These credits are used to create Surveys.

#### Front End

-   The Front End of the application uses React.JS.
-   App uses Redux for state management and tracks authenticated users, user details and Surveys created by the user.
-   App uses Private and Public routes to display private and public content.
-   App uses Layout components to display public and private content depending upon user authentication state.
-   App uses Materialize.CSS for simplistic and responsive view. App works on several screen sizes including large like Monitors, medium like Tablets and small like mobile devices.

---

## Demo Images

![image](https://drive.google.com/uc?export=view&id=1NJJjhw3YiFuZehJtTZ1A-tqdwJ9byuO9)

![image](https://drive.google.com/uc?export=view&id=1xXcxxQcWveu4KLVmh3SkCJoNzKsDDMhy)

![image](https://drive.google.com/uc?export=view&id=1YFchTh9HJeLz6OWh_OVGMbuIogTBNIyN)

![image](https://drive.google.com/uc?export=view&id=1lblST0rq2NiIdJgBiJZvsphdvPVv_n4g)

![image](https://drive.google.com/uc?export=view&id=1z3tp1JbC9lFkP0qfo0gSu__xSGF3GtyY)

![image](https://drive.google.com/uc?export=view&id=1_MNdIWdTTExMbUcrHvqun5kRrj9TG0GN)
