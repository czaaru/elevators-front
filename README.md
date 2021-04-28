# Elevators Front [![Build Status](https://travis-ci.com/czaaru/elevators-front.svg?branch=main)](https://travis-ci.com/czaaru/elevators-front)

[Heroku preview](https://czaru-elevators-front.herokuapp.com/)

_NOTE_: If it does not work at first, retry - heroku might be starting up.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Core Concepts](#core-concepts)
- [Getting started](#getting-started)

## Core Concepts

Elevators Front is a visual interface for [Elevators API](https://github.com/czaaru/elevators-api). It supports adding up to 16 elevators and allows calling a pickup from a floor, moving a elevator step forward and resetting simulation to its initial state.

## Getting started
Set node version and install dependencies.

```sh
nvm use
yarn
```

To start this app locally run the following command and open your web browser at http://localhost:3000.

```sh
yarn start
```

The test is configured with Jest. To start testing, run the command below.

```sh
yarn test
```
