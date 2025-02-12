package main

import (
	"net/http"

	"github.com/jung-kurt/gofpdf"
)

func handler(w http.ResponseWriter, r *http.Request) {
	pdf := gofpdf.New("P", "mm", "A4", "")
	pdf.AddPage()
	pdf.SetFont("Arial", "B", 16)
	pdf.Cell(40, 10, "Hello, PDF!")
	w.Header().Set("Content-Type", "application/pdf")
	pdf.Output(w)
}

func main() {
	http.HandleFunc("/pdf", handler)
	http.ListenAndServe(":8081", nil)
}
