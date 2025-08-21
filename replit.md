# SWDP AI Framework Presentation

## Overview

This project is a web-based presentation system designed to showcase the SWDP AI Framework. It is a React-based presentation application that demonstrates how AI can be integrated into existing development workflows and tools. The presentation covers the journey from identifying problems with traditional development processes to implementing AI-powered solutions that enhance productivity while maintaining familiar user experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React stack with TypeScript for type safety and maintainability. The frontend is built using:

- **React 18** with functional components and hooks for state management
- **TypeScript** for compile-time type checking and better developer experience
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** with shadcn/ui components for consistent styling and design system
- **Wouter** for lightweight client-side routing

### Component Structure
The presentation follows a modular component architecture:

- **Slide Components**: Individual slide components (Slide01Opening, Slide02Problems, etc.) that encapsulate specific content
- **Navigation Components**: Reusable navigation elements for slide control and user interaction
- **UI Components**: shadcn/ui component library providing consistent design patterns
- **Hooks**: Custom React hooks for keyboard navigation, slide management, and mobile detection

### Backend Architecture
The backend is a minimal Express.js server that serves the React application and provides basic API endpoints:

- **Express.js** server with TypeScript for API handling
- **Development mode**: Vite integration for hot module replacement
- **Production mode**: Static file serving with optimized builds
- **Health check endpoints** for monitoring and debugging

### State Management
The application uses React's built-in state management with custom hooks:

- **useSlideNavigation**: Manages current slide state and navigation logic
- **useKeyboardNavigation**: Handles keyboard shortcuts for presentation control
- **Local component state**: For UI interactions like modals and fullscreen mode

### Data Layer
Currently implements a simple in-memory storage pattern:

- **Schema definitions** using Zod for runtime type validation
- **Memory storage** for user data and session management
- **Prepared for database integration** with Drizzle ORM configuration

### Build and Development Workflow
The project uses a modern development setup:

- **TypeScript compilation** with strict type checking
- **Vite development server** with hot module replacement
- **ESBuild** for production bundling
- **PostCSS** with Tailwind CSS for styling

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, React Query for state management
- **Build tools**: Vite, TypeScript, ESBuild for development and production builds
- **Routing**: Wouter for lightweight client-side navigation

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for accessibility and customization
- **FontAwesome**: Icon library for presentation graphics

### Development Tools
- **Drizzle ORM**: Database toolkit (configured for PostgreSQL via Neon)
- **Zod**: Runtime type validation and schema definition
- **Replit integration**: Development environment plugins for Replit platform

### Potential Future Integrations
- **PostgreSQL database**: Through Neon serverless Postgres (Drizzle configured)
- **Authentication system**: Framework ready for user management implementation
- **Export functionality**: Placeholder for PDF/PowerPoint export capabilities
- **Analytics and monitoring**: Ready for integration with tracking services

The architecture is designed to be modular and extensible, allowing for easy addition of new features while maintaining clean separation of concerns between presentation, business logic, and data layers.