// Page load: float up + fade in
window.addEventListener('DOMContentLoaded', () => {
    // Fade in body
    document.body.classList.add('visible');

    // Wait a tiny bit to ensure initial render
    setTimeout(() => {
        document.querySelectorAll('.float-up').forEach(el => {
            el.classList.add('visible'); // triggers float-up animation
        });
    }, 50); // 50ms delay ensures animation always plays
});

// Navigation links: float down + fade out
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('http')) {
            e.preventDefault();

            // Float down elements before leaving
            document.querySelectorAll('.float-up').forEach(el => {
                el.classList.remove('visible');
                el.classList.add('exit');
            });

            // Fade out body after elements start moving
            setTimeout(() => {
                document.body.classList.remove('visible');

                // Navigate after combined animation duration
                setTimeout(() => {
                    window.location.href = href;
                }, 600); // matches CSS transition
            }, 600);
        }
    });
});
