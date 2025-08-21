# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 macro tracking application built with React 19, TypeScript, and Tailwind CSS. The project is currently in its initial state as created by `create-next-app` with Turbopack enabled for faster development builds.

## Common Commands

```bash
# Development
npm run dev              # Start development server with Turbopack on http://localhost:3000
npm run build            # Build for production with Turbopack
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint for code quality checks
```

## Architecture Overview

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Build Tool**: Turbopack (enabled for both dev and build)
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Key Configuration

- **TypeScript**: Configured with strict mode, ES2017 target, and path aliases (`@/*` → `./src/*`)
- **Tailwind CSS**: Uses v4 with inline theme configuration and CSS custom properties
- **ESLint**: Configured with Next.js defaults

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/app/page.tsx` - Main homepage (currently default Next.js template)
- `src/app/layout.tsx` - Root layout with font configuration
- `src/app/globals.css` - Global styles with Tailwind and custom CSS variables
- `public/` - Static assets (SVG icons from Next.js template)

### Styling System

The project uses a custom color system with CSS variables:
- `--background` and `--foreground` colors with automatic dark mode support
- Font variables for Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-geist-mono`)
- Tailwind CSS v4 with inline theme configuration

## Development Guidelines

- Use TypeScript with strict type checking
- Follow Next.js App Router patterns with server components by default
- Utilize the configured path alias `@/*` for imports from the src directory
- Leverage Turbopack for faster development and build times
- Maintain the existing color variable system for consistent theming

## Notes

This project is currently in its initial template state and appears to be intended for macro tracking functionality. The foundation is set up with modern Next.js, React 19, and Tailwind CSS v4 for building a nutrition/macro tracking application.