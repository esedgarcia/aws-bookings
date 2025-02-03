package main

import (
	"guestlist-microservice/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Gin router
	router := gin.Default()

	// Initialize guest handler
	guestHandler := handlers.NewGuestHandler()

	// Define routes of the service
	router.POST("/api/guests", guestHandler.AddGuest)
	router.GET("/api/guests", guestHandler.GetGuestsByEventID)

	// Start the third server
	router.Run(":8082")
}
