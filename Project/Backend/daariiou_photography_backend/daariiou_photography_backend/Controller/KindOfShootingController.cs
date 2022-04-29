using daariiou_photography_backend.Models;
using daariiou_photography_backend.Services;
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
    public class KindOfShootingController : ControllerBase
    {
        private KindOfShootingService _kindOfShootingService;
        public KindOfShootingController(KindOfShootingService kindOfShootingService)
        {
            _kindOfShootingService = kindOfShootingService;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<KindOfShooting>> GetAll()
        {
            return Ok(_kindOfShootingService.GetAll());
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<KindOfShooting> GetById(int id)
        {
            return Ok(_kindOfShootingService.GetById(id));
        }
    }
}
