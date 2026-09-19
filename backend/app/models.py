from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from .database import Base


class Road(Base):
    __tablename__ = "roads"

    id = Column(Integer, primary_key=True, index=True)
    road_id = Column(String, unique=True, index=True)
    name = Column(String)
    condition = Column(String)
    condition_score = Column(Float)
    confidence = Column(Float)
    latitude = Column(Float)
    longitude = Column(Float)
    status = Column(String)


class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    road_id = Column(String)
    issue = Column(String)
    description = Column(String)
    severity = Column(String)
    confidence = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)


class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)
    road_id = Column(String)
    condition = Column(String)
    score = Column(Float)
    date = Column(DateTime, default=datetime.utcnow)