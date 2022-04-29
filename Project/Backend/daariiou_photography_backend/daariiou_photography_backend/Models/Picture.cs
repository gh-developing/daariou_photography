using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.Models
{
    public partial class Picture
    {
        public int Pid { get; set; }
        public string Src { get; set; }
        public string IsPublic { get; set; }
        public DateTime Date { get; set; }
        public int? Uid { get; set; }
        public string Thumb { get; set; }
        public int KoSid { get; set; }

        public virtual KindOfShooting KoS { get; set; }
        public virtual User UidNavigation { get; set; }
    }
}
