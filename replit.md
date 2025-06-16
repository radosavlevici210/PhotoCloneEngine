# PhotoClone AI Dashboard

## Overview

PhotoClone AI Dashboard is a comprehensive AI/ML model management platform built with a modern full-stack architecture. The application provides advanced tools for training, deployment, and monitoring of machine learning models with a focus on photo processing and analysis. It features a React-based frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database integration through Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for dashboard metrics, system health, and activities
- **Development Server**: Custom Vite integration for SSR-like development experience
- **Error Handling**: Centralized error handling middleware

### Data Layer
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Comprehensive schema including users, models, training jobs, system metrics, and activities
- **Storage**: In-memory storage implementation for development with interface for easy database integration

## Key Components

### Dashboard System
- Real-time metrics display (active models, training jobs, accuracy, system load)
- System health monitoring (CPU, memory, GPU, storage usage)
- Activity tracking and notifications
- Responsive dashboard with multiple specialized views

### AI/ML Features
- Model training interface with progress tracking
- Advanced ML tools and algorithms
- Neural network augmentation capabilities
- Quantum analysis algorithms
- Hyperparameter optimization
- AI-powered feature suggestions

### Security and Monitoring
- Comprehensive security system monitoring
- Real-time system health checks
- Activity logging and audit trails
- Error boundary implementation for graceful error handling

### User Interface
- Dark theme design with consistent color system
- Responsive layout supporting mobile and desktop
- Loading states and error boundaries
- Toast notifications for user feedback
- Accessible UI components with proper ARIA labels

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js routes handle requests and interact with storage layer
3. **Data Processing**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization
6. **UI Updates**: React components reactively update based on data changes

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI primitives for components
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **wouter**: Lightweight routing library
- **zod**: Runtime type validation

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Hot Reload**: Vite HMR with custom middleware integration
- **Port Configuration**: Development server on port 5000
- **File Watching**: Automatic restart on server file changes

### Production Deployment
- **Build Process**: Vite build for client, esbuild for server bundling
- **Deployment Target**: Autoscale deployment on Replit
- **Static Assets**: Optimized client bundle with manual chunking
- **Environment**: Production mode with optimized configurations

### Alternative Deployment (Netlify)
- **Frontend**: Static deployment on Netlify with SPA routing
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `client/dist`
- **Caching Strategy**: Long-term caching for static assets

## Changelog

Changelog:
- June 16, 2025. Initial setup
- June 16, 2025. Enterprise migration completed - Added comprehensive documentation, licensing, security features, health monitoring, and production-ready configuration. All AI/ML features fully functional and accessible.

## User Preferences

Preferred communication style: Simple, everyday language.