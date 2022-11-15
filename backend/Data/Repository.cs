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

        //-----------                                           ----------------------//

        public async Task<User[]> GetAllUsersAsync(bool includeTodo = true)
        {
            IQueryable<User> query = (IQueryable<User>)_context.Todos;

            if (includeTodo)
            {
                query = query.Include(c => c.Todos);
            }
            query = query.AsNoTracking().OrderBy(person => person.Id);
            return await query.ToArrayAsync();
        }

        public async Task<User> GetUserAsyncById(int personId, bool includeTodo)
        {
            IQueryable<User> query = (IQueryable<User>)_context.Todos;

            if (includeTodo)
            {
                query = query.Include(u => u.Name);
            }
            query = query
                .AsNoTracking()
                .OrderBy(person => person.Id)
                .Where(person => person.Id == personId);

            return await query.FirstOrDefaultAsync();
        }

        public Task<Todo[]> GetAllTodosAsync(bool includePerson)
        {
            throw new NotImplementedException();
        }

        public Task<Todo> GetTodoAsyncById(int todoId, bool includeUser)
        {
            throw new NotImplementedException();
        }
    }
}
