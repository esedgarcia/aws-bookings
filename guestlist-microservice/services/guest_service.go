package services

import (
	"guestlist-microservice/models"
	"guestlist-microservice/repositories"
)

type GuestService struct {
	repo *repositories.GuestRepository
}

func NewGuestService(repo *repositories.GuestRepository) *GuestService {
	return &GuestService{repo: repo}
}

func (s *GuestService) AddGuest(guest models.Guest) {
	s.repo.AddGuest(guest)
}

func (s *GuestService) GetGuestsByEventID(eventID string) []models.Guest {
	return s.repo.GetGuestsByEventID(eventID)
}
