from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Test server works"}

uvicorn.run(app, host="127.0.0.1", port=8000)
