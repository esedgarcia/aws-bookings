package service

import (
	"context"
	"event-management-service/internal/models"
	"event-management-service/internal/repository"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type EventService struct {
	repo *repository.EventRepository
}

func NewEventService(repo *repository.EventRepository) *EventService {
	return &EventService{repo: repo}
}

func (s *EventService) CreateEvent(ctx context.Context, event *models.Event) error {
	if event.Status == "" {
		event.Status = "draft"
	}
	return s.repo.Create(ctx, event)
}

func (s *EventService) UpdateEvent(ctx context.Context, event *models.Event) error {
	return s.repo.Update(ctx, event)
}

func (s *EventService) DeleteEvent(ctx context.Context, id primitive.ObjectID) error {
	return s.repo.Delete(ctx, id)
}

func (s *EventService) GetEvent(ctx context.Context, id primitive.ObjectID) (*models.Event, error) {
	return s.repo.GetByID(ctx, id)
}

func (s *EventService) ListEvents(ctx context.Context) ([]models.Event, error) {
	return s.repo.List(ctx)
}

func (s *EventService) UpdateEventStatus(ctx context.Context, id primitive.ObjectID, status string) error {
	event, err := s.repo.GetByID(ctx, id)
	if err != nil {
		return err
	}
	event.Status = status
	return s.repo.Update(ctx, event)
}
