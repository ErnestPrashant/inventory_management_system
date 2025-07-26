# nextn

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Core Features

Based on the blueprint, this project includes the following core features:

- Kafka Integration: Consume inventory events from a Kafka topic, simulating real-time purchase and sale updates.
- PostgreSQL Data Model: Model product, inventory batch, and sales data in a PostgreSQL database, ensuring referential integrity.
- FIFO Logic: Implement FIFO (First-In, First-Out) costing logic to calculate the cost of goods sold accurately.
- Product Stock Overview: Display product stock overview with current quantity, total inventory cost, and average cost per unit.
- Transaction Ledger: Show a transaction ledger with purchases and sales, including the quantity sold and FIFO-calculated cost for each sale.
- Live Updates Simulation: Simulate real-time updates by pushing dummy Kafka events to visualize live inventory changes.
- Basic Authentication: Secure the dashboard with basic authentication (username and password) to control access.

## FIFO Logic Explained

FIFO (First-In, First-Out) is an inventory valuation method where the first goods purchased are the first ones sold. In this project, FIFO logic is applied to calculate the cost of goods sold accurately. When a sale occurs, the cost of the oldest inventory batches is used to determine the cost of that sale. This ensures that the inventory value on the balance sheet reflects the cost of the most recently purchased goods.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Running the Producer Locally

To run the Kafka producer locally and simulate live updates, you will need to [**Add instructions here on how to set up and run the Kafka producer**]. This typically involves setting up a Kafka broker and running a producer script that sends dummy inventory events.

## Deployment

- **Frontend:** The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- **Backend:** To deploy the backend, you would typically use a service like Firebase App Hosting. The backend URL after deployment will be in the format `backend-id--project-id.us-central1.hosted.app`. You can find the exact URL in the Firebase console or by running the appropriate Firebase CLI command.

