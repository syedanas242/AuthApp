# AuthApp
Authentication App using NestJS, ReactJS and. MongoDB
1. Install MongoDB community server on your local machine
1. Navigate to backend folder,
   a. cd backend/user-auth-app
   b.npm install, npm run build, npm start
2. Navigate to frontend folder,
  a. cd frontend/loginform  
  b. npm install, npm run build, npm start

Backend APIs endpoints

1. Login
   Endpoint: http://localhost:3000/auth/login
   Method: Post

   sample payload:
   {
    "email":"dksfh123@gmail.com",
    "password":"Acyz4yzde@"
}

2. CreateUser
   Endpoint: http://localhost:3000/user/create
   Method: Post

   smaplePayload:
   {
    "firstName":"abcd123",
    "password":"password",
    "lastName":"abc",
    "email":"foo123@gmail.com"
}

Application:

Login Screen

![Screenshot 2024-09-30 at 12 30 51 AM](https://github.com/user-attachments/assets/b2aea7e9-4676-4d91-98c7-b861dff473ea)

Sign Up Screen
![Screenshot 2024-09-30 at 12 30 58 AM](https://github.com/user-attachments/assets/ce6ec44a-866d-4208-b40b-47b53525e5af)

Application Screen
![Screenshot 2024-09-30 at 12 31 12 AM](https://github.com/user-attachments/assets/889b9cf7-358f-4e01-9be0-2f930f326263)


Stack Used
FrontEnd - ReactJS,
Backend - NestJS, Typescript
Auth - JWT, passport
DB - Mongo DB



   


