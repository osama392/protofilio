const profileImg = document.getElementById('profileImg');
const currentLabel = document.getElementById('currentLabel');
const buttons = document.querySelectorAll('.btn-switch');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const newSrc = btn.getAttribute('data-photo');
        const newAlt = btn.getAttribute('data-alt');
        const label = btn.getAttribute('data-label');

        if (profileImg.src.endsWith(newSrc)) {
            return;
        }

        buttons.forEach(function (b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        profileImg.classList.add('fade-out');

        setTimeout(function () {
            profileImg.src = newSrc;
            profileImg.alt = newAlt;
            currentLabel.textContent = 'Currently: ' + label;

            profileImg.classList.remove('fade-out');
        }, 400);
    });
});
