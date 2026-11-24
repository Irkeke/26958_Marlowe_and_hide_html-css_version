// CONTROLLER — reads InventoryModel, renders the table, handles filtering.

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('#inventory-table tbody');
  if (!body) return; // not on this page

  var search = document.getElementById('inv-search');
  var category = document.getElementById('inv-category');
  var countEl = document.getElementById('inv-count');

  render(InventoryModel.getAll());

  if (search) search.addEventListener('input', applyFilters);
  if (category) category.addEventListener('change', applyFilters);

  function applyFilters() {
    var q = (search && search.value || '').toLowerCase();
    var cat = (category && category.value) || 'all';
    var rows = InventoryModel.getAll().filter(function (m) {
      var matchesText = (m.name + ' ' + m.supplier).toLowerCase().indexOf(q) !== -1;
      var matchesCat = cat === 'all' || m.category === cat;
      return matchesText && matchesCat;
    });
    render(rows);
  }

  function render(rows) {
    body.innerHTML = rows.map(function (m) {
      return '<tr data-category="' + m.category + '">' +
        '<td>' + m.name + '</td>' +
        '<td>' + m.categoryLabel + '</td>' +
        '<td>' + m.supplier + '</td>' +
        '<td>' + m.onHand + '</td>' +
        '<td>' + m.reorderPoint + '</td>' +
        '<td><span class="pill ' + m.status + '">' + InventoryModel.statusLabel[m.status] + '</span></td>' +
        '</tr>';
    }).join('');
    if (countEl) countEl.textContent = InventoryModel.getAll().length + ' materials tracked';
  }
});
