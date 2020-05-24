using System;
using System.ComponentModel.DataAnnotations;

namespace aspnetcore_contactapp.Models
{
    public class Contact {
        public Guid ConatctID {get; set;}

        [Required]
        [StringLength(20)]
        public string FirstName { get; set; }
    
        [Required]
        [StringLength(20)]
        public string LastName { get; set; }
    
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
    
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    
        public byte[] Avatar { get; set; }
    
        public string TwitterAccount { get; set; }
    
        public string FacebookAccount { get; set; }
    
        public string Website { get; set; }

        [Required]
        [StringLength(30)]
        public string Label { get; set; }
    
        public Guid?  TagID { get; set; }
        
        public virtual TagModel Tag { get; set; }
    
    }
}