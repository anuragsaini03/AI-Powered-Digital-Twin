from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import History

router = APIRouter(
    prefix="/api/history",
    tags=["History"]
)


@router.get("/")
def get_history(db: Session = Depends(get_db)):

    return db.query(History).order_by(
        History.date.desc()
    ).all()