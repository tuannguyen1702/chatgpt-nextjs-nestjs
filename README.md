# Chat GPT App

This project is a ChatGPT app. It use GPT-4 api to get chatting result (streaming return)

## Prerequisites

Make sure you have the following software and tools installed:

- Node.js (version >=16)
- npm (version >=8) or Yarn (version >=1.22.xx)
- MongoDB (version >= 4)

## Installation & Configuration

1. Clone the repository: `git clone https://github.com/tuannguyen1702/chatgpt-nextjs-nestjs.git`
2. Navigate to the backend directory: `cd backend`
3. Install backend dependencies: `npm install` or `yarn install`
4. Configure backend settings:
   - Create a `.env` file in the server directory.
   - Specify the necessary environment variables in the `.env` file (e.g., OpenAI API key, etc.).
5. Navigate to the fronend directory: `cd ../fronend`
6. Install fronend dependencies: `npm install` or `yarn install`
7. Configure fronend settings:
   - Open the `.env` file in the frontend directory & update API endpoint (if you changed server port).


## Running the Application

1. Start the backend: In the backend directory, run `npm start` or `yarn start`.
2. Start the frontend: In the frontend directory, run `npm run dev` or `yarn dev`.
3. Access the application in a web browser: Open `http://localhost:3000`.
4. Run the test suite: In the backend directory, run `npm run test` or `yarn test`.

## Docker Deployment

To deploy the application at local using Docker, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your system.
2. Update `OPENAI_KEY=YOUR KEY`
3. Start app with `docker-compose.yml` file, run `docker-compose up`


If you're still experiencing difficulties, please open a new issue in the project's repository for further assistance.
