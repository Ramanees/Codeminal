 document.addEventListener('DOMContentLoaded', function () {
      // Get all navigation items that should have a dropdown
      const navItems = document.querySelectorAll('.nav-item');

      navItems.forEach(item => {
        const dropdownMenu = item.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          // Show the dropdown on mouse enter
          item.addEventListener('mouseenter', () => {
            dropdownMenu.classList.remove('hidden');
          });

          // Hide the dropdown on mouse leave
          item.addEventListener('mouseleave', () => {
            dropdownMenu.classList.add('hidden');
          });
        }
      });
    });