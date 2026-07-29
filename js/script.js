// Component Injector Engine for Modular HTML Layouts
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Could not load ${filePath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error("Component load error:", error);
    }
}

// Language Switcher Engine
function setLanguage(lang) {
    const btnEn = document.getElementById('lang-en');
    const btnDe = document.getElementById('lang-de');

    if (lang === 'de') {
        btnDe.className = "px-2.5 py-1 rounded bg-red-950/40 text-red-500 border border-red-500/50 transition";
        btnEn.className = "px-2.5 py-1 rounded text-gray-400 hover:text-white transition";
    } else {
        btnEn.className = "px-2.5 py-1 rounded bg-red-950/40 text-red-500 border border-red-500/50 transition";
        btnDe.className = "px-2.5 py-1 rounded text-gray-400 hover:text-white transition";
    }

    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.innerHTML = text;
            }
        }
    });
}

async function fetchProjects(repoName, mode) {
    const grid = document.getElementById('project-grid');
    updateTabStyles(repoName);
    grid.innerHTML = `<div class="col-span-full text-center text-red-500 font-gaming text-xs uppercase tracking-widest py-12 animate-pulse">Syncing environment nodes...</div>`;
    
    try {
        const response = await fetch(`https://api.github.com/repos/${userProfile.username}/${repoName}/contents`);
        if (!response.ok) throw new Error('API connection failure');
        const items = await response.json();

        const folders = items.filter(item => item.type === 'dir' && !item.name.startsWith('.'));

        folders.sort((a, b) => {
            const aKnown = resumeDescriptions[a.name.toLowerCase()] ? 0 : 1;
            const bKnown = resumeDescriptions[b.name.toLowerCase()] ? 0 : 1;
            return aKnown - bKnown;
        });

        if (folders.length === 0) {
            grid.innerHTML = `<div class="col-span-full text-center font-gaming text-xs text-gray-600 uppercase tracking-widest py-12">No tactical modules detected in this repository.</div>`;
            return;
        }

        grid.innerHTML = '';
        
        folders.forEach(folder => {
            const cleanLookupKey = folder.name.toLowerCase();
            const isKnownProject = resumeDescriptions[cleanLookupKey] !== undefined;
            const projectData = resumeDescriptions[cleanLookupKey] || defaultProject;

            let displayName = folder.name
                .replace(/^\d+[-_]/, '') 
                .replace(/[-_]/g, ' ')   
                .replace(/\b\w/g, char => char.toUpperCase());

            const activeBorder = mode === 'red' ? 'hover:border-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.1)] hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'hover:border-red-500/80';
            
            const statusBadge = isKnownProject ? `
                <span class="font-gaming text-[9px] font-bold tracking-widest px-2.5 py-1 rounded border inline-block uppercase text-red-400 bg-red-950/30 border-red-900/60">
                    ${projectData.tech}
                </span>
            ` : `
                <span class="font-gaming text-[9px] font-bold tracking-widest px-2.5 py-1 rounded border inline-block uppercase text-yellow-400 bg-yellow-950/20 border-yellow-900/50 animate-pulse">
                    BUILDING // IN_PROGRESS
                </span>
            `;

            const streamlitButton = projectData.streamlit ? `
                <a href="${projectData.streamlit}" target="_blank" class="font-gaming inline-flex items-center text-[11px] font-bold text-cyan-400 hover:text-white transition duration-300 gap-1 tracking-wider uppercase bg-cyan-950/20 px-3 py-1.5 rounded border border-cyan-900/50">
                    Launch App
                </a>
            ` : '';

            const cardHtml = `
                <div class="bg-zinc-950 p-6 border border-zinc-800 rounded-md flex flex-col justify-between transition-all duration-300 ${activeBorder} group">
                    <div>
                        <h3 class="font-gaming text-md font-bold text-white mb-3 group-hover:text-red-400 transition duration-300 tracking-wider uppercase">${displayName}</h3>
                        <div class="space-y-4">
                            <p class="text-gray-300 text-xs leading-relaxed font-medium">
                                <span class="${isKnownProject ? 'text-red-500' : 'text-yellow-500'} font-bold tracking-widest text-[10px] uppercase block mb-0.5">${isKnownProject ? '[MISSION]' : '[STATUS: COMPILING]'}</span>
                                ${projectData.mission}
                            </p>
                            <div>
                                <span class="${isKnownProject ? 'text-red-500' : 'text-yellow-500'} font-bold tracking-widest text-[10px] uppercase block mb-1.5">[TECH_STACK]</span>
                                ${statusBadge}
                            </div>
                            <p class="text-gray-500 text-[11px] leading-relaxed pt-3 border-t border-zinc-800/60">
                                ${projectData.details}
                            </p>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-3">
                        <a href="${folder.html_url}" target="_blank" class="font-gaming inline-flex items-center text-[11px] font-bold text-red-500 hover:text-white transition duration-300 gap-1 tracking-wider uppercase">
                            Access Codebase <span>// >></span>
                        </a>
                        ${streamlitButton}
                    </div>
                </div>
            `;
            grid.innerHTML += cardHtml;
        });

    } catch (error) {
        console.error(error);
        grid.innerHTML = `<div class="col-span-full text-center text-red-600 font-gaming text-xs uppercase tracking-widest py-12">Handshake error: Failed to connect to telemetry stream.</div>`;
    }
}

function updateTabStyles(activeRepo) {
    const btnLlm = document.getElementById('btn-llm');
    const btnModels = document.getElementById('btn-models');
    const btnGenAi = document.getElementById('btn-genai');

    if (!btnLlm || !btnModels || !btnGenAi) return;

    btnLlm.className = "font-gaming px-5 py-2.5 rounded border border-zinc-800 bg-zinc-900 text-gray-400 text-xs font-bold tracking-widest transition duration-300 hover:text-white uppercase";
    btnModels.className = "font-gaming px-5 py-2.5 rounded border border-zinc-800 bg-zinc-900 text-gray-400 text-xs font-bold tracking-widest transition duration-300 hover:text-white uppercase";
    btnGenAi.className = "font-gaming px-5 py-2.5 rounded border border-zinc-800 bg-zinc-900 text-gray-400 text-xs font-bold tracking-widest transition duration-300 hover:text-white uppercase";

    if (activeRepo === 'LLM_Applications') {
        btnLlm.className = "font-gaming px-5 py-2.5 rounded border border-red-500 bg-red-950/30 text-red-500 text-xs font-bold tracking-widest transition duration-300 neon-glow-red uppercase";
    } else if (activeRepo === 'Models') {
        btnModels.className = "font-gaming px-5 py-2.5 rounded border border-red-500 bg-red-950/30 text-red-500 text-xs font-bold tracking-widest transition duration-300 neon-glow-red uppercase";
    } else if (activeRepo === 'GEN_AI') {
        btnGenAi.className = "font-gaming px-5 py-2.5 rounded border border-red-500 bg-red-950/30 text-red-500 text-xs font-bold tracking-widest transition duration-300 neon-glow-red uppercase";
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // Inject modular HTML components
    await loadComponent('component-navbar', 'components/navbar.html');
    await loadComponent('component-about', 'components/about.html');
    await loadComponent('component-education', 'components/education.html');
    await loadComponent('component-projects', 'components/projects.html');
    await loadComponent('component-skills', 'components/skills.html');
    await loadComponent('component-hobbies', 'components/hobbies.html');
    await loadComponent('component-contact', 'components/contact.html');

    // Trigger initial project rendering
    fetchProjects('LLM_Applications', 'red');
});
