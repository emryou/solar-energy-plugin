const tabButtons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab');

const installedPowerEl = document.getElementById('installedPower');
const annualEnergyEl = document.getElementById('annualEnergy');
const prValueEl = document.getElementById('prValue');

const layoutForm = document.getElementById('layoutForm');
const simulationForm = document.getElementById('simulationForm');
const reportPreview = document.getElementById('reportPreview');
const exportButton = document.getElementById('exportButton');

const state = {
  siteArea: 10000,
  modulePower: 620,
  moduleCount: 3000,
  inverterEfficiency: 98,
  irradiation: 1700,
  losses: 14,
  shading: 4,
  annualEnergyMWh: 0,
};

function switchTab(target) {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === target);
  });
  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.id === target);
  });
}

function updateDashboard() {
  const installedPowerkWp = (state.modulePower * state.moduleCount) / 1000;
  const pr = Math.max(0, 100 - state.losses - state.shading);

  installedPowerEl.textContent = installedPowerkWp.toFixed(1);
  prValueEl.textContent = pr.toFixed(1);
  annualEnergyEl.textContent = state.annualEnergyMWh.toFixed(1);
}

function calculateLayout() {
  const installedPowerkWp = (state.modulePower * state.moduleCount) / 1000;
  const areaPerModule = state.siteArea / state.moduleCount;
  const utilization = Math.min(100, (state.moduleCount * 2.5 * 100) / state.siteArea);

  return {
    installedPowerkWp,
    areaPerModule,
    utilization,
  };
}

function runSimulation() {
  const installedPowerkWp = (state.modulePower * state.moduleCount) / 1000;
  const effectivePR = Math.max(0, (100 - state.losses - state.shading) / 100);
  const inverterFactor = state.inverterEfficiency / 100;
  const annualEnergykWh = installedPowerkWp * state.irradiation * effectivePR * inverterFactor;
  state.annualEnergyMWh = annualEnergykWh / 1000;
  return annualEnergykWh;
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => switchTab(button.dataset.tab));
});

layoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  state.siteArea = Number(document.getElementById('siteArea').value);
  state.modulePower = Number(document.getElementById('modulePower').value);
  state.moduleCount = Number(document.getElementById('moduleCount').value);
  state.inverterEfficiency = Number(document.getElementById('inverterEfficiency').value);

  const layout = calculateLayout();
  document.getElementById('layoutResult').textContent =
    `Kurulu güç: ${layout.installedPowerkWp.toFixed(1)} kWp | Modül başına alan: ${layout.areaPerModule.toFixed(2)} m² | Alan kullanımı: %${layout.utilization.toFixed(1)}`;

  updateDashboard();
});

simulationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  state.irradiation = Number(document.getElementById('irradiation').value);
  state.losses = Number(document.getElementById('losses').value);
  state.shading = Number(document.getElementById('shading').value);

  const annualEnergykWh = runSimulation();
  document.getElementById('simulationResult').textContent =
    `Tahmini yıllık üretim: ${(annualEnergykWh / 1000).toFixed(1)} MWh (basit model)`;

  updateDashboard();
});

exportButton.addEventListener('click', () => {
  reportPreview.textContent = [
    '--- SOLAR ENERGY DESIGNER RAPORU ---',
    `Kurulu Güç: ${installedPowerEl.textContent} kWp`,
    `Yıllık Üretim: ${annualEnergyEl.textContent} MWh`,
    `Performans Oranı: ${prValueEl.textContent} %`,
    `Güncelleme: ${new Date().toLocaleString('tr-TR')}`,
  ].join('\n');
});

updateDashboard();
