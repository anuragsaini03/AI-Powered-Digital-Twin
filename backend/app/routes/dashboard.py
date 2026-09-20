from fastapi import APIRouter

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def get_dashboard():

    return {
        "roads": {
            "score": 82,
            "total": 120
        },
        "traffic": {
            "status": "Normal",
            "score": 78
        },
        "issues": {
            "total": 24
        },
        "air_quality": {
            "score": 64
        }
    }