"""
NerdPace FastAPI Application
Main entry point for the backend API
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from contextlib import asynccontextmanager
import logging
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.config import settings
from app.api.v1.router import api_router
from app.core.logging import setup_logging
from app.core.deps import AsyncSessionLocal
from app.models.testimonial import Testimonial

# Setup logging
setup_logging()
logger = logging.getLogger(__name__)


async def create_initial_testimonial():
    """Create initial testimonial if none exists"""
    async with AsyncSessionLocal() as db:
        try:
            # Check if any testimonials exist
            result = await db.execute(select(Testimonial).limit(1))
            existing_testimonial = result.scalar_one_or_none()

            if not existing_testimonial:
                # Create the initial testimonial from Haliberry Cake
                initial_testimonial = Testimonial(
                    name="Founder, Haliberry Cake",
                    role="London, United Kingdom",
                    content="""Before working with NerdPace, Haliberry Cake didn't have a professional website that truly represented our business. Customers had no simple way to browse our cakes, customise their orders, or place orders online. We needed a modern website that would showcase our brand and make the ordering process seamless.

NerdPace designed and developed our website from the ground up. They built a fast, modern, and responsive website tailored to our business, implemented online ordering with cake customisation options, integrated secure online payments, optimised the site for search engines, and ensured it worked smoothly across desktop and mobile devices. They also paid close attention to performance, usability, and the overall customer experience.

We now have a professional online presence that reflects the quality of our brand. Customers can easily browse our products, customise their cakes, and place orders with confidence. The website has streamlined our ordering process, strengthened our credibility, and positioned Haliberry Cake for future growth. We are extremely pleased with the outcome and would confidently recommend NerdPace to anyone looking for a skilled and dependable web developer.""",
                    rating=5,
                    is_approved=True,
                    is_featured=True
                )

                db.add(initial_testimonial)
                await db.commit()
                await db.refresh(initial_testimonial)
                logger.info("✅ Created initial testimonial from Haliberry Cake")
            else:
                logger.info("ℹ️ Testimonials already exist, skipping initial testimonial creation")

        except Exception as e:
            await db.rollback()
            logger.error(f"❌ Failed to create initial testimonial: {e}")
        finally:
            await db.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan context manager for startup/shutdown events"""
    # Startup
    logger.info("🚀 Starting NerdPace API")
    await create_initial_testimonial()
    yield
    # Shutdown
    logger.info("🛑 Shutting down NerdPace API")


app = FastAPI(
    title="NerdPace API",
    description="Technical SEO Agency Platform API",
    version="1.0.0",
    lifespan=lifespan,
)

# Middleware
app.add_middleware(GZipMiddleware, minimum_size=1000)
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=settings.ALLOWED_HOSTS
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(api_router, prefix="/api/v1")


@app.get("/health", tags=["System"])
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "version": "1.0.0",
        "environment": settings.ENVIRONMENT
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
