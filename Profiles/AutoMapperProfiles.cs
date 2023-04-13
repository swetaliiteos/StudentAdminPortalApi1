using AutoMapper;
using StudentAdminPortalAPI.DomainModels;
using DataModels=StudentAdminPortalAPI.Datamodels;

namespace StudentAdminPortalAPI.Profiles
{
    public class AutoMapperProfiles:Profile
    {
       public AutoMapperProfiles()
        {
            CreateMap<DataModels.student, Student>()
           .ReverseMap();
            CreateMap<DataModels.Gender, Gender>()
           .ReverseMap();
            CreateMap<DataModels.Address, Address>()
           .ReverseMap();
        }
    }
}
