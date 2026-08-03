(function () {
  "use strict";
  var data = null;
  var statusFilter = "all";
  var branchFilter = null;
  var severity = { green: 0, yellow: 1, red: 2 };
  var statusWord = { green: "Holding", yellow: "Watch", red: "Breaking" };

  function el(id) { return document.getElementById(id); }
  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function dateLabel(value) {
    return new Intl.DateTimeFormat("en", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })
      .format(new Date(value + "T00:00:00Z"));
  }
  function ageInDays(value) {
    return Math.max(0, Math.floor((Date.now() - new Date(value + "T00:00:00Z").getTime()) / 86400000));
  }
  function branchStatus(id) {
    var linked = data.indicators.filter(function (indicator) { return indicator.dependencies.indexOf(id) !== -1; });
    return linked.reduce(function (worst, indicator) {
      return severity[indicator.status] > severity[worst] ? indicator.status : worst;
    }, "green");
  }
  function renderSummary() {
    ["green", "yellow", "red"].forEach(function (status) {
      el(status + "-count").textContent = data.indicators.filter(function (item) { return item.status === status; }).length;
    });
    el("all-count").textContent = data.indicators.length;
    el("last-updated").textContent = data.updatedAt;
    el("last-updated").setAttribute("datetime", data.updatedAt);
    var age = ageInDays(data.updatedAt);
    el("freshness").textContent = age > 120 ? "STALE / " + age + " DAYS SINCE STAMP" : "LIVE / " + data.cadence.toUpperCase();
    document.body.classList.toggle("is-stale", age > 120);
  }
  function renderDependencies() {
    el("dependency-index").innerHTML = data.dependencies.map(function (branch, index) {
      var linked = data.indicators.filter(function (indicator) { return indicator.dependencies.indexOf(branch.id) !== -1; });
      var status = branchStatus(branch.id);
      return '<button class="dependency ' + status + (branchFilter === branch.id ? ' active' : '') + '" data-branch="' + escapeHtml(branch.id) + '" type="button" style="--i:' + index + '">' +
        '<span class="branch-state"><i aria-hidden="true"></i>' + statusWord[status] + '</span>' +
        '<strong>' + escapeHtml(branch.label) + '</strong><span class="branch-claim">' + escapeHtml(branch.claim) + '</span>' +
        '<span class="branch-foot">' + linked.length + ' linked / weakest ' + statusWord[status].toLowerCase() + '</span></button>';
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll(".dependency"), function (button) {
      button.addEventListener("click", function () {
        branchFilter = branchFilter === button.dataset.branch ? null : button.dataset.branch;
        el("clear-branch").hidden = !branchFilter;
        renderDependencies(); renderIndicators();
      });
    });
  }
  function historyHtml(history) {
    return '<span class="history" aria-label="Last four readings: ' + history.map(function (s) { return statusWord[s]; }).join(", ") + '">' +
      history.map(function (status) { return '<i class="' + status + '"></i>'; }).join("") + '</span>';
  }
  function renderIndicators() {
    var filtered = data.indicators.filter(function (item) {
      return (statusFilter === "all" || item.status === statusFilter) && (!branchFilter || item.dependencies.indexOf(branchFilter) !== -1);
    });
    el("indicator-list").setAttribute("aria-busy", "false");
    el("indicator-list").innerHTML = filtered.map(function (item, index) {
      return '<article class="indicator-row ' + item.status + '" style="--i:' + index + '"><div class="indicator-name">' +
        '<div class="state-line"><span class="state-pill"><i></i>' + statusWord[item.status] + '</span>' + historyHtml(item.history) + '</div>' +
        '<p class="indicator-code">' + escapeHtml(item.family) + ' / ' + escapeHtml(item.id) + '</p><h3>' + escapeHtml(item.name) + '</h3><p class="signal">' + escapeHtml(item.signal) + '</p></div>' +
        '<div class="reading"><p>' + escapeHtml(item.reading) + '</p><span>ASSUMPTION</span><p>' + escapeHtml(item.assumption) + '</p></div>' +
        '<div class="breaks"><p>' + escapeHtml(item.breaks) + '</p><div class="branch-tags">' + item.dependencies.map(function (dep) {
          var branch = data.dependencies.find(function (candidate) { return candidate.id === dep; });
          return '<span>' + escapeHtml(branch ? branch.label : dep) + '</span>';
        }).join("") + '</div></div>' +
        '<div class="stamp-cell"><time datetime="' + item.observedAt + '">' + dateLabel(item.observedAt) + '</time><a href="' + escapeHtml(item.source) + '">Source ' + escapeHtml(item.sourceLabel) + ' →</a></div></article>';
    }).join("");
    el("empty-state").hidden = filtered.length !== 0;
  }
  function bindControls() {
    Array.prototype.forEach.call(document.querySelectorAll(".filter"), function (button) {
      button.addEventListener("click", function () {
        statusFilter = button.dataset.filter;
        Array.prototype.forEach.call(document.querySelectorAll(".filter"), function (candidate) { candidate.classList.toggle("active", candidate === button); });
        renderIndicators();
      });
    });
    el("clear-branch").addEventListener("click", function () {
      branchFilter = null; el("clear-branch").hidden = true; renderDependencies(); renderIndicators();
    });
    el("retry").addEventListener("click", load);
  }
  async function load() {
    el("error-state").hidden = true;
    try {
      var response = await fetch("indicators.json", { cache: "no-cache" });
      if (!response.ok) throw new Error("HTTP " + response.status);
      data = await response.json();
      if (!data.indicators || !data.dependencies) throw new Error("Invalid indicator data");
      renderSummary(); renderDependencies(); renderIndicators();
    } catch (error) {
      el("indicator-list").innerHTML = ""; el("indicator-list").setAttribute("aria-busy", "false"); el("error-state").hidden = false;
    }
  }
  bindControls(); load();
}());
