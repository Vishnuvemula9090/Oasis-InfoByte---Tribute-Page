document.addEventListener('DOMContentLoaded', function () {
    const moreInfoButton = document.getElementById('moreInfoButton');
    const moreInfo = document.getElementById('moreInfo');

    moreInfoButton.addEventListener('click', function () {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            moreInfoButton.textContent = 'Less Info';
        } else {
            moreInfo.classList.add('hidden');
            moreInfoButton.textContent = 'More Info';
        }
    });
});
