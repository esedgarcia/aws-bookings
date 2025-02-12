package main

import (
	"event-management-service/internal/handlers"
	"event-management-service/internal/repository"
	"event-management-service/internal/service"
	"event-management-service/pkg/database"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	// Init MongoDB
	db, err := database.ConnectMongoDB("mongodb+srv://admin:RNCTg754@cluster0.47lil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "event_booking_db")
	if err != nil {
		log.Fatal(err)
	}

	// Init all the internal
	eventRepo := repository.NewEventRepository(db)
	eventService := service.NewEventService(eventRepo)
	eventHandler := handlers.NewEventHandler(eventService)

	// Routes
	router := gin.Default()

	// Routes
	v1 := router.Group("/api/v1")
	{
		events := v1.Group("/events")
		{
			events.POST("/", eventHandler.CreateEvent)
			events.PUT("/:id", eventHandler.UpdateEvent)
			events.DELETE("/:id", eventHandler.DeleteEvent)
			events.GET("/:id", eventHandler.GetEvent)
			events.GET("/", eventHandler.ListEvents)
			events.PATCH("/:id/status", eventHandler.UpdateEventStatus)
		}
	}

	// Init the server
	if err := router.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
