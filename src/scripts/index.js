const markAllAsReadBtn = document.getElementById('markAllBtn');

markAllAsReadBtn.addEventListener('click', () => {
    document.querySelectorAll('.new').forEach(item => {
        item.classList.remove('new');
    })
    document.querySelectorAll('.new-notification-circle').forEach(item => {
        item.classList.remove('new-notification-circle');
    })

    const notificationsQuantity = document.querySelector('.notifications-quantity');
    notificationsQuantity.innerHTML = "0"


})

