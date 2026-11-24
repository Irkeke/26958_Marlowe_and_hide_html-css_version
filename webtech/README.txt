MARLOWE & HIDE — HANDBAG MANUFACTURING MANAGEMENT PORTAL
Coursework build: Developing a Simple University Web Portal (reskinned)
Structured using the MVC (Model-View-Controller) pattern
=========================================================================

FOLDER STRUCTURE (MVC)
------------------------
index.html          Home page (View) - required filename, kept at site root
about.html           Company description, mission, vision (View) - root
contact.html          Address, phone, email, contact form (View) - root

datetime.php           FRONT CONTROLLER for the one page with real PHP.
                        Its only job is to load DateController and run it.

public/
  css/style.css         Shared stylesheet (design system) for every page
  js/main.js             Shared View behaviour only: mobile nav toggle.
                          Page-specific behaviour lives in app/controllers,
                          not here.

app/
  models/               MODELS - own the data only. No HTML, no DOM access.
    InventoryModel.js     Materials data + low-stock lookup
    OrdersModel.js         Orders data + open-order count
    ProductionModel.js      Station queues (cutting/stitching/hardware/QC)
    DashboardModel.js        Weekly-output chart data + KPI deltas
    DateModel.php             Reads the server's date/time (PHP)

  controllers/            CONTROLLERS - read a model, render it into a view.
    InventoryController.js    Renders the inventory table, wires the filter
    OrdersController.js         Renders the orders table, wires the filter
    ProductionController.js      Renders all four station tables
    DashboardController.js        Renders KPIs, chart, tables, live clock
    ContactController.js           Validates the contact form (no model -
                                    nothing is read or persisted)
    DateController.php               Asks DateModel for data, loads the
                                      PHP view with it

  views/                 VIEWS - structural HTML/PHP only. No hard-coded
                          data tables; controllers fill them in at runtime.
    dashboard.html
    inventory.html
    orders.html
    production.html
    datetime.view.php        The actual markup for the PHP server-clock
                              page (included by DateController, in turn
                              loaded by the datetime.php front controller)

Each dashboard/inventory/orders/production page loads its scripts in this
order: public/js/main.js (shared) -> the model(s) it needs -> its
controller. Check the <script> tags at the bottom of each file to see
the wiring.


HOW TO RUN IT THROUGH APACHE (XAMPP / WAMP / MAMP)
----------------------------------------------------
1. Copy this whole "webtech" folder into your Apache document root, e.g.:
     XAMPP (Windows):  C:\xampp\htdocs\webtech
     XAMPP (Mac):       /Applications/XAMPP/htdocs/webtech
     WAMP:                C:\wamp64\www\webtech
2. Start Apache from your XAMPP/WAMP/MAMP control panel.
3. Open a browser and go to:
     http://localhost/webtech/index.html
   Every link uses relative paths, so the folder can be renamed without
   breaking anything.
4. To view the PHP requirement specifically, go to:
     http://localhost/webtech/datetime.php
   (Opening datetime.php by double-clicking the file, instead of through
   Apache, will not work - PHP only runs through a web server.)


INSPECTING AN HTTP REQUEST (ASSIGNMENT REQUIREMENT)
------------------------------------------------------
1. With Apache running, open http://localhost/webtech/index.html in Chrome
   or Firefox.
2. Open Developer Tools (F12, or right-click -> Inspect) and switch to the
   Network tab.
3. Reload the page (Ctrl+R / Cmd+R). You'll see each request the browser
   made: index.html, style.css, main.js, and so on.
4. Click any request (e.g. index.html) to see its Headers - this is where
   you can show the request method, response headers, and status code.


HTTP STATUS CODES TO RECORD FOR EACH PAGE
--------------------------------------------
With the Network tab open, load each page and note the "Status" column:
  index.html                          -> expect 200 OK
  about.html                           -> expect 200 OK
  contact.html                          -> expect 200 OK
  app/views/dashboard.html               -> expect 200 OK
  app/views/inventory.html                -> expect 200 OK
  app/views/orders.html                    -> expect 200 OK
  app/views/production.html                 -> expect 200 OK
  datetime.php                               -> expect 200 OK
  a made-up URL, e.g. http://localhost/webtech/missing.html -> expect 404
(That last one is worth trying deliberately - it's a good way to show you
understand what a non-200 status code looks like.)


DESIGN NOTES
-------------
Built around the idea of a small leather workshop's paper ledger going
digital: warm canvas/leather palette, a serif (Fraunces) for headings and
a grotesque sans (Work Sans) for UI text, dashed "stitch line" borders on
cards, and a ledger-style table for data. The public site (home/about/
contact) sits alongside an internal dashboard (sidebar layout) for the
three management modules, reflecting what a real manufacturing management
system would separate: a public-facing site vs. an internal tool - and
the MVC split above reflects how that internal tool's code is organised.
