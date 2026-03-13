using CarApi.Data;
using CarApi.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace CarApi.Services
{
    public class RegistrationCheckerService: BackgroundService
    {
        private readonly IHubContext<RegistrationHub> _hubContext;
        private readonly ILogger<RegistrationCheckerService> _logger;
        public RegistrationCheckerService(
            IHubContext<RegistrationHub> hubContext, 
            ILogger<RegistrationCheckerService> logger)
        {
            _hubContext = hubContext;
            _logger = logger;
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("RegistrationCheckerService started.");
            while (!stoppingToken.IsCancellationRequested)
            {
                var registrationStatuses = CarDataStore.Cars.Select(car => new
                {
                    car.Id,
                    car.Make,
                    car.Model,
                    car.RegistrationExpiry,
                    Status = car.RegistrationExpiry < DateTime.Now ? "Expired" : "Active"
                });

                await _hubContext.Clients.All.SendAsync("ReceiveRegistrationStatus", registrationStatuses, stoppingToken);

                _logger.LogInformation("Registration statuses broadcasted at: {time}", DateTimeOffset.Now);

                await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);
            }
        }
    }
}
