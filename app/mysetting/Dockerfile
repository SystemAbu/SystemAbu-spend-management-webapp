FROM ruby:3.2.1

RUN apt update -qq && apt install -y postgresql-client
RUN mkdir /spend-management-webapp
WORKDIR /spend-management-webapp
COPY  ./spend-management-webapp-app /spend-management-webapp

COPY ../spend-management-webapp/Gemfile /spend-management-webapp/Gemfile
COPY ../spend-management-webapp/Gemfile.lock /spend-management-webapp/Gemfile.lock

RUN gem install bundler
RUN bundle install

VOLUME /tmp

COPY ./mysetting/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server"]