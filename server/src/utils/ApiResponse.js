export class ApiResponse {
  constructor(statusCode, message = "successfully", data) {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
