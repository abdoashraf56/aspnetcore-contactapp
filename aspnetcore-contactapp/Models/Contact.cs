using System;
using System.ComponentModel.DataAnnotations;

namespace aspnetcore_contactapp.Models
{
    public class Contact {
        ///Primary Key
        [Key]
        public Guid ConatctID {get; set;}

        ///The First name of contact
        [Required]
        [StringLength(20)]
        public string FirstName { get; set; }
    
        ///The Last name of contact
        [Required]
        [StringLength(20)]
        public string LastName { get; set; }
    
        ///The Phone of contact
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
    

        ///The Email of contact
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    
        public byte[] Avatar { get; set; }
    
        public string TwitterAccount { get; set; }
    
        public string FacebookAccount { get; set; }
    
        public string Website { get; set; }

        [StringLength(30)]
        public string Label { get; set; }
    
        public Guid?  TagID { get; set; }
        
        public virtual Tag Tag { get; set; }
    
    }
}