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
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ShootingController : ControllerBase
    {
        private readonly IMapper _mapper;
        public ShootingController(IMapper mapper)
        {
            _mapper = mapper;
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
                    .Include(s => s.Kos)
                    .Include(s => s.UidNavigation)
                    .AsNoTracking()
                    .Where(s => s.Status != "Declined")
                    .OrderBy(s => s.Date)
                    .ToListAsync();
                return Ok(_mapper.Map<IEnumerable<ShootingDTO>>(shootings));
            }
        }

        [Route("[action]")]
        [HttpPost]
        // Post
        public async Task<ActionResult<ShootingDTO>> Add(ShootingDTO shootingToAdd)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                shootingToAdd.Status = "Open";
                context.Add(shootingToAdd);
                await context.SaveChangesAsync();
                return Ok(shootingToAdd);
            }
        }

        [Route("[action]")]
        [HttpPut]
        // Update
        public async Task<ActionResult<Shooting>> ChangeStatus(Shooting shootingToDecline, string status)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                shootingToDecline.Status = status;

                context.Update(shootingToDecline);
                await context.SaveChangesAsync();
                return Ok(shootingToDecline);
            }
        }
    }
}
