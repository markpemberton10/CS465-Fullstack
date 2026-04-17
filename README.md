Architecture

In this project, I worked with multiple frontend approaches including Express-rendered HTML, JavaScript, and a Single Page Application (SPA) built with Angular. Express HTML represents a traditional web application where each user action triggers a full page reload from the server. While this approach is simple, it is less dynamic and slower from a user experience standpoint.

In contrast, the SPA provides a richer and more interactive experience by dynamically updating content without reloading the entire page. Angular handles routing and UI updates on the client side, which improves responsiveness and creates a smoother user experience. JavaScript plays a key role in both approaches, but in the SPA it is more heavily used to manage state, handle events, and communicate with the backend API.

The backend uses a NoSQL MongoDB database because it provides flexibility in handling unstructured or semi-structured data. MongoDB stores data in JSON-like documents, making it a natural fit for JavaScript-based applications. This allows for faster development, easier scalability, and seamless integration with the frontend.

Functionality

JSON (JavaScript Object Notation) differs from JavaScript in that it is purely a data format, not a programming language. While JavaScript can execute logic, JSON is used to store and transfer data in a structured way. In this project, JSON acts as the bridge between the frontend and backend by formatting the data sent through API requests and responses.

Throughout the project, I refactored code to improve functionality and efficiency. For example, I reused UI components such as trip cards instead of rewriting similar code multiple times. I also improved service methods to handle API calls more cleanly and consistently. These changes reduced redundancy, improved readability, and made the application easier to maintain and scale.

Reusable UI components provide several benefits, including consistency across the application, easier debugging, and faster development. They also allow updates to be made in one place, which automatically applies changes everywhere the component is used.

Testing

In a full stack application, API testing focuses on methods such as GET, POST, PUT, and DELETE, which correspond to retrieving, creating, updating, and removing data. These methods interact with specific endpoints that define how the frontend communicates with the backend.

Testing involves verifying that each endpoint returns the correct data and handles errors properly. Tools like Postman can be used to send requests and validate responses. When security layers such as authentication are added, testing becomes more complex because requests must include valid credentials or tokens. This requires additional validation to ensure that only authorized users can access or modify data.

Understanding how methods, endpoints, and security work together is essential for ensuring that the application is both functional and secure.

Reflection

This course has helped me move closer to my professional goals by giving me hands-on experience with full stack development. I developed skills in building RESTful APIs, working with databases, and creating dynamic user interfaces using modern frameworks.

I also improved my ability to debug, refactor code, and design scalable applications. Learning how the frontend and backend communicate has given me a stronger understanding of real-world application development. These skills make me a more marketable candidate because I can contribute to both client-side and server-side development in a professional environment.

Overall, this project strengthened my confidence in building complete applications and preparing for a career in software development.
