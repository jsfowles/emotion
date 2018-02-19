# Belly

Belly is a NextJS application.
To learn more about NextJS, check out the [Github repo](https://github.com/zeit/next.js)
and the [blog post](https://zeit.co/blog/next5)

## Developing the Application
To set up your development environment, there are a few steps you'll need to follow.

### Install Required Dependencies
If you're on OS X and using Homebrew, run `brew install node yarn`.
Otherwise, for Node you can follow the instructions on the [Node downloads page],
and Yarn you can install via `curl`:
`curl -o- -L https://yarnpkg.com/install.sh | bash`

[node downloads page]: https://nodejs.org/en/download/

### Configure Your Local Environment
You need to install all the local dependencies for the app to run. To do this you
just need to run `yarn`.

Run:
```sh
$ yarn
```

### Starting the Next Server
Once all the dependencies have been installed, you can start the Next server with:
```sh
$ yarn dev
```

## Deployment
We are using [now](https://zeit.co/docs/getting-started/installing-now) for the staging site. To deploy you can run `now`, and that will publish with all environment files.

## About Underbelly
