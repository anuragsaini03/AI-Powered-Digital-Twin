from fastapi import APIRouter
from ..schemas import SimulationRequest

router = APIRouter(
    prefix="/api/simulation",
    tags=["Simulation"]
)


@router.post("/")
def run_simulation(data: SimulationRequest):

    traffic = data.traffic_level

    if traffic < 40:
        result = "Traffic flow is low."
        status = "Low"

    elif traffic < 70:
        result = "Traffic flow is moderate."
        status = "Moderate"

    else:
        result = "Traffic congestion may increase."
        status = "High"

    return {
        "traffic_level": traffic,
        "status": status,
        "result": result
    }
