#!/bin/bash
# 絶対 or 相対パスで .env を指定
# ENV_PATH="../spend-management-webapp-app/.env"

if [ -z "$KOYEB_APP_NAME" ]; then
  # Koyeb環境ではない（ローカル開発環境の場合）場合、環境変数読み
  ENV_PATH="../spend-management-webapp-app/.env"
  set -a
  [ -f "$ENV_PATH" ] && . "$ENV_PATH"
  set +a
fi

# PostgreSQL のパスワードを環境変数に渡す
# export PGPASSWORD=$DB_PASSWORD

rm -f /spend-management-webapp-app/tmp/pids/server.pid
# mkdir -p /spend-management-webapp-app/tmp/sockets

# PostgreSQL が起動するまで待機
until pg_isready -h $DB_HOST -p $((DB_PORT)) -U $DB_USER; do
# until pg_isready -h backend -p 5432 -U postgres; do
  echo "Waiting for PostgreSQL to be ready..."
  echo "DB_HOST=$DB_HOST, DB_PORT=$DB_PORT, DB_USER=$DB_USER"
  sleep 2
done

# DB のマイグレーションとサーバー起動
echo "PostgreSQL is ready. Running migrations..."
rails db:migrate && rails db:seed && rails server -b '0.0.0.0'

echo "Starting Rails server..."

exec "$@"