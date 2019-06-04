using log4net;
using log4net.Appender;
using log4net.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaskMgr.Data.DataObjects;
using TaskMgr.Data.Entities;
using TaskMgr.Web.Util;

namespace TaskMgr.Web.Controllers.api
{
    [ApiActionFilter, ApiExceptionFilter]
    public class TaskController : ApiController
    {        
        private TaskManager _taskMgr;

        public TaskController()
        {           
            _taskMgr = new TaskManager(new TaskMgrEntities());
        }

        public TaskController(ITaskContext context)
        {
            _taskMgr = new TaskManager(context);
        }

        [HttpGet]
        public IEnumerable<Task> All()
        {
            throw new Exception("Test exception");
            return _taskMgr.GetTasks().ToArray();
        }

        [HttpGet]
        public Task Get(int taskId)
        {            
            return _taskMgr.GetTask(taskId);
        }

        [HttpPost]
        public void Add(Task newTask)
        {            
            _taskMgr.UpdateTask(newTask);
        }

        public void Update(Task modifiedTask)
        {
            _taskMgr.UpdateTask(modifiedTask);
        }

        public void End(Task taskToComplete)
        {            
            taskToComplete.Status = "C";
            _taskMgr.UpdateTask(taskToComplete);
        }
    }
}