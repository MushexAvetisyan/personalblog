# Simple Blog System

This is a simple blog system built using Laravel 10. Users can register, log in, create, edit, delete, and view posts. Users can also see posts created by other users.

## Features

- **User Authentication**:
    - Register
    - Login
    - Logout

- **CRUD Operations for Posts**:
    - Create new posts
    - Edit only user-owned posts
    - Delete only user-owned posts
    - View all posts

- **Authorization**:
    - Middleware to ensure that users can only edit or delete their own posts.

- **Pagination**: Posts are paginated to avoid long lists.

- **REST API (Optional)**:
    - `GET /api/posts`: List all posts.
    - `POST /api/posts`: Create a new post.
    - `PUT /api/posts/{id}`: Update an existing post.
    - `DELETE /api/posts/{id}`: Delete an existing post.

## Installation

Follow the steps below to set up this project locally.

- cd simple-blog-system
- composer install
- cp .env.example .env
- php artisan key:generate
- php artisan breeze:install
- npm install && npm run dev

### Prerequisites

- PHP >= 8.1
- Composer
- MySQL (or SQLite for testing)

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone  https://github.com/MushexAvetisyan/personalblog.git
