+++
title = "Version Control for Obsidian"
description = "An automatic version control for Obsidian in 3 easy steps"
date = 2023-04-19
[taxonomies]
tags = ["obsidian", "journaling", "writing", "shell"]
categories = ["articles"]
[extra]
featured_image = "versioncontrol.png"
featured_image_alt = "Obsidian Version Control"
+++

Idea: Implement version control for my [Obsidian](https://obsidian.md) Vault stored in my iCloud Documents.

Inspiration: The book [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) encouraged me to implement version control for all of my work and to learn Shell for automation purposes.

I thought, "How hard could it be?" - and voilà, after only one full day of work and swearing, I was able to successfully automate version control for my Obsidian Vault.

## The Plan
1. Make a new older on your MacBook called `Version Control Obsidian`, copy your vault into this folder.
2. Put that folder under version control via Git and GitHub
3. Copy your Vault Folder in iCloud Documents to that `Version Control Obsidian` folder and commit changes and push to a private GitHub repository with a launchd job of a shell script once a day.

## The Execution
Because of safety measures in MacOS launchd jobs can't get access to the Documents, Downloads, and other folders. So we have to create an Automator app which will then get access to the Documents folder and can `cp` the files and commit etc.

### 1. The Script
``` shell
#!/bin/bash
cp -R /Users/simxn/Library/Mobile\ Documents/iCloud~md~obsidian/Documents /Users/simxn/Documents/Version\ Control\ Obsidian && cd /Users/simxn/Documents/Version\ Control\ Obsidian && git add . && git commit -m "daily commit $(date +'%Y-%m-%d')" && git push
```

Make it executable: `chmod +x daily-commit.sh`

### 2. The Automator App
Source: [Stack Overflow answer by Steven Oxley](https://stackoverflow.com/a/59350529/21681219)

-   Create an Automator application
    -   Open **Automator**
    -   Click **New Document**
    -   Select **Application**
    -   Click **Choose**
    -   Select **Utilities > Run Shell Script**
    -   Select **Pass Input: as arguments**
    -   Enter `/bin/bash -c "$1"` as the body of the script (see screenshot below)
    -   Click **File > Save** and save the application wherever you'd like (`run-script.app` in this example)

-   Next, run the application that was just created manually to make sure it has the permissions it needs (you need also grant **Full Disk Access** to the new application in **Security & Privacy**, (in my case even Automator needed **Full Disk Access**))
    -   Open **Terminal**
    -   Execute command:
    
    `open -a run-script.app /Users/simxn/scripts/daily-commit.sh`
    -   Click **Allow** when macOS asks if the application can access your Desktop

Screenshots:
{{ image_sets(path="content/version-control-for-obsidian/8VqAB.jpg", format="auto", op="fit_width", quality=75, alt="Screenshot of Automator App", caption="Select Application") }}

{{ image_sets(path="content/version-control-for-obsidian/Xi9pR.jpg", format="auto", op="fit_width", quality=75, alt="Screenshot of Automator App", caption="Select Pass Input: as arguments") }}


### 3. The Launchd Job
```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"

"http://www.apple.com/DTDs/PropertyList-1.0.dtd">

<plist version="1.0">

<dict>

<key>Label</key>

<string>com.project7iii.daily-commit</string>

<key>ProgramArguments</key>

<array>

<string>open</string>

<string>-a</string>

<string>/Users/simxn/scripts/run-script.app</string>

<string>/Users/simxn/scripts/daily-commit.sh</string>

</array>

<key>StartCalendarInterval</key>

<dict>

<key>Hour</key>

<integer>14</integer>

<key>Minute</key>

<integer>6</integer>

</dict>

<key>StandardErrorPath</key>

<string>/tmp/com.project7iii.daily-commit.err</string>

<key>StandardOutPath</key>

<string>/tmp/com.project7iii.daily-commit.out</string>

</dict>

</plist>
```

Making the document: 
```
nano ~/Library/LaunchAgents/com.project7iii.daily-commit.plist
```

Loading the launchd job: 
```
launchctl load ~/Library/LaunchAgents/com.project7iii.daily-commit.plist
```
