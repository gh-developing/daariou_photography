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
    public class UserController : ControllerBase
    {
        public PasswordHelper passwordHelper = new PasswordHelper();
        public User loggedInUser;


        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                List<User> users = await context.Users
                    .AsQueryable()
                    .OrderBy(u => u.Username)
                    .AsNoTracking()
                    .ToListAsync();
                return Ok(users);
            }
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<User>> Login(string username, string password)
        {
            var hashedPassword = passwordHelper.CreatePasswordHash(password);
            using (var context = new DaariiouPhotographyDBContext())
            {
                User user = await context.Users
                    .AsQueryable()
                    .Where(u => u.Username == username)
                    .AsNoTracking()
                    .FirstOrDefaultAsync();
                if (user.Password == hashedPassword)
                {
                    loggedInUser = user;
                    return Ok(user);
                } else
                {
                    return Ok(null);
                }
            }
        }

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<User>> GetById(int uId)
        {
            
            using (var context = new DaariiouPhotographyDBContext())
            {
                User user = await context.Users
                    .AsQueryable()
                    .Where(u => u.Uid == uId)
                    .AsNoTracking()
                    .FirstOrDefaultAsync();
                
                return Ok(user);
            }
        }

        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<User>> Register(User userToAdd)
        {
            userToAdd.Password = passwordHelper.CreatePasswordHash(userToAdd.Password);
            using (var context = new DaariiouPhotographyDBContext())
            {
                context.Add(userToAdd);
                await context.SaveChangesAsync();
                return Ok(userToAdd);
            }
        }

        [Route("[action]")]
        [HttpPut]
        public async Task<ActionResult<User>> Update(User userToUpdate)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                context.Update(userToUpdate);
                await context.SaveChangesAsync();
                return Ok(userToUpdate);
            }

        }

        [Route("[action]")]
        [HttpGet]
        public bool IsAdmin()
        {
            if (loggedInUser.Name == "Dario" && loggedInUser.Lastname == "Passucci")
            {
                return true;
            }
            return false; 
        }
        

    }
}
