// CONTROLLER — reads from the models, writes into the view's DOM hooks.
// Holds no data of its own and no markup beyond small template strings.

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('dashboard-root');
  if (!root) return; // not on this page

  renderKpis();
  renderWeeklyBars();
  renderRecentOrders();
  renderLowStock();
  startClock();

  function renderKpis() {
    var deltas = DashboardModel.getKpiDeltas();
    setText('kpi-open-orders', OrdersModel.getOpenCount());
    setText('kpi-open-orders-delta', deltas.openOrders);
    setText('kpi-in-production', DashboardModel.getInProductionCount());
    setText('kpi-in-production-delta', deltas.inProduction);
    setText('kpi-low-stock', InventoryModel.getLowStock().length);
    setText('kpi-low-stock-delta', deltas.lowStock);
    setText('kpi-finished', DashboardModel.getFinishedThisWeek());
    setText('kpi-finished-delta', deltas.finishedThisWeek);
  }

  function renderWeeklyBars() {
    var el = document.getElementById('weekly-bars');
    if (!el) return;
    el.innerHTML = DashboardModel.getWeeklyOutput().map(function (d) {
      var barClass = d.variant === 2 ? 'bar b2' : 'bar';
      return '<div class="bar-col"><div class="' + barClass + '" style="height:' + d.pct + '%"></div>' +
             '<div class="bar-label">' + d.label + '</div></div>';
    }).join('');
  }

  function renderRecentOrders() {
    var body = document.querySelector('#recent-orders-table tbody');
    if (!body) return;
    body.innerHTML = OrdersModel.getRecent(5).map(function (o) {
      return '<tr><td>' + o.id + '</td><td>' + o.client + '</td><td>' + o.line + '</td><td>' + o.qty +
             '</td><td><span class="pill ' + o.pill + '">' + o.statusLabel + '</span></td></tr>';
    }).join('');
  }

  function renderLowStock() {
    var body = document.querySelector('#low-stock-table tbody');
    if (!body) return;
    body.innerHTML = InventoryModel.getLowStock().map(function (m) {
      return '<tr><td>' + m.name + '</td><td>' + m.onHand + '</td><td>' + m.reorderPoint +
             '</td><td><div class="progress"><span style="width:70%; background: var(--rust);"></span></div></td></tr>';
    }).join('');
  }

  function startClock() {
    var el = document.querySelector('[data-live-clock]');
    if (!el) return;
    function pad(n) { return n < 10 ? '0' + n : n; }
    function tick() {
      var now = new Date();
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var dateStr = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
      var timeStr = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
      setText('clock-date', dateStr);
      setText('clock-time', timeStr);
    }
    tick();
    setInterval(tick, 1000);
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
});
