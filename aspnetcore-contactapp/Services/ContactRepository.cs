using System;
using System.Threading.Tasks;
using aspnetcore_contactapp.Data;
using aspnetcore_contactapp.Models;
using aspnetcore_contactapp.Services;

namespace aspnetcore_contactapp.Services
{
    public class ContactRepository : Repository<Contact>
    {
        public ContactRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}