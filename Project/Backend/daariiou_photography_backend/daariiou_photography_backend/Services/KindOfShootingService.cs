using daariiou_photography_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Services
{
    public class KindOfShootingService
    {
        private DaariiouPhotographyDBContext _daariiouPhotographyDBContext;
        public KindOfShootingService(DaariiouPhotographyDBContext daariiouPhotographyDBContext)
        {
            _daariiouPhotographyDBContext = daariiouPhotographyDBContext;
        }

        public List<KindOfShooting> GetAll()
        {
            return _daariiouPhotographyDBContext.KindOfShootings.ToList();
        }

        public KindOfShooting GetById(int id)
        {
            return _daariiouPhotographyDBContext.KindOfShootings.FirstOrDefault(x => x.KoSid == id);
        }
    }
}
