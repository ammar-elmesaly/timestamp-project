# 🕒 Timestamp Microservice

This is a simple Node.js + Express project that provides a timestamp microservice. It returns the Unix and UTC time for given date inputs.

## 📌 Available Endpoints

### `GET /`

- **Description**: Root route (optional UI or project intro).
- **Returns**: Basic HTML or message.

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

### `GET /api/:date`

- **Description**: Returns the Unix and UTC time for a given `date` string or timestamp.
- **Route Parameter**:
  - `:date` – A date string (`YYYY-MM-DD`) or Unix timestamp (milliseconds since epoch).

#### ✅ Valid Examples:

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

#### ❌ Invalid Example:

- **Invalid date**:  
  `GET /api/invalid-date`
  ```json
  {
    "error": "Invalid Date"
  }
  ```

---

## 🚀 How to Run Locally

```bash
git clone <your-repo-url>
cd timestamp-microservice
npm install
npm start
```

