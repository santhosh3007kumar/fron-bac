#!/bin/bash
cd /home/ubuntu/MEANAPP/backend
PORT=3000 nohup npm start > /home/ubuntu/MEANAPP/app.log 2>&1 &
echo "MEAN app started on port 3000"
