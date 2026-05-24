# RR Barista — Sprint Backlog
**Project Manager:** Tsunade (5th Hokage)  
**Project:** RR Barista — Specialty Coffee Shop Web Application  
**Stack:** React + Vite (Frontend) · C# ASP.NET Core (Backend) · SQLite + EF Core (Database)  
**Last Updated:** 2026-05-24

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Done |
| 🔄 | In Progress |
| ⏳ | Pending |
| 🔵 | Carried Forward (completed early / ahead of sprint) |
| 🚫 | Blocked |

---

## Team Roster

| Agent | Specialty |
|---|---|
| **minato** | Rapid scaffolding & project setup |
| **kakashi** | Architecture, API design, system design |
| **naruto** | Full-stack feature implementation |
| **sakura** | Bug fixes & refactoring |
| **sasuke** | Code review |
| **itachi** | Security review |
| **shikamaru** | Performance optimization |
| **rock-lee** | Testing (unit, integration, e2e) |
| **hinata** | UX, accessibility, responsive design |

---

## Definition of Done
A task is **Done** when:
- Code is written and compiles/builds without errors
- Feature works as described in acceptance criteria
- No console errors or warnings introduced
- Responsive on mobile (375px) and desktop (1280px)
- Code reviewed by sasuke before merging

---

## Sprint 1 — Foundation & Project Setup ✅ COMPLETE
**Goal:** Both projects scaffolded, running locally, connected, and the database seeded with initial data.  
**Duration:** 2 days  
**Status:** All 8 tasks done. Backend builds clean. Frontend builds clean.

---

### Backend Tasks

```
✅ [S1-B1] Scaffold ASP.NET Core Web API project
  Owner: minato
  Completed: 2026-05-24
  Notes: EF Core 8.0.15 + SQLite installed. Swagger enabled.
         App configured to run on http://localhost:5000.
  Acceptance criteria:
    ✓ Project created at /backend with dotnet new webapi
    ✓ EF Core + SQLite packages installed (v8.0.15)
    ✓ Swagger/OpenAPI enabled in development
    ✓ App runs on http://localhost:5000
  Depends on: nothing
  Est: S

✅ [S1-B2] Design and implement database models
  Owner: kakashi
  Completed: 2026-05-24
  Notes: Product, Order, OrderItem models created. AppDbContext with
         EF Core fluent config for decimal precision and cascade delete.
  Acceptance criteria:
    ✓ Product model: Id, Name, Category, Description, Price, Emoji,
      SalePrice (nullable), SaleActive, CreatedAt
    ✓ Order model: Id, OrderRef, CustomerName, Contact, Notes,
      Total, Status, Timestamp
    ✓ OrderItem model: Id, OrderId (FK), ProductName, Category, Qty, UnitPrice
    ✓ AppDbContext created with DbSets for all three models
  Depends on: S1-B1
  Est: S

✅ [S1-B3] Run EF Core migrations and seed initial products
  Owner: minato
  Completed: 2026-05-24
  Notes: Migration "InitialCreate" created and applied. DbSeeder runs
         on startup only when Products table is empty. DTOs created
         (ProductDtos.cs, OrderDtos.cs). Program.cs wires up auto-migrate
         + seed on app start.
  Acceptance criteria:
    ✓ Initial migration created and applied (rrbarista.db created on run)
    ✓ 8 seed products inserted on first run:
        Classic Espresso, Caramel Macchiato, Cold Brew, Vanilla Frappé,
        Matcha Latte, Butter Croissant, Mango Smoothie, Signature Blend
    ✓ Seed runs only when the table is empty
  Depends on: S1-B2
  Est: S

✅ [S1-B4] Configure CORS for frontend origin
  Owner: kakashi
  Completed: 2026-05-24
  Notes: "FrontendPolicy" CORS policy defined and applied globally in Program.cs.
  Acceptance criteria:
    ✓ CORS policy allows http://localhost:5173 (Vite dev server)
    ✓ All HTTP methods and headers allowed for development
    ✓ Policy applied globally in Program.cs
  Depends on: S1-B1
  Est: S
```

---

### Frontend Tasks

```
✅ [S1-F1] Scaffold React + Vite project
  Owner: minato
  Completed: 2026-05-24
  Notes: Project scaffolded at /frontend. axios v1.16.1 installed.
         Google Fonts (Playfair Display + Inter) added to index.html.
         Vite error on Windows fixed — node_modules must be installed
         from Windows CMD/PowerShell, not WSL.
  Acceptance criteria:
    ✓ Project created at /frontend with Vite React template
    ✓ axios installed for API calls
    ✓ Fonts loaded: Playfair Display + Inter (Google Fonts)
    ✓ App runs on http://localhost:5173
  Depends on: nothing
  Est: S

✅ [S1-F2] Create global styles and design tokens
  Owner: minato
  Completed: 2026-05-24
  Notes: All CSS variables from mockup defined in src/index.css.
         Default Vite styles fully replaced. #root set to full width.
  Acceptance criteria:
    ✓ All CSS variables defined (--brown-dark, --gold, --cream, etc.)
    ✓ Base reset styles applied
    ✓ Scrollbar styles applied
    ✓ Body font set to Inter
  Depends on: S1-F1
  Est: S

✅ [S1-F3] Create API service layer
  Owner: naruto
  Completed: 2026-05-24
  Notes: src/services/api.js created with axios instance. Admin token
         injected via adminHeaders() helper. All CRUD + order functions exported.
  Acceptance criteria:
    ✓ /frontend/src/services/api.js created
    ✓ Base URL points to http://localhost:5000/api
    ✓ Functions exported: getProducts(), createProduct(), updateProduct(),
      deleteProduct(), updateProductSale(), getOrders(), createOrder(),
      updateOrderStatus(), adminLogin()
    ✓ axios instance configured with base URL
  Depends on: S1-F1
  Est: S

✅ [S1-F4] Create AppContext (global state)
  Owner: naruto
  Completed: 2026-05-24
  Notes: AppContext + AppProvider created. useApp() hook exported.
         Cart state uses immutable updates. effPrice() helper handles
         sale price logic. Toast state managed here with auto-dismiss.
  Acceptance criteria:
    ✓ React Context created at /frontend/src/context/AppContext.jsx
    ✓ State: products, orders, cart, currentPage, adminLoggedIn, toast
    ✓ Cart actions: addToCart, changeQty, clearCart, cartTotal, cartCount
    ✓ Page navigation: showPage(page)
    ✓ Context wraps the entire App via main.jsx
  Depends on: S1-F1
  Est: M
```

---

### Carried Forward

```
🔵 [S3-F4] Build Toast notification component  ← completed early (needed by App.jsx)
  Owner: minato
  Completed: 2026-05-24
  Notes: Built during Sprint 1 setup as it was immediately needed.
         Will be marked done when Sprint 3 is formally tracked.
  Acceptance criteria:
    ✓ Fixed bottom-center, slides up on show (CSS transform)
    ✓ Auto-dismisses after 2.8 seconds
    ✓ Three variants: default (brown), success (green), error (red)
    ✓ Accessible: role="alert" aria-live="polite"
```

---

## Sprint 2 — Navigation, Hero & Menu Page
**Goal:** Users can visit the app, see the hero landing page, browse the full menu, and filter by category.  
**Duration:** 2 days  
**Status:** ⏳ Not started

---

```
⏳ [S2-B1] Implement GET /api/products endpoint
  Owner: naruto
  Acceptance criteria:
    - Returns all products as JSON array
    - Response includes all fields including salePrice and saleActive
    - Returns 200 OK with empty array if no products
    - Products ordered by category then name
  Depends on: S1-B3 ✅
  Est: S

⏳ [S2-F1] Build Navbar component
  Owner: naruto
  Acceptance criteria:
    - Fixed top navigation, height 64px, dark background
    - RR Barista logo with coffee cup SVG icon and gold "Specialty Coffee" subtitle
    - Nav links: Home, Menu, My Orders, Admin
    - Active link highlighted with gold
    - Cart button with item count badge (hidden when empty)
    - Fully responsive: logo subtitle hidden on mobile
  Depends on: S1-F4 ✅
  Est: M

⏳ [S2-F2] Build Hero section
  Owner: naruto
  Acceptance criteria:
    - Full viewport height section
    - coffee_shop.png as background with dark overlay
    - "Now Serving" eyebrow text with gold decorative lines
    - "RR Barista / Specialty Coffee" title in Playfair Display
    - Subtitle paragraph
    - "View Our Menu" primary button → navigates to menu page
    - "Track My Order" ghost button → navigates to orders page
    - Background attachment fixed (parallax) on desktop
  Depends on: S2-F1
  Est: M

⏳ [S2-F3] Build MenuPage component with category filters
  Owner: naruto
  Acceptance criteria:
    - Fetches products from GET /api/products on mount
    - Section header: "Our Menu" with gold rule divider
    - Filter buttons: All + one per unique category
    - Active filter highlighted
    - Filtered product list updates without page reload
  Depends on: S2-B1, S1-F3 ✅
  Est: M

⏳ [S2-F4] Build ProductCard component
  Owner: naruto
  Acceptance criteria:
    - Category-colored gradient image area with SVG icon
    - "Sale" ribbon badge when saleActive is true
    - Product name (Playfair Display), category label (gold), description
    - Price display: strikethrough original + red sale price when on sale
    - "Add" button with plus icon
    - Hover: card lifts with shadow
  Depends on: S2-F3
  Est: M

⏳ [S2-R1] Code review: Navbar + Hero + Menu
  Owner: sasuke
  Acceptance criteria:
    - No unused props or state
    - No hardcoded colors (must use CSS variables)
    - API error handled gracefully (console.error at minimum)
    - Components are reasonably sized (no 300-line monoliths)
  Depends on: S2-F1, S2-F2, S2-F3, S2-F4
  Est: S
```

---

## Sprint 3 — Cart & Checkout Flow
**Goal:** Users can add items to the cart, adjust quantities, and complete a checkout — order is saved to the database.  
**Duration:** 2 days  
**Status:** ⏳ Not started

---

```
⏳ [S3-B1] Implement POST /api/orders endpoint
  Owner: naruto
  Acceptance criteria:
    - Accepts: customerName (required), contact, notes, items array
    - Generates OrderRef: "RRB-" + 6-digit timestamp suffix
    - Saves order + all order items to SQLite
    - Returns 201 Created with the full order object including OrderRef
    - Returns 400 Bad Request if customerName is missing
  Depends on: S1-B3 ✅
  Est: M

⏳ [S3-F1] Build CartSidebar component
  Owner: naruto
  Acceptance criteria:
    - Slides in from the right (right: -400px → right: 0)
    - Dark overlay backdrop closes cart on click
    - Cart item rows: category thumbnail, name, unit price, qty controls, subtotal
    - Qty +/- buttons update cart state; removing last unit removes item
    - Empty cart state with bag icon and message
    - Footer shows total and "Proceed to Checkout" button
    - Cart count badge in Navbar updates reactively
  Depends on: S2-F1, S1-F4 ✅
  Est: L

⏳ [S3-F2] Build CheckoutModal component
  Owner: naruto
  Acceptance criteria:
    - Opens after clicking "Proceed to Checkout" (cart closes first)
    - Fields: Your Name (required), Contact Number, Order Notes
    - Order summary table: item × qty → subtotal, total row
    - "Place Order" calls POST /api/orders
    - Validates name not empty; shows toast error if missing
    - On success: closes modal, clears cart, opens SuccessModal
    - On API error: shows error toast, keeps modal open
  Depends on: S3-B1, S3-F1
  Est: M

⏳ [S3-F3] Build SuccessModal component
  Owner: naruto
  Acceptance criteria:
    - Gold gradient check icon
    - "Order Placed!" heading, thank-you message
    - Displays order reference number in gold
    - "View My Orders" button → navigates to orders page and closes modal
  Depends on: S3-F2
  Est: S

🔵 [S3-F4] Build Toast notification component  ← DONE (completed in Sprint 1)
  Owner: minato
  Completed: 2026-05-24
  Acceptance criteria:
    ✓ Fixed bottom-center, slides up on show
    ✓ Auto-dismisses after 2.8 seconds
    ✓ Three variants: default (brown), success (green), error (red)
    ✓ Accessible: role="alert" aria-live="polite"
  Depends on: S1-F4 ✅

⏳ [S3-R1] Code review: Cart + Checkout + Toast
  Owner: sasuke
  Acceptance criteria:
    - Cart state mutations are immutable (no direct array mutation)
    - API call in CheckoutModal has try/catch
    - Modal closes on Escape key
    - No memory leaks from uncleaned event listeners
  Depends on: S3-F1, S3-F2, S3-F3, S3-F4 🔵
  Est: S
```

---

## Sprint 4 — My Orders Page & Admin Panel
**Goal:** Customers can view their order history. Admins can manage products and update order statuses.  
**Duration:** 3 days  
**Status:** ⏳ Not started

---

```
⏳ [S4-B1] Implement GET /api/orders endpoint (admin)
  Owner: naruto
  Acceptance criteria:
    - Returns all orders with nested items, ordered by timestamp descending
    - Requires X-Admin-Token header (value: "admin123" for now)
    - Returns 401 Unauthorized if token missing or wrong
  Depends on: S1-B3 ✅
  Est: S

⏳ [S4-B2] Implement PUT /api/orders/{ref}/status endpoint
  Owner: naruto
  Acceptance criteria:
    - Accepts status in request body: pending | preparing | ready | delivered
    - Requires X-Admin-Token header
    - Returns 200 OK with updated order
    - Returns 404 if order ref not found
    - Returns 400 if status value is invalid
  Depends on: S4-B1
  Est: S

⏳ [S4-B3] Implement Products CRUD endpoints
  Owner: naruto
  Acceptance criteria:
    - POST /api/products — create product, requires X-Admin-Token, returns 201
    - PUT /api/products/{id} — update product, requires token, returns 200
    - DELETE /api/products/{id} — delete product, requires token, returns 204
    - PUT /api/products/{id}/sale — set salePrice + saleActive, requires token
    - All write endpoints validate required fields and return 400 on failure
  Depends on: S2-B1
  Est: M

⏳ [S4-F1] Build OrdersPage component (customer view)
  Owner: naruto
  Acceptance criteria:
    - Reads orders from AppContext (orders placed this session)
    - Order cards: ref number, customer name, timestamp, items list, total
    - Status pill with color: pending (yellow), preparing (blue),
      ready (green), delivered (grey)
    - Empty state with orders icon, message, and "Browse Menu" CTA
  Depends on: S1-F4 ✅
  Est: M

⏳ [S4-F2] Build AdminPage — gate + panel shell
  Owner: naruto
  Acceptance criteria:
    - Password gate shown when not logged in
    - Login validates against POST /api/admin/login (or hardcoded "admin123")
    - Shows error toast on wrong password
    - Panel has admin bar with "RR Barista — Admin Panel" title + Sign Out button
    - Three tabs: Products | Sales & Discounts | Orders
    - Logout resets adminLoggedIn state and shows gate again
  Depends on: S1-F4 ✅
  Est: M

⏳ [S4-F3] Build Admin Products tab (CRUD)
  Owner: naruto
  Acceptance criteria:
    - Add New Product form: Name, Category (select), Description, Price, Emoji
    - Submit calls POST /api/products, refreshes table
    - Products table: Name, Category, Price, Sale Price, Sale Active, Actions
    - Edit button pre-fills form; Save calls PUT /api/products/{id}
    - Delete button confirms then calls DELETE /api/products/{id}
    - Cancel button resets form to "Add" mode
  Depends on: S4-B3, S4-F2
  Est: L

⏳ [S4-F4] Build Admin Sales & Discounts tab
  Owner: naruto
  Acceptance criteria:
    - Product dropdown + sale price input + "Activate immediately" checkbox
    - Save calls PUT /api/products/{id}/sale
    - Sales grid: one card per product showing original price, sale price, toggle button
    - Toggle activates/deactivates sale via API
    - Menu page reflects sale changes immediately (re-fetch on tab visit)
  Depends on: S4-B3, S4-F2
  Est: M

⏳ [S4-F5] Build Admin Orders tab
  Owner: naruto
  Acceptance criteria:
    - Fetches all orders from GET /api/orders with admin token
    - Order cards matching customer view but with status dropdown
    - Status dropdown change calls PUT /api/orders/{ref}/status
    - Status pill updates immediately on change
    - Empty state if no orders
  Depends on: S4-B1, S4-B2, S4-F2
  Est: M

⏳ [S4-R1] Code review: Admin panel + Orders page
  Owner: sasuke
  Acceptance criteria:
    - Admin token is never stored in localStorage (sessionStorage or in-memory only)
    - All admin API calls check response status before rendering
    - Form inputs sanitized (trim whitespace, validate types)
    - Delete confirmation prevents accidental data loss
  Depends on: S4-F1, S4-F2, S4-F3, S4-F4, S4-F5
  Est: M
```

---

## Sprint 5 — Quality, Security & Polish
**Goal:** App is secure, tested, accessible, and production-ready.  
**Duration:** 2 days  
**Status:** ⏳ Not started

---

```
⏳ [S5-S1] Security review
  Owner: itachi
  Acceptance criteria:
    - Admin endpoints protected — unauthenticated requests return 401
    - No sensitive data (passwords, tokens) in API responses
    - Input validation on all POST/PUT endpoints (no SQL injection via EF Core raw queries)
    - CORS locked down for production (not open wildcard)
    - "admin123" hardcoded password flagged with a production hardening note
  Depends on: S4-B1, S4-B2, S4-B3
  Est: M

⏳ [S5-T1] Write backend integration tests
  Owner: rock-lee
  Acceptance criteria:
    - xUnit test project created at /backend.Tests
    - Tests for: GET /api/products, POST /api/orders (valid + missing name),
      PUT /api/orders/{ref}/status (valid + invalid + 404),
      POST /api/products (with + without admin token)
    - Uses WebApplicationFactory with in-memory SQLite
    - All tests pass with dotnet test
  Depends on: S4-B1, S4-B2, S4-B3
  Est: L

⏳ [S5-T2] Write frontend component tests
  Owner: rock-lee
  Acceptance criteria:
    - Vitest + React Testing Library configured
    - Tests: ProductCard renders sale badge when saleActive,
      CartSidebar adds/removes items, CheckoutModal validates name field,
      Toast appears and auto-dismisses
    - All tests pass with npm test
  Depends on: S3-F1, S3-F2, S3-F3, S3-F4 🔵
  Est: M

⏳ [S5-U1] UX & accessibility audit
  Owner: hinata
  Acceptance criteria:
    - All interactive elements reachable by keyboard (Tab key)
    - Focus rings visible on all buttons and inputs
    - Color contrast passes WCAG AA (especially gold on cream)
    - All images and icons have appropriate aria-label or aria-hidden
    - Mobile layout verified at 375px — no overflow, touch targets ≥ 44px
    - Cart sidebar and modals trap focus correctly
  Depends on: S2-F2, S2-F3, S3-F1, S3-F2, S4-F1
  Est: M

⏳ [S5-P1] Performance review
  Owner: shikamaru
  Acceptance criteria:
    - Products list doesn't re-fetch on every navigation (cache in context)
    - ProductCard uses React.memo to prevent unnecessary re-renders
    - No N+1 queries in EF Core (verify with query logging)
    - Bundle size reviewed — no unnecessary large dependencies
  Depends on: S2-F3, S2-F4
  Est: M

⏳ [S5-F1] Final responsive polish
  Owner: hinata
  Acceptance criteria:
    - Navigation collapses gracefully on mobile (logo subtitle hidden)
    - Products grid adjusts columns: 1 col (375px), 2 col (640px), 3+ col (900px+)
    - Admin panel tables horizontally scrollable on mobile
    - Modals full-width on mobile with reduced padding
    - No text overflow anywhere on mobile
  Depends on: S5-U1
  Est: M
```

---

## Backlog (Future Sprints)

These are validated ideas that don't fit the current scope. Revisit after Sprint 5 ships.

```
⏳ Real authentication — replace hardcoded admin password with proper JWT auth
    Owner: itachi + kakashi
    Est: L

⏳ Order real-time updates — admin status changes push to customer's My Orders page
    Owner: naruto
    Est: L

⏳ Product image upload — replace gradient placeholders with real photos
    Owner: naruto + minato
    Est: M

⏳ Customer order lookup by name/reference — so orders persist across sessions
    Owner: naruto
    Est: M

⏳ Print receipt / PDF export for orders
    Owner: naruto
    Est: S

⏳ Dark mode
    Owner: hinata
    Est: M

⏳ Sales report dashboard for admin (revenue by category, top products)
    Owner: shikamaru + naruto
    Est: L
```

---

## Sprint Summary

| Sprint | Goal | Duration | Key Owners | Status |
|--------|------|----------|------------|--------|
| Sprint 1 | Project scaffolding, DB models, API service, global state | 2 days | minato, kakashi, naruto | ✅ Complete |
| Sprint 2 | Navbar, Hero, Menu page with live product data | 2 days | naruto, sasuke | ⏳ Not started |
| Sprint 3 | Cart sidebar, Checkout, Order placement | 2 days | naruto, minato, sasuke | ⏳ Not started |
| Sprint 4 | My Orders page, Admin panel (Products + Sales + Orders) | 3 days | naruto, sasuke | ⏳ Not started |
| Sprint 5 | Security, testing, accessibility, performance, polish | 2 days | itachi, rock-lee, hinata, shikamaru | ⏳ Not started |
| **Total** | | **~11 days** | | **1 / 5 sprints done** |

---

> **Tsunade's note:** Sprint 1 delivered clean — both ends build, DB migrates on startup, seed data loads, CORS is wired. Toast component was completed early and carried into Sprint 3. Next up: Sprint 2. Don't keep me waiting. — 綱手
