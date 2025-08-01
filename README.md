# Timestamp Microservice

This is a Node.js - Express practice project, simple timestamp microservice, source: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice


## Available Endpoints

### `GET /`

- **Description**: Display example usage and output.

---

### `GET /api`

- **Description**: Returns the current time in both Unix and UTC formats.
- **Response Example**:
  ```json
  {
    "unix": 1753580400000,
    "utc": "Sun, 27 Jul 2025 02:00:00 GMT"
  }
  ```

---

### `GET /api/:date?`

- **Description**: Returns the Unix and UTC time for a given `date` string or timestamp.
- **Route Parameter**:
  - `:date?` – A date string (`YYYY-MM-DD`) or Unix timestamp (milliseconds since epoch).

#### Valid Examples:

- **ISO date string**:  
  `GET /api/2025-07-27`
  ```json
  {
    "unix": 1753574400000,
    "utc": "Sun, 27 Jul 2025 00:00:00 GMT"
  }
  ```

- **Unix timestamp**:  
  `GET /api/1753574400000`
  ```json
  {
    "unix": 1753574400000,
    "utc": "Sun, 27 Jul 2025 00:00:00 GMT"
  }
  ```

#### Invalid Example:

- **Invalid date**:  
  `GET /api/invalid-date`
  ```json
  {
    "error": "Invalid Date"
  }
  ```

---

## How to Run Locally

```bash
git clone https://github.com/ammar-elmesaly/timestamp-project.git
cd timestamp-project
npm install
npm start
```