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
    public class KindOfShootingController : ControllerBase
    {

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<KindOfShooting>>> Get()
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                List<KindOfShooting> kindOfShootings = await context.KindOfShootings
                    .AsQueryable()
                    .OrderBy(p => p.Name)
                    .AsNoTracking()
                    .ToListAsync();
                return Ok(kindOfShootings);
            }
        }
    }
}
