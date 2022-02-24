using daariiou_photography_backend.DTO;
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
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class UserController : ControllerBase
    {
        public PasswordHelper passwordHelper = new PasswordHelper();
        public User loggedInUser;


        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Get()
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
        public async Task<ActionResult<UserDTO>> GetById(int uid)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                List<User> users = await context.Users
                    .AsQueryable()
                    .Where(u => u.Uid == uid)
                    .Include(u => u.Pictures)
                    .Include(u => u.Shootings)
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
        [HttpPost]
        public async Task<ActionResult<User>> Register(User userToAdd)
        {   
            using (var context = new DaariiouPhotographyDBContext())
            {
                if (!usernameExist(userToAdd.Username))
                {
                    userToAdd.Password = passwordHelper.CreatePasswordHash(userToAdd.Password);
                    context.Add(userToAdd);
                    await context.SaveChangesAsync();
                    return Ok(userToAdd);
                }
                return null;
            }
        }

        [Route("[action]")]
        [HttpGet]
        public bool IsAdmin()
        {
            if (loggedInUser.Username == "Daariou Photography")
            {
                return true;
            }
            return false; 
        }

        private bool usernameExist(string username)
        {
            using (var context = new DaariiouPhotographyDBContext())
            {
                var uname = context.Users.Where(u => u.Username == username).First();
                if (uname == null)
                {
                    return false;
                }
                return true;
            }

        }

    }
}
