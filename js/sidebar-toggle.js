
document.querySelectorAll('.js-sidebar-toggle').forEach((toggleButton) => {
    const menuContainer = toggleButton.closest('.sidebar')?.querySelector('.js-sidebar-menu');
    const menuList = menuContainer?.querySelector('.sidebar__links-list');

    if (!menuContainer || !menuList) return;

    let isOpen = false;

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