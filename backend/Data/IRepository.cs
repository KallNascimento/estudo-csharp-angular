
using backend.Models;

namespace backend.Data;

public interface IRepository
{

    void Add<T>(T entity) where T : class;
    void Update<T>(T entity) where T : class;
    void Delete<T>(T entity) where T : class;
    bool SaveChanges();

    User[] GetAllUsers(bool includeTodos = false);
    User GetUserById(int userId, bool includeTodos = false);
    Todo[] GetAllTodos();
    Todo GetTodoById(int todoId);
}

