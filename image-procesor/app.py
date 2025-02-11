from flask import Flask, request

app = Flask(__name__)

@app.route("/image", methods=["POST"])
def image_processor():
    # Verifica si 'file' está presente en la solicitud
    if 'file' not in request.files:
        return "No file part", 400  # Si no se encuentra el archivo

    file = request.files['file']
    
    # Verifica si el archivo tiene un nombre
    if file.filename == '':
        return "No selected file", 400  # Si no se seleccionó un archivo

    # Si todo está bien, retorna un mensaje con el nombre del archivo
    return f"Recibido archivo: {file.filename}"

if __name__ == "__main__":
    
    app.run(host='0.0.0.0', port=5000)
