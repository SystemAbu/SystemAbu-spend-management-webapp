#!/bin/bash
set -e

rm -f "/spend-management-webapp/tmp/pids/server.pid"

exec "$@"