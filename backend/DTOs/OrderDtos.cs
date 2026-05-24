namespace RRBarista.Backend.DTOs;

public record OrderItemDto(
    string Name,
    string Category,
    int Qty,
    decimal Price
);

public record OrderCreateDto(
    string CustomerName,
    string Contact,
    string Notes,
    List<OrderItemDto> Items
);

public record OrderStatusDto(string Status);
