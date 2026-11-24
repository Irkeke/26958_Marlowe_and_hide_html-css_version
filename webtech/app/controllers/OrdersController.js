// CONTROLLER — reads OrdersModel, renders the table, handles the status filter.

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('#orders-table tbody');
  if (!body) return; // not on this page

  var statusFilter = document.getElementById('order-status');
  var countEl = document.getElementById('order-count');

  render(OrdersModel.getAll());
  if (countEl) {
    var openCount = OrdersModel.getOpenCount();
    countEl.textContent = openCount + ' open orders';
  }

  if (statusFilter) statusFilter.addEventListener('change', applyFilter);

  function applyFilter() {
    var status = statusFilter.value;
    var rows = OrdersModel.getAll().filter(function (o) {
      return status === 'all' || o.status === status;
    });
    render(rows);
  }

  function render(rows) {
    body.innerHTML = rows.map(function (o) {
      return '<tr data-status="' + o.status + '">' +
        '<td>' + o.id + '</td>' +
        '<td>' + o.client + '</td>' +
        '<td>' + o.line + '</td>' +
        '<td>' + o.qty + '</td>' +
        '<td>' + o.due + '</td>' +
        '<td><span class="pill ' + o.pill + '">' + o.statusLabel + '</span></td>' +
        '</tr>';
    }).join('');
  }
});
