using System;
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

namespace aspnetcore_contactapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private IRepository<Contact> _repository;

        public ContactController(IRepository<Contact> repository)
        {
            _repository = repository;
        }

        // GET: api/Contact
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            // await AddDataLocalyFromJSON();

            return await _repository.Get();
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
            var contact = await _repository.GetbyId(id);

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
        public async Task<IActionResult> PutContact(Guid id, Contact contact)
        {
            if (id != contact.ConatctID)
            {
                return BadRequest();
            }

            

            try
            {
                await _repository.Put(id , contact);
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
        public async Task<ActionResult<Contact>> PostContact(Contact contact)
        {
            contact.ConatctID = Guid.NewGuid();
            await _repository.Add(contact);

            return CreatedAtAction("GetContact", new { id = contact.ConatctID }, contact);
        }

        // DELETE: api/Contact/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContact(Guid id)
        {
            var contact = await _repository.Delete(id);
            if (contact == null)
            {
                return NotFound();
            }
            return contact;
        }

        private async Task<bool> ContactExistsAsync(Guid id)
        {
            return   await _repository.Exits(id);
        }
    }
}
