
function setupSidebarToggle() {
    document.querySelectorAll('.js-sidebar-toggle').forEach((toggleButton) => {
        const sidebar = toggleButton.closest('.sidebar');
        const menuContainer = sidebar?.querySelector('.js-sidebar-menu');
        const menuList = menuContainer?.querySelector('.sidebar__links-list');

        if (!menuContainer || !menuList) return;

        menuList.style.transition = 'height 0.3s ease';
        menuList.style.overflow = 'hidden';

        const isMobileSidebar = sidebar.classList.contains('sidebar--mobile');

        let isOpen = !isMobileSidebar;

        menuList.style.height = isOpen ? menuList.scrollHeight + 'px' : '0px';

        toggleButton.addEventListener('click', () => {
            if (!isOpen) {
                menuList.style.height = menuList.scrollHeight + 'px';
                isOpen = true;
            } else {
                menuList.style.height = menuList.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    menuList.style.height = '0px';
                });
                isOpen = false;
            }
        });

        menuList.addEventListener('transitionend', () => {
            if (isOpen) {
                menuList.style.height = 'auto';
            }
        });
    });
}

setupSidebarToggle();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {

        document.querySelectorAll('.js-sidebar-menu .sidebar__links-list').forEach((list) => {
            list.style.height = '';
        });
        setupSidebarToggle();
    }, 200);
});

