#!/bin/bash
pkill -f "node.*server.js" || true
pkill -f "ng serve" || true
echo "Services stopped"
