using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {

            _context.Remove(entity);
        }

        public async Task<bool> SaveChangesAsync()
        {
             return (await _context.SaveChangesAsync()) > 0;
        }

        public Task<Person[]> GetAllPeopleAsync(bool includeJob = true)
        {
           IQueryable<Person> query = _context.Person;

           if(includeJob){
            query  = query.Include(c=>c.Job)
           }
           query = query.AsNoTracking().OrderBy(person=>person.Id)
           return   await query.ToArrayAsync();
        }

        public async Task<Person> GetPeopleAsyncById(int personId, bool includeJob)
        {
            IQueryable<Person> query = (IQueryable<Person>)_context.Jobs;

            if(includeJob){
                query = query.Include(pe => pe.Jobs);
            }
            query = query.AsNoTracking()
            .OrderBy(person => person.Id)
            .Where(person => person.Id == personId);

            return await query.FirstOrDefaultAsync();
        }
        public Task<Job[]> GetAllJobsAsync(bool includePerson)
        {
            throw new NotImplementedException();
        }

       

        public Task<Job> GetJobAsyncById(int jobId, bool includePerson)
        {
            throw new NotImplementedException();
        }

        

    }
}