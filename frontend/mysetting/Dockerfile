# 開発用のステージ
FROM node:22.5 AS dev
WORKDIR /home/node/app
COPY spend-management-webapp-frontend/ /home/node/app

# Nginxの設定ファイルをコンテナにコピー(開発時も本番時でもコンテナ側の内容に上書きされるため、ここでnginxの設定ファイルをコピー)
ADD ./mysetting/nginx.conf /etc/nginx/
ADD ./mysetting/default.conf /etc/nginx/conf.d/

# モジュールのインストール
RUN npm install -g npm@10.9.2
RUN npm install

# React起動
CMD ["/bin/bash", "-c", "npm install && npm run dev"]


FROM dev AS build
RUN npm run build


# 本番環境用のステージ
# 次のコマンドで実行 [$ docker build --target prod .]
FROM nginx AS prod

# インクルード用のディレクトリ内を削除
RUN rm -f /etc/nginx/conf.d/*

# Reactのビルド生成フォルダの中身をnginxのルートディレクトリにコピー
RUN mkdir -p /var/www
COPY --from=build /home/node/app/build /var/www

# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
