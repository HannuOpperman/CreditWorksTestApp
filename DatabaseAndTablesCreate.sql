Create Database CreditWorksTest
Go

Use CreditWorksTest
Go

Create table Vehicles (
	ID int primary key identity,
	Name nvarchar(100),
	Manufacturer nvarchar(100),
	YearModel nvarchar(100),
	Weight int
)
Go

Create table Manufacturers (
	ID int primary key identity,
	Name nvarchar(100)
)
Go

Insert into Manufacturers values ('Mazda')
Insert into Manufacturers values ('Mercedes')
Insert into Manufacturers values ('Honda')
Insert into Manufacturers values ('Ferrari')
Insert into Manufacturers values ('Toyota')

Go

Create table Categories (
	ID int primary key identity,
	Name nvarchar(100),
	Weight int,
	Icon nvarchar(100)
)
Go

Insert into Categories values ('Light', 0, 'done')
Insert into Categories values ('Medium', 500, 'done_all')
Insert into Categories values ('Heavy', 2500, 'done_outline')
Go