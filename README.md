# Wysa Sleep API (Internship Mini Project)

A secure REST API for onboarding sleep assessment, inspired by the Wysa Sleep app. Built with Node.js, Express, MongoDB, and JWT authentication.

---

## Features
- User Signup & Login (JWT-based)
- Secure password hashing (bcrypt)
- Sleep assessment endpoints (save & fetch answers)
- Input validation (express-validator)
- Rate limiting (login)
- Helmet for HTTP security
- Clean MVC structure
- Error handling (no stack traces)

---

## Setup Instructions

1. **Clone the repo & install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env` and fill in your secrets.
   - Example:
     ```
     JWT_SECRET=your_super_secret_jwt_key_here
     MONGODB_URI=mongodb://localhost:27017/wysa_sleep_api
     ```

3. **Start MongoDB:**
   - Install locally (see MongoDB docs) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

4. **Run the server:**
   ```sh
   npm run dev
   # or
   npm start
   ```

---

## API Usage (with curl)

### Signup
```sh
curl.exe -X POST http://localhost:3000/api/auth/signup ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"testuser@example.com\", \"password\":\"TestPassword123\"}"
```

### Login (get JWT)
```sh
curl.exe -X POST http://localhost:3000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"testuser@example.com\", \"password\":\"TestPassword123\"}"
```

### Submit/Update Sleep Assessment
```sh
curl.exe -X POST http://localhost:3000/api/sleep/assessment ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" ^
  -d "{\"durationStruggling\":\"2-8 weeks\", \"bedtime\":\"1:50 am\", \"waketime\":\"10:00 am\", \"typicalHours\":6}"
```

### Get Sleep Assessment
```sh
curl.exe -X GET http://localhost:3000/api/sleep/assessment ^
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

---

## Security Notes
- Passwords are hashed with bcrypt
- JWTs are used for authentication
- Input is validated and sanitized
- Rate limiting is applied to login
- Helmet is used for HTTP security headers
- Error messages do not leak stack traces
- Only authenticated users can access their own data

---

## Personal Note
> **I mostly used AI (like ChatGPT/Cursor) to help generate the code for this project, since I’m still learning web development. However, I focused on adding security best practices myself, referencing the [OWASP Top 10](https://owasp.org/www-project-top-ten/) to make sure the API is robust against common vulnerabilities.**
>
> **My main strength is in testing and security (VAPT), so while I’m learning to code, I can help your team with vulnerability assessment and penetration testing, and I’m eager to keep improving my web development skills!**
 