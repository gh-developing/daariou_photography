using System.Collections.Generic;

namespace daariiou_photography_backend.DTO
{
    public class UserDTO
    {
        public int Uid { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Password { get; set; }
        public string IsAdmin { get; set; }
        public List<PictureDTO> Pictures { get; set; }
        public List<ShootingDTO> Shootings { get; set; }
    }
}
