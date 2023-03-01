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

Display list of friends, and allow them to be selected.

```
/--------------------\ /--------------------\ /--------------------\
| /-----\            | | /-----\            | | /-----\            |
| | Pic | Me         | | | Pic | Friend 1   | | | Pic | Friend 2   |
| \-----/            | | \-----/            | | \-----/            |
\--------------------/ \--------------------/ \--------------------/
/--------------------\ /--------------------\ /--------------------\
| /-----\            | | /-----\            | | /-----\            |
| | Pic | Friend 3   | | | Pic | Friend 4   | | | Pic | Friend 5   |
| \-----/            | | \-----/            | | \-----/            |
\--------------------/ \--------------------/ \--------------------/
```

### Screen 3: what games do you all have?
Once we have a list of users, fetch the games they own.
Then can list what games are common to all people:

| Title  | Owner Count | Owners  |
|--------|-------------|---------|
| Game 1 | 3           | `P P P` |
| Game 2 | 2           | `P P`   |
| Game 3 | 2           | `P P`   |

Can add more details, e.g. recommendation reason, (see below)

## ToDo
 - make usable??
   - button on screen 2 to say when group has been selected
   - make screen 3
     - fetch additional player info (e.g. games owned)
     - make list, based on literally anything to begin with
     - fetch additional game info
       - categories
       - tags?
     - interate on list:
       - looks
       - recommendations/sorting
       - performance
 - game suggestions based on:
   - categories - do they suggest game is multiplayer?
     - co-op
     - multiplayer
     - valve anti-cheat
   - player play-time
     - recent play time
     - total play time
   - tags - similar to other games people have high playtime in 
 - consider: containerising?
 - consider: splitting facades from frontend? (separate concerns)
 - consider: using as a test bed for k8s, service discovery
   - hold your horses. keep it simple!
