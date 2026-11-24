// CONTROLLER — reads ProductionModel, renders each station's queue and the KPI counts.

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('production-root');
  if (!root) return; // not on this page

  var counts = ProductionModel.getQueueCounts();
  setText('kpi-cutting', counts.cutting);
  setText('kpi-stitching', counts.stitching);
  setText('kpi-hardware', counts.hardware);
  setText('kpi-quality', counts.quality);

  renderCutting();
  renderStitching();
  renderHardware();
  renderQuality();

  function renderCutting() {
    var body = document.querySelector('#cutting-table tbody');
    if (!body) return;
    body.innerHTML = ProductionModel.getStation('cutting').map(function (r) {
      return '<tr><td>' + r.order + '</td><td>' + r.line + '</td><td>' + r.worker + '</td><td>' + r.started +
        '</td><td><div class="progress"><span style="width:' + r.progress + '%;"></span></div></td></tr>';
    }).join('');
  }

  function renderStitching() {
    var body = document.querySelector('#stitching-table tbody');
    if (!body) return;
    body.innerHTML = ProductionModel.getStation('stitching').map(function (r) {
      return '<tr><td>' + r.order + '</td><td>' + r.line + '</td><td>' + r.worker + '</td><td>' + r.started +
        '</td><td><div class="progress"><span style="width:' + r.progress + '%;"></span></div></td></tr>';
    }).join('');
  }

  function renderHardware() {
    var body = document.querySelector('#hardware-table tbody');
    if (!body) return;
    body.innerHTML = ProductionModel.getStation('hardware').map(function (r) {
      return '<tr><td>' + r.order + '</td><td>' + r.line + '</td><td>' + r.blockingOn +
        '</td><td><span class="pill ' + r.pill + '">' + r.statusLabel + '</span></td></tr>';
    }).join('');
  }

  function renderQuality() {
    var body = document.querySelector('#quality-table tbody');
    if (!body) return;
    body.innerHTML = ProductionModel.getStation('quality').map(function (r) {
      return '<tr><td>' + r.order + '</td><td>' + r.line + '</td><td>' + r.inspector +
        '</td><td><span class="pill ' + r.pill + '">' + r.result + '</span></td></tr>';
    }).join('');
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
});
