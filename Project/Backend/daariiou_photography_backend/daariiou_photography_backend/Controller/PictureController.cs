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
    [Route("api/v1/[controller]")]
    public class PictureController : ControllerBase
    {

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Picture>>> GetAll()
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                List<Picture> users = await context.Pictures
                    .AsQueryable()
                    .OrderBy(p => p.Date)
                    .AsNoTracking()
                    .ToListAsync();
                return Ok(users);
            }
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Picture>>> GetAllForUser(int uId)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                List<Picture> pictures = await context.Pictures
                    .AsQueryable()
                    .Where(u => u.Uid == uId)
                    .OrderBy(p => p.Date)
                    .AsNoTracking()
                    .ToListAsync();
                return Ok(pictures);
            }
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<Picture>> GetById(int pId)
        {
            
            using (var context = new DaariiouPhotographyDBContext())
            {
                Picture picture = await context.Pictures
                    .AsQueryable()
                    .Where(u => u.Pid == pId)
                    .AsNoTracking()
                    .FirstOrDefaultAsync();
                
                return Ok(picture);
            }
        }

        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<Picture>> Post(Picture pictureToAdd)
        {
           
            using (var context = new DaariiouPhotographyDBContext())
            {
                context.Add(pictureToAdd);
                await context.SaveChangesAsync();
                return Ok(pictureToAdd);
            }
        }

    }
}
