using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Models;

namespace People
{
    public class MappingConfiguration : Profile
    {
        public MappingConfiguration()
        {
            CreateMap<Shooting, ShootingDTO>();
            CreateMap<ShootingDTO, Shooting>();

            CreateMap<Picture, PictureDTO>();
            CreateMap<PictureDTO, Picture>();
        }
    }
}
