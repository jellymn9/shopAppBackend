# Shop App BE

## Description

This is a web shop designed for selling cosmetics, built as a side learning project. While the application demonstrates features of a fully functional e-commerce platform, it is not intended for real-world use. The backend is powered by Node.js, Express, PostgreSQL, and Prisma, with Railway used for deployment. This project serves as a platform to learn and experiment with modern web development tools and techniques.

---

## Table of Contents

1. [Installation](#installation)
2. [Environment Variables](#environment-variables)
3. [Usage](#usage)
4. [Development](#development)
5. [Deployment](#deployment)
6. [Seeding the Database](#seeding-the-database)
7. [Connect to Database](#connect-to-database)
8. [License](#license)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jellymn9/shopAppBackend
   cd shopAppBackend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

---

## Environment Variables

Create `.env`, `.env.development`, and `.env.production` files in the root directory with the following variables:

```env
# Example for .env.development
DATABASE_URL=<your-local-database-url>
USER_PASSWORD=<password-of-a-test-user>
JWT_SECRET=<your-ywt-secret>

# Example for .env.production
DATABASE_URL=<your-production-database-url>
NODE_ENV=production
```

---

## Usage

### Start Development Server

Run the following command:

```bash
yarn dev
```

### Start Production Server

Build and run:

```bash
yarn build
yarn start
```

---

## Development

### Scripts

- **Development:**
  ```bash
  yarn dev
  ```
- **Build:**
  ```bash
  yarn build
  ```
- **Production:**
  ```bash
  yarn start
  ```
- **Migration (Development):**
  ```bash
  yarn migrate-dev
  ```
- **Migration (Production):**
  ```bash
  yarn migrate-prod
  ```

---

## Deployment

### Steps to Deploy

1. Push your code to the deployment branch.
2. Make sure your `.env.production` file is configured correctly.
3. Use your deployment platform (e.g., Railway) to deploy.

#### Railway Deployment

1. Link your repository to Railway.
2. Configure the environment variables under the `Variables` tab.
3. Deploy the project using the Railway dashboard or CLI.

---

## Seeding the Database

### Development Environment

Run:

```bash
yarn seed-dev
```

### Production Environment

Run:

```bash
yarn seed-prod
```

Ensure your `DATABASE_URL` is correctly set in the environment variables.
Value of `DATABASE_URL` should be your Railway `DATABASE_PUBLIC_URL`.

---

## Connect to Database

### Using Railway CLI

Run the following command to connect:

```bash
railway connect Postgres
```

---

## License

This project is licensed under the ISC License.

---
