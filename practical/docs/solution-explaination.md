# Cody's Solution Explaination

## Description

This application provides a protected REST api that clients may retrieve international [Mobile Network Operator](https://en.wikipedia.org/wiki/Mobile_network_operator) related data by providing a unique [MSISDN](https://en.wikipedia.org/wiki/MSISDN) identifier.

I use microsoft sql server to store access keys and access log details.  All protected routes, when accessed, will add an entry to the access log table.

Furthmore, I wrote several utility sql queries as I was exploring the possibilies with the data table.  The primary goal for this was to answer the bonus sql questions, which I think I came close.  In any case the datasets I scripted [here](../containers/mssql/queries/bonus.sql) could be expanded upon in javascript land if it were needed.

This project's structure and file layout represents my current ideal monorepo development environment for creating focused javascript modules that I may then use to compose together solutions in future applications.

I wrote tests to cover the few use cases that were library specific (e.g. not controllers/business logic), then I ran out of ideas for features.  I manually tested all the api route controllers and tried to minimize the code footprint of these controllers.  I would have liked to invest more time into integration tests, but really thought I was already pushing this demos complexity to it's limits.

I opted to make assumptions for basically everything in this project and I'm not sure if I met every question as you all would have intended. I do hope to show some adaptibility by having worked with lots of new technologies and iterating on several designs as I worked on this project over the past week. There are still parts I would like to improve upon, but I'm ready to move onto a new project at this point :laughing:

There are also a lot of security centric configurations I purposefully ignored.  I would harden the web server more if this were a production.  Things like CORS, digital signatures for api keys, [salt and pepper](https://chrono.fandom.com/wiki/Shaker_Brothers), and etc.

### Focused on modular design & separation of concerns

- I prefer smaller focused modules because they allow me to break bigger problems into many smaller problems. 
- The use of individual modules also forces me to consider dependency injection patterns which in turn make code easier to test, extend upon, or replace.
- Tooling, data types, and project configurations can be shared across all modules when using a monorepo.  This makes development consistent 
- Ideas from [Clean/Onion architecture](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#clean-architecture)

### Packages

| package                                          | purpose                                                             |
|--------------------------------------------------|---------------------------------------------------------------------|
| [@app/api](../app/api/)                                          | handles route definitions and api documentation                        |
[@app/infra](../app/infra/)                                          | Handles interactions with development infra such as external databases                                       |
| [@lib/mno-lookup](../lib/mno-lookup/src/index.ts) | Handles formatting of msisdn data input                             |

## Technologies used in this project

I have an understanding that choosing tools can be opinionated, but I like to prioritize use based on weighing tradeoffs between various solutions.
I regularly spend several hours a month exploring new software projects on github and [awesome lists](https://github.com/sindresorhus/awesome) in order to give myself more options and ideas for future project features. 

| technology                                    | version     | function                                   | prior experience                         | reason                                                                                                                                                                                                                                                                     |
|-----------------------------------------------|-------------|--------------------------------------------|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [pnpm](https://pnpm.io/)                      | 6.32.6      | package manager                            | many projects                            | PNPM uses a global module cache and has good monorepo support out of box. The use of global module cache drastically improves the installation time of npm based module installations. The quicker dependencies are installed, the quicker I can get back to writing code. |
| [parcel](https://parceljs.org)                | 2.4.1       | bundler                                    | many projects                            | parcel v2 has zero-config builds with outputs specified directly in a modules package.json.  Out of box it supports building monorepos with tree-shaking for small production bundles.                                                                                     |
| [nodeJS](https://nodejs.org/)                 | LTS 16.14.2 | Javascript v8 runtime and standard library | most of all js based projects            | I try to use the latest Long Term Support versions of NodeJS and update whenever security patches are introduced.                                                                                                                                                          |
| [Typescript](https://www.typescriptlang.org/) | 4.6.3       | Programming Language                       | Used since 2015 when Angular v2 released | I love having variable type safety and using newer experimental ecma script features.                                                                                                                                                                                      |
| [Ava](https://github.com/avajs/ava)           | 4.2.0       | JS testing framework                       | 2 prior project                          | Simple setup with typescript support.  Tests run concurrently during watch mode which gives me red-green feedback much quicker than other testing solutions.                                                                                                               |
| [docker](https://www.docker.com/) | 20.10.11, build dea9396 | dev infrastructure | all the time| used to get a development instance of mssql server running for this project |
| [microsoft sql server](https://www.microsoft.com/en-us/sql-server/sql-server-2019) | community edition 2019 | database | 3 years | Out of all the database choices, I'm most familiar with sql-server databases. SqlLite was lacking features I knew sqlserver had. |
| [fastify]() | 3.28.0 | fast REST framework | this is my first time using it | I didn't want to use express and I read a lot of good things about this one |


## References 

- [International id lookup](https://web.archive.org/web/20190614165643/http://www.wtng.info/wtng-lnk.html)
- [Archive of telecom country codes](https://web.archive.org/web/20190724173603/http://massis.lcs.mit.edu/telecom-archives/archives/country.codes/)
- [Numbering scheme example](https://github.com/matmar10/mobile-to-msisdn/blob/master/numbering-scheme.json)
- [MSISDN npm modules](https://www.npmjs.com/search?q=msisdn)
- [awesome-phonenumber](https://www.npmjs.com/package/awesome-phonenumber)
- [Mobile Operator Ids](https://www.openmarket.com/docs/Content/globalcoverage/mobile-operator-ids.htm)
- [More mobile operator ids](https://github.com/dweinstein/node-mnc-lookup/blob/master/data/mnclist.tsv)
- [Sqlite extensions](https://www.sqlite.org/loadext.html)
- [Island problems query](https://stackoverflow.com/questions/15818604/sql-query-to-group-items-by-time-but-only-if-near-each-other)

