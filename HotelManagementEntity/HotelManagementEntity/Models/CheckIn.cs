//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HotelManagementEntity.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    
    public partial class CheckIn
    {
        
        public int GuestId { get; set; }
        [Required]
        public int RoomId { get; set; }
        public int RoomType { get; set; }
         [Required]
        public string GuestName { get; set; }
         [Required]
        public string Address { get; set; }
         [Required]
        [Range(0000000000,9999999999,ErrorMessage="Should be 10 digits")]
        public int Contact { get; set; }
         [Required]
         [Range(1, 999, ErrorMessage = "Quantity cannot be less than 1")]
        public int Quantity { get; set; }
         [Required]
         [DataType(DataType.Date)]
        public System.DateTime CheckInTime { get; set; }
        public string Status { get; set; }
    }
}