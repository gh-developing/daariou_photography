using System;
using System.Collections.Generic;

#nullable disable

namespace daariiou_photography_backend.Model
{
    public partial class User
    {
        public User()
        {
            Pictures = new HashSet<Picture>();
            Shootings = new HashSet<Shooting>();
        }

        public int Uid { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Password { get; set; }
        public string IsAdmin { get; set; }

        public virtual ICollection<Picture> Pictures { get; set; }
        public virtual ICollection<Shooting> Shootings { get; set; }
    }
}
