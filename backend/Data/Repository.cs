using System;
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
            query = query.Include(p => p.Todos);

        }

        query = query.AsNoTracking().OrderBy(p => p.Id);

        return query.ToArray();
    }

    public User GetUserById(int userId, bool includeTodo = false)
    {
        IQueryable<User> query = _context.Users;

        if (includeTodo)
        {
            query = query.Include(p => p.Todos);

        }

        query = query.AsNoTracking()
                     .OrderBy(t => t.Id)
                     .Where(user => user.Id == userId);

        return query.FirstOrDefault();
    }
}


