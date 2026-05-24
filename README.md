# RR Barista

A full-stack coffee shop ordering system with a React frontend and an ASP.NET Core backend.

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Frontend | React 19, Vite, Axios                   |
| Backend  | ASP.NET Core 8, Entity Framework Core 8 |
| Database | SQLite                                  |
| API Docs | Swagger / Swashbuckle                   |

## Project Structure

```
RR_Barista/
├── backend/          # ASP.NET Core Web API
│   ├── Controllers/
│   ├── DTOs/
│   ├── Data/         # DbContext + seeder
│   ├── Migrations/
│   └── Models/
├── frontend/         # React + Vite app
│   └── src/
│       ├── components/
│       ├── context/
│       └── services/
├── docs/             # Sprint backlog and planning
└── mockup/           # HTML/PNG design mockups
```

## Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)

### Backend

```bash
cd backend
dotnet run
```

The API starts at `http://localhost:5074`. Swagger UI is available at `http://localhost:5074/swagger`.

The database is created and seeded automatically on first run.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app starts at `http://localhost:5173`.

## API Endpoints

| Method | Route              | Description          |
|--------|--------------------|----------------------|
| GET    | /api/products      | List all products    |
| GET    | /api/products/{id} | Get a single product |
| POST   | /api/orders        | Place a new order    |
| GET    | /api/orders        | List all orders      |
| GET    | /api/orders/{id}   | Get a single order   |
