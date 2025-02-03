package models

type Guest struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	Email   string `json:"email"`
	EventID string `json:"eventId"`
}
