# Study Storybook

[日本語](../../README.md) | English

Storybook learning application

## Setup Instructions

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd study-storybook
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Set up virtual environment and database

   ```bash
   # Start PostgreSQL with Docker
   docker compose up -d

   # Sync database schema
   npx prisma db push

   # Seed sample data
   pnpm db:seed
   ```

4. Start the server

   ```bash
   pnpm dev
   ```

5. Verify the setup
   - Access `http://localhost:3000` in your browser
   - Check the Storybook learning application features
