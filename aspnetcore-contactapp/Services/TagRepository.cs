using System;
using Microsoft.EntityFrameworkCore;
using System.Linq ;
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

        public async Task<Guid> GetGuid(String name)
        {
            var context = GetContext();
            var tag = await context.Tags.Where(a => a.Name == name).FirstOrDefaultAsync();
            if(tag != null) return tag.TagID ;
            return Guid.Empty ; 
        }
    }
}