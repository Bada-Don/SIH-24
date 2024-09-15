// questions.js
export const questionsBank = {
    ExpressJS: [
        {
            type: "MCQ",
            question: "What is Express.js primarily used for?",
            options: [
                "Building web applications",
                "Database management",
                "Machine learning",
                "Game development",
            ],
            correctAnswer: "Building web applications",
        },
        {
            type: "ShortAnswer",
            question: "What does the 'app.use()' function do in Express.js?",
            correctAnswer: "It mounts middleware functions at a specified path.",
        },
        {
            type: "MCQ",
            question: "What is middleware in Express.js?",
            options: [
                "Functions that execute after the route handler",
                "Functions that have access to the request and response objects",
                "Functions used for database connections",
                "Functions for routing in your application"
            ],
            correctAnswer: "Functions that have access to the request and response objects",
        },
        {
            type: "ShortAnswer",
            question: "How do you define a route handler for a GET request to '/' in Express.js?",
            correctAnswer: "app.get('/', (req, res) => { // ... });",
        },
        {
            type: "MCQ",
            question: "What is the purpose of 'req' object in Express.js route handler?",
            options: [
                "It contains the response data to be sent back to the client",
                "It holds information about the HTTP request",
                "It is used for database queries",
                "It is used for rendering templates"
            ],
            correctAnswer: "It holds information about the HTTP request",
        },
        {
            type: "ShortAnswer",
            question: "How do you access the value of a query parameter named 'id' from the 'req' object?",
            correctAnswer: "req.query.id",
        },
        {
            type: "MCQ",
            question: "What method is used to send a JSON response in Express.js?",
            options: [
                "res.json()",
                "res.sendJSON()",
                "res.send()",
                "res.render()"
            ],
            correctAnswer: "res.json()",
        },
        {
            type: "ShortAnswer",
            question: "What is the purpose of 'next()' function in Express.js middleware?",
            correctAnswer: "It passes control to the next middleware function in the stack.",
        },
        {
            type: "MCQ",
            question: "Which module is used for handling file uploads in Express.js?",
            options: [
                "body-parser",
                "multer",
                "express-fileupload",
                "formidable"
            ],
            correctAnswer: "multer",
        },
        {
            type: "ShortAnswer",
            question: "How can you set a template engine like EJS in Express.js?",
            correctAnswer: "app.set('view engine', 'ejs');",
        },
    ],
    "Graphic Design": [
        {
            type: "MCQ",
            question: "What does CMYK stand for in printing?",
            options: [
                "Cyan, Magenta, Yellow, Key (Black)",
                "Color, Maroon, Yellow, Keyline",
                "Custom, Maroon, Yellow, Kolkata",
                "None of the above",
            ],
            correctAnswer: "Cyan, Magenta, Yellow, Key (Black)",
        },
        {
            type: "ShortAnswer",
            question: "What are the primary colors?",
            correctAnswer: "Red, Yellow, Blue",
        },
        {
            type: "MCQ",
            question: "What is kerning?",
            options: [
                "The space between lines of text",
                "The space between all characters",
                "The space between two specific characters",
                "The thickness of a stroke",
            ],
            correctAnswer: "The space between two specific characters",
        },
        {
            type: "ShortAnswer",
            question: "What does RGB stand for?",
            correctAnswer: "Red, Green, Blue",
        },
        {
            type: "MCQ",
            question: "Which of the following is a vector graphic format?",
            options: [".jpg", ".png", ".gif", ".svg"],
            correctAnswer: ".svg",
        },
        {
            type: "ShortAnswer",
            question: "What is a grid system in design?",
            correctAnswer: "A structure used to organize content on a page.",
        },
        {
            type: "MCQ",
            question: "What is the rule of thirds?",
            options: [
                "A composition guide that places subjects in the center",
                "A composition guide that divides the image into nine equal parts",
                "A rule about using only three colors in a design",
                "A rule about font sizes",
            ],
            correctAnswer: "A composition guide that divides the image into nine equal parts",
        },
        {
            type: "ShortAnswer",
            question: "What is the golden ratio?",
            correctAnswer: "A mathematical ratio often used to create pleasing proportions in design.",
        },
        {
            type: "MCQ",
            question: "What is typography?",
            options: [
                "The art of arranging type",
                "The process of printing",
                "The study of color",
                "The use of photography in design",
            ],
            correctAnswer: "The art of arranging type",
        },
        {
            type: "ShortAnswer",
            question: "What is a mockup?",
            options: [
                "A realistic representation of how a design will look.",
                "A rough sketch of a design",
                "The final printed product"
            ],
            correctAnswer: "A realistic representation of how a design will look.",
        },
    ],
    JavaScript: [
        {
            type: "MCQ",
            question: "What is the output of '2' + 2 in JavaScript?",
            options: ["22", "4", "'22'", "Error"],
            correctAnswer: "22",
        },
        {
            type: "MCQ",
            question: "What is the difference between '==' and '===' in JavaScript?",
            options: [
                "'==' checks for value equality, while '===' checks for both value and type equality.",
                "'===' checks for value equality, while '==' checks for both value and type equality.",
                "They are the same",
                "None of the above"
            ],
            correctAnswer: "'==' checks for value equality, while '===' checks for both value and type equality.",
        },
        {
            type: "ShortAnswer",
            question: "What is a closure in JavaScript?",
            correctAnswer: "A function's ability to access its lexical scope even when it's executed outside of its lexical scope.",
        },
        {
            type: "MCQ",
            question: "How do you declare a variable in JavaScript?",
            options: ["var", "let", "const", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            type: "ShortAnswer",
            question: "What is the difference between 'undefined' and 'null' in JavaScript?",
            correctAnswer: "'undefined' means a variable has been declared but not assigned a value, while 'null' is an assignment value itself.",
        },
        {
            type: "MCQ",
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
                "It refers to the current function.",
                "It refers to the previous element in an array.",
                "It refers to the object that the function belongs to.",
                "None of the above"
            ],
            correctAnswer: "It refers to the object that the function belongs to.",
        },
        {
            type: "ShortAnswer",
            question: "What is a callback function in JavaScript?",
            correctAnswer: "A function passed as an argument to another function to be executed later.",
        },
        {
            type: "MCQ",
            question: "Which method is used to add an element to the end of an array in JavaScript?",
            options: [
                "push()",
                "pop()",
                "shift()",
                "unshift()"
            ],
            correctAnswer: "push()",
        },
        {
            type: "ShortAnswer",
            question: "How do you write a for loop that iterates 5 times in JavaScript?",
            correctAnswer: "for (let i = 0; i < 5; i++) { // Code to execute }",
        },
    ],
    MongoDB: [
        {
            type: "MCQ",
            question: "What type of database is MongoDB?",
            options: [
                "Relational",
                "Document",
                "Key-value",
                "Graph"
            ],
            correctAnswer: "Document",
        },
        {
            type: "ShortAnswer",
            question: "What is a document in MongoDB?",
            correctAnswer: "A JSON-like object that stores data in key-value pairs.",
        },
        {
            type: "MCQ",
            question: "Which of these is not a valid data type in MongoDB?",
            options: [
                "String",
                "Number",
                "Boolean",
                "Character"
            ],
            correctAnswer: "Character",
        },
        {
            type: "ShortAnswer",
            question: "What is a collection in MongoDB?",
            correctAnswer: "A group of documents with a common purpose.",
        },
        {
            type: "MCQ",
            question: "Which operator is used to find documents in MongoDB?",
            options: [
                "$find",
                "$query",
                "$select",
                "$filter"
            ],
            correctAnswer: "$find",
        },
        {
            type: "ShortAnswer",
            question: "How do you insert a document into a collection named 'users'?",
            correctAnswer: "db.users.insertOne({ /* document data */ })",
        },
        {
            type: "MCQ",
            question: "Which of the following is used for indexing in MongoDB?",
            options: [
                "createIndex()",
                "ensureIndex()",
                "addIndex()",
                "Both a and b"
            ],
            correctAnswer: "Both a and b",
        },
        {
            type: "ShortAnswer",
            question: "What is the purpose of aggregation in MongoDB?",
            correctAnswer: "To process data records and return computed results.",
        },
        {
            type: "MCQ",
            question: "What is sharding in MongoDB?",
            options: [
                "A method for backing up data",
                "A method for distributing data across multiple servers",
                "A method for data encryption",
                "A method for querying data"
            ],
            correctAnswer: "A method for distributing data across multiple servers",
        },
        {
            type: "ShortAnswer",
            question: "What is the purpose of the '$match' operator in MongoDB aggregation?",
            correctAnswer: "To filter documents based on specified criteria.",
        },
    ],
    MySQL: [
        {
            type: "MCQ",
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Simple Question Language",
                "Structured Question Language",
                "None of the above"
            ],
            correctAnswer: "Structured Query Language",
        },
        {
            type: "ShortAnswer",
            question: "What is a primary key in MySQL?",
            correctAnswer: "A unique identifier for each row in a table.",
        },
        {
            type: "MCQ",
            question: "Which data type is used to store a date in MySQL?",
            options: [
                "DATE",
                "VARCHAR",
                "TIMESTAMP",
                "Both a and c"
            ],
            correctAnswer: "Both a and c",
        },
        {
            type: "ShortAnswer",
            question: "What is a foreign key in MySQL?",
            correctAnswer: "A column that creates a link between two tables.",
        },
        {
            type: "MCQ",
            question: "Which SQL statement is used to retrieve data from a table?",
            options: [
                "SELECT",
                "UPDATE",
                "DELETE",
                "INSERT"
            ],
            correctAnswer: "SELECT",
        },
        {
            type: "ShortAnswer",
            question: "How do you select all columns from a table named 'products'?",
            correctAnswer: "SELECT * FROM products;",
        },
        {
            type: "MCQ",
            question: "What is the purpose of the WHERE clause in SQL?",
            options: [
                "To insert data",
                "To filter data",
                "To update data",
                "To delete data"
            ],
            correctAnswer: "To filter data",
        },
        {
            type: "ShortAnswer",
            question: "What is the purpose of a JOIN clause in SQL?",
            correctAnswer: "To combine rows from two or more tables based on a related column.",
        },
        {
            type: "MCQ",
            question: "What is the difference between INNER JOIN and LEFT JOIN?",
            options: [
                "INNER JOIN returns all matching rows from both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table.",
                "LEFT JOIN returns all matching rows from both tables, while INNER JOIN returns all rows from the left table and matching rows from the right table.",
                "They are the same.",
                "None of the above."
            ],
            correctAnswer: "INNER JOIN returns all matching rows from both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table.",
        },
        {
            type: "ShortAnswer",
            question: "How do you sort results in ascending order using SQL?",
            correctAnswer: "ORDER BY column_name ASC;",
        },
    ],
    NodeJS: [
        {
            type: "MCQ",
            question: "What is Node.js?",
            options: [
                "A frontend framework",
                "A server-side JavaScript runtime environment",
                "A database",
                "A markup language"
            ],
            correctAnswer: "A server-side JavaScript runtime environment",
        },
        {
            type: "ShortAnswer",
            question: "What is the 'require' function used for in Node.js?",
            correctAnswer: "To import modules.",
        },
        {
            type: "MCQ",
            question: "Which module is used to create a web server in Node.js?",
            options: ["http", "fs", "url", "path"],
            correctAnswer: "http",
        },
        {
            type: "ShortAnswer",
            question: "How do you read a file asynchronously in Node.js?",
            correctAnswer: "fs.readFile(path, callbackFunction);",
        },
        {
            type: "MCQ",
            question: "What is npm in Node.js?",
            options: [
                "Node Package Manager",
                "Node Project Manager",
                "New Package Manager",
                "None of the above"
            ],
            correctAnswer: "Node Package Manager",
        },
        {
            type: "ShortAnswer",
            question: "What is the purpose of the 'events' module in Node.js?",
            correctAnswer: "To create and handle custom events.",
        },
        {
            type: "MCQ",
            question: "What is a stream in Node.js?",
            options: [
                "A collection of data",
                "A way to handle large amounts of data efficiently",
                "A type of database",
                "A type of variable"
            ],
            correctAnswer: "A way to handle large amounts of data efficiently",
        },
        {
            type: "ShortAnswer",
            question: "What is the difference between 'process.nextTick()' and 'setTimeout()'?",
            correctAnswer: "'process.nextTick()' schedules a function to be executed on the next iteration of the event loop, while 'setTimeout()' schedules it after a minimum delay.",
        },
        {
            type: "MCQ",
            question: "What is the purpose of the 'cluster' module in Node.js?",
            options: [
                "To manage database connections",
                "To create child processes to improve performance",
                "To handle HTTP requests",
                "To read and write files"
            ],
            correctAnswer: "To create child processes to improve performance",
        },
        {
            type: "ShortAnswer",
            question: "What is a buffer in Node.js?",
            correctAnswer: "A temporary storage area for binary data.",
        },
    ],
    ReactJS: [
        {
            type: "MCQ",
            question: "What is ReactJS?",
            options: [
                "A JavaScript library for building user interfaces",
                "A server-side framework",
                "A database management system",
                "A CSS framework"
            ],
            correctAnswer: "A JavaScript library for building user interfaces",
        },
        {
            type: "ShortAnswer",
            question: "What is JSX in React?",
            correctAnswer: "A syntax extension that allows you to write HTML-like syntax within JavaScript.",
        },
        {
            type: "MCQ",
            question: "What is a component in React?",
            options: [
                "A reusable piece of code that returns UI elements",
                "A type of variable",
                "A database query",
                "A CSS rule"
            ],
            correctAnswer: "A reusable piece of code that returns UI elements",
        },
        {
            type: "ShortAnswer",
            question: "What is the difference between a class component and a functional component in React?",
            correctAnswer: "Class components can have state and lifecycle methods, while functional components are simpler and primarily use props.",
        },
        {
            type: "MCQ",
            question: "What is 'props' in React?",
            options: [
                "Short for properties, data passed down from parent to child components",
                "A function to handle events",
                "A type of state",
                "A way to style components"
            ],
            correctAnswer: "Short for properties, data passed down from parent to child components",
        },
        {
            type: "ShortAnswer",
            question: "What is 'state' in React?",
            correctAnswer: "An object that holds data that may change over time within a component.",
        },
        {
            type: "MCQ",
            question: "Which method is used to update the state of a component?",
            options: [
                "setState()",
                "updateState()",
                "changeState()",
                "modifyState()"
            ],
            correctAnswer: "setState()",
        },
        {
            type: "ShortAnswer",
            question: "What is the purpose of the 'useEffect' hook in React?",
            correctAnswer: "To perform side effects like data fetching, DOM manipulation, or subscriptions.",
        },
        {
            type: "MCQ",
            question: "What is a virtual DOM in React?",
            options: [
                "A lightweight representation of the actual DOM",
                "A type of database",
                "A CSS framework",
                "A server-side component"
            ],
            correctAnswer: "A lightweight representation of the actual DOM",
        },
        {
            type: "ShortAnswer",
            question: "What is the purpose of keys in React lists?",
            correctAnswer: "To help React identify which items in a list have changed, been added, or removed.",
        },
    ],
    Aptitude: [
        {
            type: "MCQ",
            question: "If a train travels at 100 km/h for 2 hours, how far will it travel?",
            options: ["50 km", "100 km", "200 km", "400 km"],
            correctAnswer: "200 km",
        },
        {
            type: "MCQ",
            question: "A shopkeeper sells an item for $120, making a profit of 20%. What was the cost price of the item?",
            options: ["$80", "$90", "$100", "$110"],
            correctAnswer: "$100",
        },
        {
            type: "MCQ",
            question: "If 5 workers can complete a task in 10 days, how many days will it take 10 workers to complete the same task?",
            options: ["2.5 days", "5 days", "10 days", "20 days"],
            correctAnswer: "5 days",
        },
        {
            type: "MCQ",
            question: "What is the next number in the series: 2, 4, 8, 16, __?",
            options: ["24", "32", "64", "100"],
            correctAnswer: "32",
        },
        {
            type: "MCQ",
            question: "If A is taller than B, and B is taller than C, then which of the following is true?",
            options: ["A is taller than C", "C is taller than A", "A is the same height as C", "Cannot be determined"],
            correctAnswer: "A is taller than C",
        },
        {
            type: "MCQ",
            question: "A bag contains 5 red balls and 3 blue balls. What is the probability of drawing a blue ball?",
            options: ["3/5", "3/8", "5/8", "1/8"],
            correctAnswer: "3/8",
        },
        {
            type: "MCQ",
            question: "The average of 5 numbers is 20. If one number is removed, the average becomes 15. What is the removed number?",
            options: ["15", "25", "35", "40"],
            correctAnswer: "40",
        },
        {
            type: "MCQ",
            question: "If the radius of a circle is doubled, what happens to its area?",
            options: [
                "It doubles",
                "It triples",
                "It quadruples",
                "It increases by a factor of 8",
            ],
            correctAnswer: "It quadruples",
        },
        {
            type: "MCQ",
            question: "A man walks 10 km north, then 5 km east, and finally 10 km south. How far is he from his starting point?",
            options: ["0 km", "5 km", "10 km", "15 km"],
            correctAnswer: "5 km",
        },
        {
            type: "MCQ",
            question: "If 2x + 5 = 15, what is the value of x?",
            options: ["2", "5", "10", "15"],
            correctAnswer: "5",
        },
    ],
    Communication: [
        {
            type: "MCQ",
            question: "What is the most important element of effective communication?",
            options: [
                "Clear and concise language",
                "Active listening",
                "Confident body language",
                "Appropriate tone of voice",
            ],
            correctAnswer: "Active listening",
        },
        {
            type: "MCQ",
            question: "Which of the following is an example of nonverbal communication?",
            options: ["Speaking", "Writing", "Facial expressions", "Singing"],
            correctAnswer: "Facial expressions",
        },
        {
            type: "MCQ",
            question: "What is the purpose of feedback in communication?",
            options: [
                "To criticize the speaker",
                "To ensure understanding",
                "To interrupt the speaker",
                "To change the topic",
            ],
            correctAnswer: "To ensure understanding",
        },
        {
            type: "MCQ",
            question: "Which of these is a barrier to effective communication?",
            options: [
                "Active listening",
                "Empathy",
                "Distractions",
                "Clear language",
            ],
            correctAnswer: "Distractions",
        },
        {
            type: "MCQ",
            question: "What is the best way to handle a conflict in a professional setting?",
            options: [
                "Ignore it",
                "Communicate assertively and respectfully",
                "Become aggressive",
                "Complain to others",
            ],
            correctAnswer: "Communicate assertively and respectfully",
        },
        {
            type: "MCQ",
            question: "What is the purpose of an email subject line?",
            options: [
                "To provide a detailed explanation of the email content",
                "To greet the recipient",
                "To clearly and concisely indicate the topic of the email",
                "To include attachments",
            ],
            correctAnswer: "To clearly and concisely indicate the topic of the email",
        },
        {
            type: "MCQ",
            question: "When giving a presentation, it's important to:",
            options: [
                "Read directly from your slides",
                "Avoid eye contact with the audience",
                "Speak clearly and confidently",
                "Use technical jargon that the audience may not understand",
            ],
            correctAnswer: "Speak clearly and confidently",
        },
        {
            type: "MCQ",
            question: "Which of the following is an example of active listening?",
            options: [
                "Interrupting the speaker to share your own thoughts",
                "Multitasking while someone is talking to you",
                "Paraphrasing what the speaker has said to ensure understanding",
                "Finishing the speaker's sentences",
            ],
            correctAnswer: "Paraphrasing what the speaker has said to ensure understanding",
        },
        {
            type: "MCQ",
            question: "What is empathy in communication?",
            options: [
                "The ability to understand and share the feelings of others",
                "The ability to persuade others",
                "The ability to dominate a conversation",
                "The ability to avoid conflict",
            ],
            correctAnswer: "The ability to understand and share the feelings of others",
        },
        {
            type: "MCQ",
            question:
                "When communicating with someone from a different culture, it's important to:",
            options: [
                "Assume that everyone communicates the same way",
                "Be aware of potential cultural differences in communication styles",
                "Speak louder so that you can be understood",
                "Avoid any discussion of cultural differences",
            ],
            correctAnswer: "Be aware of potential cultural differences in communication styles",
        },
    ],
};