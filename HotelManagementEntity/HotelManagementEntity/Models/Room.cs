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
    
    public partial class Room
    {
        public int RoomId { get; set; }
        [Required]
        public int RoomType { get; set; }
        [Required]
        [Range(1,999,ErrorMessage="Rooms cannot be less than 1")]
        public int NoOfRooms { get; set; }
        [Required]
        [Range(1, 99999, ErrorMessage = "Price cannot be less than 1")]
        public int Price { get; set; }
    }
}
