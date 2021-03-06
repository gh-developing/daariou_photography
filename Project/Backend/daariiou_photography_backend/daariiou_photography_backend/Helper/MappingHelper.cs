using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Helper
{
    public class MappingHelper : Profile
    {
        public MappingHelper()
        {
            var shootingToDto = CreateMap<Shooting, ShootingDTO>();
            var dtoToShooting = CreateMap<ShootingDTO, Shooting>();
        }
    }
}