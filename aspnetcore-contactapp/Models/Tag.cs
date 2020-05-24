using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace aspnetcore_contactapp.Models
{
    public class Tag
    {
        [Key]
        public Guid TagID { get; set; }

        public string Name { get; set; }

        public ICollection<Contact> Contacts { get; set; }
    }
}