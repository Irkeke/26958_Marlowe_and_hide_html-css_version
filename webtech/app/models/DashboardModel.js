// MODEL — dashboard-specific figures that aren't owned by another model
// (weekly output chart, KPI deltas). Counts that belong to a domain model
// (open orders, low-stock materials) are read from that model instead.

var DashboardModel = (function () {

  var weeklyOutput = [
    { label: "Mon", pct: 70, variant: 1 },
    { label: "Tue", pct: 55, variant: 2 },
    { label: "Wed", pct: 85, variant: 1 },
    { label: "Thu", pct: 60, variant: 2 },
    { label: "Fri", pct: 95, variant: 1 },
    { label: "Sat", pct: 30, variant: 2 }
  ];

  var kpiDeltas = {
    openOrders: "▲ 4 since Monday",
    inProduction: "▲ 2 today",
    lowStock: "▲ needs reorder",
    finishedThisWeek: "▲ on pace for 40"
  };

  return {
    getWeeklyOutput: function () { return weeklyOutput.slice(); },
    getKpiDeltas: function () { return kpiDeltas; },
    getFinishedThisWeek: function () { return 31; },
    getInProductionCount: function () { return 18; }
  };
})();
