using RRBarista.Backend.Models;

namespace RRBarista.Backend.Data;

public static class DbSeeder
{
    public static void Seed(AppDbContext db)
    {
        if (db.Products.Any()) return;

        db.Products.AddRange(
            new Product { Name = "Classic Espresso",  Category = "Hot Coffee",  Description = "Bold, concentrated single-shot pulled from our house blend.",           Price = 95,  SalePrice = null, SaleActive = false },
            new Product { Name = "Caramel Macchiato", Category = "Hot Coffee",  Description = "Velvety steamed milk with espresso and a caramel drizzle.",             Price = 140, SalePrice = 110,  SaleActive = true  },
            new Product { Name = "Cold Brew",         Category = "Cold Coffee", Description = "Slow-steeped 12-hour cold brew, smooth and never bitter.",              Price = 130, SalePrice = null, SaleActive = false },
            new Product { Name = "Vanilla Frappé",    Category = "Cold Coffee", Description = "Blended iced coffee with real vanilla bean and whipped cream.",         Price = 150, SalePrice = 120,  SaleActive = false },
            new Product { Name = "Matcha Latte",      Category = "Tea",         Description = "Ceremonial-grade matcha whisked with steamed oat milk.",                Price = 135, SalePrice = 105,  SaleActive = true  },
            new Product { Name = "Butter Croissant",  Category = "Pastries",    Description = "Flaky, golden croissant baked fresh every morning.",                    Price = 75,  SalePrice = null, SaleActive = false },
            new Product { Name = "Mango Smoothie",    Category = "Smoothies",   Description = "Fresh Philippine mango blended with yogurt and a touch of honey.",     Price = 120, SalePrice = null, SaleActive = false },
            new Product { Name = "Signature Blend",   Category = "Specials",    Description = "Our exclusive RR house roast — available today only.",                  Price = 160, SalePrice = 130,  SaleActive = true  }
        );

        db.SaveChanges();
    }
}
