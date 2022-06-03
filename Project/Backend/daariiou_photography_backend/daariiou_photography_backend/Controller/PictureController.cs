﻿using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Helper;
using daariiou_photography_backend.Models;
using daariiou_photography_backend.Services;
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
        private IMapper _mapper;
        private PictureService _pictureService;

        public PictureController(IMapper mapper, PictureService pictureService)
        {
            _mapper = mapper;
            _pictureService = pictureService;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<Picture>> Get()
        {
            return Ok(_pictureService.Get());
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<PictureDTO>> GetByKoSId(int kosID)
        {
            return Ok(_pictureService.GetByKoSId(kosID));
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<PictureDTO>> GetByUserID(int uId)
        {
            return Ok(_pictureService.GetByKoSId(uId));

        }

        [HttpPost]
        [Route("[action]")]
        public async Task<ActionResult<List<Picture>>> PostMultiple(List<Picture> picturesToAdd)
        {
	        return Ok(_pictureService.PostMultiple(picturesToAdd));
        }

        [HttpPost]
        [Route("[action]")]

        public async Task<ActionResult<Picture>> Post(Picture pictureToAdd)
        {
            return Ok(_pictureService.Post(pictureToAdd));
        }
    }
}
