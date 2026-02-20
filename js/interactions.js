document.addEventListener('DOMContentLoaded', () => {
    // --- Existing Hover Logic ---
    const interactiveElements = document.querySelectorAll('.interactive-area');
    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');

    let defaultTitle = window.defaultInfoTitle || (infoTitle ? infoTitle.textContent : "Information");
    let defaultDesc = window.defaultInfoDesc || (infoDesc ? infoDesc.innerHTML : "Hover over any element to learn more.");

    window.setInfoDefaults = function (title, desc) {
        defaultTitle = title;
        defaultDesc = desc;
    };

    function updatePanel(title, desc) {
        if (!infoTitle || !infoDesc) return;
        // Simple blinking/reset effect
        infoTitle.style.opacity = '0.5';
        infoDesc.style.opacity = '0.5';

        setTimeout(() => {
            infoTitle.textContent = title || defaultTitle;
            infoDesc.innerHTML = desc || defaultDesc;
            infoTitle.style.opacity = '1';
            infoDesc.style.opacity = '1';
        }, 50);
    }

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                const title = el.getAttribute('data-title');
                const desc = el.getAttribute('data-desc');
                el.classList.add('active-highlight');
                if (title && desc) updatePanel(title, desc);
            }
        });

        el.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                el.classList.remove('active-highlight');
                updatePanel(defaultTitle, defaultDesc);
            }
        });

        el.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const title = el.getAttribute('data-title');
                const desc = el.getAttribute('data-desc');

                // Remove highlight from all other interactive elements
                interactiveElements.forEach(other => other.classList.remove('active-highlight'));

                el.classList.add('active-highlight');
                if (title && desc) updatePanel(title, desc);
            }
        });
    });

    // --- New Query Interaction Logic ---

    // Rows
    const rows = {
        total: document.getElementById('row-total'),
        crosstab: document.getElementById('row-crosstab'),
        append: document.getElementById('row-append'),
        update: document.getElementById('row-update'),
        sort: document.getElementById('row-sort'),
        show: document.getElementById('row-show'),
        criteria: document.getElementById('row-criteria'),
        or: document.getElementById('row-or')
    };

    // Tools
    const tools = document.querySelectorAll('.clickable-tool');
    const btnSelect = document.getElementById('btn-select');
    const btnTotals = document.getElementById('btn-totals');

    // Set initial active
    if (btnSelect) btnSelect.classList.add('active-tool');

    // Modals
    const modals = {
        'make-table': document.getElementById('modal-make-table'),
        'append': document.getElementById('modal-append'),
        'parameters': document.getElementById('modal-parameters')
    };

    // Close Modals logic
    document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const overlay = btn.closest('.modal-overlay');
            if (overlay) overlay.classList.add('hidden');
        });
    });

    // Handle Tool Clicks
    tools.forEach(tool => {
        tool.addEventListener('click', (e) => {
            // Prevent event from bubbling to generic specific handlers if needed
            // e.stopPropagation(); 

            const type = tool.getAttribute('data-type');

            // Handle Toggle Buttons
            if (type === 'totals') {
                toggleTotalRow();
                tool.classList.toggle('active-tool');
                return;
            }

            if (type === 'parameters') {
                openModal('parameters');
                return;
            }

            // Handle Radio Buttons (Query Types)
            const radioTypes = ['btn-select', 'btn-make-table', 'btn-append', 'btn-update', 'btn-crosstab'];

            // Check if this is a radio type
            if (tool.id && radioTypes.includes(tool.id)) {
                // Remove active from all radio types
                radioTypes.forEach(id => {
                    const b = document.getElementById(id);
                    if (b) b.classList.remove('active-tool');
                });
                // Add to current
                tool.classList.add('active-tool');

                // Execute Logic
                handleQueryType(type);
            }
        });
    });

    function toggleTotalRow() {
        if (rows.total) {
            if (rows.total.classList.contains('row-hidden')) {
                rows.total.classList.remove('row-hidden');
            } else {
                rows.total.classList.add('row-hidden');
            }
        }
    }

    function openModal(id) {
        if (modals[id]) {
            modals[id].classList.remove('hidden');
        }
    }

    function handleQueryType(type) {
        // Reset Rows to Default (Select Query State)
        // Hidden: Total, Crosstab, Append, Update
        if (rows.total) rows.total.classList.add('row-hidden');
        if (rows.crosstab) rows.crosstab.classList.add('row-hidden');
        if (rows.append) rows.append.classList.add('row-hidden');
        if (rows.update) rows.update.classList.add('row-hidden');

        // Visible: Sort, Show, Criteria, Or
        if (rows.sort) rows.sort.classList.remove('row-hidden');
        if (rows.show) rows.show.classList.remove('row-hidden');
        if (rows.criteria) rows.criteria.classList.remove('row-hidden');
        if (rows.or) rows.or.classList.remove('row-hidden');

        // Reset Totals Button
        if (btnTotals) btnTotals.classList.remove('active-tool');

        switch (type) {
            case 'select':
                // Already reset
                break;
            case 'make-table':
                openModal('make-table');
                break;
            case 'append':
                openModal('append');
                if (rows.append) rows.append.classList.remove('row-hidden');
                if (rows.show) rows.show.classList.add('row-hidden'); // Append doesn't usually use Show
                break;
            case 'update':
                if (rows.update) rows.update.classList.remove('row-hidden');
                if (rows.sort) rows.sort.classList.add('row-hidden');
                if (rows.show) rows.show.classList.add('row-hidden');
                break;
            case 'crosstab':
                // Crosstab automatically enables total row often, but specific row is Crosstab Row
                if (rows.total) rows.total.classList.remove('row-hidden');
                if (rows.crosstab) rows.crosstab.classList.remove('row-hidden');
                if (rows.show) rows.show.classList.add('row-hidden');

                // Since Crosstab enables Total row, we must visually activate the Totals button
                if (btnTotals) btnTotals.classList.add('active-tool');
                break;
        }
    }
});
