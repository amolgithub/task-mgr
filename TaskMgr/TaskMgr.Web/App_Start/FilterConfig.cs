using System.Web;
using System.Web.Mvc;
using TaskMgr.Web.Util;

namespace TaskMgr
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
