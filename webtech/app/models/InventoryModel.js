// MODEL — owns the inventory data only. No DOM access, no rendering.
// A real build would replace getAll() with a fetch() to a backend/API;
// the controller that consumes this model wouldn't need to change.

var InventoryModel = (function () {

  var materials = [
    { name: "Saddle tan hide, full grain", category: "hide", categoryLabel: "Hide & leather", supplier: "Rift Valley Tannery", onHand: "9 hides", reorderPoint: "12 hides", status: "low" },
    { name: "Chestnut hide, full grain", category: "hide", categoryLabel: "Hide & leather", supplier: "Rift Valley Tannery", onHand: "21 hides", reorderPoint: "12 hides", status: "ok" },
    { name: "Black hide, top grain", category: "hide", categoryLabel: "Hide & leather", supplier: "Coastal Leather Co.", onHand: "14 hides", reorderPoint: "10 hides", status: "ok" },
    { name: "Brass buckle hardware, 25mm", category: "hardware", categoryLabel: "Hardware", supplier: "Nairobi Metal Works", onHand: "140 pcs", reorderPoint: "200 pcs", status: "low" },
    { name: "Brass zip pulls, 15mm", category: "hardware", categoryLabel: "Hardware", supplier: "Nairobi Metal Works", onHand: "310 pcs", reorderPoint: "150 pcs", status: "ok" },
    { name: "Magnetic snap closures", category: "hardware", categoryLabel: "Hardware", supplier: "Nairobi Metal Works", onHand: "88 pcs", reorderPoint: "100 pcs", status: "warn" },
    { name: "Waxed cotton thread, tan", category: "thread", categoryLabel: "Thread & lining", supplier: "Kaya Fibre Supply", onHand: "6 spools", reorderPoint: "10 spools", status: "low" },
    { name: "Waxed cotton thread, black", category: "thread", categoryLabel: "Thread & lining", supplier: "Kaya Fibre Supply", onHand: "18 spools", reorderPoint: "10 spools", status: "ok" },
    { name: "Canvas lining, natural", category: "thread", categoryLabel: "Thread & lining", supplier: "Kaya Fibre Supply", onHand: "64 m", reorderPoint: "40 m", status: "ok" },
    { name: "Dust bags, cotton twill", category: "packaging", categoryLabel: "Packaging", supplier: "Packline Kenya", onHand: "210 pcs", reorderPoint: "150 pcs", status: "ok" },
    { name: "Branded gift boxes, medium", category: "packaging", categoryLabel: "Packaging", supplier: "Packline Kenya", onHand: "47 pcs", reorderPoint: "75 pcs", status: "warn" }
  ];

  var statusLabel = { ok: "In stock", warn: "Watch", low: "Reorder" };

  return {
    getAll: function () { return materials.slice(); },
    getLowStock: function () {
      return materials.filter(function (m) { return m.status === "low"; });
    },
    statusLabel: statusLabel
  };
})();
