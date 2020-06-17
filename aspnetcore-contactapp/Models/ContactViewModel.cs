using System;
using System.Collections.Generic;

namespace aspnetcore_contactapp.Models
{
    public class ContactViewModel
    {
        public Guid conatctID { get; set; }

        public string firstName { get; set; }


        public string lastName { get; set; }


        public string phoneNumber { get; set; }


        public string email { get; set; }

        public byte[] avatar { get; set; }

        public string twitterAccount { get; set; }

        public string facebookAccount { get; set; }

        public string website { get; set; }

        public string label { get; set; }

        public string tag { get; set; }

        ///Convert it ton Contact as The Domain Object
        public Contact ToDomainObject()
        {
            return new Contact
            {
                ConatctID = this.conatctID,
                FirstName = this.firstName,
                LastName = this.lastName,
                PhoneNumber = this.phoneNumber,
                Avatar = this.avatar,
                Email = this.email,
                TwitterAccount = this.twitterAccount,
                FacebookAccount = this.facebookAccount,
                Website = this.website,
                Label = this.label,
            };
        }
    }

    public class ContactListViewModel
    {
        public IEnumerable<ContactViewModel> list { get; set; }
    }
}