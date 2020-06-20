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
            return  await _ContactRepository.GetRelationData();
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


        // POST: api/Contact
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ContactViewModel>> PostContact(
            [FromBody,Bind("conatctID","firstName","lastName",
            "phoneNumber","email","avatar",
            "label","twitterAccount",
            "facebookAccount","website", "tag")]ContactViewModel contactViewModel)
        {   
            if(ModelState.IsValid){
                //Convert the json to domain object
                Contact contact = contactViewModel.ToDomainObject();
                
                //Get the relative tagId for the tag 
                contact.TagID = await _TagRepository.GetGuid(contactViewModel.tag);
                
                //Check if ContatcID exist if exit so update it if not create new one
                if(await _ContactRepository.Exits(contact.ConatctID)){
                    if(!await _ContactRepository.Put(contact.ConatctID , contact)){
                        return null;
                    }
                }else{
                    //add a unique id for the new contact
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
    }
}
