using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using aspnetcore_contactapp.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using aspnetcore_contactapp.Data;
using Microsoft.AspNetCore.Mvc;


namespace aspnetcore_contactapp.Services
{

    public class Repository<T> : IRepository<T> where T : class
    {
        private ApplicationDbContext _context;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
        }

        public ApplicationDbContext GetContext(){
            return _context ;
        }

        public async Task<List<T>> Get()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetbyId(Guid id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public virtual async Task<bool> Add(T t)
        {
            _context.Set<T>().Add(t);
            return await _context.SaveChangesAsync() == 1;
        }

        public async Task<T> Delete(Guid id)
        {
            var row = await _context.Set<T>().FindAsync(id);
            if (row == null) return await Task.FromResult(row);
            _context.Set<T>().Remove(row);
            var d = await _context.SaveChangesAsync() == 1;
            if(d == true){
                return row ; 
            }else{
                return await Task.FromResult(row);
            }
        }

        public async Task<bool> Put(Guid id, T t)
        {
            var row = await _context.Set<T>().FindAsync(id);
            if (row == null) return false;
            _context.Entry(row).CurrentValues.SetValues(t);
            return await _context.SaveChangesAsync() == 1;
        }

        public async Task<bool> Exits(Guid id)
        {
            return  await _context.Set<T>().FindAsync(id) != null;
        }
    }
}