from fastapi import APIRouter

router = APIRouter(
    prefix="/api/insights",
    tags=["AI Insights"]
)


@router.get("/")
def get_insights():

    return {
        "road_condition": {
            "score": 82,
            "message": "Most monitored roads are in good condition."
        },

        "traffic_condition": {
            "score": 78,
            "message": "Traffic flow is currently normal."
        },

        "air_quality": {
            "score": 64,
            "message": "Some areas require monitoring."
        },

        "recommendations": [
            {
                "title": "Traffic",
                "description": "Monitor high-traffic areas during peak hours."
            },
            {
                "title": "Road Maintenance",
                "description": "Some roads may require inspection."
            },
            {
                "title": "City Planning",
                "description": "Use historical data for maintenance planning."
            }
        ]
    }