# MathQuest family sync server

One file, zero dependencies. Runs on any machine with Node 22+ and stores all
progress in a local SQLite file (`mathquest.db`) next to the script.

## Setup on the family machine (Windows)

```powershell
# 1. Install Node.js and Tailscale
winget install OpenJS.NodeJS.LTS
winget install Tailscale.Tailscale     # then sign in (free account)

# 2. Get the server file (or copy it any way you like)
mkdir C:\mathquest-server; cd C:\mathquest-server
curl -o server.js https://raw.githubusercontent.com/fsiceangel/mathquest/main/server/server.js

# 3. Run it — the first run prints your family code (also saved in config.json)
node server.js

# 4. In a second terminal: give it a permanent public HTTPS address
tailscale funnel --bg 3000
tailscale funnel status                # shows the https://... URL
```

On the MathQuest site, open **Family Sync** (top-right chip), paste the
`https://…ts.net` URL and the family code, and pick or create a profile.

## Keep it running after reboots

Task Scheduler → Create Task:
- Trigger: **At startup**
- Action: Program `node`, arguments `C:\mathquest-server\server.js`
- Check "Run whether user is logged on or not"

Tailscale and its funnel persist across reboots on their own.

## Notes

- The family code is the only secret; anyone with it can read/write your
  family's quiz scores (no other data exists). Regenerate by deleting the
  `familyCode` line in `config.json` and restarting.
- Back up = copy `mathquest.db`.
