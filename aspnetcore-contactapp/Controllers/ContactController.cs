using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using aspnetcore_contactapp.Services;
using aspnetcore_contactapp.Models;
using System.IO;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Cors;

namespace aspnetcore_contactapp.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private ContactRepository _ContactRepository;
        private TagRepository _TagRepository;

        public ContactController(
            IRepository<Contact> ContactRepository ,
            IRepository<Tag> TagRepository
            )
        {
            _ContactRepository = (ContactRepository)ContactRepository;
            _TagRepository = (TagRepository) TagRepository;
        }

        // GET: api/Contact
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactViewModel>>> GetContacts()
        {
            //var contatcs = await _ContactRepository.Get();
            
            return  await _ContactRepository.GetRelationData();
        }

        // private async Task AddDataLocalyFromJSON()
        // {
        //     using (StreamReader r = new StreamReader("Data.json"))
        //     {
        //         string json = await r.ReadToEndAsync();
        //         var result = JsonConvert.DeserializeObject<Respond>(json);

        //         foreach (var item in result.results)
        //         {
        //             var contact = new Contact
        //             {
        //                 ConatctID = Guid.NewGuid(),
        //                 FirstName = item.name.first,
        //                 LastName = item.name.last,
        //                 Email = item.email,
        //                 PhoneNumber = item.phone,
        //                 Avatar = await GetImage(item.picture.large)
        //             };

        //             await _repository.Add(contact);
        //         }
        //     }
        // }

        private async Task<byte[]> GetImage(string large)
        {
            using (WebClient c = new WebClient())
            {
                Uri uri = new Uri(large);
                return await c.DownloadDataTaskAsync(uri);
            }
        }

        // GET: api/Contact/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(Guid id)
        {
            var contact = await _ContactRepository.GetbyId(id);

            if (contact == null)
            {
                return NotFound();
            }

            return contact;
        }

        // PUT: api/Contact/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContact(
            Guid id,
         [FromForm,Bind("ConatctID" , "FirstName","LastName",
            "PhoneNumber","Email",
            "Label","TwitterAccount",
            "FacebookAccount","Website,Tag")]Contact contact)
        {
            if (id != contact.ConatctID)
            {
                return BadRequest();
            }

            

            try
            {
                await _ContactRepository.Put(id , contact);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (! await ContactExistsAsync(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contact
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ContactViewModel>> PostContact(
            [FromBody,Bind("conatctID","firstName","lastName",
            "phoneNumber","email","avatar",
            "label","twitterAccount",
            "facebookAccount","website", "tag")]ContactViewModel contactViewModel ,
            IFormFile Avatar = null)
        {   
            if(ModelState.IsValid){
                //Convert the json to domain object
                Contact contact = contactViewModel.ToDomainObject();
                
                
                //Check if there is avatar uploaded and read it
                // if(Avatar != null){
                //     contact.Avatar = new byte[Avatar.Length];
                //     Stream stream = Avatar.OpenReadStream();
                //     using(stream){
                //         await stream.ReadAsync(contact.Avatar);
                //     }
                // }
                
                //Get the relative tagId for the tag 
                contact.TagID = await _TagRepository.GetGuid(contactViewModel.tag);
                
                //Check if ContatcID exist if exit so update it if not create new one
                if(await _ContactRepository.Exits(contact.ConatctID)){
                    if(!await _ContactRepository.Put(contact.ConatctID , contact)){
                        return null;
                    }
                }else{
                    contact.ConatctID = Guid.NewGuid();
                    await _ContactRepository.Add(contact);
                }
                return await _ContactRepository.GetRelationDataByID(contact.ConatctID);
            }else{
                return null;
            }
        }

        // DELETE: api/Contact/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContact(Guid id)
        {
            var contact = await _ContactRepository.Delete(id);
            if (contact == null)
            {
                return NotFound();
            }
            return contact;
        }

        private async Task<bool> ContactExistsAsync(Guid id)
        {
            return   await _ContactRepository.Exits(id);
        }
    }
}
