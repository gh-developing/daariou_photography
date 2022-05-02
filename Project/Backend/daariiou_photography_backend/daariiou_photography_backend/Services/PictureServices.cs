using AutoMapper;
using daariiou_photography_backend.DTO;
using daariiou_photography_backend.Helper;
using daariiou_photography_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Services
{
    public class PictureService
    {
        private DaariiouPhotographyDBContext _daariiouPhotographyDBContext;

        public PictureService(DaariiouPhotographyDBContext daariiouPhotographyDBContext)
        {
            _daariiouPhotographyDBContext = daariiouPhotographyDBContext;
        }

        public List<Picture> Get()
        {
            return _daariiouPhotographyDBContext.Pictures
                .OrderBy(a => Guid.NewGuid())
                .ToList();
        }

        public List<Picture> GetByKoSId(int kosID)
        {
            return _daariiouPhotographyDBContext.Pictures
                .Include(x => x.KoS)
                .Include(x => x.UidNavigation)
                .OrderBy(a => Guid.NewGuid())
                .Where(p => p.KoSid == kosID)
                .ToList();
        }

        public List<Picture> GetByUserID(int uId)
        {

            return _daariiouPhotographyDBContext.Pictures
                .Include(x => x.KoS)
                .Include(x => x.UidNavigation)
                .OrderBy(a => Guid.NewGuid())
                .Where(p => p.Uid == uId)
                .ToList();
        }

        public Picture Post(Picture pictureToAdd)
        {
            _daariiouPhotographyDBContext.Add(pictureToAdd);
            _daariiouPhotographyDBContext.SaveChanges();
            return pictureToAdd;
        }
    }
}
