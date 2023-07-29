-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Epics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,
    "term" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Epics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "assignId" TEXT,
    "difficulty" TEXT NOT NULL,
    "priority" VARCHAR(5) NOT NULL,
    "term" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "epicId" TEXT NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Epics" ADD CONSTRAINT "Epics_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_epicId_fkey" FOREIGN KEY ("epicId") REFERENCES "Epics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
