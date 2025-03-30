FROM postgres:15.4

# カスタムpostgresql.confをコンテナにコピー
COPY ./mysetting/postgresql.conf /etc/postgresql/postgresql.conf

# 作成した pg_hba.conf をコンテナ内の適切なディレクトリにコピー
COPY ./mysetting/pg_hba.conf /usr/share/postgresql/postgresql.conf.sample

# PostgreSQLを起動する際にカスタム設定を使用するように指定
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]