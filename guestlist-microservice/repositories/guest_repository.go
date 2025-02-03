package repositories

import (
	"guestlist-microservice/models"
	"sync"
)

type GuestRepository struct {
	guests map[string]models.Guest
	mu     sync.RWMutex
}

func NewGuestRepository() *GuestRepository {
	return &GuestRepository{
		guests: make(map[string]models.Guest),
	}
}

func (r *GuestRepository) AddGuest(guest models.Guest) {
	r.mu.Lock()
	defer r.mu.Unlock()
	r.guests[guest.ID] = guest
}

func (r *GuestRepository) GetGuestsByEventID(eventID string) []models.Guest {
	r.mu.RLock()
	defer r.mu.RUnlock()
	var guests []models.Guest
	for _, guest := range r.guests {
		if guest.EventID == eventID {
			guests = append(guests, guest)
		}
	}
	return guests
}
