package handlers

import (
	"guestlist-microservice/models"
	"guestlist-microservice/repositories"
	"guestlist-microservice/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

type GuestHandler struct {
	service *services.GuestService
}

func NewGuestHandler() *GuestHandler {
	repo := repositories.NewGuestRepository()
	service := services.NewGuestService(repo)
	return &GuestHandler{service: service}
}

func (h *GuestHandler) AddGuest(c *gin.Context) {
	var guest models.Guest
	if err := c.ShouldBindJSON(&guest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	h.service.AddGuest(guest)
	c.JSON(http.StatusCreated, guest)
}

func (h *GuestHandler) GetGuestsByEventID(c *gin.Context) {
	eventID := c.Query("eventId")
	guests := h.service.GetGuestsByEventID(eventID)
	c.JSON(http.StatusOK, guests)
}
