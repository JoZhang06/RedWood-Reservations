-- CreateTable
CREATE TABLE "Log" (
    "logId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reservationId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "actionTaken" TEXT NOT NULL,
    "actionDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Room" (
    "roomId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hotelId" INTEGER NOT NULL,
    "roomNumber" TEXT NOT NULL,
    "maxCapacity" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Hotel" (
    "hotelId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "costPerAdult" REAL NOT NULL,
    "costPerChild" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Person" (
    "personId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isEmployee" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reservation" (
    "reservationId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "personId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "checkinDate" DATETIME NOT NULL,
    "checkoutDate" DATETIME NOT NULL,
    "numberOfAdults" INTEGER NOT NULL,
    "numberOfChildren" INTEGER NOT NULL,
    "totalReservationDays" INTEGER NOT NULL,
    "costPerAdult" REAL NOT NULL,
    "CostPerChild" REAL NOT NULL,
    "totalCost" REAL NOT NULL,
    "createdDate" DATETIME NOT NULL,
    "modifiedDate" DATETIME,
    "status" TEXT NOT NULL
);
