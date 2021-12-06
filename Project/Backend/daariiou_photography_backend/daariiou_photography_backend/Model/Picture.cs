using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.Model
{
    public partial class Picture
    {
        public int Pid { get; set; }
        public byte[] Img { get; set; }
        public string IsPublic { get; set; }
        public DateTime Date { get; set; }
        public int? Uid { get; set; }

        public virtual User UidNavigation { get; set; }
    }
}
