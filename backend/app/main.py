from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine, Base

from .routes import dashboard
from .routes import roads
from .routes import reports
from .routes import insights
from .routes import simulation
from .routes import history


# --------------------------------------------------
# Create database tables
# --------------------------------------------------

Base.metadata.create_all(bind=engine)


# --------------------------------------------------
# Create FastAPI application
# --------------------------------------------------

app = FastAPI(
    title="CityTwin API",
    description="Backend API for AI Powered Digital Twin",
    version="1.0.0"
)


# --------------------------------------------------
# CORS Configuration
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",

        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


# --------------------------------------------------
# API Routes
# --------------------------------------------------

app.include_router(
    dashboard.router
)

app.include_router(
    roads.router
)

app.include_router(
    reports.router
)

app.include_router(
    insights.router
)

app.include_router(
    simulation.router
)

app.include_router(
    history.router
)


# --------------------------------------------------
# Root Endpoint
# --------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "CityTwin Backend is running"
    }


# --------------------------------------------------
# Health Check
# --------------------------------------------------

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }