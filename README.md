<div align="center">
  <a href="https://github
<div align="center">
  <a href="https://room-booking-system-blond.vercel.app">
    <img src="https://github.com/user-attachments/assets/0f380f75-fa27-40f3-9849-c3a2b2a4873f" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">McMaster Room Booking System</h3>

  <p align="center">
    A prototype for booking study rooms at McMaster University. This is not the official McMaster University Room Booking System!
    <br />
     <a href="https://room-booking-system-blond.vercel.app">https://room-booking-system-blond.vercel.app</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This project is a room booking system prototype developed using Next.js for the 4HC3 Human Computer Interfaces course at McMaster University. It allows students to easily find and book study rooms based on date, time, capacity, utilities, and building.

### Key Features

- **Room Search and Filtering:** Allows users to search for rooms based on date, time, capacity, utilities (e.g., projector, whiteboard), and building.
- **Time Slot Selection:** Provides a user-friendly timepicker component to select desired time slots for booking.
- **Room Details:** Displays detailed information about each room, including capacity, available utilities, and building location.
- **Booking Confirmation:** Guides users through a confirmation process, including optional email confirmations for group members.
- **Reservation Cancellation:** Enables users to view and cancel their future reservations.
- **Responsive Design:** The application is designed to be responsive and accessible on various devices.
- **Avenue Integration (Placeholder):** Includes a placeholder for future integration with McMaster's Avenue login system.

## Architecture

- **Frontend:**
  - Next.js: A React framework for building performant web applications.
  - React: A JavaScript library for building user interfaces.
  - react-day-picker: A date picker component for selecting dates.
  - react-icons: A library of customizable icons.
  - reactjs-popup: A simple popup component for React.
  - Tailwind CSS: A utility-first CSS framework for styling the application.
  - date-fns: A modern JavaScript date utility library.
- **Backend:**
  - (Note: This is a prototype, so there is no actual backend. Data is managed client-side using React state.)
- **Data Flow:**
  - The application uses React state management (`useState`) to store and update booking information, filters, and selected room details.
  - Components communicate through props and callbacks to update the application state.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/room-booking-system.git
   ```
2. Navigate to the project directory:
   ```sh
   cd room-booking-system
   ```
3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
4. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Acknowledgments

- This README was generated with [README Generator](https://github.com/owengretzinger/readme-generator) — an AI tool that understands your entire codebase.
- This project was created for the 4HC3 Human Computer Interfaces course at McMaster University.
