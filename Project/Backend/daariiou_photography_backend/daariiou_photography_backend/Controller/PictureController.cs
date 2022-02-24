using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Helper;
using daariiou_photography_backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Controller
{

    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PictureController : ControllerBase
    {
        private readonly IMapper _mapper;

        public PictureController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PictureDTO>>> Get()
        {
            await using (var context = new DaariiouPhotographyDBContext())
            {
                List<Picture> pictures = await context.Pictures
                    .AsQueryable()
                    .Include(x => x.KoS)
                    .Include(x => x.UidNavigation)
                    .AsNoTracking()
                    .OrderBy(a => Guid.NewGuid())
                    .ToListAsync();

                return Ok(_mapper.Map<IEnumerable<PictureDTO>>(pictures));
            }
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PictureDTO>>> GetByKoSId(int kosID)
        {
            await using (var context = new DaariiouPhotographyDBContext())
            {
                List<Picture> pictures = await context.Pictures
                    .AsQueryable()
                    .Include(x => x.KoS)
                    .Include(x => x.UidNavigation)
                    .AsNoTracking()
                    .OrderBy(a => Guid.NewGuid())
                    .Where(p => p.KoSid == kosID)
                    .ToListAsync();

                return Ok(_mapper.Map<IEnumerable<PictureDTO>>(pictures));
            }
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PictureDTO>>> GetByUserID(int uId)
        {
            await using (var context = new DaariiouPhotographyDBContext())
            {
                List<Picture> pictures = await context.Pictures
                    .AsQueryable()
                    .Include(x => x.KoS)
                    .Include(x => x.UidNavigation)
                    .AsNoTracking()
                    .OrderBy(a => Guid.NewGuid())
                    .Where(p => p.Uid == uId)
                    .ToListAsync();

                return Ok(_mapper.Map<IEnumerable<PictureDTO>>(pictures));
            }
        }

        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<PictureDTO>> Post(PictureDTO pictureDTOToAdd, int uid)
        {
           
            using (var context = new DaariiouPhotographyDBContext())
            {
                pictureDTOToAdd.Thumb = pictureDTOToAdd.Src;
                pictureDTOToAdd.Uid = uid;
                Picture pictureToAdd = _mapper.Map<Picture>(pictureDTOToAdd);
                context.Add(pictureToAdd);
                await context.SaveChangesAsync();
                return Ok(pictureToAdd);
            }
        }
    }
}
