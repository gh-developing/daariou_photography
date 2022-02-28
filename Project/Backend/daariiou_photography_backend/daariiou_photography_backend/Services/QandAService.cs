using daariiou_photography_backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace daariiou_photography_backend.Services
{
    public class QandAService
    {
        private DaariiouPhotographyDBContext _daariiouPhotographyDBContext;

        public QandAService(DaariiouPhotographyDBContext daariiouPhotographyDBContext)
        {
            _daariiouPhotographyDBContext = daariiouPhotographyDBContext;
        }

        public List<Qandum> GetAll()
        {
            return _daariiouPhotographyDBContext.QandAs.ToList();
        }
    }
}
