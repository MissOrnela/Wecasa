# Getting Started

## 1- Clone repository

You should first clone repository et jump into the cloned folder

```bash
git clone https://github.com/MissOrnela/TimeLeft-Back-Office-.git
cd TimeLeft-Back-Office-

```

## 2- Install Dependencies

```bash
npm install
```

## 3- Run server in development mode

```bash
npm run dev
```

## 4- Visualize

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## React + TypeScript + Vite + Tailwind css

This app is built using the Vite boilerplate with React and TypeScript. For styling it use Tailwind css cause itis a simple way to style the application quickly and consistently without spending time on custom CSS or design details . It also includes ESLint for code linting.

## Project structure

For this technical test, I chose a lightweight structure (app / api / hooks / pages / components / types /utils) instead of a classic clean architecture setup.
cause it reduces boilerplate,it is suitable for a small scope project like this one while keeping concerns well separated.

## State management

I chose Redux Toolkit over React Context to manage global state, as the state is frequently updated and shared across multiple pages, even though the application scope is relatively small.

## Data fetch tool

For fecthing data i use tanstack query over classic fecth cause it already integrates automatic caching , background refetching (set to 30 min ) and it simplifies loading/error handling.
