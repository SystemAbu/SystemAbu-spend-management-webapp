#!/bin/bash
set -e

rm -f /spend-management-webapp-app/tmp/pids/server.pid
mkdir -p /spend-management-webapp-app/tmp/sockets

exec "$@"