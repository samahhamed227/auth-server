
## LAB - 08 : auth-api

### Deployment Test

**Author: Samah Hamed**


- [Back-End-Heroku-Link](https://samah-auth-server.herokuapp.com/).
- [Repo Link](https://github.com/samahhamed227/auth-server).

**Setup**

## Test 
![](img/test98.PNG)

`.env` **requirements**

- `PORT` - Port Number

- `DATABASE_URL` = Postgres DB

- `SECRET` = JWT SECRET

**Running the app**

- `npm start`

- Endpoint: `/signup`

> ![](img/signup.PNG)


}
- Endpoint: `/signin`

> - Username `samah`
> - Password `12345`

- Returns Object

      
  > ![](img/signin.PNG)
- Endpoint: `/users`

> - Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbWFoIiwiaWF0IjoxNjM2NDgyNjQxfQ.NlDDMhy9tURpTriwdh8ALbHU0WL_8e_usJv1e3aRp4c`

- Returns Object

  [
    "samah",
    "12345"
]
![](img/all.PNG)

> - Token `SAMAH_GciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbWFoIiwiaWF0IjoxNjM2NDgyNjQxfQ.NlDDMhy9tURpTriwdh8ALbHU0WL_8e_usJv1e3aRp4`

- Returns Object

{
"status": 500,
"message": "invalid login"
}
![](img/error.PNG)
**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

**UML**

![UML](img/umllab8.png)


- How do I install the app or library?
  - Clone the repo to your local machine
  - in the terminal, `run npm i`
  - Create `.env` file with port name 
  - Create database called `lab8` 
  - Seed the database for the user and foor and clothes models with post request 
  - send sign up post request with username and password  
  - send log in post request with user name and the password