namespace RRBarista.Backend.Models;

public class Order
{
    public int Id { get; set; }
    public string OrderRef { get; set; } = string.Empty;
    public string CustomerName { get; set; } = string.Empty;
    public string Contact { get; set; } = string.Empty;
    public string Notes { get; set; } = string.Empty;
    public decimal Total { get; set; }
    public string Status { get; set; } = "pending";
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    public List<OrderItem> Items { get; set; } = [];
}
