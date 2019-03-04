using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaskMgr.Data.Entities;

namespace TaskMgr.Web.Controllers.api
{
    public class TaskController : ApiController
    {
        public IEnumerable<Task> All()
        {
            return null;
        }

        public Task Get(int taskId)
        {
            return null;
        }

        public void Add(Task newTask)
        {

        }

        public void Update(Task modifiedTask)
        {

        }

        public void End(Task taskToComplete)
        {

        }
    }
}