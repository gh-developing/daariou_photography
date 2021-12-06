using daariiou_photography_backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.DTO
{
    public class ShootingDTO
    {
        public int Sid { get; set; }
        public DateTime Date { get; set; }
        public string Remarks { get; set; }
        public string Rejected { get; set; }
        public KindOfShooting KoS { get; set; }
        public int KoSid { get; set; }
        public User U { get; set; }
        public int Uid { get; set; }
    }
}
