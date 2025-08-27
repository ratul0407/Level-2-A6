# 📦 Parcel Delivery System – Frontend

A modern parcel delivery management system that allows users to send, receive, and track parcels across the country.  
This frontend is built with **React + TypeScript + Vite**, styled with **TailwindCSS**, and powered by **Redux Toolkit Query** for state management and API communication.

---

## 🚀 Project Overview

This system enables **nationwide parcel delivery** with role-based access control.  
Users can register, login, and interact with the system depending on their role:

- **Sender** → Create and manage parcel shipments.
- **Receiver** → Track parcels and confirm delivery.
- **Delivery Personnel** → Manage assigned deliveries and update statuses.
- **Admin** → Oversee parcel operations, users, and system reports.
- **Super Admin** → Full access, including managing admins and system settings.

Key Features:

- User authentication (JWT + cookies)
- Role-based dashboards
- Parcel creation & tracking
- Real-time status updates
- Analytics & reports for admins
- Fully responsive UI

---

## 🛠️ Technology Stack

**Core:**

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + RTK Query for state & data fetching
- [React Router v7](https://reactrouter.com/) for routing

**UI & Styling:**

- [TailwindCSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) components
- [Lucide Icons](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- [Sonner](https://sonner.emilkowal.ski/) for toasts & notifications

**Forms & Validation:**

- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) + [@hookform/resolvers](https://react-hook-form.com/get-started#SchemaValidation)

**Data & Utilities:**

- [Axios](https://axios-http.com/) for API requests
- [Date-fns](https://date-fns.org/) for date formatting
- [Recharts](https://recharts.org/) for charts & analytics
- [use-debounce](https://www.npmjs.com/package/use-debounce) for performance

**Dev Tools:**

- ESLint + TypeScript ESLint
- Vite Hot Reload
- Tailwind Merge, clsx, and class-variance-authority

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/parcel-delivery-frontend.git
cd parcel-delivery-frontend
```

## 2. Install Dependencies

```
npm install
# or
pnpm install
```

### 3. Configure env variables

```
VITE_API_BASE_URL=https://your-backend-domain.com/api/v1
```

### Run in development

```
npm run dev
```
