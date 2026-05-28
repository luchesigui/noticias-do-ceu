# Gift Cards API Documentation

Documentation for the Noticias do Ceu Gift Card API.

All endpoints are prefixed with `/api`.

---

## 1. Create Gift Card

Creates a new gift card with a secure randomized code in the format `XXXX-XXXX-XXXX`.

* **URL**: `/api/gift-cards`
* **Method**: `POST`
* **Content-Type**: `application/json`

### Request Body
```json
{
  "sender_name": "Guilherme",
  "recipient_email": "ana@example.com",
  "recipient_name": "Ana",
  "pet_name": "Rex",
  "plan": "annual",
  "message": "Com muito amor para eternizar o Rex",
  "design": "nuvens"
}
```

* `sender_name` (string, required): Name of the person gifting.
* `recipient_email` (string, required): Valid email of the recipient.
* `recipient_name` (string, required): Name of the recipient.
* `pet_name` (string, optional): Name of the deceased pet.
* `plan` (string, required): Must be either `"annual"` or `"lifetime"`.
* `message` (string, optional): Warm message of support.
* `design` (string, required): Themes for the gift card. Must be one of: `"nuvens"`, `"patinhas"`, `"estrelas"`, `"pomba"`.

### Response (201 Created)
```json
{
  "code": "A3D8-91FC-7B2B",
  "sender_name": "Guilherme",
  "recipient_email": "ana@example.com",
  "recipient_name": "Ana",
  "pet_name": "Rex",
  "plan": "annual",
  "message": "Com muito amor para eternizar o Rex",
  "design": "nuvens",
  "created_at": "2026-05-26T16:28:00.000Z",
  "expires_at": "2027-05-26T16:28:00.000Z"
}
```

### Error Responses
* **400 Bad Request**: Validation failed (e.g. invalid plan, missing required fields).

---

## 2. Validate Gift Card

Validates a gift card code and returns its details.

* **URL**: `/api/gift-cards/:code`
* **Method**: `GET`

### Response (200 OK)
```json
{
  "code": "A3D8-91FC-7B2B",
  "sender_name": "Guilherme",
  "recipient_email": "ana@example.com",
  "recipient_name": "Ana",
  "pet_name": "Rex",
  "plan": "annual",
  "message": "Com muito amor para eternizar o Rex",
  "design": "nuvens",
  "created_at": "2026-05-26T16:28:00.000Z",
  "expires_at": "2027-05-26T16:28:00.000Z",
  "redeemed_at": null,
  "redeemed_by": null
}
```

### Error Responses
* **400 Bad Request**: Invalid code format (must match `XXXX-XXXX-XXXX`).
* **404 Not Found**: Gift card does not exist.
* **410 Gone**: Gift card has expired (e.g., more than 1 year since creation for an annual plan).

---

## 3. Redeem Gift Card

Redeems a gift card. This operation is idempotent when called by the same user.

* **URL**: `/api/gift-cards/:code/redeem`
* **Method**: `POST`
* **Content-Type**: `application/json`

### Request Body
```json
{
  "user_id": "4a180365-f480-410a-b302-8610ea669ea2"
}
```
* `user_id` (string, required): Valid UUID representing the redeemer.

### Response (200 OK)
```json
{
  "code": "A3D8-91FC-7B2B",
  "redeemed_at": "2026-05-26T16:28:10.000Z"
}
```

### Error Responses
* **400 Bad Request**: Invalid code format or invalid/missing `user_id` (UUID format is enforced).
* **404 Not Found**: Gift card does not exist.
* **410 Gone**: Gift card has expired.
* **409 Conflict**: Gift card has already been redeemed by a different user.

---

## 4. List Gift Cards (Admin)

Lists all gift cards with pagination support.

* **URL**: `/api/gift-cards`
* **Method**: `GET`
* **Query Parameters**:
  - `page` (number, optional, default: `1`)
  - `limit` (number, optional, default: `10`)

### Response (200 OK)
```json
{
  "cards": [
    {
      "code": "A3D8-91FC-7B2B",
      "sender_name": "Guilherme",
      "recipient_email": "ana@example.com",
      "recipient_name": "Ana",
      "pet_name": "Rex",
      "plan": "annual",
      "message": "Com muito amor para eternizar o Rex",
      "design": "nuvens",
      "created_at": "2026-05-26T16:28:00.000Z",
      "expires_at": "2027-05-26T16:28:00.000Z",
      "redeemed_at": null,
      "redeemed_by": null
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "limit": 10,
    "pages": 1
  }
}
```
