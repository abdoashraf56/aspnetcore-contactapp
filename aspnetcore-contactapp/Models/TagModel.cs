using System;
using System.Collections.Generic;

namespace aspnetcore_contactapp.Models
{
    public class TagModel
    {
        public Guid TagID { get; set; }

        public string Name { get; set; }

        public ICollection<Contact> Contacts { get; set; }
    }
}