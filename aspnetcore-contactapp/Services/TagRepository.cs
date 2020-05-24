using System;
using System.Threading.Tasks;
using aspnetcore_contactapp.Data;
using aspnetcore_contactapp.Models;
using aspnetcore_contactapp.Services;

namespace aspnetcore_contactapp.Services
{
    public class TagRepository : Repository<Tag>
    {
        public TagRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}