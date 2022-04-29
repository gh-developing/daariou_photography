using AutoMapper;
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
    public class UserController : ControllerBase
    {
        private UserService _userService;
        private IMapper _mapper;

        public UserController(UserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<User>> Get()
        {
           return Ok(_userService.GetAll());
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<User> GetById(int uid)
        {
            return Ok(_userService.GetById(uid));
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<User> Login(string username, string password)
        {
           return Ok(_userService.Login(username, password));
        }

        [HttpGet]
        [Route("[action]")]
        public bool IsAdmin()
        {
            return _userService.IsAdmin();
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult<User> Register(User userToAdd)
        {   
           return Ok(_userService.Register(userToAdd));
        }


        [HttpPut]
        [Route("[action]")]
        public ActionResult<User> Edit(User userToUpdate, bool isPasswordChanged)
        {
            return Ok(_userService.Update(userToUpdate, isPasswordChanged));
        }

        [HttpDelete]
        [Route("[action]")]
        public ActionResult<User> Delete(User userToDelete)
        {
            return Ok(_userService.Delete(userToDelete));
        }
    }
}
