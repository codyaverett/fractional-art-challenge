_NOTE: Please use Javascript with exercises where it makes sense._

## Basic

Solve exercises A, B and explain your reasoning. It's ok to use pseudo-code where needed as well as any popular language you're comfortable with (except when noted otherwise).

A) Design an SQL database to store data on NBA players, teams, and games (column and table contents are all up to you). Consider the following as you design the database:
- The most frequent query for this database will be for game results by date and team name 
- The second most frequent query will be players statistics by player name

B) Please write a function that sorts 11 small numbers (<100) as fast as possible. Once written, provide an estimate for how long it would take to execute that function 10 Billion (10^10) times on a normal machine.

C) Please make improvements to the code below, using Javascript.

```
connectToDatabase()
.then((database)  => {
    return getUser(database, 'email@email.com')
    .then(user => {
        return getUserSettings(database, user.id)
        .then(settings => {
            return setRole(database, user.id, "ADMIN")
            .then(success => {
                return notifyUser(user.id, "USER_ROLE_UPDATED")
                .then(success => {
                    return notifyAdmins("USER_ROLE_UPDATED")
                })
            })
        })
    })
})
```

## Practical

_Please use Javascript / Typecript / Node JS for the following task._

1. Create an application with following requirements (anticipate large amounts of requests):
	- takes MSISDN as an input
	- returns MNO identifier, country dialling code, subscriber number and country identifier as defined with ISO 3166-1-alpha-2

2. Write all needed tests.

3. Expose the package through an REST API. Limit the usage (API key).

4. Design a SQL database that logs usage of the API

5. (Bonus) Write simple SQL queries to get the following data. 
    - AVG number of requests per specific timeframe
    - Sum of all request in specific time frame
    - 3 hour time period for specific api key, when the usage is the highest (Example: 3:00pm to 6:00pm)
    - Most used API key (with num of req)


6. Write a high-level description (1 page) explaining your solution. Explanation should include: 
    - A description of what you've built
    - Which technologies you've used and how they tie together
    - Your reasons for high-level decisions 
   
 
If anything above feels unclear, please use your own judgement to make assumptions. If you have a question about which coding language or framework you should be using on a particular task, please send an email to nate@fractional.art to confirm.

Time limit: 7 days.

Send us your answers, as-well as the link to the Github repository back via email.

Please also make sure that the repository is private and that you give the following users access 
- TRCSamurai 
- jernejc
- vidmahovic