package main

import (
	"encoding/json"
	"net/http"
)

type Stats struct {
	Events int `json:"events"`
	Guests int `json:"guests"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	stats := Stats{Events: 5, Guests: 100}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(stats)
}

func main() {
	http.HandleFunc("/stats", handler)
	http.ListenAndServe(":8082", nil)
}
