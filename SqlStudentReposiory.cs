using StudentAdminPortalAPI.Datamodels;
using Microsoft.EntityFrameworkCore;

namespace StudentAdminPortalAPI.Repositories
{
    public class SqlStudentReposiory : IStudentRepository
    {
        private readonly StudentAdminContext context;

        public SqlStudentReposiory(StudentAdminContext context)
        {
            this.context = context;
        }

        public async Task<List<student>>GetStudentsAsync()
        {
            return await context.student.Include(nameof(Gender)).Include(nameof(Address)).ToListAsync();
        }
    }
}
