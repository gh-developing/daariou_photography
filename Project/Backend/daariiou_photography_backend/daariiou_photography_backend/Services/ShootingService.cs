﻿using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Models;
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
                .Where(s => s.Status != "Declined")
                .OrderBy(s => s.Date)
                .ToList();

        }

        public List<Shooting> GetForUser(int uId)
        {
            return _daariiouPhotographyDBContext.Shootings
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

        public Shooting ChangeStatus(int shootingIdToUpdate, string status, string reasonRejected)
        {
	        var shootingToUpdate = _daariiouPhotographyDBContext.Shootings.Where(s => s.Sid == shootingIdToUpdate)
		        .FirstOrDefault();
	        shootingToUpdate.Status = status;
	        shootingToUpdate.ReasonDeclined = reasonRejected;
	            _daariiouPhotographyDBContext.Update(shootingToUpdate);
            _daariiouPhotographyDBContext.SaveChangesAsync();
            return shootingToUpdate;
        }
    }
}