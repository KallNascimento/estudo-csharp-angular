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
        Task<Person[]> GetAllPeopleAsync(bool includeJob);
        Task<Person> GetPeopleAsyncById(int personId, bool includeJob);

        //Tarefas
        Task<Job[]> GetAllJobsAsync(bool includePerson);
        Task<Job> GetJobAsyncById(int jobId, bool includePerson);

    }
}