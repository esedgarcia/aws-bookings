package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// MongoDBClient es una variable global que almacena el cliente de MongoDB.
var MongoDBClient *mongo.Client

// ConnectMongoDB establece la conexión con MongoDB y devuelve una instancia de la base de datos.
func ConnectMongoDB(uri, dbName string) (*mongo.Database, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Configurar opciones del cliente
	clientOptions := options.Client().ApplyURI(uri)

	// Conectar a MongoDB
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		return nil, fmt.Errorf("error al conectar a MongoDB: %v", err)
	}

	// Verificar la conexión
	err = client.Ping(ctx, nil)
	if err != nil {
		return nil, fmt.Errorf("error al verificar la conexión a MongoDB: %v", err)
	}

	log.Println("Conexión a MongoDB establecida correctamente")
	MongoDBClient = client

	// Devolver la base de datos especificada
	return client.Database(dbName), nil
}

// CloseMongoDB cierra la conexión con MongoDB.
func CloseMongoDB() {
	if MongoDBClient != nil {
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		MongoDBClient.Disconnect(ctx)
		log.Println("Conexión a MongoDB cerrada")
	}
}
