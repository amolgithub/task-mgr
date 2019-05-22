using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskMgr.Data.Entities
{
    public interface ITaskContext: IDisposable
    {
        DbSet<Task> Tasks { get; }
        int SaveChanges();
        void MarkAsModified(Task t);
    }
}
