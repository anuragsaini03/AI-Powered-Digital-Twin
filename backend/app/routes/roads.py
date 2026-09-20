from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Road
from ..schemas import RoadCreate


router = APIRouter(
    prefix="/api/roads",
    tags=["Roads"]
)


# --------------------------------------------------
# Get all roads
# --------------------------------------------------

@router.get("/")
def get_roads(db: Session = Depends(get_db)):

    roads = db.query(Road).all()

    return roads


# --------------------------------------------------
# Get one road
# --------------------------------------------------

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
        raise HTTPException(
            status_code=404,
            detail="Road not found"
        )

    return road


# --------------------------------------------------
# Create a new road
# --------------------------------------------------

@router.post("/")
def create_road(
    road: RoadCreate,
    db: Session = Depends(get_db)
):

    # Check if road already exists
    existing_road = (
        db.query(Road)
        .filter(Road.road_id == road.road_id)
        .first()
    )

    if existing_road:
        raise HTTPException(
            status_code=400,
            detail="Road with this ID already exists"
        )

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
