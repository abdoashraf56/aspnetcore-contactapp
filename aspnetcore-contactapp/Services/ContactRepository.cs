using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using aspnetcore_contactapp.Data;
using aspnetcore_contactapp.Models;
using aspnetcore_contactapp.Services;
using System;

namespace aspnetcore_contactapp.Services
{
    public class ContactRepository : Repository<Contact>
    {
        public ContactRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<List<ContactViewModel>> GetRelationData(){
            var context = GetContext();
            
            var data = await context.Contacts.Include(a => a.Tag).Select(a => new ContactViewModel{
                Avatar = a.Avatar , 
                ConatctID = a.ConatctID ,
                Email = a.Email ,
                FirstName = a.FirstName ,
                LastName = a.LastName ,
                Tag = a.Tag.Name , 
                Label = a.Label ,
                FacebookAccount = a.FacebookAccount ,
                PhoneNumber = a.PhoneNumber ,
                TwitterAccount = a.TwitterAccount ,
                Website = a.Website
            }).ToListAsync();
            return data;
        } 

        public async Task<ContactViewModel> GetRelationDataByID(Guid id){
            var context = GetContext();
            
            var data = await context.Contacts.Where(a => a.ConatctID == id).Include(a => a.Tag).FirstOrDefaultAsync();
            return new ContactViewModel{
                Avatar = data.Avatar , 
                ConatctID = data.ConatctID ,
                Email = data.Email ,
                FirstName = data.FirstName ,
                LastName = data.LastName ,
                Tag = data.Tag.Name , 
                Label = data.Label ,
                FacebookAccount = data.FacebookAccount ,
                PhoneNumber = data.PhoneNumber ,
                TwitterAccount = data.TwitterAccount ,
                Website = data.Website
            };
        } 
    }
}