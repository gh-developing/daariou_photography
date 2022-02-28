using daariiou_photography_backend.Model;
using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.DTO
{
    public class PictureDTO
    {
        public int Pid { get; set; }
        public byte[] Src { get; set; }
        public string IsPublic { get; set; }
        public DateTime Date { get; set; }
        public int? Uid { get; set; }
        public byte[] Thumb { get; set; }
        public int KoSid { get; set; }
        public User UidNavigation { get; set; }
        public Model.KindOfShooting KoS { get; set; }
    }
}
