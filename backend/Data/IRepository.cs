using backend.Models;

namespace backend.Data
{
    public interface IRepository
    {
        //Assinatura dos metodos
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //Pessoa
        Task<User[]> GetAllUsersAsync(bool includeTodo);
        Task<User> GetUserAsyncById(int userId, bool includeTodo);

        //Tarefas
        Task<Todo[]> GetAllTodosAsync(bool includeUser);
        Task<Todo> GetTodoAsyncById(int todoId, bool includeUser);

    }
}