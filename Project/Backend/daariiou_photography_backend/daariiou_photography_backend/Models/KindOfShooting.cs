using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.Models
{
    public partial class KindOfShooting
    {
        public KindOfShooting()
        {
            Pictures = new HashSet<Picture>();
            Shootings = new HashSet<Shooting>();
        }

        public int KoSid { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Picture> Pictures { get; set; }
        public virtual ICollection<Shooting> Shootings { get; set; }
    }
}
