# API Documentation

## Base URL
```
Production: https://your-domain.com/api
Development: http://localhost:5000/api
```

## Authentication
The API uses session-based authentication. Include session cookies in all requests.

## Endpoints

### Dashboard Metrics
```http
GET /api/metrics
```

**Response:**
```json
{
  "activeModels": 12,
  "trainingJobs": 3,
  "accuracy": 94.5,
  "systemLoad": 67
}
```

### System Health
```http
GET /api/system-health
```

**Response:**
```json
{
  "cpu": 45,
  "memory": 67,
  "gpu": 89,
  "storage": 34
}
```

### Activities Feed
```http
GET /api/activities
```

**Response:**
```json
[
  {
    "id": "1",
    "type": "training",
    "title": "Model training completed",
    "description": "Neural network model v2.1 training finished",
    "timestamp": "2025-06-16T12:00:00Z",
    "icon": "Brain",
    "iconColor": "text-green-500"
  }
]
```

### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-06-16T12:00:00Z",
  "version": "1.0.0",
  "database": "connected",
  "uptime": 3600
}
```

## Error Responses

All endpoints return standardized error responses:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2025-06-16T12:00:00Z"
}
```

## Rate Limiting

- **Standard Rate**: 1000 requests per 15 minutes per IP
- **Enterprise Rate**: Unlimited for authenticated enterprise users
- Rate limit headers included in all responses

## Status Codes

- `200` - Success
- `304` - Not Modified (cached response)
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error
- `503` - Service Unavailable