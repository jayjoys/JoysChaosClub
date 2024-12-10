# Joys - Clothing Store Website

Joys is an online clothing store built with **Node.js**, **Express**, and **MongoDB**. The website showcases a variety of fashion products and provides an easy-to-use interface for users to browse and purchase items.

## Features

- **Home Page**: Displays the logo, welcome message, and navigation links.
- **Product Listing**: Products are fetched from the database and displayed in a stylish grid.
- **User Authentication**: Users can sign up, log in, and access a personalized dashboard.
- **Cart**: Users can add products to their cart and proceed to checkout.
- **Realistic Weather Effects**: Animated rain and lightning effects add a dynamic atmosphere to the site.
  
## Technologies Used

- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - JWT Authentication
  - Bcrypt for password hashing
  
- **Frontend**:
  - HTML, CSS (with animation effects)
  - JavaScript

- **Development Tools**:
  - Nodemon (for live reloading during development)
  - Morgan (HTTP request logging)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/joys.git
    ```

2. Navigate to the project directory:

    ```bash
    cd joys
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

    The server should now be running on `http://localhost:5000`.

## Usage

- Visit the homepage at `http://localhost:5000` to browse the available products.
- Users can sign up, log in, and view their personalized dashboard.
- Products can be added to the cart for purchase.

## Folder Structure

- `config/`: Contains environment configuration and database connection.
- `controllers/`: Handles the logic for user and product management.
- `models/`: Defines MongoDB models for products and users.
- `routes/`: Defines API routes for authentication and product management.
- `middlewares/`: Contains middlewares such as authentication checks and error handling.
- `public/`: Contains static assets (CSS, JS, images).
- `views/`: Contains HTML templates (if any).

## Contributing

Contributions are welcome! If you want to contribute, feel free to fork the repo and submit a pull request. Please ensure that all new code includes relevant tests and follows the existing code style.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for providing the libraries and tools used in this project.
