# Security and Analytics Design Samples

## 1. User Storage (Security)
- **Passwords:**
  - Stored as bcrypt hashes, never in plain text.
  - Example (MongoDB document):
    ```json
    {
      "_id": "userObjectId",
      "email": "user@example.com",
      "password": "$2b$10$hashedpassword...",
      "role": "user",
      "createdAt": "2024-07-08T12:00:00Z"
    }
    ```
- **JWT Secret & DB URI:**
  - Stored in `.env` (never in code or repo).

---

## 2. Sleep Assessment Storage (Analytics)
- **Linked to User:**
  - Each assessment references the user’s ObjectId.
  - Example:
    ```json
    {
      "_id": "assessmentObjectId",
      "user": "userObjectId",
      "durationStruggling": "2-8 weeks",
      "bedtime": "1:50 am",
      "waketime": "10:00 am",
      "typicalHours": 6,
      "createdAt": "2024-07-08T12:30:00Z"
    }
    ```
- **Analytics Ready:**
  - Data is structured for easy aggregation (e.g., average sleep hours, most common struggle duration).

---

## 3. API Security Design
- **Authentication:**
  - All sensitive endpoints require JWT in the `Authorization` header.
- **Authorization:**
  - Users can only access their own data.
- **Input Validation:**
  - All inputs are validated and sanitized using `express-validator`.
- **Rate Limiting:**
  - Login endpoint is rate-limited to prevent brute-force attacks.
- **Error Handling:**
  - No stack traces or sensitive info in API responses.

---

## 4. API Analytics Design
- **Audit Trail (for analytics):**
  - (If implemented) Each user action (login, assessment submission) can be logged in an `AuditLog` collection for future analytics.
- **Endpoints for Analytics:**
  - (If implemented) Admin-only endpoints can aggregate and return analytics (e.g., average sleep hours, most common bedtime).

---

## Sample API Endpoint Design

- **Signup:**  
  `POST /api/auth/signup`  
  Validates email/password, hashes password, stores user securely.

- **Login:**  
  `POST /api/auth/login`  
  Validates credentials, issues JWT.

- **Submit Assessment:**  
  `POST /api/sleep/assessment`  
  JWT required, input validated, data linked to user.

- **Get Assessment:**  
  `GET /api/sleep/assessment`  
  JWT required, only returns current user’s data.

---

## Summary Table

| Feature                | Security/Analytics Design                                      |
|------------------------|---------------------------------------------------------------|
| Password Storage       | bcrypt hash, never plain text                                 |
| JWT Secret/DB URI      | .env file, not in code                                        |
| Data Linking           | Assessments reference user ObjectId                           |
| Input Validation       | express-validator on all endpoints                            |
| Rate Limiting          | Login endpoint, prevents brute-force                          |
| Access Control         | JWT required, user can only access own data                   |
| Analytics Ready        | Data structured for aggregation (e.g., sleep hours, bedtimes) |
| Error Handling         | No stack traces, generic error messages                       |

---

## How to Use This
- Use this file as a reference for how security and analytics are considered in the API and storage design.
- You can include this in your submission to demonstrate your understanding of secure and analytics-ready backend design. 