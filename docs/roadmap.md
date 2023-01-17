# Roadmap
 
Need to ensure calls/API key cannot be abused. Limit users who we can query

Put in caching/repo to limit calls to Steam API.

## Layout

### Screen 1: who are you?
Initial page asks for steam id or vanity url.

### Screen 2: who's playing?
Once we know which user we're querying:
- fetch the user's friend list
- fetch details of each known user
- fetch details of the games they have

Display list of friends, and allow them to be selected.

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

### Screen 3: what games do you all have?
Once we have a list of users and their games, we can list what games are commn to all people:

| Title  | Owner Count | Owners  |
|--------|-------------|---------|
| Game 1 | 3           | `P P P` |
| Game 2 | 2           | `P P`   |
| Game 3 | 2           | `P P`   |

## ToDo
 - make usable??
   - make friendlist more friendly
   - get additional player info (e.g. games owned)
   - make applist depend on selected friends and their apps
 - consider: containerising?
 - consider: splitting facades from frontend? (separate concerns)
 - consider: using as a test bed for k8s, service discovery
   - hold your horses. keep it simple!
