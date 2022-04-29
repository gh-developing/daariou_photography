using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Helper;
using daariiou_photography_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Services
{
    public class UserService
    {
        public PasswordHelper passwordHelper = new PasswordHelper();
        public User loggedInUser;

        private DaariiouPhotographyDBContext _daariiouPhotographyDBContext;

        public UserService(DaariiouPhotographyDBContext daariiouPhotographyDBContext)
        {
            _daariiouPhotographyDBContext = daariiouPhotographyDBContext;
        }

        public List<User> GetAll()
        {
            return _daariiouPhotographyDBContext.Users
                .OrderBy(u => u.Username)
                .ToList();
        }

        public User GetById(int uid)
        {
            return _daariiouPhotographyDBContext.Users
                .FirstOrDefault(u => u.Uid == uid);
        }

        public User Login(string username, string password)
        {
            var hashedPassword = passwordHelper.CreatePasswordHash(password);

            User user = _daariiouPhotographyDBContext.Users.FirstOrDefault(u => u.Username == username);
            if (user.Password == hashedPassword)
            {
                loggedInUser = user;
                return user;
            }
            return null;
        }

        public User Register(User userToAdd)
        {
            if (!usernameExist(userToAdd.Username))
            {
                userToAdd.Password = passwordHelper.CreatePasswordHash(userToAdd.Password);
                _daariiouPhotographyDBContext.Add(userToAdd);
                _daariiouPhotographyDBContext.SaveChangesAsync();
                return userToAdd;
            }
            return null;
        }

        public User Update(User userToUpdate, bool isPasswordChanged)
        {
            if (isPasswordChanged) userToUpdate = updatePassword(userToUpdate);
            _daariiouPhotographyDBContext.Update(userToUpdate);
            _daariiouPhotographyDBContext.SaveChangesAsync();
            return userToUpdate;
        }

        public User Delete(User userToDelete)
        {
            _daariiouPhotographyDBContext.Remove(userToDelete);
            _daariiouPhotographyDBContext.SaveChangesAsync();
            return userToDelete;
        }

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
            User uname = _daariiouPhotographyDBContext.Users
                .FirstOrDefault(u => u.Username == username);

            if (uname == null)
            {
                return false;
            }
            return true;
        }

        private User updatePassword(User userToUpdate)
        {
            var hashedPassword = passwordHelper.CreatePasswordHash(userToUpdate.Password);
            if (hashedPassword != GetById(userToUpdate.Uid).Password) { 
                userToUpdate.Password = hashedPassword;
                return userToUpdate;
            }
            return null;
        }
    }
}
