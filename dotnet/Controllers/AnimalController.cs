using dotnett.database;
using dotnett.model;
using Microsoft.AspNetCore.Mvc;

namespace dotnett.Controllers;

[ApiController]
[Route("[controller]")]
public class AnimalController : ControllerBase
{
    private MyDbContext _context;
    public AnimalController(MyDbContext context){
        _context = context;
        _context.Database.EnsureCreated();
    }

    [HttpGet(Name = "")]
    public IEnumerable<Animal> Get()
    {
        return _context.Animals.ToArray();
    }

    [HttpGet]
    [Route("{id}")]
    public Animal GetOne(int id){
        return _context.Animals.First(animal => animal.Id == id);
    }

    [HttpPut]
    public void Put(Animal animal){
        _context.Animals.Update(animal);
        _context.SaveChanges();
    }

    [HttpPost]
    public void Post(AnimalPost animalPost){
        var animal = new Animal{
            Id = 0,
            Age = animalPost.Age,
            Name = animalPost.Name
        };
        _context.Animals.Add(animal);
        _context.SaveChanges();
    }

    [HttpDelete]
    [Route("{id}")]
    public void Delete(int id){
        var animal = _context.Animals.FirstOrDefault(animal => animal.Id == id);
        if (animal != null){
            _context.Animals.Remove(animal);
            _context.SaveChanges();
        }
    }
}
