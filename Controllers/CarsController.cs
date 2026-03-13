using CarApi.Data;
using CarApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController: ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Car>> GetCars([FromQuery] string? make)
        {
            var cars = CarDataStore.Cars.AsEnumerable();
            if (!string.IsNullOrWhiteSpace(make))
            {
                cars = cars.Where(c => c.Make.Equals(make, StringComparison.OrdinalIgnoreCase));
            }

            return Ok(cars);
        }
    }
}
