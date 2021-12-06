using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.Model
{
    public partial class Shooting
    {
        public int Sid { get; set; }
        public DateTime Date { get; set; }
        public string Remarks { get; set; }
        public string Rejected { get; set; }
        public int KoSid { get; set; }
        public int Uid { get; set; }

        public virtual KindOfShooting KoS { get; set; }
        public virtual User UidNavigation { get; set; }
    }
}
