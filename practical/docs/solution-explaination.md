# Cody's Solution Explaination

## Description

This application provides a protected and rate limited REST api that clients may retrieve international [Mobile Network Operator](https://en.wikipedia.org/wiki/Mobile_network_operator) related data by providing a unique [MSISDN](https://en.wikipedia.org/wiki/MSISDN) identifier. 

This project's structure and file layout represents my current ideal monorepo development environment for creating focused javascript modules that I may then use to compose together solutions in future applications.

### I focused on modular design & separation of concerns

- I prefer smaller focused modules because they allow me to break bigger problems into many smaller problems. 
- The use of individual modules also forces me to consider dependency injection patterns which in turn make code easier to test.
- Tooling, data types, and project configurations can be shared across all modules when using a monorepo.

### The api module

- api key protection
- rate limiting

### The service module

meh

### Audit packages

I made sure to run `pnpm audit` to resolve 6 high severity vulnerabilites

### Packages

| package                                          | purpose                                                             |
|--------------------------------------------------|---------------------------------------------------------------------|
| [api]()                                          | handles route definitions and api documentation                        |
| api-key | Generating and validating keys |
| config | shared configuration ??? |
| [application]()                                  | The primary entrypoint for this demo |
| core | shared business logic, models, and types |
| [msisdn-format](../packages/msisdn/src/index.ts) | Handles formatting of msisdn data input                             |
| [msisdn-lookup]()                                | Handles looking up msisdn related information                       |
| storage                                          | Handles storage operations                                          |

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
| [tsyringe]() | 4.6.0 | dependency injection | 1 project | Helps separate concerns and control class injection/resolution rules |
| [sqlite](https://www.sqlite.org/docs.html)                                     | 3.36.0      | database                                   | a few past projects                      | Good cross platform support and simplest db setup anywhere.  NodeJS has good bindings for working with sqlite                                                                                                                                                              |
| [awesome-phonenumber](https://www.npmjs.com/package/awesome-phonenumber) |  | data-source | never | number validation and lookups |

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