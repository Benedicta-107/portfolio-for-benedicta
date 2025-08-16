import blogImg from "../assets/blog-site-screenshot.png";
import bookNotesApp from "../assets/mock-booknotes.png";
import qrGenerator from "../assets/mock-qr.png";
import jokeGenerator from "../assets/mock-joke.png";
import countriesCapitalQuiz from "../assets/mock-quiz.png";
import flagsQuiz from "../assets/mock-flags.png";
import simpleShell from "../assets/mock-c.png";
import python from "../assets/mock-python.png";
import green from "../assets/mock-green.png";

export const projects = [
  {
    title: "BookNotesApp",
    description: "A web app to store and organize book notes, inspired by Derek Sivers.",
    stack: ["Node.js", "Express", "PostgreSQL", "EJS"],
    repo: "https://github.com/Benedicta-107/BookNotesApp",
    demo: "https://my-book-notes-backend-425fdb8642f8.herokuapp.com/",
    image: bookNotesApp
  },
  {
    title: "Blog",
    description: "A simple blogging platform built with EJS templates.",
    stack: ["EJS", "Node.js"],
    repo: "https://github.com/Benedicta-107/Blog",
    demo: "https://my-blog-website-7c9f91b94e28.herokuapp.com/new",
    image: blogImg
  },
  {
    title: "QR Generator",
    description: "Generate and download QR codes instantly in the browser.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Benedicta-107/QR-Generator",
    demo: "https://qr-code-beny-80f60b877a10.herokuapp.com/",
    image: qrGenerator
  },
  {
    title: "Joke Generator",
    description: "Fun app that fetches random jokes via a public API.",
    stack: ["EJS", "Fetch API"],
    repo: "https://github.com/Benedicta-107/JokeGenerator",
    demo: "https://joke-application-b88d3cebbe51.herokuapp.com",
    image: jokeGenerator
  },
  {
    title: "Countries Capital Quiz",
    description: "Interactive quiz to test your knowledge of world capitals.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Benedicta-107/countriesCapital-quiz",
    demo: "https://world-capital-quiz-4d6415a7553e.herokuapp.com",
    image: countriesCapitalQuiz
  },
  {
    title: "Flags Quiz",
    description: "Guess the country's flag in this browser game.",
    stack: ["JavaScript"],
    repo: "https://github.com/Benedicta-107/flags-quiz",
    demo: "https://flag-quiz-c6cfd8694c1b.herokuapp.com/",
    image: flagsQuiz
  },
  {
    title: "Simple Shell",
    description: "A basic Unix-like shell written in C to understand command execution.",
    stack: ["C"],
    repo: "https://github.com/Benedicta-107/simple_shell",
    demo: "",
    image: simpleShell
  },
  {
    title: "Monty",
    description: "Interpreter for Monty ByteCodes files.",
    stack: ["C"],
    repo: "https://github.com/Benedicta-107/monty",
    demo: "",
    image: monty
  },
  {
    title: "RSA Factoring Challenge",
    description: "Python scripts for decomposing large RSA numbers.",
    stack: ["Python"],
    repo: "https://github.com/Benedicta-107/RSA-Factoring-Challenge",
    demo: "",
    image: python
  },
  {
    title: "GreenPoult Project",
    description: "Agricultural project website that bridges agri-science and tech.",
    stack: ["HTML", "CSS"],
    repo: "https://github.com/Benedicta-107/GreenPoult-project",
    demo: "",
    image: green
  },
]
