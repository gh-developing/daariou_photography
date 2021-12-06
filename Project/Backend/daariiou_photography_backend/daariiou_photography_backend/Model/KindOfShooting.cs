using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.Model
{
    public partial class KindOfShooting
    {
        public KindOfShooting()
        {
            Shootings = new HashSet<Shooting>();
        }

        public int KoSid { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Shooting> Shootings { get; set; }
    }
}
