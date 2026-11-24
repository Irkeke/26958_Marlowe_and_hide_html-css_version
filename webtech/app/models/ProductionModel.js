// MODEL — owns the production/station data only. No DOM access, no rendering.

var ProductionModel = (function () {

  var stations = {
    cutting: [
      { order: "#MH-2212", line: "Clutch", worker: "J. Otieno", started: "Today, 07:40", progress: 80 },
      { order: "#MH-2207", line: "Tote", worker: "J. Otieno", started: "Today, 09:10", progress: 35 },
      { order: "#MH-2216", line: "Crossbody", worker: "P. Mutua", started: "Today, 08:20", progress: 60 }
    ],
    stitching: [
      { order: "#MH-2214", line: "Tote", worker: "A. Njoroge", started: "Yesterday, 14:00", progress: 90 },
      { order: "#MH-2208", line: "Clutch", worker: "B. Kamau", started: "Today, 08:00", progress: 45 },
      { order: "#MH-2215", line: "Crossbody", worker: "A. Njoroge", started: "Today, 07:50", progress: 20 }
    ],
    hardware: [
      { order: "#MH-2213", line: "Crossbody", blockingOn: "Brass buckle hardware, 25mm", pill: "low", statusLabel: "Waiting on stock" },
      { order: "#MH-2217", line: "Tote", blockingOn: "—", pill: "ok", statusLabel: "Fitting now" }
    ],
    quality: [
      { order: "#MH-2211", line: "Tote", inspector: "D. Chebet", pill: "ok", result: "Passed — ready to pack" },
      { order: "#MH-2206", line: "Crossbody", inspector: "D. Chebet", pill: "warn", result: "Minor rework — stitching" }
    ]
  };

  return {
    getStation: function (name) { return (stations[name] || []).slice(); },
    getQueueCounts: function () {
      return {
        cutting: stations.cutting.length,
        stitching: stations.stitching.length,
        hardware: stations.hardware.length,
        quality: stations.quality.length
      };
    }
  };
})();
