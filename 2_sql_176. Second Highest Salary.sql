-- -- 176. Second Highest Salary


-- Table: Employee

-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | salary      | int  |
-- +-------------+------+
-- id is the primary key (column with unique values) for this table.
-- Each row of this table contains information about the salary of an employee.
 

-- Write a solution to find the second highest distinct salary from the Employee table. If there is no second highest salary, return null (return None in Pandas).

-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Employee table:
-- +----+--------+
-- | id | salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- Output: 
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+
-- Example 2:

-- Input: 
-- Employee table:
-- +----+--------+
-- | id | salary |
-- +----+--------+
-- | 1  | 100    |
-- +----+--------+
-- Output: 
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | null                |
-- +---------------------+


-- My Query :
select case when count(*) > 0 then max(salary) else null end as "SecondHighestSalary"
from (
    select distinct salary from employee order by salary desc limit 1 offset 1
)as emp


-- Low time complexity querys 
-- Write your PostgreSQL query statement below - 186 ms
select max(salary) as SecondHighestSalary from Employee
 where salary not in ((select max(salary) from Employee));


 -- Write your PostgreSQL query statement below -- 183 ms
SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee)

-- Write your PostgreSQL query statement below - 189 ms 
SELECT(
SELECT DISTINCT Salary
FROM Employee
ORDER BY salary DESC
LIMIT 1 
OFFSET 1) AS SecondHighestSalary

