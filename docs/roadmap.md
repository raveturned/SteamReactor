# Roadmap

Can't access SteamAPI in client, because key won't be secure.
 - run a .Net Core web API instead, translate UI needs to Steam API calls
 - can work on demand to start with, slot in a repo later
   - can we store stuff in memory?
 - need to ensure calls/API key cannot be abused. limit users who we can query
 
Host in Azure. Use an ARM template for resources.

## Layout
### Users
```
/--------------\/--------------\/--------------\/--------------\
| /----------\ || /----------\ || /----------\ || /----------\ |
| |          | || |          | || |          | || |          | |
| |   Pic    | || |   Pic    | || |   Pic    | || |   Pic    | |
| |          | || |          | || |          | || |          | |
| \----------/ || \----------/ || \----------/ || \----------/ |
|      Me      ||   Friend 1   ||   Friend 2   ||   Friend 3   |
\--------------/\--------------/\--------------/\--------------/
```
### Games

| Title | Users | Pics |
|---|---|---|
| Game 1 | 4 | `P P P P` |
| Game 2 | 3 | `P P P` |
| Game 3 | 3 | `P P P` |
