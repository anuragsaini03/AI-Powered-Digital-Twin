from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Road
from ..schemas import RoadCreate

router = APIRouter(
    prefix="/api/roads",
    tags=["Roads"]
)


@router.get("/")
def get_roads(db: Session = Depends(get_db)):

    roads = db.query(Road).all()

    return roads


@router.get("/{road_id}")
def get_road(
    road_id: str,
    db: Session = Depends(get_db)
):

    road = (
        db.query(Road)
        .filter(Road.road_id == road_id)
        .first()
    )

    if not road:
        return {
            "error": "Road not found"
        }

    return road


@router.post("/")
def create_road(
    road: RoadCreate,
    db: Session = Depends(get_db)
):

    new_road = Road(
        road_id=road.road_id,
        name=road.name,
        condition=road.condition,
        condition_score=road.condition_score,
        confidence=road.confidence,
        latitude=road.latitude,
        longitude=road.longitude,
        status=road.status
    )

    db.add(new_road)
    db.commit()
    db.refresh(new_road)

    return new_road