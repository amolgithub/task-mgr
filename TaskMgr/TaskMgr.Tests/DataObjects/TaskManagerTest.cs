using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using Moq;
using System.Data.Entity;
using TaskMgr.Data.Entities;
using System.Linq;
using TaskMgr.Data.DataObjects;

namespace TaskMgr.Tests.DataObjects
{
    [TestClass]
    public class TaskManagerTest
    {
        Mock<Data.Entities.TaskMgrEntities> _mockContext;
        Mock<DbSet<Task>> _mockTasks;
        IQueryable<Task> _taskList;

        [TestInitialize]
        public void Initialize()
        {
            _taskList = new List<Task>
            {
                new Task
                {
                    TaskId = 1,
                    TaskName = "Task 1",
                    Priority = 1,
                    StartDate = DateTime.Today,
                    EndDate = DateTime.Today.AddDays(7),
                    Status = "I"
                },
                new Task
                {
                    TaskId = 2,
                    TaskName = "Task 2",
                    Priority = 2,
                    StartDate = DateTime.Today,
                    EndDate = DateTime.Today.AddMonths(1),
                    Status = "I"
                },
                new Task
                {
                    TaskId = 3,
                    TaskName = "Task 3",
                    Priority = 2,
                    StartDate = DateTime.Today,
                    EndDate = DateTime.Today.AddMonths(1),
                    Status = "I",
                    ParentId = 2
                },
                new Task
                {
                    TaskId = 4,
                    TaskName = "Task 4",
                    Priority = 3,
                    StartDate = DateTime.Today,
                    EndDate = DateTime.Today.AddMonths(2),
                    Status = "I",
                    ParentId = 2
                }
            }.AsQueryable();

            _mockTasks = new Mock<DbSet<Task>>();
            _mockTasks.As<IQueryable<Task>>().Setup(t => t.Provider).Returns(_taskList.Provider);
            _mockTasks.As<IQueryable<Task>>().Setup(t => t.Expression).Returns(_taskList.Expression);
            _mockTasks.As<IQueryable<Task>>().Setup(t => t.ElementType).Returns(_taskList.ElementType);
            _mockTasks.As<IQueryable<Task>>().Setup(t => t.GetEnumerator()).Returns(_taskList.GetEnumerator());
        }

        [TestMethod]
        public void GetTasks_ReturnsAllTasks()
        {
            _mockContext = new Mock<TaskMgrEntities>();
            _mockContext.Setup(t => t.Tasks).Returns(_mockTasks.Object);
            var taskDao = new TaskManager();
            var actualTaskList = taskDao.GetTasks();
            Assert.IsNotNull(actualTaskList);
            Assert.AreEqual(4, actualTaskList.Count());
        }

        [TestMethod]
        public void GetTask_ExistingTask()
        {
        }

        [TestMethod]
        public void GetTAsk_NonExistingTask()
        {

        }

        [TestMethod]
        public void UpdateTask_ExistingTask()
        {

        }

        [TestMethod]
        public void UpdateTask_NonExistingTask()
        {

        }
    }
}
