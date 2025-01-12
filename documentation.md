# SponsorCX Fullstack Challenge Documentation

## Project Overview
This project is a fullstack application built to help organizations manage their sponsorship deals with various accounts. The application consists of a React frontend and a Node.js/Express backend with MongoDB as the database.

## Architecture

### Frontend Stack
- React 18.3.1
- TypeScript
- Tailwind CSS for styling
- Axios for API communication
- React Router DOM for routing
- Vite as the build tool

### Backend Stack
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- CORS for cross-origin resource sharing

## Running the Application

### Prerequisites
- Node.js >= 20.0.0
- MongoDB installed and running
- npm or yarn package manager

### Backend Setup
1. Navigate to the server directory
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGO_URI="mongodb+srv://landonroney7923:T4RF2FY5t6ZxzTpp@main.r0cbn.mongodb.net/?retryWrites=true&w=majority&appName=main"
   PORT=3000
   ```
4. Seed the database
   ```bash
   npm run seed
   ```
5. Start the development server
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```

## Design Decisions

### Data Model
I chose to structure the data model with three main entities:

1. Organization
   - One-to-many relationship with Accounts
   - Contains basic organization information

2. Account
   - Belongs to one Organization
   - One-to-many relationship with Deals
   - Contains account information and references to deals

3. Deal
   - Belongs to one Account
   - Contains deal-specific information (dates, value, status)
   - Implements the required status enum types

### API Design
The backend implements RESTful endpoints for each entity:

- `/api/organizations` - CRUD operations for organizations
- `/api/accounts` - CRUD operations for accounts
- `/api/deals` - CRUD operations for deals with filtering capabilities

### Frontend Component Structure
I organized the frontend components using a modular approach. I used Bulletproof React as large influence:

- Shared UI components (Button, Input, Modal, etc.)
- Feature-specific components (DealsBoard, CategoryColumn, etc.)
- Page components for routing

### State Management
For this scale of application, I chose to use React's built-in state management with hooks:
- useState for local component state
- useEffect for side effects and data fetching
- Custom hooks (useDeals) for reusable logic

## Assumptions Made

1. Authentication/Authorization
   - The current implementation doesn't include auth as it wasn't in the requirements
   - In a production environment, this would be essential

2. Data Validation
   - Basic validation is implemented on the backend models
   - More comprehensive validation would be needed in production

3. Error Handling
   - Basic error handling is implemented
   - Production would need more robust error handling and logging

4. Performance
   - The current implementation assumes a moderate data scale
   - Larger datasets would require pagination and optimized queries


## Future Improvements

Given more time, I would add:

1. Authentication & Authorization
   - Implement user authentication
   - Role-based access control
   - JWT token management

2. Filtering & Sorting
   - filter options
   - Sorting by various fields
   - Saved filter preferences

3. Present Orgs, Accounts, and Deals together
   - Have a fully functional application that uses the CRUD functions for Orgs, Accts, and Deals.

## Feedback