# **App Name**: StockFlow

## Core Features:

- Kafka Integration: Consume inventory events from a Kafka topic, simulating real-time purchase and sale updates.
- PostgreSQL Data Model: Model product, inventory batch, and sales data in a PostgreSQL database, ensuring referential integrity.
- FIFO Logic: Implement FIFO (First-In, First-Out) costing logic to calculate the cost of goods sold accurately.
- Product Stock Overview: Display product stock overview with current quantity, total inventory cost, and average cost per unit.
- Transaction Ledger: Show a transaction ledger with purchases and sales, including the quantity sold and FIFO-calculated cost for each sale.
- Live Updates Simulation: Simulate real-time updates by pushing dummy Kafka events to visualize live inventory changes.
- Basic Authentication: Secure the dashboard with basic authentication (username and password) to control access.

## Style Guidelines:

- Primary color: Moderate blue (#5DADE2) to evoke trust and reliability.
- Background color: Very light blue (#F0F8FF) for a clean and professional look.
- Accent color: Muted violet (#8E44AD) for highlighting key data points.
- Body and headline font: 'Inter', a sans-serif font known for its clean readability, ideal for dashboards that require precise data presentation.
- Use simple, outline-style icons for key metrics in the dashboard to provide quick visual cues.
- Design a clean, data-focused layout with clear sections for product overview, transaction ledger, and key performance indicators.