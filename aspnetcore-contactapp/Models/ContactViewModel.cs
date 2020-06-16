using System;
using System.Collections.Generic;

namespace aspnetcore_contactapp.Models
{
    public class ContactViewModel
    {
        public Guid ConatctID { get; set; }

        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string PhoneNumber { get; set; }


        public string Email { get; set; }

        public byte[] Avatar { get; set; }

        public string TwitterAccount { get; set; }

        public string FacebookAccount { get; set; }

        public string Website { get; set; }

        public string Label { get; set; }

        public string Tag { get; set; }

        ///Convert it ton Contact as The Domain Object
        public Contact ToDomainObject()
        {
            return new Contact
            {
                ConatctID = this.ConatctID,
                FirstName = this.FirstName,
                LastName = this.LastName,
                PhoneNumber = this.PhoneNumber,
                Avatar = this.Avatar,
                Email = this.Email,
                TwitterAccount = this.TwitterAccount,
                FacebookAccount = this.FacebookAccount,
                Website = this.Website,
                Label = this.Label,
            };
        }
    }

    public class ContactListViewModel
    {
        public IEnumerable<ContactViewModel> list { get; set; }
    }
}