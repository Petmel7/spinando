
{
    const toggleButton = document.querySelector('.js-sidebar-toggle');
    const menuContainer = document.querySelector('.js-sidebar-menu');
    const menuList = menuContainer.querySelector('.sidebar__links-list');
    let isOpen = false;

    toggleButton?.addEventListener('click', () => {
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

    menuList?.addEventListener('transitionend', () => {
        if (isOpen) {
            menuList.style.height = 'auto';
        }
    });
}

