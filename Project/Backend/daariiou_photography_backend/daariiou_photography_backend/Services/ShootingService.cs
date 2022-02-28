using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Services
{
    public class ShootingService
    {
        private DaariiouPhotographyDBContext _daariiouPhotographyDBContext;
        public ShootingService(DaariiouPhotographyDBContext daariiouPhotographyDBContext)
        {
            _daariiouPhotographyDBContext = daariiouPhotographyDBContext;
        }

        public List<Shooting> GetForAdmin()
        {
            return _daariiouPhotographyDBContext.Shootings
                .Include(s => s.Kos)
                .Include(s => s.UidNavigation)
                .Where(s => s.Status != "Declined")
                .OrderBy(s => s.Date)
                .ToList();

        }

        public List<Shooting> GetForUser(int uId)
        {
            return _daariiouPhotographyDBContext.Shootings
                .Include(s => s.Kos)
                .Include(s => s.UidNavigation)
                .Where(s => s.Uid == uId)
                .OrderBy(s => s.Date)
                .ToList();
        }

        public Shooting Add(Shooting shootingToAdd)
        {
            shootingToAdd.Status = "Open";
            _daariiouPhotographyDBContext.Add(shootingToAdd);
            _daariiouPhotographyDBContext.SaveChangesAsync();
            return shootingToAdd;
        }

        public Shooting ChangeStatus(Shooting shootingToUpdate, string status)
        {
            shootingToUpdate.Status = status;
            _daariiouPhotographyDBContext.Update(shootingToUpdate);
            _daariiouPhotographyDBContext.SaveChangesAsync();
            return shootingToUpdate;
        }
    }
}
