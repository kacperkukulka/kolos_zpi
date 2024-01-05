using dotnett.model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnett.database;

public class MyDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("Hello");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Animal>().HasData(
            new Animal{Id = 1, Age = 12, Name = "Azor"},
            new Animal{Id = 2, Age = 32, Name = "Tosia"},
            new Animal{Id = 3, Age = 44, Name = "Wiktor"}
        );
    }

    public DbSet<Animal> Animals { get; set; }
}
