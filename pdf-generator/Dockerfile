FROM golang:1.19
WORKDIR /app
COPY . .
RUN go mod init pdfgen && go mod tidy && go build -o main .
CMD ["./main"]
EXPOSE 8081