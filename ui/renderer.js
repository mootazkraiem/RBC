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
let stagedAttachments = []; // capture-form: [{kind, path, name}] not yet saved
let currentDetailIssue = null;
let editApps = [];          // edit-dialog selected applications
let currentRole = "technician";  // "technician" | "admin" | "super_admin" -- server enforces the real check
let currentUsername = null;
let _searchSeq = 0;              // guards against a slow, stale search response overwriting a newer one
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
function renderIssueCards(container, items, emptyText){
  if(items.length === 0){
    container.innerHTML = `<div class="hint" style="padding:10px 0;">${emptyText}</div>`;
    return;
  }
  container.innerHTML = items.map(i => `
    <div class="issue ${borderClass(i.status)}" data-id="${escapeAttr(i.id)}">
      <div style="flex:1;">
        <div class="issue-top">
          <span class="issue-id">${escapeHtml(i.id)}</span>
          <span class="status ${statusClass(i.status)}">${statusLabel(i.status)}</span>
        </div>
        <div class="issue-title">${escapeHtml(i.title)}</div>
        <div class="issue-sys">System: ${escapeHtml(i.system || "—")}</div>
      </div>
      <span class="icon icon-sm issue-open-icon">${iconSvg("externalLink")}</span>
    </div>
  `).join("");
  container.querySelectorAll(".issue").forEach(el => {
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
function openOverlay(id){ document.getElementById(id).classList.add("open"); }
function closeOverlay(id){ document.getElementById(id).classList.remove("open"); }
function topOpenOverlay(){
  const open = Array.from(document.querySelectorAll(".modal-overlay.open"));
  return open.length ? open[open.length - 1] : null;
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
function roleLabel(r){ return {technician:"Technician",admin:"Admin",super_admin:"Super Admin"}[r] || r; }
function creatableRoles(){
  // A super admin can create admins or technicians; an admin can only
  // create technicians. Creating another super_admin is never exposed
  // here -- that stays a server-CLI-only bootstrap action.
  return currentRole === "super_admin" ? [["technician","Technician"],["admin","Admin"]] : [["technician","Technician"]];
}

async function openManageUsers(){
  document.getElementById("nuError").style.display = "none";
  document.getElementById("nuUsername").value = "";
  document.getElementById("nuDisplayName").value = "";
  document.getElementById("nuPassword").value = "";
  document.getElementById("nuRole").innerHTML = creatableRoles().map(([v,l]) => `<option value="${v}">${l}</option>`).join("");
  await refreshUserList();
  await refreshPasswordRequests();
  openOverlay("manageUsersOverlay");
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
    });
  });
  body.querySelectorAll("[data-reject]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const result = await api().reject_password_request(btn.getAttribute("data-reject"));
      if(result && result.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(result.apiError); return; }
      if(result && result.apiError){ alert(result.apiError); return; }
      await refreshPasswordRequests();
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

async function refreshUserList(){
  const body = document.getElementById("userListBody");
  const users = await api().list_users();
  if(users && users.needsLogin){ closeOverlay("manageUsersOverlay"); showLoginScreen(users.apiError); return; }
  if(users && users.apiError){ body.innerHTML = `<div class="user-row">${escapeHtml(users.apiError)}</div>`; return; }
  body.innerHTML = users.map(u => {
    const canDeactivate = u.is_active && u.username !== currentUsername && u.role !== "super_admin" &&
      (currentRole === "super_admin" || u.role === "technician");
    return `
      <div class="user-row">
        <span class="user-row-name">${escapeHtml(u.display_name)} <span class="muted-small">(${escapeHtml(u.username)})</span></span>
        <span class="user-row-role">${roleLabel(u.role)}</span>
        <span class="user-row-status${u.is_active ? "" : " inactive"}">${u.is_active ? "Active" : "Deactivated"}</span>
        ${canDeactivate ? `<button type="button" class="btn-link" data-deactivate="${escapeAttr(u.username)}">Deactivate</button>` : ""}
      </div>`;
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
  document.getElementById("dProblem").textContent = issue.problem;
  document.getElementById("dRoot").textContent = issue.root;
  document.getElementById("dSolution").textContent = issue.solution;
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
  document.getElementById("eStatus").value = issue.status;
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
  const lockedStatus = currentDetailIssue.status === "solved" || currentDetailIssue.status === "review";
  const locked = lockedStatus && !isAdminOrAbove();
  document.getElementById("dEditBtn").style.display = locked ? "none" : "";
  const lockedNote = document.getElementById("dLockedNote");
  lockedNote.style.display = locked ? "" : "none";
  lockedNote.textContent = currentDetailIssue.status === "solved"
    ? "Solved — only an admin can change this"
    : "Review — only an admin can change this";
  document.getElementById("dSaveBtn").style.display = "none";
  document.getElementById("dCancelBtn").style.display = "none";
  renderDetailView(currentDetailIssue);
}
function showDetailEdit(){
  document.getElementById("detailView").style.display = "none";
  document.getElementById("detailEdit").style.display = "";
  document.getElementById("dEditBtn").style.display = "none";
  document.getElementById("dSaveBtn").style.display = "";
  document.getElementById("dCancelBtn").style.display = "";
  renderDetailEdit(currentDetailIssue);
}

async function openDetail(id){
  const issue = await api().get_issue(id);
  if(!issue || issue.apiError){
    if(issue && issue.needsLogin) showLoginScreen(issue.apiError);
    else alert((issue && issue.apiError) || "Could not load that issue.");
    return;
  }
  currentDetailIssue = issue;
  showDetailView();
  openOverlay("detailOverlay");
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
  await renderList(document.getElementById("searchInput").value);
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
    onChange: (next) => { currentApps = next; },
  });

  document.getElementById("addStepBtn").addEventListener("click", () => addStep(document.getElementById("stepsBody")));
  document.getElementById("eAddStepBtn").addEventListener("click", () => addStep(document.getElementById("eStepsBody")));

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
  document.getElementById("navKnowledgeBase").addEventListener("click", () => document.getElementById("searchInput").focus());

  document.getElementById("viewAllLink").addEventListener("click", openViewAll);
  document.getElementById("viewAllCloseBtn").addEventListener("click", () => closeOverlay("viewAllOverlay"));

  document.getElementById("dEditBtn").addEventListener("click", showDetailEdit);
  document.getElementById("dSaveBtn").addEventListener("click", saveDetailEdit);
  document.getElementById("dCancelBtn").addEventListener("click", showDetailView);
  document.getElementById("dCloseBtn").addEventListener("click", closeDetail);

  document.getElementById("addAppConfirmBtn").addEventListener("click", confirmAddApp);
  document.getElementById("addAppCancelBtn").addEventListener("click", cancelAddApp);
  document.getElementById("addAppCloseBtn").addEventListener("click", cancelAddApp);
  document.getElementById("newAppInput").addEventListener("keydown", e => { if(e.key === "Enter"){ e.preventDefault(); confirmAddApp(); } });

  const notifBtn = document.getElementById("notifBtn");
  const notifPop = document.getElementById("notifPopover");
  notifBtn.addEventListener("click", (e) => { e.stopPropagation(); notifPop.classList.toggle("open"); });
  document.addEventListener("click", () => notifPop.classList.remove("open"));

  document.getElementById("helpBtn").addEventListener("click", async () => {
    const info = await api().connection_info();
    document.getElementById("helpDataDir").textContent =
      `${info.displayName || info.username || "—"}  ·  ${info.serverUrl}`;
    document.getElementById("cpNewPassword").value = "";
    document.getElementById("cpConfirmPassword").value = "";
    document.getElementById("cpError").style.display = "none";
    document.getElementById("cpSuccess").style.display = "none";
    openOverlay("helpOverlay");
  });
  document.getElementById("helpCloseBtn").addEventListener("click", () => closeOverlay("helpOverlay"));
  document.getElementById("cpRequestBtn").addEventListener("click", submitPasswordChangeRequest);

  document.getElementById("signOutBtn").addEventListener("click", async () => {
    await api().logout();
    showLoginScreen();
  });

  document.getElementById("manageUsersBtn").addEventListener("click", openManageUsers);
  document.getElementById("manageUsersCloseBtn").addEventListener("click", () => closeOverlay("manageUsersOverlay"));
  document.getElementById("nuCreateBtn").addEventListener("click", submitCreateUser);

  ["detailOverlay","addAppOverlay","viewAllOverlay","helpOverlay","manageUsersOverlay"].forEach(id => {
    document.getElementById(id).addEventListener("click", (e) => {
      if(e.target.id === id){
        if(id === "addAppOverlay") cancelAddApp();
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
  await loadApplications();
  await renderList();
  await clearForm();
  const info = await api().connection_info();
  currentRole = info.role || "technician";
  currentUsername = info.username;
  document.body.classList.toggle("is-admin", isAdminOrAbove());
  document.getElementById("dataDirLabel").textContent =
    `Signed in as ${info.displayName || info.username}\n${info.serverUrl}`;
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
  document.getElementById("notifBtn").innerHTML = iconSvg("bell");
  document.getElementById("manageUsersBtn").innerHTML = iconSvg("user");
  document.getElementById("helpBtn").innerHTML = iconSvg("help");
  document.getElementById("signOutBtn").innerHTML = iconSvg("signOut");
  document.querySelectorAll(".apps-picker-toggle .chevron").forEach(el => el.innerHTML = iconSvg("chevronDown"));
  document.querySelector(".banner .icon-info").innerHTML = iconSvg("info");
  document.querySelectorAll(".hint-box .icon-info").forEach(el => el.innerHTML = iconSvg("info"));

  document.getElementById("loginSubmitBtn").addEventListener("click", attemptLogin);
  document.getElementById("loginPassword").addEventListener("keydown", e => {
    if(e.key === "Enter"){ e.preventDefault(); attemptLogin(); }
  });

  const info = await api().connection_info();
  document.getElementById("loginServerUrl").textContent = info.serverUrl;
  showLoginScreen();
}

window.addEventListener("DOMContentLoaded", () => whenReady(init));
