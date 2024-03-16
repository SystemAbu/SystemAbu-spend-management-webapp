FROM ruby:3.2.1

RUN apt update -qq && apt install -y postgresql-client
RUN mkdir /spend-management-webapp
WORKDIR /spend-management-webapp
# COPY Gemfile /myapp/Gemfile
# COPY Gemfile.lock /myapp/Gemfile.lock
# COPY ./Gemfile.lock /spend-management-webapp
COPY  ./spend-management-webapp-app /spend-management-webapp
RUN bundle install

# COPY . /myapp

COPY ./mysetting/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# コンテナの使用ポート指定
# EXPOSE 3000

# puma.sockを配置するディレクトリを作成
RUN mkdir -p tmp/sockets

CMD ["rails", "server", "-b", "0.0.0.0"]

