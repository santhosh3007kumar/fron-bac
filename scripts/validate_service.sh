#!/bin/bash
sleep 10
curl -f http://localhost:3000/api/health || exit 1
echo "Health check passed!"
