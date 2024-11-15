
# AI-Powered Visual Web Scraper Builder

This Full Stack SaaS application allows users to visually build, manage, and schedule web scrapers using a workflow builder powered by AI. Users can create, modify, and delete workflows with an intuitive drag-and-drop interface. The integration of AI simplifies the web scraping process, making it accessible to both technical and non-technical users.


## Features

### 🌟 Key Features
- **Visual Workflow Builder**: Drag-and-drop interface to design scraping workflows effortlessly.
- **AI Assistance**: AI-powered suggestions for selectors, workflow optimization, and error handling.
- **Credential Management**: Securely manage login credentials for scraping protected websites.
- **Scheduling System**: Set up automatic scraping schedules for periodic data extraction.
- **Workflow Management**: Create, modify, delete, and duplicate workflows with ease.
- **Data Export**: Export scraped data in various formats (e.g., CSV, JSON).

### ⚡ Built with Next.js
- **Server-Side Rendering (SSR)** for optimized SEO and performance.
- **API Routes** to handle backend logic.
- **Dynamic Routing** for user-specific workflows.
- **Built-in Authentication** using NextAuth.js for secure user sessions.

---

## Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and API integration.
- **Tailwind CSS**: For a sleek and responsive UI.
- **React Flow**: To enable the drag-and-drop workflow builder.

### Backend
- **Node.js**: Handles API logic and server-side operations.
- **Express**: (Optional) Additional middleware for complex backend logic.
- **Prisma**: Database ORM for managing workflow and user data.
- **PostgreSQL**: Relational database for scalable storage.

### AI Integration
- **OpenAI API**: For intelligent suggestions in the workflow builder.

### Others
- **NextAuth.js**: For secure authentication and user management.
- **Cron Jobs**: For implementing the scheduling system.

---

## Installation

### Prerequisites
- **Node.js** (v16 or later)
- **PostgreSQL** database
- API Key for OpenAI

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-web-scraper-builder.git
   cd ai-web-scraper-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   DATABASE_URL=postgresql://username:password@localhost:5432/yourdb
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

---

## Usage

### 1. **Sign Up/Log In**
   - Use NextAuth.js to sign up or log in to your account.

### 2. **Create a Workflow**
   - Drag and drop nodes to define scraping tasks.
   - Use AI suggestions for selector optimization.

### 3. **Set Credentials**
   - Securely store website login credentials if required.

### 4. **Schedule Scraping**
   - Use the scheduling feature to automate scraping tasks.

### 5. **Export Data**
   - Download scraped data in the desired format.

---

## Development

### Scripts
- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Run production server**: `npm start`

### Linting and Formatting
- **Lint code**: `npm run lint`
- **Format code**: `npm run format`

---

## Roadmap
- Add support for multi-step scraping workflows.
- Integrate more export formats (e.g., Google Sheets, Excel).
- Enhance AI capabilities for broader use cases.
