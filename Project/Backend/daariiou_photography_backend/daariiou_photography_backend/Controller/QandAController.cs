
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
    public class QandAController : ControllerBase
    {
        private QandAService _qAndAService;

        public QandAController(QandAService qAndAService)
        {
            _qAndAService = qAndAService;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<Qandum>> GetAll()
        {
            return Ok(_qAndAService.GetAll());
        }
    }
}
