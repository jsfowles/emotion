# Belly

Belly is a React application designed to make spinning up front end projects quick and easy as
possible. It is developed and maintained by the team at Underbelly Creative.

## Getting Started
First off you need to have Yarn and Node.js on your computer. Yarn is a package manager for your code. Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.

To install the needed dependencies we recommend using Thoughtbot's laptop setup script. It will install Node, Yarn and a bunch of other very useful dev tools. You can find the instructions [here](https://github.com/thoughtbot/laptop).

After that is installed lets get everything running!

```sh
# Replace `PROJECT_NAME` with whatever you want to name the project to be. Also do not copy the `$`.

# First lets clone the Github repository to your computer.
$ git clone git@github.com:underbelly/belly.git PROJECT_NAME

# Now lets remove the old Github reference in this folder so we can add a different one.
$ git remote remove origin

# Add a new Github repository. If you havent created one yet go to here https://github.com/new.
$ git remote add origin PROJECT_NAME

# Rename the project throughout the App
$ ./scripts/rename.sh PROJECT_NAME

# Start the local server
$ yarn && yarn dev

```

Now you should be able to open [localhost:3000](http://localhost:3000) to see your new site!

If you have any issues getting started, or have any feedback at all please report them [here](https://github.com/underbelly/belly/issues/new?title=[ReadMe]%20Getting%20Started)

## About Underbelly
