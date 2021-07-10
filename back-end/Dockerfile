FROM ruby:2.7.3

WORKDIR /app/back-end

ENV PORT 4000
EXPOSE $PORT

RUN gem install rails bundler
RUN gem install rails
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client


# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/back-end/node_modules/.bin:$PATH

COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock
RUN bundle check || bundle install

######################
# Add a script to be executed every time the container starts.
COPY script/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
##################################

# To Fix Permissions for Packages
RUN mkdir -p ./node_modules/.cache && chmod -R 777 ./node_modules/.cache

# add app
COPY . ./

# start app
CMD ["rails", "s", "-b", "0.0.0.0"]