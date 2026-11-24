// MODEL — owns the orders data only. No DOM access, no rendering.

var OrdersModel = (function () {

  var orders = [
    { id: "#MH-2214", client: "Adaeze Boutique", line: "Tote", qty: 12, due: "26 Sep", status: "stitching", statusLabel: "In stitching", pill: "ok" },
    { id: "#MH-2213", client: "Nomad Trading Co.", line: "Crossbody", qty: 24, due: "29 Sep", status: "hardware", statusLabel: "Awaiting hardware", pill: "warn" },
    { id: "#MH-2212", client: "R. Achieng (custom)", line: "Clutch", qty: 1, due: "02 Oct", status: "cutting", statusLabel: "Cutting", pill: "info" },
    { id: "#MH-2211", client: "Feld & Co.", line: "Tote", qty: 8, due: "24 Sep", status: "quality", statusLabel: "Quality check", pill: "ok" },
    { id: "#MH-2210", client: "Salt Collective", line: "Crossbody", qty: 15, due: "23 Sep", status: "packed", statusLabel: "Packed", pill: "ok" },
    { id: "#MH-2209", client: "Harewood Studio", line: "Tote", qty: 10, due: "19 Sep", status: "shipped", statusLabel: "Shipped", pill: "info" },
    { id: "#MH-2208", client: "M. Wanjiru (custom)", line: "Clutch", qty: 2, due: "28 Sep", status: "stitching", statusLabel: "In stitching", pill: "ok" },
    { id: "#MH-2207", client: "Nomad Trading Co.", line: "Tote", qty: 18, due: "04 Oct", status: "cutting", statusLabel: "Cutting", pill: "info" },
    { id: "#MH-2206", client: "Adaeze Boutique", line: "Crossbody", qty: 9, due: "25 Sep", status: "quality", statusLabel: "Quality check", pill: "ok" },
    { id: "#MH-2205", client: "Feld & Co.", line: "Clutch", qty: 6, due: "17 Sep", status: "shipped", statusLabel: "Shipped", pill: "info" }
  ];

  return {
    getAll: function () { return orders.slice(); },
    getRecent: function (n) { return orders.slice(0, n || 5); },
    getOpenCount: function () {
      return orders.filter(function (o) { return o.status !== "shipped"; }).length;
    }
  };
})();
