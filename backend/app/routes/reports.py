from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Report
from ..schemas import ReportCreate

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"]
)


@router.get("/")
def get_reports(db: Session = Depends(get_db)):

    return db.query(Report).all()


@router.post("/")
def create_report(
    report: ReportCreate,
    db: Session = Depends(get_db)
):

    new_report = Report(
        road_id=report.road_id,
        issue=report.issue,
        description=report.description,
        severity=report.severity,
        confidence=report.confidence
    )

    db.add(new_report)
    db.commit()
    db.refresh(new_report)

    return new_report