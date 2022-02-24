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
    public class QandAController : ControllerBase
    {
        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<List<Qandum>>> Get()
        {
            await using (var context = new DaariiouPhotographyDBContext())
            {
                return await context.QandAs.ToListAsync();
            }
        }

    }
}
