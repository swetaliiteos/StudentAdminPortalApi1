using StudentAdminPortalAPI.Datamodels;
using System.Threading.Tasks;

namespace StudentAdminPortalAPI.Repositories
{
    public interface IStudentRepository
    {
       Task<List<student>>GetStudentsAsync();
    }
}
