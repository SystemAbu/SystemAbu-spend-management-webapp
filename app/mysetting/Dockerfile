FROM ruby:3.3.0

RUN apt update -qq && apt install -y postgresql-client
RUN mkdir /spend-management-webapp-app
WORKDIR /spend-management-webapp-app
COPY  ./spend-management-webapp-app /spend-management-webapp-app

COPY ./spend-management-webapp-app/Gemfile /spend-management-webapp-app/Gemfile
COPY ./spend-management-webapp-app/Gemfile.lock /spend-management-webapp-app/Gemfile.lock

RUN gem install bundler
RUN bundle install

VOLUME /tmp

COPY ./mysetting/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# puma.sockを配置するディレクトリを作成
RUN mkdir -p tmp/pids

# CMD ["rails", "server"]