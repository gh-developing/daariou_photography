using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using daariiou_photography_backend.Models;

namespace daariiou_photography_backend.Controller
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ShootingController : ControllerBase
    {
        private IMapper _mapper;
        private ShootingService _shootingService;

        public ShootingController(IMapper mapper, ShootingService shootingService)
        {
            _mapper = mapper;
            _shootingService = shootingService;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<ShootingDTO>> GetForAdmin()
        {
            return Ok(_mapper.Map<List<ShootingDTO>>(_shootingService.GetForAdmin()));
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<ShootingDTO>> GetForUser(int uId)
        {
            return Ok(_mapper.Map<List<ShootingDTO>>(_shootingService.GetForUser(uId)));
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<Shooting> Add(Shooting shootingToAdd)
        {
            return Ok(_shootingService.Add(shootingToAdd));
        }

        [HttpPut]
        [Route("[action]")]
        public ActionResult<Shooting> ChangeStatus(Shooting shootingToUpdate, string status)
        {
            return Ok(_shootingService.ChangeStatus(shootingToUpdate, status));
        }
    }
}
