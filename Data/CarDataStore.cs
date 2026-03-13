using CarApi.Models;

namespace CarApi.Data
{
    public static class CarDataStore
    {
        public static List<Car> Cars = new List<Car>
        {
            new Car { Id = 1, Make = "Toyota", Model = "Corolla", Year = 2019, RegistrationExpiry = new DateTime(2024, 1, 15) },
            new Car { Id = 2, Make = "Toyota", Model = "Camry", Year = 2020, RegistrationExpiry = new DateTime(2026, 6, 30) },
            new Car { Id = 3, Make = "Ford", Model = "Mustang", Year = 2021, RegistrationExpiry = new DateTime(2025, 3, 10) },
            new Car { Id = 4, Make = "Ford", Model = "Ranger", Year = 2018, RegistrationExpiry = new DateTime(2024, 11, 20) },
            new Car { Id = 5, Make = "Honda", Model = "Civic", Year = 2022, RegistrationExpiry = new DateTime(2026, 8, 1) },
            new Car { Id = 6, Make = "Honda", Model = "CR-V", Year = 2020, RegistrationExpiry = new DateTime(2024, 5, 5) },
            new Car { Id = 7, Make = "BMW", Model = "3 Series", Year = 2021, RegistrationExpiry = new DateTime(2026, 12, 31) },
            new Car { Id = 8, Make = "BMW", Model = "X5", Year = 2019, RegistrationExpiry = new DateTime(2024, 9, 18) },
        };
    }
}
