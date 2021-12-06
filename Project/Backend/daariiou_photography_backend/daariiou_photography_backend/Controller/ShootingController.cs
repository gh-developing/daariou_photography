using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Controller
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ShootingController : ControllerBase
    {
        private readonly IMapper _mapper;
        public ShootingController(IMapper mapper)
        {
            _mapper = mapper;
        }

        // Get By Id
        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<ShootingDTO>> GetById(int sId)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                Shooting shooting = await context.Shootings
                    .AsQueryable()
                    .Include(s => s.KoS)
                    .Include(s => s.UidNavigation)
                    .AsNoTracking()
                    .Where(s => s.Sid == sId)
                    .FirstOrDefaultAsync();
                return Ok(_mapper.Map<ShootingDTO>(shooting));
            }
        }

        [Route("[action]")]
        [HttpGet]
        // Get
        public async Task<ActionResult<IEnumerable<ShootingDTO>>> Get()
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                List<Shooting> shootings = await context.Shootings
                    .AsQueryable()
                    .Include(s => s.KoS)
                    .Include(s => s.UidNavigation)
                    .AsNoTracking()
                    .OrderBy(s => s.Date)
                    .ToListAsync();
                return Ok(_mapper.Map<IEnumerable<ShootingDTO>>(shootings));
            }
        }

        [Route("[action]")]
        [HttpPost]
        // Post
        public async Task<ActionResult<Shooting>> Add(Shooting shootingToAdd)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                context.Add(shootingToAdd);
                await context.SaveChangesAsync();
                return Ok(shootingToAdd);
            }
        }

        [Route("[action]")]
        [HttpPut]
        // Update
        public async Task<ActionResult<Shooting>> Reject(int sId, string reasonRej)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                Shooting rejectedShooting = _mapper.Map<Shooting>(GetById(sId));
                rejectedShooting.Rejected = reasonRej;

                context.Update(rejectedShooting);
                await context.SaveChangesAsync();
                return Ok(rejectedShooting);
            }
        }
    }
}
