# Finance Dashboard UI - Luminous Ledger

A premium, interactive finance dashboard built for the Zorvyn FinTech Frontend Developer Intern assignment.

## Overview of Approach
"Luminous Ledger" is designed with a high-end, "glassmorphic" dark-mode aesthetic (Obsidian Theme). The goal was to go beyond standard UI library defaults and present a professional, highly polished data-visualization tool. The project uses React for component structuring and Tailwind CSS for rapid, scalable styling. We employed `recharts` for dynamic data visualizations.

## Core Features Implemented
1. **Dashboard Overview**
   - Summary KPI cards auto-calculating total balance, income, and expenses.
   - Interactive Recharts `<AreaChart>` mapping balance trends over dynamic timeframes (1D, 1W, 1M, 1Y).
   - A `<PieChart>` visualizer breaking down spending patterns by category.

2. **Transactions Ledger**
   - Full tabular layout tracking date, description, category, type, and amount.
   - Dynamic tracking of "Net Flow" and "Total Items" based on currently applied constraints.
   - **Search & Filtering:** Real-time text search and type-based category filtering.

3. **Role-Based Access Control (Simulated)**
   - Header dropdown toggles between **Viewer Mode** and **Admin Mode**.
   - Admin access dynamically renders action capabilities such as the *Export CSV*, *Add New Transaction* modal, and *Delete* actions on individual ledger items.

4. **Insights Engine**
   - Renders actionable text-driven data such as top spending categories and dormant subscription warnings.

5. **State Management**
   - React contextual Hooks (`useState`, `useEffect`) manage and propagate localized application state without over-engineering global stores.

## Optional Enhancements Included
- **Stunning Dark Mode:** Configured natively through targeted CSS and custom Tailwind design tokens.
- **Data Persistence:** Transactions are cached into the browser's `localStorage` meaning additions and deletions survive page renewals.
- **Export to CSV:** Administrative feature that dynamically parses current tabular data into a downloadable Excel/CSV format.
- **Micro-Animations:** Fade-in sequences, glassmorphism hover scales, and pulsating notifications ensure a modern UX.

## Setup Instructions
To run this application locally:

1. Guarantee Node.js and NPM are installed.
2. Clone the directory and navigate into it.
3. Install dependencies by running:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Navigate to the local URL (typically `http://localhost:5173/`) provided in the terminal.
