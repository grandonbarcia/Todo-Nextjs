-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
