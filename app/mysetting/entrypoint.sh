#!/bin/bash
set -e

rm -f /spend-management-webapp-app/tmp/pids/server.pid
# mkdir -p /spend-management-webapp-app/tmp/sockets

# PostgreSQL が起動するまで待機
until pg_isready -h backend -p 5432 -U postgres; do
  echo "Waiting for PostgreSQL to be ready..."
#   echo "DB_HOST=$DB_HOST, DB_PORT=$DB_PORT, DB_USERNAME=$DB_USERNAME"
  sleep 2
done

# DB のマイグレーションとサーバー起動
echo "PostgreSQL is ready. Running migrations..."
rails db:migrate && rails db:seed && rails server -b '0.0.0.0'

echo "Starting Rails server..."

exec "$@"