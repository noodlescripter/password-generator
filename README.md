# Password Generator App

Welcome to the Password Generator app! This repository contains a password generation tool designed to provide you with strong and secure passwords. This README.md file will guide you through the setup and usage of the app, including its backend API, database setup, and frontend development.

## Table of Contents

- [Password Generator App](#password-generator-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Starting the Database](#starting-the-database)
    - [Starting the Backend API](#starting-the-backend-api)
    - [Starting the Frontend](#starting-the-frontend)
  - [Environment Variables](#environment-variables)
    - [API Environment Variables](#api-environment-variables)
    - [Root Directory Environment Variables](#root-directory-environment-variables)
  - [Generating Passwords](#generating-passwords)
  - [Stopping the Servers](#stopping-the-servers)
    - [Stopping the Database](#stopping-the-database)
    - [Stopping the Backend API and Frontend](#stopping-the-backend-api-and-frontend)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

The Password Generator app is a powerful tool that helps you generate strong and secure passwords to enhance your online security. It consists of a backend API built using Express.js, a database setup using Docker Compose, and a frontend developed with React.

## Installation

To get started with the Password Generator app, follow these installation steps:

1. **Clone the Repository:** Begin by cloning this repository to your local machine using the following command:

   ```
   git clone https://github.com/noodlescripter/password-generator.git
   ```

2. **Navigate to the Project Directory:** Change your working directory to the root of the cloned repository:

   ```
   cd Password-Generator
   ```

3. **Install Dependencies:** Install the required dependencies for the app by navigating to the `backend/api` and `password-generator` (frontend) directories and executing the following commands:

   ```bash
   cd backend/api
   npm install
   cd ../../password-generator
   npm install
   ```

4. **Set Up Database:** Navigate to the `db` directory and make the required changes to the `docker-compose.yml` file, such as specifying the username and password for your database.

## Usage

### Starting the Database

Before starting any component, ensure that the database is up and running. Follow these steps:

1. **Navigate to the Database Directory:** Open a terminal and navigate to the `db` directory:

   ```bash
   cd db
   ```

2. **Start the Database:** Run the following command to start the Docker Compose setup:

   ```bash
   docker-compose up -d
   ```

   This will initialize and start the database container.

### Starting the Backend API

After the database is up and running, follow these steps to start the backend API server:

1. **Navigate to the API Directory:** Open a new terminal window and navigate to the `backend/api` directory:

   ```bash
   cd backend/api
   ```

2. **Run the API Server:** Start the server using the following command:

   ```bash
   npm run server start api.json
   ```

   The Express server will start and be accessible at `http://localhost:8999`.

### Starting the Frontend

To start the frontend development server, follow these steps:

1. **Navigate to the Frontend Directory:** Open another terminal window and navigate to the `password-generator` directory:

   ```bash
   cd password-generator
   ```

2. **Install and Start the Frontend:** Install the required dependencies (if not done already) and start the frontend app:

   ```bash
   npm install
   npm start
   ```

   The frontend development server will start, and you can access the app in your web browser at `http://localhost:3000`.

## Environment Variables

The Password Generator app relies on environment variables to manage its configuration settings. You'll need to create `.env` files in both the `backend/api` and root directories to provide the necessary configuration values.

### API Environment Variables

1. **Create `.env` File:** In the `backend/api` directory, create a `.env` file.

2. **Set Environment Variables:** Inside the `.env` file, provide values for the required environment variables:

   ```plaintext
   PORT=8999
   DATABASE_URL=your_database_connection_string
   ```

   Replace `your_database_connection_string` with the actual URL or connection string for your database.

### Root Directory Environment Variables

1. **Create `.env` File:** In the root directory of the project, create another `.env` file.

2. **Set Environment Variables:** Inside the `.env` file, provide values for any additional environment variables that your application might require.

   **In `backend/api/.env`:**

   ```plaintext
   PORT=8999
   DATABASE_URL=mongodb://username:password@your_server_ip:27017/pwdgenerator
   ```
   **Default DB credentials : admin/pass123**

   **In `password-generator/.env`:**

   ```plaintext
   REACT_APP_API_URL=http://your-server-ip:8999
   ```

   Replace `your-server-ip` with the actual IP address of the machine running your backend API. To access the app from other devices in the network, replace `localhost` with your machine's IP address.

Remember that environment variables should not be hard-coded in your codebase, especially sensitive information like database connection strings or API keys. Utilize the `.env` files to keep this information secure and separate from your source code.

## Generating Passwords

To generate passwords using the app, follow these steps:

1. Ensure that the backend API server and the database are up and running.

2. Open a web browser and navigate to `http://your-server-ip:3000` to access the Password Generator app's frontend.

3. Follow the on-screen instructions to generate strong and secure passwords based on your preferences.

Certainly! Adding a section to the README.md for stopping the servers is important for the overall usage documentation. Here's the updated version with the information you provided:

---

## Stopping the Servers

When you're done using the Password Generator app, you'll need to properly shut down the servers. Follow these steps to stop both the database and backend API servers:

### Stopping the Database

To stop the MongoDB database container, follow these steps:

1. **Navigate to the Database Directory:** Open a terminal and navigate to the `db` directory:

   ```bash
   cd db
   ```

2. **Stop the Database Container:** Run the following command to stop the MongoDB container:

   ```bash
   docker-compose down
   ```

This will shut down and remove the database container.

### Stopping the Backend API and Frontend

To stop the backend API and frontend servers, follow these steps:

1. **Navigate to the API Directory:** Open a terminal and navigate to the `backend/api` directory:

   ```bash
   cd password-generator
   ```

2. **Stop the API Server and App Server:** Run the following command to stop the API server:

   ```bash
   npm run server stop all
   ```

With these steps, you will have successfully stopped all the servers associated with the Password Generator app.

---


## Contributing

We welcome contributions to the Password Generator app! If you find issues or have ideas for improvements, please feel free to submit pull requests or create issues in this repository.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.

---

Thank you for using the Password Generator app! If you have any questions or need further assistance, please don't hesitate to reach out.