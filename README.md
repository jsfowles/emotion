# Belly

Belly is a React application designed to make spinning up front end projects quick and easy as
possible. It is developed and maintained by the team at Underbelly Creative.

#### Project Ethos
- **Server rendered** by default, meaning that we have a server that we can offload things like environment variables and API requests.
- A strong **component library** that gives designers the ability to effectively eliminate UI design from parts of product development. Using pre-existing UI, product managers and engineers can scaffold incremental features. The design team can look at and approve these changes while focusing on larger features.
- **Efficiency** is key, you should be able to clone, edit and deploy with little effort.
- It is **strongly typed** with Flow.
- It is **well tested** with Jest and Enzyme.
- There is a **clear and consistant** pattern that will consist of views, components, containers and identity. This will help designers and engineers to be on-boarded faster.

## Getting Started
First off you need to have Yarn and Node.js on your computer. Yarn is a package manager for your code. Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.

To install the needed dependencies we recommend using Thoughtbot's laptop setup script. It will install Node, Yarn and a bunch of other very useful dev tools. You can find the instructions [here](https://github.com/thoughtbot/laptop).

Next you can clone the Github repository by typing this into your terminal.

```sh
$ git clone git@github.com:underbelly/belly.git PROJECT_NAME
```

> Note: Replace `PROJECT_NAME` with whatever you want to name the project to be. Also do not copy the `$`.

After everything is downloaded you can type into the terminal.

```sh
$ yarn && yarn dev
```
