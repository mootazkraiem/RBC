"use strict";
window.addEventListener("error", (e) => { window.__lastError = (e.error && e.error.stack) || e.message; });
window.addEventListener("unhandledrejection", (e) => { window.__lastError = "unhandledrejection: " + (e.reason && e.reason.stack || e.reason); });

/* ============================== icons ============================== */
/* Small original line-icon set (not copied from any icon library) --
   plain SVG primitives, stroke=currentColor so CSS color classes apply. */
const SVG_OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
const ICONS = {
  search: SVG_OPEN + '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  chevronDown: SVG_OPEN + '<path d="M6 9l6 6 6-6"/></svg>',
  info: SVG_OPEN + '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="7.5" r="0.6" fill="currentColor" stroke="none"/></svg>',
  bell: SVG_OPEN + '<path d="M6 10a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
  help: SVG_OPEN + '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1 1-1 2"/><circle cx="12" cy="16.7" r="0.6" fill="currentColor" stroke="none"/></svg>',
  send: SVG_OPEN + '<path d="M21 3 3 10.5l7 2.5 2 7L21 3Z"/><path d="M12.5 13.5 21 3"/></svg>',
  save: SVG_OPEN + '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h8V4"/><path d="M8 20v-6h8v6"/></svg>',
  docWhite: SVG_OPEN + '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15.5" x2="15" y2="15.5"/></svg>',
  book: SVG_OPEN + '<path d="M4 4.5h6.5a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 0-2.5-2.5H4z"/><path d="M20 4.5h-6.5A2.5 2.5 0 0 0 11 7v13a2.5 2.5 0 0 1 2.5-2.5H20z"/></svg>',
  plus: SVG_OPEN + '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  edit: SVG_OPEN + '<path d="M4 20h4l11-11-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
  check: SVG_OPEN + '<path d="M5 12.5l4.5 4.5L19 7"/></svg>',
  xMark: SVG_OPEN + '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',
  externalLink: SVG_OPEN + '<path d="M9 6H5v13h13v-4"/><path d="M13 5h6v6"/><path d="M11 13 19 5"/></svg>',
  camera: SVG_OPEN + '<path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13.5" r="3.2"/></svg>',
  fileText: SVG_OPEN + '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="16.5" x2="15" y2="16.5"/></svg>',
  fileWarn: SVG_OPEN + '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><line x1="12" y1="11" x2="12" y2="15"/><circle cx="12" cy="17.6" r="0.6" fill="currentColor" stroke="none"/></svg>',
  folder: SVG_OPEN + '<path d="M4 6h6l2 2h8v11H4z"/></svg>',
  barChart: SVG_OPEN + '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="15"/></svg>',
  user: SVG_OPEN + '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/></svg>',
  globe: SVG_OPEN + '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><line x1="3.5" y1="12" x2="20.5" y2="12"/></svg>',
  box: SVG_OPEN + '<path d="M4 7l8-4 8 4-8 4z"/><path d="M4 7v10l8 4 8-4V7"/><line x1="12" y1="11" x2="12" y2="21"/></svg>',
  trash: SVG_OPEN + '<path d="M5 7h14"/><path d="M9 7V5h6v2"/><path d="M7 7l1 13h8l1-13"/><line x1="10" y1="10" x2="10" y2="17"/><line x1="14" y1="10" x2="14" y2="17"/></svg>',
  signOut: SVG_OPEN + '<path d="M9 4H5v16h4"/><path d="M15 8l4 4-4 4"/><line x1="19" y1="12" x2="9" y2="12"/></svg>',
  grid: SVG_OPEN + '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
  inbox: SVG_OPEN + '<path d="M4 6h6l2 2h8v11H4z"/></svg>',
  shieldCheck: SVG_OPEN + '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12.2l2 2 4-4.4"/></svg>',
  clipboardCheck: SVG_OPEN + '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 12.2l2 2 4-4.4"/></svg>',
  sparkles: SVG_OPEN + '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 3.5v3M17.5 5h3" stroke-width="1.6"/></svg>',
  lock: SVG_OPEN + '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>',
  settings: SVG_OPEN + '<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z"/></svg>',
  clock: SVG_OPEN + '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  arrowRight: SVG_OPEN + '<line x1="5" y1="12" x2="19" y2="12"/><path d="M13 6l6 6-6 6"/></svg>',
  wrench: SVG_OPEN + '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-2.6-2.6a1 1 0 0 1 0-1.4l6.3-6.3"/><path d="M14.7 6.3 13 4.6a4 4 0 0 0-5.3 5.3L3 14.6 5.4 17l4.7-4.7"/></svg>',
  listOrdered: SVG_OPEN + '<line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>',
};
function iconSvg(name){ return ICONS[name] || ICONS.folder; }
function setIcon(id, name, extraClass){
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = iconSvg(name);
  if(extraClass) el.classList.add(extraClass);
}

const APP_ICON_RULES = [
  [/valid/i, "barChart"],
  [/workflow|approv|manager/i, "user"],
  [/portal|web|release/i, "globe"],
  [/cad|exchange|data/i, "box"],
  [/pdm/i, "folder"],
];
function appIconName(appName){
  for(const [re, icon] of APP_ICON_RULES){
    if(re.test(appName)) return icon;
  }
  return "folder";
}

/* ============================== state ============================== */
let allApps = [];
let currentApps = [];       // capture-form selected applications
let currentInfoApps = [];   // information-form selected applications
let currentProcApps = [];   // procedure-form selected applications
let stagedAttachments = []; // capture-form: [{kind, path, name}] not yet saved
let currentDetailIssue = null;
let editApps = [];          // edit-dialog selected applications
let infoAppsPicker = null;
let procAppsPicker = null;
let currentRole = "technician";  // "technician" | "admin" | "super_admin" -- server enforces the real check
let currentUsername = null;
let currentDisplayName = null;
let _searchSeq = 0;              // guards against a slow, stale search response overwriting a newer one
let _notifPollId = null;         // setInterval handle for live notification polling, cleared on logout
function isAdminOrAbove(){ return currentRole === "admin" || currentRole === "super_admin"; }

const NEW_APP_SENTINEL = "__new__";

/* ============================== helpers ============================== */
function escapeHtml(s){
  const d = document.createElement("div");
  d.innerText = s == null ? "" : s;
  return d.innerHTML;
}
function escapeAttr(s){ return String(s == null ? "" : s).replace(/"/g,"&quot;"); }
function basename(p){ return String(p || "").split(/[\\/]/).pop(); }

function statusClass(s){ return {review:"st-review",in_progress:"st-inprogress",critical:"st-critical",cancelled:"st-cancelled",solved:"st-solved"}[s] || "st-review"; }
function borderClass(s){ return {review:"b-review",in_progress:"b-inprogress",critical:"b-critical",cancelled:"b-cancelled",solved:"b-solved"}[s] || "b-review"; }
function statusLabel(s){ return {review:"REVIEW",in_progress:"IN PROGRESS",critical:"CRITICAL",cancelled:"CANCELLED",solved:"SOLVED"}[s] || String(s).toUpperCase(); }
function typeBadgeInfo(t){
  return { PROBLEM_SOLUTION: { icon: "edit", label: "Problem / Solution" },
    INFORMATION: { icon: "info", label: "Information" },
    PROCEDURE: { icon: "listOrdered", label: "Procedure" } }[t] || { icon: "edit", label: "Problem / Solution" };
}
function formatDate(iso){
  if(!iso) return "";
  const d = new Date(iso);
  return isNaN(d) ? iso : d.toLocaleString();
}

function api(){ return window.pywebview.api; }
function whenReady(fn){
  if (window.pywebview && window.pywebview.api) { fn(); return; }
  let started = false;
  const start = () => { if(started) return; started = true; fn(); };
  window.addEventListener("pywebviewready", start, { once: true });
  // Fallback: pywebviewready doesn't fire reliably on every pywebview
  // version/platform -- without this, a missed event means init() never
  // runs and the whole app hangs forever with no error, indistinguishable
  // from a freeze. Poll as a safety net so it always eventually starts.
  const pollId = setInterval(() => {
    if (window.pywebview && window.pywebview.api) {
      clearInterval(pollId);
      start();
    }
  }, 100);
}

/* ========================= applications picker ========================= */
/* Reusable chips + dropdown widget used by both the capture form and the
   issue-edit dialog. Backed by a plain array the caller owns. */
function createAppsPicker({ pickerEl, chipsEl, toggleEl, dropdownEl, getSelected, onChange }){
  function close(){
    pickerEl.classList.remove("open");
    dropdownEl.classList.remove("open");
  }
  function open(){
    renderDropdown();
    pickerEl.classList.add("open");
    dropdownEl.classList.add("open");
  }
  function toggle(e){
    e.stopPropagation();
    if(dropdownEl.classList.contains("open")) close(); else open();
  }
  function renderChips(){
    const selected = getSelected();
    chipsEl.innerHTML = selected.map(a => `
      <span class="chip">${escapeHtml(a)} <button type="button" data-app="${escapeAttr(a)}">×</button></span>
    `).join("");
    chipsEl.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const name = btn.getAttribute("data-app");
        onChange(selected.filter(a => a !== name));
        renderChips();
      });
    });
  }
  function renderDropdown(){
    const selected = getSelected();
    dropdownEl.innerHTML = allApps.map(a => `
      <div class="apps-dropdown-item${selected.includes(a) ? " selected" : ""}" data-app="${escapeAttr(a)}">
        <span class="icon icon-muted icon-sm">${iconSvg(appIconName(a))}</span>
        <span class="apps-dropdown-label">${escapeHtml(a)}</span>
        <button type="button" class="apps-dropdown-delete" data-del="${escapeAttr(a)}" title="Remove ${escapeAttr(a)} from the application list">${iconSvg("trash")}</button>
      </div>
    `).join("") + `
      <div class="apps-dropdown-item apps-dropdown-new" data-new="1">
        <span class="icon icon-primary icon-sm">${iconSvg("plus")}</span>New application…
      </div>
    `;
    dropdownEl.querySelectorAll(".apps-dropdown-item[data-app]").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const name = item.getAttribute("data-app");
        const sel = getSelected();
        const next = sel.includes(name) ? sel.filter(a => a !== name) : sel.concat([name]);
        onChange(next);
        renderChips();
        renderDropdown();
      });
    });
    dropdownEl.querySelectorAll(".apps-dropdown-delete").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        await deleteApplication(btn.getAttribute("data-del"));
      });
    });
    const newItem = dropdownEl.querySelector(".apps-dropdown-new");
    newItem.addEventListener("click", async (e) => {
      e.stopPropagation();
      close();
      const name = await openAddAppModal();
      if(name){
        const sel = getSelected();
        if(!sel.includes(name)) onChange(sel.concat([name]));
        renderChips();
      }
    });
  }
  toggleEl.addEventListener("click", toggle);
  pickerEl.addEventListener("click", (e) => { if(e.target === pickerEl || e.target === chipsEl) open(); });
  document.addEventListener("click", (e) => { if(!pickerEl.contains(e.target)) close(); });
  renderChips();
  return { renderChips, renderDropdown, close };
}

let mainAppsPicker = null;
let editAppsPicker = null;

function refreshAllAppWidgets(){
  if(mainAppsPicker) mainAppsPicker.renderDropdown();
  if(editAppsPicker) editAppsPicker.renderDropdown();
  document.querySelectorAll(".stepApp").forEach(populateStepAppSelect);
}

async function deleteApplication(name){
  const result = await api().delete_application(name);
  if(result && result.apiError){ alert(result.apiError); return; }
  allApps = result;

  currentApps = currentApps.filter(a => a !== name);
  editApps = editApps.filter(a => a !== name);
  if(mainAppsPicker) mainAppsPicker.renderChips();
  if(editAppsPicker) editAppsPicker.renderChips();
  document.querySelectorAll(".stepApp").forEach(sel => { if(sel.value === name) sel.value = ""; });

  refreshAllAppWidgets();
}

/* ============================== steps ============================== */
function populateStepAppSelect(select){
  const current = select.value;
  select.innerHTML = '<option value="">App…</option>' +
    allApps.map(a => `<option value="${escapeAttr(a)}">${escapeHtml(a)}</option>`).join("") +
    `<option value="${NEW_APP_SENTINEL}">+ New application…</option>`;
  select.value = current;
}
function updateStepAppIcon(row){
  const select = row.querySelector(".stepApp");
  const iconEl = row.querySelector(".step-app-icon");
  iconEl.innerHTML = iconSvg(select.value ? appIconName(select.value) : "folder");
}
function addStep(container, action, appVal){
  const row = document.createElement("div");
  row.className = "step-row";
  row.innerHTML = `
    <div class="step-num"></div>
    <input type="text" class="stepAction" placeholder="Describe this step" value="${escapeAttr(action || "")}">
    <div class="step-app-select">
      <span class="icon step-app-icon"></span>
      <select class="stepApp"></select>
    </div>
    <button type="button" class="del-step">✕</button>
  `;
  container.appendChild(row);
  const select = row.querySelector(".stepApp");
  populateStepAppSelect(select);
  if(appVal) select.value = appVal;
  updateStepAppIcon(row);
  select.addEventListener("change", async () => {
    if(select.value === NEW_APP_SENTINEL){
      const name = await openAddAppModal();
      select.value = "";
      if(name){
        if(!allApps.includes(name)) { /* addApp already updates allApps globally */ }
        populateStepAppSelect(select);
        select.value = name;
      }
    }
    updateStepAppIcon(row);
  });
  row.querySelector(".del-step").addEventListener("click", () => {
    row.remove();
    renumberSteps(container);
  });
  renumberSteps(container);
}
function renumberSteps(container){
  const rows = container.querySelectorAll(".step-row");
  rows.forEach((r, i) => { r.querySelector(".step-num").textContent = i + 1; });
}
function collectSteps(container){
  return Array.from(container.querySelectorAll(".step-row")).map(r => [
    r.querySelector(".stepAction").value.trim(),
    r.querySelector(".stepApp").value === NEW_APP_SENTINEL ? "" : r.querySelector(".stepApp").value,
  ]).filter(s => s[0]);
}
function clearSteps(container){ container.innerHTML = ""; }

/* ============================== attachments ============================== */
const KIND_ICON = { screenshot: "camera", log: "fileText", error: "fileWarn" };
const KIND_LABEL = { screenshot: "Screenshot", log: "Log", error: "Error Report" };

function renderStagedAttachments(){
  const box = document.getElementById("stagedAttachments");
  box.innerHTML = stagedAttachments.map((a, idx) => `
    <div class="attachment-item">
      <span class="icon icon-muted icon-sm">${iconSvg(KIND_ICON[a.kind] || "fileText")}</span>
      <span class="name">${escapeHtml(a.name)}</span>
      <span class="kind-tag">${KIND_LABEL[a.kind] || a.kind}</span>
      <button type="button" data-idx="${idx}">✕</button>
    </div>
  `).join("");
  box.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      stagedAttachments.splice(Number(btn.getAttribute("data-idx")), 1);
      renderStagedAttachments();
    });
  });
}
async function stageAttachment(kind){
  const path = await api().pick_file();
  if(!path) return;
  stagedAttachments.push({ kind, path, name: basename(path) });
  renderStagedAttachments();
}

function renderAttachmentList(container, attachments, issueId, removable){
  if(!attachments || attachments.length === 0){
    container.innerHTML = '<div class="hint">No attachments.</div>';
    return;
  }
  container.innerHTML = attachments.map(a => `
    <div class="attachment-item">
      <span class="icon icon-muted icon-sm">${iconSvg(KIND_ICON[a.kind] || "fileText")}</span>
      <span class="name" data-name="${escapeAttr(a.name)}">${escapeHtml(a.name)}</span>
      <span class="kind-tag">${KIND_LABEL[a.kind] || a.kind}</span>
      ${removable ? `<button type="button" data-name="${escapeAttr(a.name)}">✕</button>` : ""}
    </div>
  `).join("");
  container.querySelectorAll(".name").forEach(el => {
    el.addEventListener("click", () => api().open_attachment(issueId, el.getAttribute("data-name")));
  });
  if(removable){
    container.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", async () => {
        const result = await api().remove_attachment(issueId, btn.getAttribute("data-name"));
        if(result && !result.apiError){
          currentDetailIssue = result;
          renderAttachmentList(container, result.attachments, issueId, true);
        }
      });
    });
  }
}

/* ============================== issue list ============================== */
async function renderList(query){
  const list = document.getElementById("issueList");
  const mySeq = ++_searchSeq;
  const items = (query && query.trim())
    ? await api().search_issues(query)
    : await api().list_issues();
  if(mySeq !== _searchSeq) return []; // a newer keystroke's request has already superseded this one
  if(items && items.apiError){
    if(items.needsLogin) showLoginScreen(items.apiError);
    renderIssueCards(list, [], items.apiError);
    return [];
  }
  const shown = items.slice().reverse().slice(0, 8);
  renderIssueCards(list, shown, "No matching issues.");
  return items;
}
function waitingSince(iso){
  const ms = Date.now() - new Date(iso).getTime();
  if(!(ms >= 0)) return "Just now";
  const hours = ms / 36e5;
  if(hours < 1) return "Just now";
  if(hours < 24) return `Waiting ${Math.round(hours)} hour${Math.round(hours) === 1 ? "" : "s"}`;
  const days = Math.round(hours / 24);
  return `Waiting ${days} day${days === 1 ? "" : "s"}`;
}
/* variant "review": compact row for a queue waiting on a decision (icon,
   title, author, how long it's been waiting, a Review action) -- matches
   the RCK review-row pattern. variant "status" (default): same row shape
   but a plain status pill on the right, for lists that aren't a to-do
   (Trusted knowledge, My recent submissions, Recent Issues sidebar). */
function renderIssueCards(container, items, emptyText, variant){
  if(items.length === 0){
    container.innerHTML = `<div class="hint" style="padding:10px 0;">${emptyText}</div>`;
    return;
  }
  container.innerHTML = items.map(i => {
    const right = variant === "review"
      ? `<span class="row-waiting">${waitingSince(i.createdAt)}</span>
         <button type="button" class="row-review-link" data-open="${escapeAttr(i.id)}">Review <span class="icon icon-sm">${iconSvg("arrowRight")}</span></button>`
      : `<span class="status ${statusClass(i.status)}">${statusLabel(i.status)}</span>`;
    const tMeta = typeBadgeInfo(i.type);
    return `
    <div class="issue-row" data-id="${escapeAttr(i.id)}">
      <span class="row-icon">${iconSvg(tMeta.icon)}</span>
      <div class="row-body">
        <div class="row-title">${escapeHtml(i.title)}</div>
        <div class="row-sub">${escapeHtml(i.createdBy || "—")} · ${tMeta.label}</div>
      </div>
      <div class="row-right">${right}</div>
    </div>`;
  }).join("");
  container.querySelectorAll(".issue-row").forEach(el => {
    el.addEventListener("click", () => openDetail(el.getAttribute("data-id")));
  });
}
async function openViewAll(){
  const query = document.getElementById("searchInput").value;
  const placeholder = "Search knowledge base…";
  const items = (query && query.trim() && query !== placeholder) ? await api().search_issues(query) : await api().list_issues();
  renderIssueCards(document.getElementById("viewAllBody"), items.slice().reverse(), "No issues yet.");
  openOverlay("viewAllOverlay");
}

/* ============================== overlays ============================== */
function openOverlay(id){ const el = document.getElementById(id); if(el) el.classList.add("open"); }
function closeOverlay(id){ const el = document.getElementById(id); if(el) el.classList.remove("open"); }
function topOpenOverlay(){
  const open = Array.from(document.querySelectorAll(".modal-overlay.open"));
  return open.length ? open[open.length - 1] : null;
}

/* ============================== generic confirm dialog ============================== */
let _confirmResolve = null;
function confirmDialog({ icon = "info", iconClass = "neutral", title, text, actionLabel = "Confirm", actionClass = "btn-primary" }){
  document.getElementById("confirmIcon").innerHTML = iconSvg(icon);
  document.getElementById("confirmIcon").className = `confirm-icon confirm-icon-${iconClass}`;
  document.getElementById("confirmTitle").textContent = title;
  document.getElementById("confirmText").textContent = text;
  const actionBtn = document.getElementById("confirmActionBtn");
  actionBtn.textContent = actionLabel;
  actionBtn.className = `btn ${actionClass}`;
  openOverlay("confirmOverlay");
  return new Promise(resolve => { _confirmResolve = resolve; });
}
function _closeConfirmDialog(result){
  closeOverlay("confirmOverlay");
  const r = _confirmResolve; _confirmResolve = null;
  if(r) r(result);
}

/* ============================== add application ============================== */
let _addAppResolve = null;
function openAddAppModalUI(){
  document.getElementById("newAppInput").value = "";
  openOverlay("addAppOverlay");
  setTimeout(() => document.getElementById("newAppInput").focus(), 0);
  return new Promise(resolve => { _addAppResolve = resolve; });
}
async function confirmAddApp(){
  const name = document.getElementById("newAppInput").value.trim();
  closeOverlay("addAppOverlay");
  if(_addAppResolve){ _addAppResolve(name || null); _addAppResolve = null; }
}
function cancelAddApp(){
  closeOverlay("addAppOverlay");
  if(_addAppResolve){ _addAppResolve(null); _addAppResolve = null; }
}

/* ============================== manage users ============================== */
function roleLabel(r){ return {technician:"Contributor",admin:"Reviewer",super_admin:"Administrator"}[r] || r; }
function creatableRoles(){
  // A super admin can create admins or technicians; an admin can only
  // create technicians. Creating another super_admin is never exposed
  // here -- that stays a server-CLI-only bootstrap action.
  return currentRole === "super_admin" ? [["technician","Contributor"],["admin","Reviewer"]] : [["technician","Contributor"]];
}

async function openManageUsers(){
  document.getElementById("nuError").style.display = "none";
  document.getElementById("nuUsername").value = "";
  document.getElementById("nuDisplayName").value = "";
  document.getElementById("nuPassword").value = "";
  document.getElementById("nuRole").innerHTML = creatableRoles().map(([v,l]) => `<option value="${v}">${l}</option>`).join("");
  await refreshUserList();
  await refreshPasswordRequests();
}

/* ============================== notifications ============================== */
/* Two kinds, like Teams/Facebook: pending password requests are a to-do
   that persists (badge-worthy) until actually resolved via Approve/Reject
   -- not just "seen". New issues a teammate posted, your own request
   getting resolved, and direct events (e.g. an admin changed your issue's
   status) are FYI -- the server only ever returns ones newer than your
   last-seen timestamp, so anything present here is by definition unread;
   opening the popover marks them seen server-side.

   Popups (toasts) fire the moment a poll notices something genuinely new
   -- same idea as Teams/FB. Sound is intentionally not wired up yet. */
let _lastNotifications = { pending: [], newIssues: [], resolvedRequests: [], direct: [] };
let _toastedKeys = new Set();   // dedup so the same item doesn't toast on every 30s poll
let _notifsInitialized = false; // don't toast-flood everything already sitting there on first load

function showToast(title, body, onClick){
  const container = document.getElementById("toastContainer");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<b>${escapeHtml(title)}</b><div class="toast-body">${escapeHtml(body)}</div>`;
  if(onClick) el.addEventListener("click", onClick);
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add("toast-out");
    setTimeout(() => el.remove(), 200);
  }, 6000);
}

function toastNewItems(items, keyPrefix, keyFn, titleFn, bodyFn, onClick){
  items.forEach(item => {
    const key = `${keyPrefix}:${keyFn(item)}`;
    if(_toastedKeys.has(key)) return;
    _toastedKeys.add(key);
    showToast(titleFn(item), bodyFn(item), onClick ? () => onClick(item) : null);
  });
}

async function refreshNotifications(){
  const badge = document.getElementById("notifBadge");
  const data = await api().get_notifications();
  if(!data || data.apiError){
    badge.style.display = "none";
    return;
  }
  _lastNotifications = {
    pending: data.pendingPasswordRequests || [],
    newIssues: data.newIssues || [],
    resolvedRequests: data.myResolvedRequests || [],
    direct: data.direct || [],
  };
  if(_notifsInitialized){
    toastNewItems(_lastNotifications.pending, "pending", r => r.id,
      () => "Password request", r => `${r.username} requested a password change`,
      () => { document.getElementById("notifPopover").classList.remove("open"); openManageUsers(); });
    toastNewItems(_lastNotifications.newIssues, "issue", i => i.id,
      () => "New in the knowledge base", i => `${i.created_by} added "${i.title}"`,
      i => { document.getElementById("notifPopover").classList.remove("open"); openDetail(i.id); });
    toastNewItems(_lastNotifications.resolvedRequests, "resolved", r => r.id,
      () => "Your account", r => `Your password change was ${r.status}`);
    toastNewItems(_lastNotifications.direct, "direct", n => n.id,
      () => "Update", n => n.message,
      n => { if(n.issue_id){ document.getElementById("notifPopover").classList.remove("open"); openDetail(n.issue_id); } });
  }
  _notifsInitialized = true;
  const total = _lastNotifications.pending.length + _lastNotifications.newIssues.length +
    _lastNotifications.resolvedRequests.length + _lastNotifications.direct.length;
  if(total === 0){
    badge.style.display = "none";
  } else {
    badge.textContent = total > 9 ? "9+" : String(total);
    badge.style.display = "";
  }
  const sideBadge = document.getElementById("sideBadgeNotif");
  if(sideBadge){
    sideBadge.hidden = total === 0;
    sideBadge.textContent = total > 9 ? "9+" : String(total);
  }
}

function notifItemHtml({ icon, colorClass, text, time, tag = "button", dataAttrs = "" }){
  const el = tag === "button" ? "button" : "div";
  const typeAttr = tag === "button" ? 'type="button"' : "";
  return `
    <${el} ${typeAttr} class="notif-item" ${dataAttrs}>
      <span class="notif-icon notif-icon-${colorClass}">${iconSvg(icon)}</span>
      <span class="notif-body">
        <span class="notif-text">${text}</span>
        <span class="notif-time">${formatDate(time)}</span>
      </span>
    </${el}>`;
}

function renderNotificationPopover(containerId, category){
  const pop = document.getElementById(containerId || "notifPopover");
  const { pending, newIssues, resolvedRequests, direct } = _lastNotifications;
  const cat = category || "all";
  const total = (cat === "all" || cat === "reviews" ? pending.length : 0)
    + (cat === "all" || cat === "kb" ? newIssues.length : 0)
    + (cat === "all" || cat === "mine" ? resolvedRequests.length + direct.length : 0);
  const sections = [];
  if(pending.length && (cat === "all" || cat === "reviews")){
    sections.push('<div class="notif-section-label">Needs your review</div>' + pending.map(r => notifItemHtml({
      icon: "user", colorClass: "indigo",
      text: `<b>${escapeHtml(r.username)}</b> requested a password change`,
      time: r.requested_at, dataAttrs: 'data-open-manage-users="1"',
    })).join(""));
  }
  if(direct.length && (cat === "all" || cat === "mine")){
    sections.push('<div class="notif-section-label">Updates</div>' + direct.map(n => notifItemHtml({
      icon: "edit", colorClass: "amber", text: escapeHtml(n.message), time: n.created_at,
      dataAttrs: n.issue_id ? `data-open-issue="${escapeAttr(n.issue_id)}"` : "",
    })).join(""));
  }
  if(newIssues.length && (cat === "all" || cat === "kb")){
    sections.push('<div class="notif-section-label">New in the knowledge base</div>' + newIssues.map(i => notifItemHtml({
      icon: "plus", colorClass: "blue",
      text: `<b>${escapeHtml(i.created_by)}</b> added "${escapeHtml(i.title)}"`,
      time: i.created_at, dataAttrs: `data-open-issue="${escapeAttr(i.id)}"`,
    })).join(""));
  }
  if(resolvedRequests.length && (cat === "all" || cat === "mine")){
    sections.push('<div class="notif-section-label">Your account</div>' + resolvedRequests.map(r => notifItemHtml({
      icon: "check", colorClass: r.status === "approved" ? "green" : "red",
      text: `Your password change was ${escapeHtml(r.status)}`, time: r.reviewed_at, tag: "div",
    })).join(""));
  }
  if(sections.length){
    pop.innerHTML = `
      <div class="popover-header"><h4>Notifications</h4><span class="notif-total">${total}</span></div>
      ${sections.join("")}`;
  } else {
    pop.innerHTML = `
      <div class="popover-header"><h4>Notifications</h4></div>
      <div class="notif-empty">
        <span class="notif-empty-icon">${iconSvg("bell")}</span>
        <div class="muted-small">You're all caught up.</div>
      </div>`;
  }
  pop.querySelectorAll("[data-open-manage-users]").forEach(btn => {
    btn.addEventListener("click", () => { pop.classList.remove("open"); openManageUsers(); });
  });
  pop.querySelectorAll("[data-open-issue]").forEach(btn => {
    btn.addEventListener("click", () => { pop.classList.remove("open"); openDetail(btn.getAttribute("data-open-issue")); });
  });
}

async function refreshPasswordRequests(){
  const body = document.getElementById("pwRequestListBody");
  const requests = await api().list_password_requests();
  if(requests && requests.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(requests.apiError); return; }
  if(requests && requests.apiError){ body.innerHTML = `<div class="user-row">${escapeHtml(requests.apiError)}</div>`; return; }
  if(!requests.length){ body.innerHTML = `<div class="user-row muted-small">No pending requests.</div>`; return; }
  body.innerHTML = requests.map(r => `
      <div class="user-row">
        <span class="user-row-name">${escapeHtml(r.username)}</span>
        <span class="muted-small">${formatDate(r.requested_at)}</span>
        <button type="button" class="btn-link" data-approve="${r.id}">Approve</button>
        <button type="button" class="btn-link btn-link-danger" data-reject="${r.id}">Reject</button>
      </div>`).join("");
  body.querySelectorAll("[data-approve]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const result = await api().approve_password_request(btn.getAttribute("data-approve"));
      if(result && result.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(result.apiError); return; }
      if(result && result.apiError){ alert(result.apiError); return; }
      await refreshPasswordRequests();
      await refreshNotifications();
    });
  });
  body.querySelectorAll("[data-reject]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const result = await api().reject_password_request(btn.getAttribute("data-reject"));
      if(result && result.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(result.apiError); return; }
      if(result && result.apiError){ alert(result.apiError); return; }
      await refreshPasswordRequests();
      await refreshNotifications();
    });
  });
}

async function submitPasswordChangeRequest(){
  const newPassword = document.getElementById("cpNewPassword").value;
  const confirmPassword = document.getElementById("cpConfirmPassword").value;
  const errEl = document.getElementById("cpError");
  const okEl = document.getElementById("cpSuccess");
  okEl.style.display = "none";
  if(!newPassword || newPassword.length < 8){
    errEl.textContent = "Password must be at least 8 characters.";
    errEl.style.display = "";
    return;
  }
  if(newPassword !== confirmPassword){
    errEl.textContent = "Passwords do not match.";
    errEl.style.display = "";
    return;
  }
  const btn = document.getElementById("cpRequestBtn");
  btn.disabled = true;
  const result = await api().request_password_change(newPassword);
  btn.disabled = false;
  if(result && result.needsLogin){ closeOverlay("helpOverlay"); showLoginScreen(result.apiError); return; }
  if(result && result.apiError){
    errEl.textContent = result.apiError;
    errEl.style.display = "";
    return;
  }
  errEl.style.display = "none";
  document.getElementById("cpNewPassword").value = "";
  document.getElementById("cpConfirmPassword").value = "";
  okEl.textContent = "Request submitted. An admin needs to approve it before it takes effect.";
  okEl.style.display = "";
}

let _usersCache = [];
async function refreshUserList(){
  const body = document.getElementById("userListBody");
  const users = await api().list_users();
  if(users && users.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(users.apiError); return; }
  if(users && users.apiError){ body.innerHTML = `<tr><td colspan="4">${escapeHtml(users.apiError)}</td></tr>`; return; }
  _usersCache = users;

  document.getElementById("roleCountContributor").textContent = `${users.filter(u => u.role === "technician").length} users`;
  document.getElementById("roleCountReviewer").textContent = `${users.filter(u => u.role === "admin").length} users`;
  document.getElementById("roleCountAdmin").textContent = `${users.filter(u => u.role === "super_admin").length} users`;

  renderUserListTable();
}
function renderUserListTable(){
  const body = document.getElementById("userListBody");
  const q = (document.getElementById("userSearchInput").value || "").trim().toLowerCase();
  const roleFilter = document.getElementById("userRoleFilter").value;
  let users = _usersCache;
  if(q) users = users.filter(u => u.display_name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q));
  if(roleFilter) users = users.filter(u => u.role === roleFilter);

  if(!users.length){
    body.innerHTML = `<tr><td colspan="4" class="muted-small">No matching accounts.</td></tr>`;
    return;
  }
  body.innerHTML = users.map(u => {
    const canDeactivate = u.is_active && u.username !== currentUsername && u.role !== "super_admin" &&
      (currentRole === "super_admin" || u.role === "technician");
    const initials = (u.display_name || "?").trim().split(/\s+/).map(p => p[0]).slice(0, 2).join("").toUpperCase();
    return `
      <tr>
        <td>
          <div class="entry-cell">
            <span class="avatar avatar-sm">${escapeHtml(initials)}</span>
            <div><b>${escapeHtml(u.display_name)}</b><span class="muted-small">@${escapeHtml(u.username)}</span></div>
          </div>
        </td>
        <td>${roleLabel(u.role)}</td>
        <td><span class="status ${u.is_active ? "st-solved" : "st-cancelled"}">${u.is_active ? "Active" : "Deactivated"}</span></td>
        <td>${canDeactivate ? `<button type="button" class="btn-link btn-link-danger" data-deactivate="${escapeAttr(u.username)}">Deactivate</button>` : ""}</td>
      </tr>`;
  }).join("");
  body.querySelectorAll("[data-deactivate]").forEach(btn => {
    btn.addEventListener("click", async () => {
      if(btn.dataset.armed !== "1"){
        btn.dataset.armed = "1";
        btn.textContent = "Confirm?";
        setTimeout(() => { if(btn.dataset.armed === "1"){ btn.dataset.armed = "0"; btn.textContent = "Deactivate"; } }, 3000);
        return;
      }
      const uname = btn.getAttribute("data-deactivate");
      const result = await api().deactivate_user(uname);
      if(result && result.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(result.apiError); return; }
      if(result && result.apiError){ alert(result.apiError); return; }
      await refreshUserList();
    });
  });
}

async function submitCreateUser(){
  const username = document.getElementById("nuUsername").value.trim();
  const displayName = document.getElementById("nuDisplayName").value.trim();
  const password = document.getElementById("nuPassword").value;
  const role = document.getElementById("nuRole").value;
  const errEl = document.getElementById("nuError");
  if(!username || !password){
    errEl.textContent = "Username and password are required.";
    errEl.style.display = "";
    return;
  }
  const btn = document.getElementById("nuCreateBtn");
  btn.disabled = true;
  const result = await api().create_user(username, password, displayName, role);
  btn.disabled = false;
  if(result && result.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(result.apiError); return; }
  if(result && result.apiError){
    errEl.textContent = result.apiError;
    errEl.style.display = "";
    return;
  }
  errEl.style.display = "none";
  document.getElementById("nuUsername").value = "";
  document.getElementById("nuDisplayName").value = "";
  document.getElementById("nuPassword").value = "";
  await refreshUserList();
}
async function openAddAppModal(){
  const name = await openAddAppModalUI();
  if(!name) return null;
  if(!allApps.includes(name)){
    const result = await api().add_application(name);
    if(result && result.apiError){ alert(result.apiError); return null; }
    allApps = result;
    refreshAllAppWidgets();
  }
  return name;
}

/* ============================== issue detail / edit ============================== */
function renderDetailView(issue){
  document.getElementById("dId").textContent = issue.id;
  const statusEl = document.getElementById("dStatus");
  statusEl.className = `status ${statusClass(issue.status)}`;
  statusEl.textContent = statusLabel(issue.status);
  document.getElementById("dTitle").textContent = issue.title;
  document.getElementById("dSystem").textContent = issue.system || "—";
  const errorWrap = document.getElementById("dErrorWrap");
  if(issue.error){ errorWrap.style.display = ""; document.getElementById("dError").textContent = issue.error; }
  else { errorWrap.style.display = "none"; }
  document.getElementById("dCreated").textContent = formatDate(issue.createdAt);
  document.getElementById("dApps").innerHTML = (issue.apps || [])
    .map(a => `<span class="chip">${escapeHtml(a)}</span>`).join("");
  const type = issue.type || "PROBLEM_SOLUTION";
  const typeMeta = typeBadgeInfo(type);
  document.getElementById("dTypeIcon").innerHTML = iconSvg(typeMeta.icon);
  document.getElementById("dTypeLabel").textContent = typeMeta.label;
  document.getElementById("dPSBlock").style.display = type === "PROBLEM_SOLUTION" ? "" : "none";
  document.getElementById("dInfoBlock").style.display = type === "INFORMATION" ? "" : "none";
  document.getElementById("dProcBlock").style.display = type === "PROCEDURE" ? "" : "none";
  document.getElementById("dProcBlock2").style.display = type === "PROCEDURE" ? "" : "none";
  document.getElementById("dStepsWrap").style.display = type === "INFORMATION" ? "none" : "";

  if(type === "PROBLEM_SOLUTION"){
    document.getElementById("dProblem").textContent = issue.problem;
    document.getElementById("dRoot").textContent = issue.root;
    document.getElementById("dSolution").textContent = issue.solution;
  } else if(type === "INFORMATION"){
    document.getElementById("dTopic").textContent = issue.topic || "";
    document.getElementById("dDescription").textContent = issue.description || "";
    document.getElementById("dContextWrap").style.display = issue.context ? "" : "none";
    document.getElementById("dContext").textContent = issue.context || "";
  } else if(type === "PROCEDURE"){
    document.getElementById("dPurpose").textContent = issue.purpose || "";
    document.getElementById("dPrereqsWrap").style.display = issue.prerequisites ? "" : "none";
    document.getElementById("dPrereqs").textContent = issue.prerequisites || "";
    document.getElementById("dWarningsWrap").style.display = issue.warnings ? "" : "none";
    document.getElementById("dWarnings").textContent = issue.warnings || "";
    document.getElementById("dAdditionalInfoWrap").style.display = issue.additionalInfo ? "" : "none";
    document.getElementById("dAdditionalInfo").textContent = issue.additionalInfo || "";
  }
  document.getElementById("dSteps").innerHTML = (issue.steps || [])
    .map(([action, app]) => `<li>${escapeHtml(action)}${app ? ` <span class="detail-step-app">(${escapeHtml(app)})</span>` : ""}</li>`)
    .join("");
  const attBlock = document.getElementById("dAttachmentsBlock");
  if(issue.attachments && issue.attachments.length){
    attBlock.style.display = "";
    renderAttachmentList(document.getElementById("dAttachments"), issue.attachments, issue.id, false);
  } else {
    attBlock.style.display = "none";
  }

  document.getElementById("dAuthor").textContent = issue.createdBy || "—";
  document.getElementById("dEntryId").textContent = issue.id;
  const validatedWrap = document.getElementById("dValidatedByWrap");
  if(issue.status === "solved" && issue.updatedBy){
    validatedWrap.style.display = "";
    document.getElementById("dValidatedBy").textContent = `${issue.updatedBy} · ${formatDate(issue.updatedAt)}`;
  } else {
    validatedWrap.style.display = "none";
  }
}

/* Related knowledge: other trusted (solved) entries that share an
   application with this one -- a real, if simple, signal (no similarity
   search or category system exists on the server to do better than this). */
async function renderRelatedKnowledge(issue){
  const block = document.getElementById("dRelatedBlock");
  if(issue.status !== "solved" || !(issue.apps || []).length){ block.style.display = "none"; return; }
  const items = await _loadAllIssues();
  const related = items.filter(i => i.id !== issue.id && i.status === "solved"
    && (i.apps || []).some(a => issue.apps.includes(a))).slice(0, 3);
  if(!related.length){ block.style.display = "none"; return; }
  block.style.display = "";
  document.getElementById("dRelated").innerHTML = related.map(i => `
    <div class="user-row related-row" data-open="${escapeAttr(i.id)}">
      <span class="issue-id">${escapeHtml(i.id)}</span>
      <span class="user-row-name">${escapeHtml(i.title)}</span>
    </div>`).join("");
  document.getElementById("dRelated").querySelectorAll("[data-open]").forEach(el => {
    el.addEventListener("click", () => openDetail(el.getAttribute("data-open")));
  });
}

function ensureEditAppsPicker(){
  if(editAppsPicker) return editAppsPicker;
  editAppsPicker = createAppsPicker({
    pickerEl: document.getElementById("eAppsPicker"),
    chipsEl: document.getElementById("eAppChips"),
    toggleEl: document.getElementById("eAppsPickerToggle"),
    dropdownEl: document.getElementById("eAppsDropdown"),
    getSelected: () => editApps,
    onChange: (next) => { editApps = next; },
  });
  return editAppsPicker;
}

function renderDetailEdit(issue){
  document.getElementById("eTitle").value = issue.title;
  const statusSelect = document.getElementById("eStatus");
  statusSelect.value = issue.status;
  // Content stays editable by anyone; only the status/phase itself
  // requires an admin -- server enforces this too, this just avoids
  // someone filling out a whole edit only to have the status change
  // rejected at save time.
  statusSelect.disabled = !isAdminOrAbove();
  statusSelect.title = statusSelect.disabled ? "Only an admin can change an issue's status" : "";
  document.getElementById("eError").value = issue.error || "";
  document.getElementById("eProblem").value = issue.problem;
  document.getElementById("eRoot").value = issue.root;
  document.getElementById("eSolution").value = issue.solution;

  editApps = (issue.apps || []).slice();
  const picker = ensureEditAppsPicker();
  picker.renderChips();
  picker.renderDropdown();

  const stepsBody = document.getElementById("eStepsBody");
  clearSteps(stepsBody);
  (issue.steps || []).forEach(([action, app]) => addStep(stepsBody, action, app));

  renderAttachmentList(document.getElementById("eAttachments"), issue.attachments || [], issue.id, true);
  document.querySelectorAll("#detailEdit .attach-box").forEach(btn => {
    btn.onclick = async () => {
      const path = await api().pick_file();
      if(!path) return;
      const result = await api().add_attachment(issue.id, btn.getAttribute("data-kind"), path);
      if(result && !result.apiError){
        currentDetailIssue = result;
        renderAttachmentList(document.getElementById("eAttachments"), result.attachments, issue.id, true);
      }
    };
  });
}

function showDetailView(){
  document.getElementById("detailEdit").style.display = "none";
  document.getElementById("detailView").style.display = "";
  // "Solved" fully locks the issue (matches the original design); every
  // other status stays editable by anyone -- only the status field itself
  // is admin-gated, enforced separately in renderDetailEdit()/the server.
  const isPS = (currentDetailIssue.type || "PROBLEM_SOLUTION") === "PROBLEM_SOLUTION";
  const locked = currentDetailIssue.status === "solved" && !isAdminOrAbove();
  document.getElementById("dEditBtn").style.display = (locked || !isPS) ? "none" : "";
  const lockedNote = document.getElementById("dLockedNote");
  lockedNote.style.display = locked ? "" : (!isPS ? "" : "none");
  lockedNote.textContent = locked ? "Solved — only an admin can change this" : (!isPS ? "Editing this type isn't supported yet" : "");
  document.getElementById("dSaveBtn").style.display = "none";
  document.getElementById("dCancelBtn").style.display = "none";
  const reviewBar = document.getElementById("reviewBar");
  const needsReview = isAdminOrAbove() && !["solved", "cancelled"].includes(currentDetailIssue.status);
  reviewBar.style.display = needsReview ? "" : "none";
  if(needsReview){
    reviewBar.querySelectorAll("input[name=reviewDecision]").forEach(r => { r.checked = r.value === "request_changes"; });
    reviewBar.querySelectorAll("[data-vc]").forEach(cb => { cb.checked = false; });
    document.getElementById("reviewCommentInput").value = "";
    document.getElementById("reviewCommentError").style.display = "none";
    updateReviewDecisionUI();
  }
  renderDetailView(currentDetailIssue);
}
const REVIEW_DECISION_META = {
  approve: { label: "Approve and publish", btnClass: "btn-success" },
  request_changes: { label: "Send back to author", btnClass: "btn-warn" },
  reject: { label: "Reject entry", btnClass: "btn-danger" },
};
function currentReviewDecision(){
  const checked = document.querySelector('#reviewBar input[name=reviewDecision]:checked');
  return checked ? checked.value : "request_changes";
}
function updateReviewDecisionUI(){
  const decision = currentReviewDecision();
  document.querySelectorAll("#reviewBar .decision-option").forEach(el => {
    el.classList.toggle("decision-selected", el.dataset.decision === decision);
  });
  const meta = REVIEW_DECISION_META[decision];
  const btn = document.getElementById("reviewSubmitBtn");
  btn.textContent = meta.label;
  btn.className = "btn btn-block review-submit-btn " + meta.btnClass;
  document.getElementById("reviewCommentError").style.display = "none";
}
async function _reviewSetStatus(newStatus, confirmOpts){
  const ok = await confirmDialog(confirmOpts);
  if(!ok) return;
  const issue = currentDetailIssue;
  // Send every field back, not just a hand-picked subset -- IssueIn
  // defaults any omitted field to "", so a partial body here would
  // silently wipe an Information/Procedure entry's real content (topic,
  // description, purpose, etc.) on every Approve/Reject/status change.
  const body = {
    title: issue.title, system: issue.system, status: newStatus, type: issue.type, error: issue.error,
    apps: issue.apps, problem: issue.problem, root: issue.root, solution: issue.solution, steps: issue.steps,
    topic: issue.topic, description: issue.description, context: issue.context,
    purpose: issue.purpose, prerequisites: issue.prerequisites, warnings: issue.warnings,
    additionalInfo: issue.additionalInfo,
  };
  const result = await api().update_issue(issue.id, body);
  if(result && result.needsLogin){ closeDetail(); showLoginScreen(result.apiError); return; }
  if(result && result.apiError){ alert(result.apiError); return; }
  currentDetailIssue = result;
  showDetailView();
  await renderList(document.getElementById("searchInput").value);
  refreshDashboard(); refreshReviewQueue();
}
async function submitReviewDecision(){
  const decision = currentReviewDecision();
  const errEl = document.getElementById("reviewCommentError");
  errEl.style.display = "none";
  if(decision === "approve"){
    const missing = Array.from(document.querySelectorAll("#reviewBar [data-vc]")).some(cb => !cb.checked);
    if(missing){
      errEl.textContent = "Complete the validation checklist before approving.";
      errEl.style.display = "";
      return;
    }
    await _reviewSetStatus("solved", {
      icon: "check", iconClass: "success", title: "Publish to trusted knowledge?",
      text: `Everyone in the organization will see "${currentDetailIssue.title}". It will also be available to the AI Assistant when it launches.`,
      actionLabel: "Approve and publish", actionClass: "btn-success",
    });
    return;
  }
  if(decision === "reject"){
    await _reviewSetStatus("cancelled", {
      icon: "xMark", iconClass: "danger", title: "Reject this entry?",
      text: `"${currentDetailIssue.title}" will be closed and not published. This can be reopened later by an admin.`,
      actionLabel: "Reject entry", actionClass: "btn-danger",
    });
    return;
  }
  // request_changes
  const message = document.getElementById("reviewCommentInput").value.trim();
  if(!message){ errEl.textContent = "Say what should change before sending."; errEl.style.display = ""; return; }
  const btn = document.getElementById("reviewSubmitBtn");
  if(btn.disabled) return;
  btn.disabled = true;
  try {
    const result = await api().comment_issue(currentDetailIssue.id, message);
    if(result && result.needsLogin){ closeDetail(); showLoginScreen(result.apiError); return; }
    if(result && result.apiError){ errEl.textContent = result.apiError; errEl.style.display = ""; return; }
    document.getElementById("reviewCommentInput").value = "";
    await refreshNotifications();
    closeDetail();
  } finally {
    btn.disabled = false;
  }
}
function reviewSaveForLater(){
  showToast("Not saved", "Review notes aren't stored between sessions yet — finish or cancel this review for now.");
}
function showDetailEdit(){
  if((currentDetailIssue.type || "PROBLEM_SOLUTION") !== "PROBLEM_SOLUTION"){
    showToast("Not available yet", "Editing Information and Procedure entries isn't supported yet -- only Problem / Solution entries can be edited right now.");
    return;
  }
  document.getElementById("detailView").style.display = "none";
  document.getElementById("detailEdit").style.display = "";
  document.getElementById("dEditBtn").style.display = "none";
  document.getElementById("dSaveBtn").style.display = "";
  document.getElementById("dCancelBtn").style.display = "";
  renderDetailEdit(currentDetailIssue);
}

const HISTORY_ACTION_LABEL = {
  create_issue: "created this issue",
  update_issue: "updated this issue",
  add_attachment: "added an attachment",
  remove_attachment: "removed an attachment",
};
function renderHistory(entries){
  const box = document.getElementById("dHistory");
  if(!entries || entries.length === 0){
    box.innerHTML = '<div class="hint" style="padding:8px 0;">No history yet.</div>';
    return;
  }
  box.innerHTML = entries.map(e => `
    <div class="user-row">
      <span class="user-row-name"><b>${escapeHtml(e.username)}</b> ${HISTORY_ACTION_LABEL[e.action] || escapeHtml(e.action)}</span>
      <span class="muted-small">${formatDate(e.at)}</span>
    </div>
  `).join("");
}

async function openDetail(id, editAfter){
  const [issue, history] = await Promise.all([api().get_issue(id), api().get_issue_history(id)]);
  if(!issue || issue.apiError){
    if(issue && issue.needsLogin) showLoginScreen(issue.apiError);
    else alert((issue && issue.apiError) || "Could not load that issue.");
    return;
  }
  currentDetailIssue = issue;
  showDetailView();
  renderHistory(history);
  renderRelatedKnowledge(issue);
  openOverlay("detailOverlay");
  if(editAfter) showDetailEdit();
}
function closeDetail(){ closeOverlay("detailOverlay"); }

async function saveDetailEdit(){
  const title = document.getElementById("eTitle").value.trim();
  const status = document.getElementById("eStatus").value;
  const error = document.getElementById("eError").value.trim();
  const problem = document.getElementById("eProblem").value.trim();
  const root = document.getElementById("eRoot").value.trim();
  const solution = document.getElementById("eSolution").value.trim();
  const steps = collectSteps(document.getElementById("eStepsBody"));

  if(!title || editApps.length === 0 || !problem || !root || !solution || steps.length === 0){
    alert("Please fill in the required fields (title, at least one application, problem, root cause, solution, and at least one step) before saving.");
    return;
  }
  const result = await api().update_issue(currentDetailIssue.id, {
    title, status, error, apps: editApps.slice(), problem, root, solution, steps,
  });
  if(result && result.apiError){
    if(result.needsLogin) showLoginScreen(result.apiError);
    else alert(result.apiError);
    return;
  }
  currentDetailIssue = result;
  showDetailView();
  renderHistory(await api().get_issue_history(currentDetailIssue.id));
  await renderList(document.getElementById("searchInput").value);
}

/* ============================== capture: type step + local drafts ============================== */
/* Drafts are real, but device-local (localStorage) -- no draft-storage
   endpoint exists on the server, and the spec is explicit that drafts are
   "only visible to you", which a local-only store honestly satisfies.
   Only Problem/Solution has a real destination on submit (the server's
   /issues only understands that shape) -- Information/Procedure are shown
   per the design but flagged as not yet accepted, not faked as working. */
const DRAFT_KEY = "rck_draft_problem_solution";
function draftKeyFor(){ return `${DRAFT_KEY}::${currentUsername || "anon"}`; }
function saveDraft(){
  try {
    const data = { type: "PROBLEM_SOLUTION", apps: currentApps.slice(), ...collectForm(), savedAt: new Date().toISOString() };
    const hasContent = data.title || data.problem || data.root || data.solution || (data.steps || []).some(s => s[0]);
    if(hasContent) localStorage.setItem(draftKeyFor(), JSON.stringify(data));
    else localStorage.removeItem(draftKeyFor());
  } catch(e) { /* private mode etc -- drafts are best-effort */ }
}
function loadDraft(){
  try { const raw = localStorage.getItem(draftKeyFor()); return raw ? JSON.parse(raw) : null; } catch(e) { return null; }
}
function deleteDraft(){ try { localStorage.removeItem(draftKeyFor()); } catch(e) {} }

function showCaptureTypeStep(){
  document.getElementById("captureTypeScreen").style.display = "";
  document.getElementById("captureFormScreen").style.display = "none";
  const draft = loadDraft();
  const card = document.getElementById("captureDraftCard");
  if(draft){
    card.style.display = "";
    document.getElementById("captureDraftList").innerHTML = `
      <div class="draft-row">
        <span class="row-icon">${iconSvg("edit")}</span>
        <div class="row-body">
          <div class="row-title">${escapeHtml(draft.title || "(untitled)")}</div>
          <div class="row-sub">Problem / Solution · Draft · autosaved ${formatDate(draft.savedAt)}</div>
        </div>
        <div class="row-right">
          <span class="status st-review">DRAFT</span>
          <button type="button" class="btn btn-outline btn-sm" id="draftContinueBtn">Continue</button>
          <button type="button" class="btn-icon-only" id="draftDeleteBtn" title="Delete draft">${iconSvg("trash")}</button>
        </div>
      </div>`;
    document.getElementById("draftContinueBtn").addEventListener("click", () => showCaptureFormStep("PROBLEM_SOLUTION", draft));
    document.getElementById("draftDeleteBtn").addEventListener("click", () => { deleteDraft(); showCaptureTypeStep(); });
  } else {
    card.style.display = "none";
  }
}

const CAPTURE_SCREENS = { PROBLEM_SOLUTION: "captureFormScreen", INFORMATION: "captureInfoScreen", PROCEDURE: "captureProcScreen" };
function showCaptureFormStep(type, draft){
  document.getElementById("captureTypeScreen").style.display = "none";
  Object.values(CAPTURE_SCREENS).forEach(id => { document.getElementById(id).style.display = "none"; });
  document.getElementById(CAPTURE_SCREENS[type]).style.display = "";

  if(type === "PROBLEM_SOLUTION"){
    if(draft){
      document.getElementById("fTitle").value = draft.title || "";
      document.getElementById("fError").value = draft.error || "";
      document.getElementById("fProblem").value = draft.problem || "";
      document.getElementById("fRoot").value = draft.root || "";
      document.getElementById("fSolution").value = draft.solution || "";
      document.getElementById("cProblem").textContent = document.getElementById("fProblem").value.length;
      document.getElementById("cRoot").textContent = document.getElementById("fRoot").value.length;
      document.getElementById("cSolution").textContent = document.getElementById("fSolution").value.length;
      currentApps = (draft.apps || []).slice();
      renderChips();
      const stepsBody = document.getElementById("stepsBody");
      clearSteps(stepsBody);
      const steps = (draft.steps || []).filter(([a]) => a);
      if(steps.length) steps.forEach(([action, app]) => addStep(stepsBody, action, app));
      else { addStep(stepsBody); addStep(stepsBody); }
    }
    document.getElementById("fTitle").focus();
  } else if(type === "INFORMATION"){
    document.getElementById("refLabelInfo").textContent = "…";
    api().next_ref_id().then(id => { document.getElementById("refLabelInfo").textContent = id; });
    document.getElementById("iTitle").focus();
  } else if(type === "PROCEDURE"){
    document.getElementById("refLabelProc").textContent = "…";
    api().next_ref_id().then(id => { document.getElementById("refLabelProc").textContent = id; });
    if(!document.getElementById("procStepsBody").children.length){
      addStep(document.getElementById("procStepsBody"));
      addStep(document.getElementById("procStepsBody"));
    }
    document.getElementById("pTitle").focus();
  }
}

let _draftSaveTimer = null;
function scheduleDraftSave(){
  if(_draftSaveTimer) clearTimeout(_draftSaveTimer);
  _draftSaveTimer = setTimeout(saveDraft, 800);
}

/* ============================== capture form ============================== */
function renderChips(){
  if(mainAppsPicker) mainAppsPicker.renderChips();
}
function collectForm(){
  return {
    title: document.getElementById("fTitle").value.trim(),
    problem: document.getElementById("fProblem").value.trim(),
    root: document.getElementById("fRoot").value.trim(),
    solution: document.getElementById("fSolution").value.trim(),
    error: document.getElementById("fError").value.trim(),
    steps: collectSteps(document.getElementById("stepsBody")),
  };
}
async function clearForm(){
  document.getElementById("fTitle").value = "";
  document.getElementById("fError").value = "";
  document.getElementById("fProblem").value = "";
  document.getElementById("fRoot").value = "";
  document.getElementById("fSolution").value = "";
  document.getElementById("cProblem").textContent = "0";
  document.getElementById("cRoot").textContent = "0";
  document.getElementById("cSolution").textContent = "0";
  currentApps = [];
  renderChips();
  stagedAttachments = [];
  renderStagedAttachments();
  clearSteps(document.getElementById("stepsBody"));
  addStep(document.getElementById("stepsBody"));
  addStep(document.getElementById("stepsBody"));
  document.getElementById("refLabel").textContent = await api().next_ref_id();
}
async function submitIssue(status){
  const f = collectForm();
  if(!f.title || currentApps.length===0 || !f.problem || !f.root || !f.solution || f.steps.length===0){
    alert("Please fill in the required fields (title, at least one application, problem, root cause, solution, and at least one step) before submitting.");
    return;
  }
  // Without this guard, clicking (or double-clicking on a slow connection)
  // Submit more than once fires a separate POST per click, each creating
  // its own duplicate issue with its own REF-ID -- confirmed happening in
  // practice, not theoretical. Same disable-while-in-flight pattern as
  // attemptLogin() already uses for the same reason.
  const btn = document.getElementById("submitBtn");
  if(btn.disabled) return;
  btn.disabled = true;
  try {
    const result = await api().add_issue({
      title: f.title, system: currentApps[0], status, error: f.error,
      apps: currentApps.slice(), problem: f.problem, root: f.root, solution: f.solution,
      steps: f.steps,
    });
    if(result && result.apiError){
      if(result.needsLogin) showLoginScreen(result.apiError);
      else alert(result.apiError);
      return;
    }
    // Attachments are uploaded one by one after creation -- the server can't
    // read a path on the client's disk, so each staged file's bytes have to
    // be sent up explicitly now that we have a real issue id to attach to.
    for(const staged of stagedAttachments){
      const attachResult = await api().add_attachment(result.id, staged.kind, staged.path);
      if(attachResult && attachResult.apiError){
        alert(`"${result.id}" was saved, but attaching "${staged.name}" failed: ${attachResult.apiError}`);
      }
    }
    await renderList(document.getElementById("searchInput").value);
    await clearForm();
    deleteDraft();
    showToast("Knowledge captured", `"${result.title}" was submitted as ${result.id} -- pending review.`);
    showCaptureTypeStep();
    refreshDashboard();
  } finally {
    btn.disabled = false;
  }
}

async function clearInfoForm(){
  document.getElementById("iTitle").value = "";
  document.getElementById("iTopic").value = "";
  document.getElementById("iDescription").value = "";
  document.getElementById("cIDescription").textContent = "0";
  document.getElementById("iContext").value = "";
  currentInfoApps = [];
  if(infoAppsPicker) infoAppsPicker.renderChips();
  document.getElementById("refLabelInfo").textContent = await api().next_ref_id();
}
async function submitInformation(){
  const title = document.getElementById("iTitle").value.trim();
  const topic = document.getElementById("iTopic").value.trim();
  const description = document.getElementById("iDescription").value.trim();
  const context = document.getElementById("iContext").value.trim();
  if(!title || !topic || !description){
    alert("Please fill in the required fields (title, topic, and description) before submitting.");
    return;
  }
  const btn = document.getElementById("submitInfoBtn");
  if(btn.disabled) return;
  btn.disabled = true;
  try {
    const result = await api().add_issue({
      title, type: "INFORMATION", system: currentInfoApps[0] || "", apps: currentInfoApps.slice(),
      topic, description, context,
    });
    if(result && result.apiError){
      if(result.needsLogin) showLoginScreen(result.apiError);
      else alert(result.apiError);
      return;
    }
    await renderList(document.getElementById("searchInput").value);
    await clearInfoForm();
    showToast("Knowledge captured", `"${result.title}" was submitted as ${result.id} -- pending review.`);
    showCaptureTypeStep();
    refreshDashboard();
  } finally {
    btn.disabled = false;
  }
}

async function clearProcForm(){
  document.getElementById("pTitle").value = "";
  document.getElementById("pPurpose").value = "";
  document.getElementById("pPrereqs").value = "";
  document.getElementById("pWarnings").value = "";
  document.getElementById("pAdditionalInfo").value = "";
  currentProcApps = [];
  if(procAppsPicker) procAppsPicker.renderChips();
  clearSteps(document.getElementById("procStepsBody"));
  addStep(document.getElementById("procStepsBody"));
  addStep(document.getElementById("procStepsBody"));
  document.getElementById("refLabelProc").textContent = await api().next_ref_id();
}
async function submitProcedure(){
  const title = document.getElementById("pTitle").value.trim();
  const purpose = document.getElementById("pPurpose").value.trim();
  const prerequisites = document.getElementById("pPrereqs").value.trim();
  const warnings = document.getElementById("pWarnings").value.trim();
  const additionalInfo = document.getElementById("pAdditionalInfo").value.trim();
  const steps = collectSteps(document.getElementById("procStepsBody"));
  if(!title || !purpose || steps.length === 0){
    alert("Please fill in the required fields (title, purpose, and at least one step) before submitting.");
    return;
  }
  const btn = document.getElementById("submitProcBtn");
  if(btn.disabled) return;
  btn.disabled = true;
  try {
    const result = await api().add_issue({
      title, type: "PROCEDURE", system: currentProcApps[0] || "", apps: currentProcApps.slice(),
      purpose, prerequisites, steps, warnings, additionalInfo,
    });
    if(result && result.apiError){
      if(result.needsLogin) showLoginScreen(result.apiError);
      else alert(result.apiError);
      return;
    }
    await renderList(document.getElementById("searchInput").value);
    await clearProcForm();
    showToast("Knowledge captured", `"${result.title}" was submitted as ${result.id} -- pending review.`);
    showCaptureTypeStep();
    refreshDashboard();
  } finally {
    btn.disabled = false;
  }
}

/* ============================== shell: sidebar nav + views ============================== */
const VIEW_TITLES = {
  dashboard: "Dashboard", capture: "Capture knowledge", "my-entries": "My entries",
  trusted: "Trusted knowledge", "review-queue": "Review queue",
  notifications: "Notifications", "ai-assistant": "AI Assistant",
  "my-account": "My account", settings: "Settings",
};
// Breadcrumb = "Section  ›  Page", matching the shell's own section
// groupings (Workspace/Knowledge/Validation/Assistant/Account/
// Administration) -- Dashboard is the one exception, shown bare as the
// app's home page.
const VIEW_SECTIONS = {
  notifications: "Workspace", capture: "Knowledge", "my-entries": "Knowledge", trusted: "Knowledge",
  "review-queue": "Validation", "ai-assistant": "Assistant", "my-account": "Account", settings: "Administration",
};
function renderBreadcrumb(view){
  const section = VIEW_SECTIONS[view];
  const title = VIEW_TITLES[view] || "Dashboard";
  const crumb = document.getElementById("topbarCrumb");
  crumb.innerHTML = section
    ? `<span class="crumb-section">${escapeHtml(section)}</span><span class="crumb-sep">›</span><span class="crumb-current">${escapeHtml(title)}</span>`
    : `<span class="crumb-current">${escapeHtml(title)}</span>`;
}
async function showView(view){
  document.querySelectorAll(".view").forEach(el => el.classList.toggle("active", el.id === "view-" + view));
  document.querySelectorAll(".side-link[data-view]").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  document.getElementById("accountMenu").classList.remove("open");
  renderBreadcrumb(view);
  if(view === "dashboard") await refreshDashboard();
  else if(view === "capture") showCaptureTypeStep();
  else if(view === "my-entries") await refreshMyEntries();
  else if(view === "trusted") await refreshTrusted();
  else if(view === "review-queue") await refreshReviewQueue();
  else if(view === "notifications") await refreshNotifPage();
  else if(view === "ai-assistant") await refreshAiAssistant();
  else if(view === "my-account") refreshMyAccount();
  else if(view === "settings") await refreshSettingsView();
}
function wireShellNav(){
  document.querySelectorAll("[data-view]").forEach(el => {
    el.addEventListener("click", () => showView(el.dataset.view));
  });
  const accountBtn = document.getElementById("accountBtn");
  const accountMenu = document.getElementById("accountMenu");
  accountBtn.addEventListener("click", e => {
    e.stopPropagation();
    accountMenu.classList.toggle("open");
  });
  document.addEventListener("click", () => accountMenu.classList.remove("open"));

  document.querySelectorAll('[data-status-tab]').forEach(el => {
    el.addEventListener("click", () => setMyEntriesTab(el.dataset.statusTab));
  });
  document.getElementById("myEntriesViewCommentsBtn").addEventListener("click", () => {
    if(_myEntriesLatestChange) openDetail(_myEntriesLatestChange.id);
  });
  document.getElementById("myEntriesAddressBtn").addEventListener("click", () => {
    if(_myEntriesLatestChange) openDetail(_myEntriesLatestChange.id, true);
  });
  document.querySelectorAll('[data-rq-tab]').forEach(el => {
    el.addEventListener("click", () => setReviewQueueTab(el.dataset.rqTab));
  });
  document.getElementById("rqSearchInput").addEventListener("input", () => renderReviewQueueTab());
  document.getElementById("rqSortSelect").addEventListener("change", () => renderReviewQueueTab());
  document.getElementById("reviewGuidelinesBtn").addEventListener("click", () => showToast(
    "Review guidelines", "Check accuracy, completeness, and that there's no sensitive data before approving."));
  document.getElementById("accountMenuAppPrefsBtn").addEventListener("click", () => {
    showView("my-account");
    setAccountTab("preferences");
  });
  document.getElementById("accountMenuGuidelinesBtn").addEventListener("click", () => showToast(
    "Contribution guidelines", "Be specific and reproducible, avoid sensitive data, and check for an existing entry before capturing a new one."));
  document.getElementById("accountMenuShortcutsBtn").addEventListener("click", () => showToast(
    "Keyboard shortcuts", "Ctrl/Cmd+K focuses search from anywhere."));
  document.querySelectorAll('[data-notif-tab]').forEach(el => {
    el.addEventListener("click", () => setNotifPageTab(el.dataset.notifTab));
  });
  document.getElementById("notifMarkAllReadBtn").addEventListener("click", async () => {
    await api().mark_notifications_seen();
    await refreshNotifPage();
  });
  document.querySelectorAll('[data-settings-tab]').forEach(el => {
    el.addEventListener("click", () => setSettingsTab(el.dataset.settingsTab));
  });
  document.getElementById("userSearchInput").addEventListener("input", renderUserListTable);
  document.getElementById("userRoleFilter").addEventListener("change", renderUserListTable);
  document.querySelectorAll('[data-account-tab]').forEach(el => {
    el.addEventListener("click", () => setAccountTab(el.dataset.accountTab));
  });
  document.querySelectorAll(".density-btn").forEach(el => {
    el.addEventListener("click", () => { setPref("density", el.dataset.density); applyDensityPref(); });
  });
  document.getElementById("prefStartPage").addEventListener("change", e => setPref("startPage", e.target.value));
  document.getElementById("trustedSearchBtn").addEventListener("click", () => refreshTrusted());
  document.getElementById("trustedSearchInput").addEventListener("keydown", e => { if(e.key === "Enter") refreshTrusted(); });
  document.getElementById("trustedFilterApp").addEventListener("change", () => refreshTrusted());
  document.getElementById("trustedFilterAuthor").addEventListener("change", () => refreshTrusted());
  document.getElementById("trustedSort").addEventListener("change", () => refreshTrusted());
  document.getElementById("trustedClearFilters").addEventListener("click", () => {
    document.getElementById("trustedSearchInput").value = "";
    document.getElementById("trustedFilterApp").value = "";
    document.getElementById("trustedFilterAuthor").value = "";
    refreshTrusted();
  });
}

async function _loadAllIssues(){
  const items = await api().list_issues();
  if(items && items.apiError){
    if(items.needsLogin) showLoginScreen(items.apiError);
    return [];
  }
  return items || [];
}

async function refreshDashboard(){
  const first = (currentDisplayName || currentUsername || "").split(" ")[0] || "";
  const hour = new Date().getHours();
  const greetWord = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  document.getElementById("dashGreeting").textContent = first ? `${greetWord}, ${first}` : greetWord;
  document.getElementById("dashDate").textContent =
    new Date().toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const items = await _loadAllIssues();
  const trusted = items.filter(i => i.status === "solved");
  const pending = items.filter(i => i.status !== "solved" && i.status !== "cancelled");
  const now = new Date();
  const approvedThisMonth = trusted.filter(i => {
    const d = new Date(i.updatedAt || i.createdAt);
    return !isNaN(d) && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });
  const mine = items.filter(i => i.createdBy === currentUsername);

  document.getElementById("statTrusted").textContent = trusted.length;
  document.getElementById("statPending").textContent = pending.length;
  document.getElementById("statApproved").textContent = approvedThisMonth.length;
  document.getElementById("statMine").textContent = mine.length;
  document.getElementById("qaTrustedSub").textContent = `${trusted.length} trusted entries`;
  document.getElementById("qaReviewSub").textContent = pending.length ? `${pending.length} waiting for review` : "Nothing waiting";

  const waitingCard = document.getElementById("waitingReviewCard");
  const sideBadgeReview = document.getElementById("sideBadgeReview");
  if(isAdminOrAbove()){
    waitingCard.style.display = "";
    renderIssueCards(document.getElementById("dashWaitingList"), pending.slice().reverse().slice(0, 5), "Nothing waiting for review.", "review");
    if(sideBadgeReview){ sideBadgeReview.hidden = pending.length === 0; sideBadgeReview.textContent = pending.length > 9 ? "9+" : String(pending.length); }
  } else {
    waitingCard.style.display = "none";
  }
  renderIssueCards(document.getElementById("dashMineList"), mine.slice().reverse().slice(0, 5), "You haven't captured anything yet.");

  const recentlyApproved = trusted.slice().sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt)).slice(0, 5);
  renderIssueCards(document.getElementById("dashApprovedList"), recentlyApproved, "Nothing has been approved yet.");

  await refreshNotifications();
  renderNotificationPopover("dashNotifList");
}

/* ---- My entries: real status groups. "Draft" is the local, client-only
   capture draft (at most one, never synced to the server). "Changes
   requested" isn't a server status -- it's derived the same way as Review
   Queue's "waiting on author" tab: the most recent audit entry for a
   pending issue is a request_changes with nothing edited since. ---- */
function myEntryBucket(item, latestAuditByIssue){
  if(item.__isDraft) return "draft";
  if(item.status === "solved") return "approved";
  if(item.status === "cancelled") return "rejected";
  const last = latestAuditByIssue.get(item.id);
  if(last && last.action === "request_changes") return "changes";
  return "pending";
}
let _myEntriesCache = [];
let _myEntriesBuckets = new Map();
let _myEntriesTab = "all";
let _myEntriesLatestChange = null;
async function refreshMyEntries(){
  const items = await _loadAllIssues();
  const mine = items.filter(i => i.createdBy === currentUsername)
    .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));

  const audit = await api().list_audit();
  const latestByIssue = new Map();
  if(audit && !audit.apiError){
    audit.slice().reverse().forEach(a => { if(a.issue_id && !latestByIssue.has(a.issue_id)) latestByIssue.set(a.issue_id, a); });
  }

  const draft = loadDraft();
  _myEntriesCache = draft ? [{ __isDraft: true, id: "draft", title: draft.title || "Untitled draft", updatedAt: draft.savedAt }, ...mine] : mine;
  _myEntriesBuckets = new Map(_myEntriesCache.map(i => [i, myEntryBucket(i, latestByIssue)]));

  const counts = { all: mine.length, draft: draft ? 1 : 0, pending: 0, changes: 0, approved: 0, rejected: 0 };
  mine.forEach(i => counts[myEntryBucket(i, latestByIssue)]++);
  document.getElementById("tabCountAll").textContent = counts.all;
  document.getElementById("tabCountDraft").textContent = counts.draft;
  document.getElementById("tabCountPending").textContent = counts.pending;
  document.getElementById("tabCountChanges").textContent = counts.changes;
  document.getElementById("tabCountApproved").textContent = counts.approved;
  document.getElementById("tabCountRejected").textContent = counts.rejected;

  // banner: the single most recent "changes requested" entry, if any
  const changed = mine.filter(i => myEntryBucket(i, latestByIssue) === "changes")
    .sort((a, b) => new Date(latestByIssue.get(b.id).at) - new Date(latestByIssue.get(a.id).at))[0];
  const banner = document.getElementById("myEntriesChangesBanner");
  if(changed){
    const a = latestByIssue.get(changed.id);
    _myEntriesLatestChange = changed;
    banner.style.display = "";
    document.getElementById("myEntriesChangesTitle").textContent = `Changes requested on "${changed.title}"`;
    document.getElementById("myEntriesChangesDetail").textContent = `${a.username}: "${a.detail || ""}"`;
  } else {
    _myEntriesLatestChange = null;
    banner.style.display = "none";
  }

  renderMyEntriesTable();
}
function setMyEntriesTab(tab){
  _myEntriesTab = tab;
  document.querySelectorAll('[data-status-tab]').forEach(el => el.classList.toggle("active", el.dataset.statusTab === tab));
  renderMyEntriesTable();
}
function renderMyEntriesTable(){
  const rows = _myEntriesTab === "all" ? _myEntriesCache : _myEntriesCache.filter(i => _myEntriesBuckets.get(i) === _myEntriesTab);
  const body = document.getElementById("myEntriesBody");
  const empty = document.getElementById("myEntriesEmpty");
  if(!rows.length){
    body.innerHTML = "";
    empty.hidden = false;
    empty.innerHTML = `<span class="icon icon-muted" style="width:32px;height:32px;">${iconSvg("inbox")}</span><b>Nothing here yet</b><span>${_myEntriesTab === "all" ? "Capture your first entry to see it here." : "No entries in this state right now."}</span>`;
    return;
  }
  empty.hidden = true;
  body.innerHTML = rows.map(i => {
    if(i.__isDraft){
      return `
      <tr class="data-row">
        <td>
          <div class="entry-cell">
            <span class="entry-type-icon">${iconSvg("edit")}</span>
            <div><b>${escapeHtml(i.title)}</b><span class="muted-small">Saved on this device only</span></div>
          </div>
        </td>
        <td><span class="type-badge"><span class="icon icon-sm" data-nav-icon="edit"></span> Problem / Solution</span></td>
        <td><span class="status st-draft">Draft</span></td>
        <td><span class="muted-small">—</span></td>
        <td class="muted-small">${i.updatedAt ? formatDate(i.updatedAt) : "—"}</td>
        <td><button type="button" class="btn btn-outline btn-sm" data-continue-draft="1">Continue</button></td>
      </tr>`;
    }
    const bucket = _myEntriesBuckets.get(i);
    const reviewer = (i.status === "solved" || i.status === "cancelled") && i.updatedBy && i.updatedBy !== i.createdBy
      ? escapeHtml(i.updatedBy) : `<span class="muted-small">Not assigned yet</span>`;
    const statusHtml = bucket === "changes"
      ? `<span class="status st-review">Changes requested</span>`
      : `<span class="status ${statusClass(i.status)}">${statusLabel(i.status)}</span>`;
    const tMeta = typeBadgeInfo(i.type);
    return `
    <tr data-id="${escapeAttr(i.id)}" class="data-row">
      <td>
        <div class="entry-cell">
          <span class="entry-type-icon">${iconSvg(tMeta.icon)}</span>
          <div><b>${escapeHtml(i.title)}</b><span class="mono muted-small">${escapeHtml(i.id)}</span></div>
        </div>
      </td>
      <td><span class="type-badge"><span class="icon icon-sm">${iconSvg(tMeta.icon)}</span> ${escapeHtml(tMeta.label)}</span></td>
      <td>${statusHtml}</td>
      <td>${reviewer}</td>
      <td class="muted-small">${formatDate(i.updatedAt || i.createdAt)}</td>
      <td><button type="button" class="btn btn-outline btn-sm" data-open="${escapeAttr(i.id)}">View</button></td>
    </tr>`;
  }).join("");
  body.querySelectorAll("[data-nav-icon]").forEach(el => { el.innerHTML = iconSvg(el.dataset.navIcon); });
  body.querySelectorAll("[data-open]").forEach(btn => btn.addEventListener("click", () => openDetail(btn.getAttribute("data-open"))));
  body.querySelectorAll("[data-continue-draft]").forEach(btn => btn.addEventListener("click", () => showView("capture")));
}

/* ---- Trusted knowledge: search + filters over solved issues ---- */
async function refreshTrusted(){
  const items = await _loadAllIssues();
  let trusted = items.filter(i => i.status === "solved");

  const appSelect = document.getElementById("trustedFilterApp");
  const authorSelect = document.getElementById("trustedFilterAuthor");
  if(!appSelect.dataset.filled){
    const apps = Array.from(new Set(trusted.map(i => i.system).filter(Boolean))).sort();
    appSelect.innerHTML = '<option value="">Any application</option>' + apps.map(a => `<option value="${escapeAttr(a)}">${escapeHtml(a)}</option>`).join("");
    const authors = Array.from(new Set(trusted.map(i => i.createdBy).filter(Boolean))).sort();
    authorSelect.innerHTML = '<option value="">Any author</option>' + authors.map(a => `<option value="${escapeAttr(a)}">${escapeHtml(a)}</option>`).join("");
    appSelect.dataset.filled = "1";
  }

  const q = document.getElementById("trustedSearchInput").value.trim().toLowerCase();
  if(q) trusted = trusted.filter(i => (i.title + " " + (i.problem || "") + " " + (i.system || "") + " " + (i.error || "")).toLowerCase().includes(q));
  const appFilter = appSelect.value;
  if(appFilter) trusted = trusted.filter(i => i.system === appFilter);
  const authorFilter = authorSelect.value;
  if(authorFilter) trusted = trusted.filter(i => i.createdBy === authorFilter);

  const sort = document.getElementById("trustedSort").value;
  trusted = trusted.slice().sort((a, b) => sort === "title"
    ? a.title.localeCompare(b.title)
    : new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));

  document.getElementById("trustedCount").textContent =
    `${trusted.length} validated ${trusted.length === 1 ? "entry" : "entries"}. Every entry here was checked by a reviewer — this is the knowledge the AI Assistant will answer from.`;

  const popRow = document.getElementById("trustedPopularRow");
  const popChips = document.getElementById("trustedPopularChips");
  if(!popChips.dataset.filled){
    const counts = new Map();
    items.filter(i => i.status === "solved").forEach(i => { if(i.system) counts.set(i.system, (counts.get(i.system) || 0) + 1); });
    const top = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([sys]) => sys);
    if(top.length){
      popRow.hidden = false;
      popChips.innerHTML = top.map(s => `<button type="button" class="chip-btn" data-pop-chip="${escapeAttr(s)}">${escapeHtml(s)}</button>`).join("");
      popChips.querySelectorAll("[data-pop-chip]").forEach(btn => btn.addEventListener("click", () => {
        document.getElementById("trustedSearchInput").value = btn.dataset.popChip;
        refreshTrusted();
      }));
    }
    popChips.dataset.filled = "1";
  }

  renderTrustedCards(document.getElementById("trustedList"), trusted);
}
function renderTrustedCards(container, items){
  if(!items.length){
    container.innerHTML = `<div class="table-empty"><span class="icon icon-muted" style="width:32px;height:32px;">${iconSvg("inbox")}</span><b>No matching trusted knowledge</b><span>Try a different search term or clear your filters.</span></div>`;
    return;
  }
  container.innerHTML = items.map(i => {
    const type = i.type || "PROBLEM_SOLUTION";
    const descSource = type === "INFORMATION" ? i.description : type === "PROCEDURE" ? i.purpose : i.problem;
    const desc = (descSource || "").length > 160 ? descSource.slice(0, 160) + "…" : (descSource || "");
    const tMeta = typeBadgeInfo(type);
    return `
    <div class="trusted-card" data-open="${escapeAttr(i.id)}">
      <span class="entry-type-icon">${iconSvg(tMeta.icon)}</span>
      <div class="trusted-card-body">
        <div class="trusted-card-badges">
          <span class="type-badge"><span class="icon icon-sm">${iconSvg(tMeta.icon)}</span> ${escapeHtml(tMeta.label)}</span>
          ${i.system ? `<span class="badge-pill">${escapeHtml(i.system)}</span>` : ""}
          <span class="badge-pill badge-pill-trusted"><span class="icon icon-sm" data-nav-icon="shieldCheck"></span> Trusted</span>
        </div>
        <div class="trusted-card-title">${escapeHtml(i.title)}</div>
        ${desc ? `<div class="trusted-card-desc">${escapeHtml(desc)}</div>` : ""}
        <div class="trusted-card-meta">
          <b>${escapeHtml(i.createdBy || "Unknown")}</b>
          ${i.updatedBy ? ` · <span class="icon icon-sm" data-nav-icon="shieldCheck"></span> Validated ${escapeHtml(formatDate(i.updatedAt))} by ${escapeHtml(i.updatedBy)}` : ""}
        </div>
      </div>
    </div>`;
  }).join("");
  container.querySelectorAll("[data-nav-icon]").forEach(el => { el.innerHTML = iconSvg(el.dataset.navIcon); });
  container.querySelectorAll("[data-open]").forEach(el => el.addEventListener("click", () => openDetail(el.getAttribute("data-open"))));
}

let _rqCache = { pending: [], waiting: [], decided: [] };
let _rqTab = "assigned";
async function refreshReviewQueue(){
  const items = await _loadAllIssues();
  const pending = items.filter(i => i.status !== "solved" && i.status !== "cancelled");
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 36e5;
  const decided = items.filter(i => (i.status === "solved" || i.status === "cancelled")
    && new Date(i.updatedAt || i.createdAt).getTime() >= weekAgo);

  // "Waiting on author": the most recent audit entry for a pending issue
  // is a request_changes with nothing edited since. No dedicated status
  // exists for this on the server, so it's derived from the audit log
  // rather than invented.
  let waiting = [];
  const audit = await api().list_audit();
  if(audit && !audit.apiError){
    const latestByIssue = new Map();
    audit.slice().reverse().forEach(a => { if(a.issue_id && !latestByIssue.has(a.issue_id)) latestByIssue.set(a.issue_id, a); });
    waiting = pending.filter(i => { const last = latestByIssue.get(i.id); return last && last.action === "request_changes"; });
  }

  _rqCache = { pending, waiting, decided };

  document.getElementById("rqAssigned").textContent = pending.length;
  document.getElementById("rqAllPending").textContent = pending.length;
  document.getElementById("rqDecided").textContent = decided.length;
  let oldestHours = 0;
  if(pending.length){
    const oldest = pending.reduce((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? a : b);
    oldestHours = (Date.now() - new Date(oldest.createdAt).getTime()) / 36e5;
    document.getElementById("rqOldest").textContent = waitingSince(oldest.createdAt).replace("Waiting ", "");
  } else {
    document.getElementById("rqOldest").textContent = "—";
  }
  document.getElementById("rqOverTarget").hidden = oldestHours < 48; // 2 days, matching the reference's target window
  document.getElementById("rqTabAssigned").textContent = pending.length;
  document.getElementById("rqTabAll").textContent = pending.length;
  document.getElementById("rqTabWaiting").textContent = waiting.length;
  document.getElementById("rqTabDecided").textContent = decided.length;

  renderReviewQueueTab();
}
function setReviewQueueTab(tab){
  _rqTab = tab;
  document.querySelectorAll('[data-rq-tab]').forEach(el => el.classList.toggle("active", el.dataset.rqTab === tab));
  renderReviewQueueTab();
}
function renderReviewQueueTab(){
  const map = { assigned: _rqCache.pending, all: _rqCache.pending, waiting: _rqCache.waiting, decided: _rqCache.decided };
  let rows = (map[_rqTab] || []).slice().reverse();
  const q = (document.getElementById("rqSearchInput").value || "").trim().toLowerCase();
  if(q) rows = rows.filter(i => (i.title + " " + (i.createdBy || "") + " " + (i.system || "")).toLowerCase().includes(q));
  const sort = document.getElementById("rqSortSelect").value;
  rows.sort((a, b) => sort === "newest"
    ? new Date(b.createdAt) - new Date(a.createdAt)
    : new Date(a.createdAt) - new Date(b.createdAt));
  const emptyText = { assigned: "Nothing waiting for review.", all: "Nothing waiting for review.",
    waiting: "Nothing sent back to an author right now.", decided: "No decisions in the last 7 days." }[_rqTab];

  const body = document.getElementById("reviewQueueBody");
  const empty = document.getElementById("reviewQueueEmpty");
  if(!rows.length){
    body.innerHTML = "";
    empty.hidden = false;
    empty.innerHTML = `<span class="icon icon-muted" style="width:32px;height:32px;">${iconSvg("clipboardCheck")}</span><b>Nothing here</b><span>${emptyText}</span>`;
    return;
  }
  empty.hidden = true;
  const beingReviewed = _rqTab === "waiting"; // has a request_changes on it -- "In review", otherwise "Pending review"
  body.innerHTML = rows.map(i => {
    const status = _rqTab === "decided" ? statusLabel(i.status) : (beingReviewed ? "IN REVIEW" : "PENDING REVIEW");
    const statusCls = _rqTab === "decided" ? statusClass(i.status) : (beingReviewed ? "st-inprogress" : "st-review");
    const btnLabel = beingReviewed ? "Continue" : "Review";
    const tMeta = typeBadgeInfo(i.type);
    return `
    <tr class="data-row" data-id="${escapeAttr(i.id)}">
      <td>
        <div class="entry-cell">
          <span class="entry-type-icon">${iconSvg(tMeta.icon)}</span>
          <div><b>${escapeHtml(i.title)}</b><span class="mono muted-small">${escapeHtml(i.id)}</span></div>
        </div>
      </td>
      <td>${escapeHtml(i.createdBy || "—")}</td>
      <td>${escapeHtml(i.system || "—")}</td>
      <td class="muted-small">${formatDate(i.createdAt)}</td>
      <td><span class="status ${statusCls}">${status}</span></td>
      <td>${_rqTab === "decided"
        ? `<button type="button" class="btn btn-outline btn-sm" data-open="${escapeAttr(i.id)}">View</button>`
        : `<button type="button" class="btn btn-primary btn-sm" data-open="${escapeAttr(i.id)}">${btnLabel}</button>`}</td>
    </tr>`;
  }).join("");
  body.querySelectorAll("[data-open]").forEach(btn => btn.addEventListener("click", () => openDetail(btn.getAttribute("data-open"))));
}

/* ---- AI Assistant: real lifecycle counts ---- */
async function refreshAiAssistant(){
  const items = await _loadAllIssues();
  const trusted = items.filter(i => i.status === "solved").length;
  const pending = items.filter(i => i.status !== "solved" && i.status !== "cancelled").length;
  document.getElementById("aiStepCapture").textContent = `${items.length} total`;
  document.getElementById("aiStepPending").textContent = `${pending} ${pending === 1 ? "entry" : "entries"}`;
  document.getElementById("aiStepTrusted").textContent = `${trusted} ${trusted === 1 ? "entry" : "entries"}`;
}

/* ---- My account ---- */
function setAccountTab(tab){
  document.querySelectorAll('[data-account-tab]').forEach(el => el.classList.toggle("active", el.dataset.accountTab === tab));
  document.querySelectorAll(".account-panel").forEach(el => { el.style.display = el.id === "accountPanel-" + tab ? "" : "none"; });
  if(tab === "activity") refreshActivity();
}
function refreshMyAccount(){
  const initials = (currentDisplayName || "?").trim().split(/\s+/).map(p => p[0]).slice(0, 2).join("").toUpperCase();
  document.getElementById("profileAvatar").textContent = initials || "?";
  document.getElementById("profileName").textContent = currentDisplayName || currentUsername || "—";
  document.getElementById("profileUsername").textContent = "@" + (currentUsername || "—");
  document.getElementById("profileDisplayName").value = currentDisplayName || "";
  document.getElementById("profileUsernameField").value = currentUsername || "";
  document.getElementById("profileRoleText").textContent =
    { technician: "Contributor — capture knowledge and manage your own submissions.",
      admin: "Admin / Reviewer — capture, plus review and validate submitted knowledge.",
      super_admin: "Super Admin — full platform administration, plus everything a reviewer can do." }[currentRole] || currentRole;
  document.getElementById("cpNewPassword").value = "";
  document.getElementById("cpConfirmPassword").value = "";
  document.getElementById("cpError").style.display = "none";
  document.getElementById("cpSuccess").style.display = "none";
  document.getElementById("prefStartPage").value = getPref("startPage", "dashboard");
  setAccountTab("profile");
}

/* ---- Preferences: device-local only (localStorage), never synced --
   honestly scoped to what a desktop client can actually offer without a
   backend preferences store. ---- */
function getPref(key, fallback){
  try { return localStorage.getItem("rck_pref_" + key) || fallback; } catch(e) { return fallback; }
}
function setPref(key, value){
  try { localStorage.setItem("rck_pref_" + key, value); } catch(e) { /* private mode etc -- non-fatal */ }
}
function applyDensityPref(){
  const density = getPref("density", "comfortable");
  document.body.dataset.density = density;
  document.querySelectorAll(".density-btn").forEach(el => el.classList.toggle("active", el.dataset.density === density));
}

async function refreshActivity(){
  const list = document.getElementById("activityList");
  const audit = await api().list_audit();
  if(!audit || audit.apiError){ list.innerHTML = '<div class="hint" style="padding:10px 0;">Activity isn\'t available to your role.</div>'; return; }
  const mine = audit.filter(a => a.username === currentUsername).slice(0, 25);
  if(!mine.length){ list.innerHTML = '<div class="hint" style="padding:10px 0;">No activity yet.</div>'; return; }
  list.innerHTML = mine.map(a => `
    <div class="user-row">
      <span class="user-row-name">${escapeHtml(HISTORY_ACTION_LABEL[a.action] || a.action.replace(/_/g, " "))}${a.detail ? `: ${escapeHtml(a.detail)}` : ""}</span>
      <span class="muted-small">${formatDate(a.at)}</span>
    </div>`).join("");
}

/* ---- Settings / Administration ---- */
function setSettingsTab(tab){
  document.querySelectorAll('[data-settings-tab]').forEach(el => el.classList.toggle("active", el.dataset.settingsTab === tab));
  document.querySelectorAll(".settings-panel").forEach(el => { el.style.display = el.id === "settingsPanel-" + tab ? "" : "none"; });
}
async function refreshSettingsView(){
  setSettingsTab("users");
  await openManageUsers();
  const items = await _loadAllIssues();
  document.getElementById("statsTrusted").textContent = items.filter(i => i.status === "solved").length;
  document.getElementById("statsPending").textContent = items.filter(i => i.status !== "solved" && i.status !== "cancelled").length;
  document.getElementById("statsRejected").textContent = items.filter(i => i.status === "cancelled").length;
  const users = await api().list_users();
  document.getElementById("statsUsers").textContent = (users && !users.apiError) ? users.length : "—";
}

let _notifPageTab = "all";
async function refreshNotifPage(){
  await refreshNotifications();
  renderNotifPageGrouped(_notifPageTab);
}
function setNotifPageTab(tab){
  _notifPageTab = tab;
  document.querySelectorAll('[data-notif-tab]').forEach(el => el.classList.toggle("active", el.dataset.notifTab === tab));
  renderNotifPageGrouped(_notifPageTab);
}
function dayBucketLabel(iso){
  const d = new Date(iso);
  const now = new Date();
  const startOf = x => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const diffDays = Math.round((startOf(now) - startOf(d)) / 864e5);
  if(diffDays <= 0) return "Today";
  if(diffDays === 1) return "Yesterday";
  if(diffDays <= 7) return "Earlier this week";
  return "Older";
}
function renderNotifPageGrouped(category){
  const list = document.getElementById("notifPageList");
  const { pending, newIssues, resolvedRequests, direct } = _lastNotifications;
  const items = [];
  if(category === "all" || category === "reviews"){
    pending.forEach(r => items.push({ icon: "user", colorClass: "indigo", time: r.requested_at,
      text: `<b>${escapeHtml(r.username)}</b> requested a password change`,
      actionLabel: "Review", onClick: () => openManageUsers() }));
  }
  if(category === "all" || category === "mine"){
    direct.forEach(n => items.push({ icon: "edit", colorClass: "amber", time: n.created_at, text: escapeHtml(n.message),
      actionLabel: n.issue_id ? "Address feedback" : null, onClick: n.issue_id ? () => openDetail(n.issue_id, true) : null }));
    resolvedRequests.forEach(r => items.push({ icon: "check", colorClass: r.status === "approved" ? "green" : "red", time: r.reviewed_at,
      text: `Your password change was ${escapeHtml(r.status)}` }));
  }
  if(category === "all" || category === "kb"){
    newIssues.forEach(i => items.push({ icon: "plus", colorClass: "blue", time: i.created_at,
      text: `<b>${escapeHtml(i.created_by)}</b> added "${escapeHtml(i.title)}"`,
      actionLabel: "View entry", onClick: () => openDetail(i.id) }));
  }
  items.sort((a, b) => new Date(b.time) - new Date(a.time));

  document.getElementById("tabCountNotifAll").textContent = pending.length + newIssues.length + resolvedRequests.length + direct.length;
  document.getElementById("tabCountNotifReviews").textContent = pending.length;
  document.getElementById("tabCountNotifMine").textContent = direct.length + resolvedRequests.length;
  document.getElementById("tabCountNotifKb").textContent = newIssues.length;

  if(!items.length){
    list.innerHTML = `<div class="table-empty"><span class="icon icon-muted" style="width:32px;height:32px;">${iconSvg("bell")}</span><b>You're all caught up</b><span>Nothing new right now.</span></div>`;
    return;
  }
  let html = "";
  let lastBucket = null;
  items.forEach(item => {
    const bucket = dayBucketLabel(item.time);
    if(bucket !== lastBucket){ html += `<div class="notif-day-label">${bucket}</div>`; lastBucket = bucket; }
    html += `
      <div class="notif-page-row">
        <span class="notif-icon notif-icon-${item.colorClass}">${iconSvg(item.icon)}</span>
        <div class="notif-page-body">
          <div class="notif-page-text">${item.text}</div>
          ${item.actionLabel ? `<button type="button" class="btn btn-outline btn-sm notif-page-action">${escapeHtml(item.actionLabel)}</button>` : ""}
        </div>
        <span class="notif-page-time">${formatDate(item.time)}</span>
      </div>`;
  });
  list.innerHTML = html;
  Array.from(list.querySelectorAll(".notif-page-row")).forEach((el, idx) => {
    const btn = el.querySelector(".notif-page-action");
    if(btn && items[idx].onClick) btn.addEventListener("click", items[idx].onClick);
  });
}

/* ============================== wiring ============================== */
function wireEvents(){
  ["fProblem","fRoot","fSolution"].forEach(id=>{
    document.getElementById(id).addEventListener("input", e=>{
      const map = {fProblem:"cProblem", fRoot:"cRoot", fSolution:"cSolution"};
      document.getElementById(map[id]).textContent = e.target.value.length;
    });
  });

  mainAppsPicker = createAppsPicker({
    pickerEl: document.getElementById("appsPicker"),
    chipsEl: document.getElementById("appChips"),
    toggleEl: document.getElementById("appsPickerToggle"),
    dropdownEl: document.getElementById("appsDropdown"),
    getSelected: () => currentApps,
    onChange: (next) => { currentApps = next; scheduleDraftSave(); },
  });
  infoAppsPicker = createAppsPicker({
    pickerEl: document.getElementById("infoAppsPicker"),
    chipsEl: document.getElementById("infoAppChips"),
    toggleEl: document.getElementById("infoAppsPickerToggle"),
    dropdownEl: document.getElementById("infoAppsDropdown"),
    getSelected: () => currentInfoApps,
    onChange: (next) => { currentInfoApps = next; },
  });
  procAppsPicker = createAppsPicker({
    pickerEl: document.getElementById("procAppsPicker"),
    chipsEl: document.getElementById("procAppChips"),
    toggleEl: document.getElementById("procAppsPickerToggle"),
    dropdownEl: document.getElementById("procAppsDropdown"),
    getSelected: () => currentProcApps,
    onChange: (next) => { currentProcApps = next; },
  });

  document.getElementById("addStepBtn").addEventListener("click", () => addStep(document.getElementById("stepsBody")));
  document.getElementById("eAddStepBtn").addEventListener("click", () => addStep(document.getElementById("eStepsBody")));
  document.getElementById("addProcStepBtn").addEventListener("click", () => addStep(document.getElementById("procStepsBody")));

  document.getElementById("iDescription").addEventListener("input", e => {
    document.getElementById("cIDescription").textContent = e.target.value.length;
  });

  document.getElementById("submitInfoBtn").addEventListener("click", submitInformation);
  document.getElementById("clearInfoBtn").addEventListener("click", clearInfoForm);
  document.getElementById("captureInfoChangeTypeLink").addEventListener("click", e => { e.preventDefault(); showCaptureTypeStep(); });

  document.getElementById("submitProcBtn").addEventListener("click", submitProcedure);
  document.getElementById("clearProcBtn").addEventListener("click", clearProcForm);
  document.getElementById("captureProcChangeTypeLink").addEventListener("click", e => { e.preventDefault(); showCaptureTypeStep(); });

  document.querySelectorAll("[data-capture-type]").forEach(el => {
    el.addEventListener("click", () => showCaptureFormStep(el.dataset.captureType));
  });
  document.getElementById("captureChangeTypeLink").addEventListener("click", e => { e.preventDefault(); showCaptureTypeStep(); });
  document.getElementById("contributionGuidelinesLink").addEventListener("click", e => e.preventDefault());
  ["fTitle","fError","fProblem","fRoot","fSolution"].forEach(id => {
    document.getElementById(id).addEventListener("input", scheduleDraftSave);
  });
  document.getElementById("stepsBody").addEventListener("input", scheduleDraftSave);

  document.querySelectorAll("#captureCard .attach-box").forEach(btn => {
    btn.addEventListener("click", () => stageAttachment(btn.getAttribute("data-kind")));
  });

  document.getElementById("submitBtn").addEventListener("click", () => submitIssue("review"));
  document.getElementById("clearBtn").addEventListener("click", clearForm);
  document.getElementById("similarBtn").addEventListener("click", () => {
    const title = document.getElementById("fTitle").value.trim();
    const search = document.getElementById("searchInput");
    search.value = title;
    search.dispatchEvent(new Event("input"));
    search.focus();
  });
  document.getElementById("searchKbBtn").addEventListener("click", () => document.getElementById("searchInput").focus());

  let searchDebounceTimer = null;
  document.getElementById("searchInput").addEventListener("input", e => {
    const query = e.target.value;
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => renderList(query), 250);
  });

  document.getElementById("viewAllLink").addEventListener("click", openViewAll);
  document.getElementById("viewAllCloseBtn").addEventListener("click", () => closeOverlay("viewAllOverlay"));

  document.getElementById("dEditBtn").addEventListener("click", showDetailEdit);
  document.getElementById("dSaveBtn").addEventListener("click", saveDetailEdit);
  document.getElementById("dCancelBtn").addEventListener("click", showDetailView);
  document.getElementById("dCloseBtn").addEventListener("click", closeDetail);
  document.querySelectorAll('#reviewBar input[name=reviewDecision]').forEach(r => r.addEventListener("change", updateReviewDecisionUI));
  document.getElementById("reviewSubmitBtn").addEventListener("click", submitReviewDecision);
  document.getElementById("reviewSaveLaterBtn").addEventListener("click", reviewSaveForLater);

  document.getElementById("addAppConfirmBtn").addEventListener("click", confirmAddApp);
  document.getElementById("addAppCancelBtn").addEventListener("click", cancelAddApp);
  document.getElementById("addAppCloseBtn").addEventListener("click", cancelAddApp);
  document.getElementById("newAppInput").addEventListener("keydown", e => { if(e.key === "Enter"){ e.preventDefault(); confirmAddApp(); } });

  const notifBtn = document.getElementById("notifBtn");
  const notifPop = document.getElementById("notifPopover");
  notifBtn.addEventListener("click", async (e) => {
    e.stopPropagation();
    const opening = !notifPop.classList.contains("open");
    notifPop.classList.toggle("open");
    if(opening){
      renderNotificationPopover(); // show current (possibly slightly stale) data instantly
      await refreshNotifications();
      renderNotificationPopover(); // then refresh with the latest
      // Only the FYI items (new issues, resolved requests) are "seen" by
      // opening this -- pending password requests stay badge-worthy until
      // actually approved/rejected, so this doesn't touch that count.
      if(_lastNotifications.newIssues.length || _lastNotifications.resolvedRequests.length){
        await api().mark_notifications_seen();
      }
    }
  });
  document.addEventListener("click", () => notifPop.classList.remove("open"));

  document.getElementById("cpRequestBtn").addEventListener("click", submitPasswordChangeRequest);

  document.getElementById("confirmCancelBtn").addEventListener("click", () => _closeConfirmDialog(false));
  document.getElementById("confirmActionBtn").addEventListener("click", () => _closeConfirmDialog(true));

  document.getElementById("signOutBtn").addEventListener("click", async () => {
    document.getElementById("accountMenu").classList.remove("open");
    const ok = await confirmDialog({
      icon: "signOut", iconClass: "neutral", title: "Sign out of RCK?",
      text: "You'll need to sign in again to continue.", actionLabel: "Sign out", actionClass: "btn-danger",
    });
    if(!ok) return;
    if(_notifPollId){ clearInterval(_notifPollId); _notifPollId = null; }
    await api().logout();
    showLoginScreen();
  });

  document.getElementById("nuCreateBtn").addEventListener("click", submitCreateUser);

  ["detailOverlay","addAppOverlay","viewAllOverlay","confirmOverlay"].forEach(id => {
    document.getElementById(id).addEventListener("click", (e) => {
      if(e.target.id === id){
        if(id === "addAppOverlay") cancelAddApp();
        else if(id === "confirmOverlay") _closeConfirmDialog(false);
        else closeOverlay(id);
      }
    });
  });

  document.addEventListener("keydown", e => {
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){
      e.preventDefault();
      document.getElementById("searchInput").focus();
      return;
    }
    if(e.key === "Escape"){
      if(document.getElementById("addAppOverlay").classList.contains("open")){ cancelAddApp(); return; }
      if(document.getElementById("confirmOverlay").classList.contains("open")){ _closeConfirmDialog(false); return; }
      const top = topOpenOverlay();
      if(top) closeOverlay(top.id);
    }
  });
}

async function loadApplications(){
  allApps = await api().list_applications();
  refreshAllAppWidgets();
}

/* ============================== login gate ============================== */
function showLoginScreen(message){
  document.getElementById("loginScreen").classList.add("open");
  const errEl = document.getElementById("loginError");
  if(message){ errEl.textContent = message; errEl.style.display = ""; }
  else { errEl.style.display = "none"; }
  document.getElementById("loginPassword").value = "";
  setTimeout(() => document.getElementById("loginUsername").focus(), 0);
}
function hideLoginScreen(){
  document.getElementById("loginScreen").classList.remove("open");
}

async function attemptLogin(){
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const errEl = document.getElementById("loginError");
  if(!username || !password){
    errEl.textContent = "Enter both a username and password.";
    errEl.style.display = "";
    return;
  }
  const btn = document.getElementById("loginSubmitBtn");
  const originalLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Signing in…";
  const result = await api().login(username, password);
  btn.disabled = false;
  btn.textContent = originalLabel;
  if(result && result.apiError){
    errEl.textContent = result.apiError;
    errEl.style.display = "";
    return;
  }
  hideLoginScreen();
  await completeInit();
}

/* ============================== startup ============================== */
async function completeInit(){
  wireEvents();
  wireShellNav();
  await loadApplications();
  await renderList();
  await clearForm();
  const info = await api().connection_info();
  currentRole = info.role || "technician";
  currentUsername = info.username;
  currentDisplayName = info.displayName || info.username;
  document.body.classList.toggle("is-admin", isAdminOrAbove());
  document.getElementById("dataDirLabel").textContent =
    `Signed in as ${info.displayName || info.username}\n${info.serverUrl}`;

  const initials = (currentDisplayName || "?").trim().split(/\s+/).map(p => p[0]).slice(0, 2).join("").toUpperCase();
  const currentRoleLabel = roleLabel(currentRole);
  document.getElementById("topbarAvatar").textContent = initials || "?";
  document.getElementById("topbarName").textContent = currentDisplayName || currentUsername || "—";
  document.getElementById("topbarRole").textContent = currentRoleLabel;
  document.getElementById("accountMenuAvatar").textContent = initials || "?";
  document.getElementById("accountMenuName").textContent = currentDisplayName || currentUsername || "—";
  document.getElementById("accountMenuUsername").textContent = "@" + (currentUsername || "—");
  document.getElementById("accountMenuRole").textContent = currentRoleLabel;

  await refreshNotifications();
  if(_notifPollId) clearInterval(_notifPollId);
  _notifPollId = setInterval(refreshNotifications, 30000); // live-feeling badge, Teams/FB-style
  applyDensityPref();
  const startPage = getPref("startPage", "dashboard");
  await showView((isAdminOrAbove() || startPage !== "review-queue") ? startPage : "dashboard");
}

async function init(){
  setIcon("searchIcon", "search");
  setIcon("docIcon", "docWhite");
  setIcon("brandIcon", "book");
  setIcon("loginBrandIcon", "book");
  setIcon("refInfoIcon", "info");
  setIcon("addStepIcon", "plus");
  setIcon("attachScreenshotIcon", "camera");
  setIcon("attachLogIcon", "fileText");
  setIcon("attachErrorIcon", "fileWarn");
  setIcon("submitIcon", "send");
  setIcon("similarIcon", "search");
  setIcon("searchKbIcon", "search");
  setIcon("editIcon", "edit");
  setIcon("saveIcon", "check");
  document.getElementById("notifBtnIcon").innerHTML = iconSvg("bell");
  document.querySelectorAll(".apps-picker-toggle .chevron").forEach(el => el.innerHTML = iconSvg("chevronDown"));
  document.querySelector(".banner .icon-info").innerHTML = iconSvg("info");
  document.querySelectorAll(".hint-box .icon-info").forEach(el => el.innerHTML = iconSvg("info"));
  document.querySelectorAll("[data-nav-icon]").forEach(el => { el.innerHTML = iconSvg(el.dataset.navIcon); });

  document.getElementById("loginSubmitBtn").addEventListener("click", attemptLogin);
  document.getElementById("loginPassword").addEventListener("keydown", e => {
    if(e.key === "Enter"){ e.preventDefault(); attemptLogin(); }
  });

  const info = await api().connection_info();
  document.getElementById("loginServerUrl").textContent = info.serverUrl;
  showLoginScreen();
}

window.addEventListener("DOMContentLoaded", () => whenReady(init));
