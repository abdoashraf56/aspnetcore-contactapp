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

        ///<summary>
        /// Make A join query to get info of tag for all data
        ///</summary>
        public async Task<List<ContactViewModel>> GetRelationData(){
            var context = GetContext();
            
            var data = await context.Contacts.Include(a => a.Tag).Select(a => new ContactViewModel{
                avatar = a.Avatar , 
                conatctID = a.ConatctID ,
                email = a.Email ,
                firstName = a.FirstName ,
                lastName = a.LastName ,
                tag = a.Tag.Name , 
                label = a.Label ,
                facebookAccount = a.FacebookAccount ,
                phoneNumber = a.PhoneNumber ,
                twitterAccount = a.TwitterAccount ,
                website = a.Website
            }).ToListAsync();
            return data;
        } 


        ///<summary>
        /// Make A join query to get info of tag for a spacific contact
        ///</summary>
        ///<param name="id"></param>
        public async Task<ContactViewModel> GetRelationDataByID(Guid id){
            var context = GetContext();
            
            var data = await context.Contacts.Where(a => a.ConatctID == id).Include(a => a.Tag).FirstOrDefaultAsync();
            return new ContactViewModel{
                avatar = data.Avatar , 
                conatctID = data.ConatctID ,
                email = data.Email ,
                firstName = data.FirstName ,
                lastName = data.LastName ,
                tag = data.Tag.Name , 
                label = data.Label ,
                facebookAccount = data.FacebookAccount ,
                phoneNumber = data.PhoneNumber ,
                twitterAccount = data.TwitterAccount ,
                website = data.Website
            };
        } 
    }
}