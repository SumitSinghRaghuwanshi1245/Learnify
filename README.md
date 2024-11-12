# Learnify
# Interactive Learning Platform

An Interactive Learning Management System (LMS) designed to enhance the educational experience for both students and teachers. This digital platform incorporates various interactive and engaging elements to support learning, with a strong focus on customization and accessibility.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and registration for students and teachers.
- **Course Management**: Create, edit, and manage courses with ease.
- **Interactive Content**: Incorporates multimedia elements like videos, quizzes, and assignments to enhance learning.
- **Progress Tracking**: Monitor student progress with detailed analytics and reports.
- **Responsive Design**: Fully responsive layout ensuring seamless access across devices.
- **Customizable Dashboard**: Personalized dashboards for students and teachers to manage their activities.
- **Real-time Notifications**: Stay updated with the latest course announcements and updates.
- **Accessible Interface**: Designed with accessibility in mind to support all learners.

## Tech Stack

- **Frontend**: [React.js](https://reactjs.org/)
- **Backend**: [Node.js](https://nodejs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide-React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) database setup

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/interactive-learning-platform.git
   cd interactive-learning-platform
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Backend Server**

   ```bash
   npm start
   ```

5. **Install Frontend Dependencies**

   Open a new terminal window and navigate to the `frontend` directory:

   ```bash
   cd frontend
   npm install
   ```

6. **Configure Environment Variables**

   Create a `.env` file in the `frontend` directory and add the following:

   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

7. **Start the Frontend Application**

   ```bash
   npm start
   ```

8. **Access the Application**

   Open your browser and navigate to `http://localhost:3000` to view the Interactive Learning Platform.

## Usage

1. **Register an Account**

   - Navigate to the registration page to create a new account as a student or teacher.

2. **Login**

   - Use your credentials to log in to the platform.

3. **Explore Courses**

   - Browse through available courses and enroll in the ones that interest you.

4. **Manage Courses (Teachers)**

   - Create new courses, upload materials, and manage student enrollments.

5. **Track Progress**

   - Monitor your learning progress or your students' progress through detailed analytics.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

   Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please contact:

- **Name**: Sumit Singh Raghuwanshi
- **Email**: ssraghuwanshi1245@gmail.com
- **LinkedIn**: www.linkedin.com/in/sumit-singh-raghuwanshi
- **GitHub**: https://github.com/SumitSinghRaghuwanshi1245

---

Thank you for using the Interactive Learning Platform! We hope it enhances your educational experience.
