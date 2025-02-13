# Image Processor Microservice

## Description
This microservice handles image processing for the booking application in AWS. It allows operations such as resizing, format conversion, and optimization of uploaded images.

## Technologies Used
- **Language:** Python
- **Framework:** Flask
- **Image Processing:** Pillow (PIL)

## Installation and Execution
### Prerequisites
- Python 3.8+
- AWS CLI configured with valid credentials
- Installed dependencies

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/esedgarcia/aws-bookings.git
   cd aws-bookings/image-processor
   ```
2. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```

### Environment Variables Configuration
Create a `.env` file with the following values:
```ini
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
```

### Running the Microservice
```sh
python app.py
```
The microservice will run at `http://localhost:5000`.

## Usage
### Upload an Image
**Endpoint:** `POST /upload`
```sh
curl -X POST -F "file=@image.jpg" http://localhost:5000/upload
```
**Response:**
```json
{
  "message": "Image uploaded successfully"
}
```

## Docker Support

### Pulling the Docker Image
To pull the Image Processor Docker image from DockerHub:
```sh
docker pull esedgarcia/image-processor
```

### Running the Docker Container
To run the Image Processor container:
```sh
docker run -d -p 5000:5000 esedgarcia/image-processor
```
The service will be available at `http://localhost:5000`.

## Architecture
- The user uploads an image via an HTTP request.
- A worker processes and optimizes the image.

## Common Errors
- **Incorrect AWS credentials:** Verify `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.
- **Error uploading the image:** Ensure the file does not exceed the allowed size limit.

## Contribution
If you want to contribute, fork the repository and submit a pull request with improvements.

## License
This project is licensed under the MIT License.

## Docker Compose Configuration
To run the application with Docker Compose, add the following configuration to your `docker-compose.yml`:

```yaml
version: "3.8"
services:
  go-app:
    build: .
    ports:
      - "8087:8087"
    restart: always
```


