# Roadmap
 
Need to ensure calls/API key cannot be abused. Limit users who we can query

Put in caching/repo to limit calls to Steam API.

## Layout

Initial page asks for steam id or vanity url.

Once we know who we're running as, pull friend list, details of each known user. Then for each user pull app owners, and layout as below:

### Users
```
/--------------\/--------------\/--------------\/--------------\
| /----------\ || /----------\ || /----------\ || /----------\ |
| |          | || |          | || |          | || |          | |
| |   Pic    | || |   Pic    | || |   Pic    | || |   Pic    | |
| |          | || |          | || |          | || |          | |
| \----------/ || \----------/ || \----------/ || \----------/ |
|      Me      ||   Friend 1   ||   Friend 2   ||   Friend 3   |
|   263 games  ||   74 games   ||     N/A      ||  1035 games  |
\--------------/\--------------/\--------------/\--------------/
```
### Games

| Title | Users | Pics |
|---|---|---|
| Game 1 | 3 |  `P P P` |
| Game 2 | 2 | `P P` |
| Game 3 | 2 | `P P` |

## ToDo
 - move towards hooks
 - move away from sagas, maybe away from redux
 - consider: containerising?
 - consider: splitting facades from frontend? (separate concerns)
 - consider: using as a test bed for k8s, service discovery
