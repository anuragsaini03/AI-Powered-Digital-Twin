from pydantic import BaseModel
from typing import Optional


class RoadCreate(BaseModel):
    road_id: str
    name: str
    condition: str
    condition_score: float
    confidence: float
    latitude: float
    longitude: float
    status: str


class ReportCreate(BaseModel):
    road_id: str
    issue: str
    description: Optional[str] = ""
    severity: str
    confidence: float


class SimulationRequest(BaseModel):
    traffic_level: int
