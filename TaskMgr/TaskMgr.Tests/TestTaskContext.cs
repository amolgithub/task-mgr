using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskMgr.Data.Entities;

namespace TaskMgr.Tests
{
    public class TestTaskContext : ITaskContext
    {
        public TestTaskContext()
        {
            this.Tasks = new TestTaskDbSet();
        }
        public DbSet<Data.Entities.Task> Tasks
        {
            get; set;
        }

        public void Dispose()
        {            
        }

        public void MarkAsModified(Data.Entities.Task t)
        {            
        }

        public int SaveChanges()
        {
            return 0;
        }
    }
}
