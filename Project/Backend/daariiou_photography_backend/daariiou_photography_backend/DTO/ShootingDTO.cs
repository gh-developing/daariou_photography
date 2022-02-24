using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.DTO
{
    public class ShootingDTO
    {
        public int Sid { get; set; }
        public DateTime Date { get; set; }
        public string Remarks { get; set; }
        public string ReasonDeclined { get; set; }
        public string Status { get; set; }
        public int Uid { get; set; }
        public int KosId { get; set; }

        public Model.KindOfShooting KindOfShooting { get; set; }
        public UserDTO User { get; set; }
    }
}
