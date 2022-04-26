## Prompt

_Please use Javascript / Typecript / Node JS for the following task._

1. Create an application with following requirements (anticipate large amounts of requests):
	- takes [MSISDN](https://en.wikipedia.org/wiki/MSISDN) as an input
	- returns [MNO identifier](https://en.wikipedia.org/wiki/Mobile_network_operator), country dialling code, subscriber number and country identifier as defined with [ISO 3166-1-alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

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


### Planning

- [ ] Reserach the technical terms that will be required for rest creation/usage 
- [ ] Setup basic pnpm workspace
- [ ] Setup testing
- [ ] Tsyringe for dependency injection
- [ ] SQLite Database for logging
- [ ] Fastify api
- [ ] Route protection via api key
- [ ] High level description 1-pager

#### MSISDN

- Maximum length 15 digits
- 1-3 reserved for country code

- MSISDN = CC + NDC + SN
- CC = Country Code
- NDC = National Destination Code, identifies one or part of a PLMN
- SN = Subscriber Number

### Reference

- [MSISDN](https://en.wikipedia.org/wiki/MSISDN)
- [MNO identifier](https://en.wikipedia.org/wiki/Mobile_network_operator)
- [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
- [Mobile Network Operators](https://en.wikipedia.org/wiki/List_of_mobile_network_operators)
- [Network Code List](https://www.mideye.com/authentication-service/global-coverage/mobile-network-list/)
- [Tokenizer](https://www.npmjs.com/package/tokenizr)
