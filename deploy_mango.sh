#!/bin/bash
# sensitive info saved in the config
source deploy_config.sh

# SSH Deployment using rsync
rsync -rlvz --delete --no-perms --omit-dir-times -e  "ssh -i ~/.ssh/hetzner_server" $LOCAL_PATH simxn@46.225.71.191:$REMOTE_PATH