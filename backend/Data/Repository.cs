using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

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

    public bool SaveChanges()
    {
        return (_context.SaveChanges() > 0);
    }

    public User[] GetAllUsers(bool includeTodos = false)
    {
        IQueryable<User> query = _context.Users;

        if (includeTodos)
        {
            query = query.Include(t => t.Todos);
        }

        query = query.AsNoTracking().OrderBy(todo => todo.Id);

        return query.ToArray();
    }

    public User GetUserById(int userid, bool includeTodo = false)
    {
        IQueryable<User> query = _context.Users;

        if (includeTodo)
        {
            query = query.Include(todo => todo.Todos);
        }

        query = query.AsNoTracking().OrderBy(user => user.Name).Where(user => user.Id == userid);

        return query.FirstOrDefault();
    }

    public Todo GetTodoById(int todoId)
    {
        IQueryable<Todo> query = _context.Todos;

        query = query.AsNoTracking().OrderBy(todo => todo.Id).Where(todo => todo.Id == todoId);

        return query.FirstOrDefault();
    }

    public Todo[] GetAllTodos()
    {
        IQueryable<Todo> query = _context.Todos;
        query = query.AsNoTracking();
        return query.ToArray();
    }
}
