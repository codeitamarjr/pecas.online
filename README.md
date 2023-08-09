# Garage Parts SaaS

The React Vite Garage Parts SaaS app is created using Laravel, React and Vite. The app is built to manage vehicles in a garage, their parts, and their physical locations within the warehouse (e.g., boxes, shelves, and cabinets).

## Features

-   [x] User authentication: Users can log in to the app.
-   [x] Warehouse Management:
-   [x] Add Boxes: Users can add new storage boxes to the warehouse.
-   [x] Add Parts: Users can add parts to the warehouse and associate them with specific boxes.
-   [ ] Add Shelves: Users can add shelves to the warehouse.
-   [ ] Add Cabinets: Users can add cabinets to the warehouse.
-   [ ] Vehicle Management: Allows users to manage vehicles and their details, one vehicle can have multiple parts.
-   [x] Physical Location Tracking: Users can track the physical location of parts within boxes, shelves, and cabinets.
-   [x] Advanced Search: Users can search for parts and vehicles based on various criteria.
-   [ ] Reporting: Generate reports about the inventory and status of vehicles and parts.
-   [ ] User Roles and Permissions: Implement roles and permissions for users with different access levels.
-   [ ] Notifications: Users receive notifications about changes and updates within the warehouse.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository.
2. Navigate to the `vite-react-garagem-saas` directory.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Build the app with `npm run build`.

## Backend on Laravel

The backend of the app is developed using Laravel. To deploy/start the Laravel server, follow these steps:

1. Clone the project repository.
2. Navigate to the Laravel project directory.
3. Run `composer install` to install dependencies.
4. Create a `.env` file and copy the contents of `.env.example` into it.
5. Generate the application key with `php artisan key:generate --ansi`.
6. If it is a Shared Hosting, create a database and update the database credentials in the `.env` file.
7. Create the symbolic link with `php artisan storage:link`.
8. Run `php artisan serve` to start the server.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
