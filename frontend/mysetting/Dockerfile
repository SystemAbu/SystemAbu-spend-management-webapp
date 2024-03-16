FROM node:14.4.0 as build
WORKDIR /home/node/app
COPY spend-management-webapp-frontend/ /home/node/app
RUN npm install
RUN npm run build

FROM nginx

# インクルード用のディレクトリ内を削除
RUN rm -f /etc/nginx/conf.d/*

# Reactのビルド生成フォルダの中身をnginxのルートディレクトリにコピー
COPY --from=build /home/node/app/build /var/www

# Nginxの設定ファイルをコンテナにコピー
ADD mysetting/app.conf /etc/nginx/conf.d/app.conf
# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
