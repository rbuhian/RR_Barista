namespace RRBarista.Backend.DTOs;

public record ProductCreateDto(
    string Name,
    string Category,
    string Description,
    decimal Price,
    string Emoji
);

public record ProductUpdateDto(
    string Name,
    string Category,
    string Description,
    decimal Price,
    string Emoji
);

public record SaleUpdateDto(
    decimal SalePrice,
    bool SaleActive
);
