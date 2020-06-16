using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using aspnetcore_contactapp.Data;

namespace aspnetcore_contactapp.Services
{
    public interface IRepository<T> where T : class
    {
        Task<T> Delete(Guid id);
        Task<List<T>> Get();
        Task<T> GetbyId(Guid id);
        Task<bool> Add(T t);
        Task<bool> Put(Guid id, T t);
        Task<bool> Exits(Guid id);
        ApplicationDbContext GetContext();
    }
}