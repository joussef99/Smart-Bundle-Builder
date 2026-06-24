# Smart Bundle Builder

A React application that allows users to build a custom PC setup while respecting budget limits and hardware compatibility rules.

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

## Development Process

* Configure JSON Server and create mock product data.
* Implement product fetching service.
* Create Zustand store for state management.
* Implement product selection logic.
* Add category grouping.
* Build compatibility engine.
* Implement budget validation and warning messages.
* Create build summary panel.
* Add dynamic budget progress bar.
* Implement undo/redo history stack.
* Improve UI using Ant Design components.
* Add responsive layout.
* Improve accessibility with keyboard support and ARIA attributes.
* Refactor page into reusable components.

## Notes 
* First of all, thank you for giving me the opportunity to work on this assessment.
* Total price is calculated from the selected items instead of being stored in Zustand to avoid duplicated state.
* I did not maintain a detailed Git commit history throughout the development process. I realized this later in the project, so I included a Development Process section to clearly document the implementation steps.
* I had several additional ideas could be added to the project. However, I intentionally focused on delivering the core requirements with clean, maintainable code rather than over-engineering the solution, while also respecting the assessment deadline.


## Author

Youssef Gadow

```