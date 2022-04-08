## Prompt

C) Please make improvements to the code below, using Javascript.

```javascript
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

## Cody's Answer

- user settings aren't used so I'm not going to call getUserSettings at all
- separated concerns between two functions setting the admin role and notifying users and admins
- switched to mostly use async await style promise code with try/catch for a cleaner read and less pyramidyness
- Added a "USER_ROLE_UPDATED_FAILED" action for any failure notifications
- Added some error handling b/c that promise chain had none
- Some code comments/jsdoc annotations

```javascript
/**
 * function notify
 * used to notify user and admins of an app action that has occured
 * @param {User} user
 * @param {Action} action
 * @throws {Error} if notification fails to notify
 **/
function notify(user, action) {
    const notifySuccess = await Promise.all([
        notifyUser(user.id, action),
        notifyAdmins(action)
    ]);

    const isNotifyFailed = notifySuccess.some((result) => result === false);

    if(isNotifyFailed) {
        throw new Error(`Failed to notify failure notify { ${user.id}: ${notifySuccess[0]}, admins: ${notifySuccess[1]} }`);
    }
}

/**
 * function grantAdminRole
 * @param {DatabaseConnection} dbConnection 
 * @param {string} email 
 * @returns {Promise<void>}
 **/
async function grantAdminRole(dbConnection, email) { 
    try {
        const user = await getUser(database, email);

        if(await setRole(database, user.id, "ADMIN")) {
            notify(user, "USER_ROLE_UPDATED");
        } else {
            notify(user, "USER_ROLE_UPDATED_FAILED");
        }

    } catch (e) {
        // todo: write better code here.. retry logic.. something useful
        // Users of any client app would need to know what happened
        console.err(e);
    }
}

// Extracted db connection to higher scope.. something else would probably need to use it, also depencency injection is a good practice
const databaseConnection = await connectToDatabase();

grantAdminRole(databaseConnection, "email@email.com").then(() => {
   console.log("Admin role was probably granted, idk though b/c no integration tests");
}).catch((e) => {
    // basically noop since all errors are caught in the next grantAdminRole function call.
    console.error(e, "something really bad happened if you see this comment");
});

```