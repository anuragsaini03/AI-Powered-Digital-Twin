from fastapi import APIRouter

router = APIRouter()


@router.get("/dashboard/")
def get_dashboard():
    return {
        "roads": {
            "score": 82,
            "total": 120
        },
        "traffic": {
            "score": 78,
            "status": "Normal"
        },
        "issues": {
            "total": 24
        },
        "air_quality": {
            "score": 64,
            "status": "Moderate"
        }
    }