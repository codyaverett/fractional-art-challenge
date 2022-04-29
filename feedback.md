
# Feedback and thoughts

GM! Thank you again for the time and consideration you have made on my behalf.

These are my responses to the feedback provided to me after final submission.  I hope they give you more insight in how I approached the problems I was presented.

Your feedbacks are numbered below and Cody's responses are  quoted under each feedback.

I like to get the cons right out of the way.

## cons:

1. api lacks architecture, all routes are defined in one file "hi" ?
    > I don't know what lacking architecture means exactly, but if you are more concerned about code structure, we could fix that with a discussion about it.
    
    > I did hope you found the exposed client api to be adequate for the [requirements presented](https://github.com/codyaverett/fractional-art-challenge#practical).

1. we expect clear separation between routes, controllers and endpoint validation
    > This makes sense to fix, but I don't know what this really means from your perspective.  I don't currently see this as a technical problem, it seems more like a code organizational problem.

    > Fastify has great support for request and response validations via [ajv](https://ajv.js.org/).  I use ajv some in one of my enterprise applications. Through fastify however, I found it cumbersome to use with typescript as I was trying to stop working on this demo so I could at least get some type of feedback.

    > There are a LOT of changes I would make for a production quality deployment to this primarily in the security department. I go through yearly [OWASP](https://github.com/OWASP) training.

1. api-key validation and logs should be implemented as middleware (why are "plugins" unused?)
    > Plugins were "unused" because, sadly, I ran into issues implementing them in a workable fashion within the time contraints I placed upon myself.  I left the code in place to document my attempt.  I had made [this point in the code comments](https://github.com/codyaverett/fractional-art-challenge/blob/edc07d7b1ee2e380eca2165f0cd8b4df77750f2d/practical/application/api/src/routes/hi.ts#L27)

1. missing database ORM
    > ORM's aren't always the right answer and I did not know it was something that would be looked for specifically, but I did consider using prisma or sequelize briefly.  
    
    > By a strange twist of fate, I argued to myself that implementing an ORM would be more time consuming for me.  An ORM was not on my priority list since I had complete control of the database instances.

    > I usually use a custom inhouse sql builder module to manage transactions and interactions with my database clusters.  We interact with mssql and bigquery mainly.

1. no standardised response handling or error reporting
    > What errors? :stuck_out_tongue:. I do know what you mean though.  At a bare minimum I could have pushed errors to a log or db table.

1. documentation could be expanded upon: why Fastify over Express, no DB schema explanation, how would you handle large amounts of requests, why are "plugins" unused?
    > Thanks for the feedback here. I'm hopefully explaining these points in this document.
    
    > As for how I would handle lots of requests. I would need to do a load test to understand the current limits of the system. 
    
    > Then I would need to rate limit both authenticated and unauthenticated requests by an acceptable amount.
    
    > It would be simple to rate limit from a nginx reverse proxy and enjoy many of built-in security, scalability, and high availabiltiy options. NGINX is awesome

## pros:

- nice use of pnpm workspaces and monorepo approach 
    > Thank you, I appreciate quick development cycles and minimizing coupling where it makes sense to. In my experience at a large enterprise, modularity is invaluable and makes us flexible to change.  Code can be tossed, replaced, reused, shared, tested, much easier as modules.`

- typescript use is appreciated 
    > I have used typescript for many moons, it was a natural choice for me.

- bonus finished and documented 
    > I enjoyed the bonus SQL challenges as well as the setup of a containerized microsoft sql server instance

- swagger docs 
    > It's one of the simplest ways I've found to communicate and share an api with others.

## General feedback:
- Priorities seem to be misaligned, the monorepo approach is nice, but priority should be the API and its architecture.
    > It does seem like my priorities really did not align with your priorities. Also, you all are comparing results from multiple other candidates I assume, and I was having fun working with new tech.

    > I didn't want to use a project template
    
    > I had intentions of emphasising use of a core/onion style architecture which prioritizes code decoupling and dependency injection patterns.

    > Controllers as route handlers
    
    > Isolated infrastructure module (a homegrown ORM if you will)

    > utilities split into a library section

    > a core module that held common models, schemas, interfaces, and types that all other application modules may source from.

- Similar with Fastify vs Express, it's potentially a good direction, but if that means middleware is not finished and code replicated within controllers, then just go with Express or a framework you're familiar with.
    > I stand by my use of fastify and believe it was the right descision. [I did not want to use express](https://github.com/codyaverett/fractional-art-challenge/blob/main/practical/docs/solution-explaination.md?plain=1#L48).

    > The Performance benchmarks [[1](https://medium.com/@onufrienkos/express-vs-fastify-performance-4dd5d73e08e2),[2](https://github.com/fastify/benchmarks/blob/master/README.md)] I found comparing fastify to express was all I needed to determine which library would be more worth my time.  
    
    > You all said fast api, so I wanted to use the faster of the two.

    > I also considered NestJS because it has a nice decorator based api and has integrations with fastify as well.
    
    > I would have also considered to scale the api out horizontally utilizing a load balancers and reverse proxy

    Benchmarks were extracted [from this repo](https://github.com/fastify/benchmarks/blob/master/README.md)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.28.0  | ✓      | 58936.8    | 16.48   | 10.51         |
| express                  | 4.17.3  | ✓      | 12863.6    | 77.18   | 2.29          |
| express-with-middlewares | 4.17.3  | ✓      | 10898.4    | 91.16   | 4.05          |
| express-route-prefix     | 4.17.3  | ✓      | 10814.8    | 91.92   | 4.00          |
| fastify-big-json         | 3.28.0  | ✓      | 10361.4    | 96.01   | 119.20        |

## Cody's closing thoughts

> hypotheticals unless you want to talk about it
- What did the other candidate bring to the table that I did not?  I would like to know what I don't know.
- Were you able to run my practical solution with ease or did it take some time to figure out?
- I have many more technical skills that we haven't even discussed. I'm actually pretty good at frontend work, automating, systems engineering, and more.
- I'm not just looking for a new job, I want to solve hard crypto related problems and I want to work with people that want the same.
- I would have liked to interacted with you all more throughout the time I spend working on this demo.  

Thanks again for your time.

GN,

Cody de Coder
