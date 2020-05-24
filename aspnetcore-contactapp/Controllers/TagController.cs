using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using aspnetcore_contactapp.Data;
using aspnetcore_contactapp.Models;
using aspnetcore_contactapp.Services;

namespace aspnetcore_contactapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private IRepository<Tag> _repository;

        public TagController(IRepository<Tag> repository)
        {
            _repository = repository;
        }

        // GET: api/Tag
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tag>>> GetTags()
        {
            return await _repository.Get();
        }

        // GET: api/Tag/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tag>> GetTag(Guid id)
        {
            var tag = await _repository.GetbyId(id);

            if (tag == null)
            {
                return NotFound();
            }

            return tag;
        }

        // PUT: api/Tag/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTag(Guid id, Tag tag)
        {
            if (id != tag.TagID)
            {
                return BadRequest();
            }

            

            try
            {
                await _repository.Put(id , tag);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (! await TagExistsAsync(id))
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

        // POST: api/Tag
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tag>> PostTag(Tag tag)
        {
           tag.TagID = Guid.NewGuid();
            await _repository.Add(tag);

            return CreatedAtAction("GetContact", new { id = tag.TagID }, tag);
        }

        // DELETE: api/Tag/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tag>> DeleteTag(Guid id)
        {
            var contact = await _repository.Delete(id);
            if (contact == null)
            {
                return NotFound();
            }
            return contact;
        }

        private async Task<bool> TagExistsAsync(Guid id)
        {
           return   await _repository.Exits(id);
        }
    }
}
