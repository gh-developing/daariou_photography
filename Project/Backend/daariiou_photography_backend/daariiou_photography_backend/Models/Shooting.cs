using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.Models
{
    public partial class Shooting
    {
        public int Sid { get; set; }
        public DateTime Date { get; set; }
        public string Remarks { get; set; }
        public string ReasonDeclined { get; set; }
        public string Status { get; set; }
        public int Uid { get; set; }
        public int KosId { get; set; }

        public virtual KindOfShooting Kos { get; set; }
        public virtual User UidNavigation { get; set; }
    }
}
