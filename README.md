# Smart Bundle Builder

A React  application that allows users to build a custom PC setup while respecting budget limits and hardware compatibility rules.

## Installation

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```
This command starts:

* Vite development server
* json-server mock API

## Tech Stack
* React
* TypeScript
* Zustand
* Ant Design
* Vite
* json-server

## Mock API

API Endpoint:

```txt
http://localhost:3001/products
```
## Undo / Redo Architecture

The application uses a custom history stack implemented with Zustand.

* Every valid selection creates a new snapshot of the build state.
* Undo moves backward through the history array.
* Redo moves forward through the history array.
* Clear Build resets the history stack to initial state
* If a new selection is made after an Undo operation, future states are discarded and a new history branch is created.

## Author

Youssef Gadow

```