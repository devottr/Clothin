// --- Navbar Scroll Logic (Existing Code) ---
        var lastScrollTop = 0;
        var navbar = document.getElementById("navbar");
        window.addEventListener("scroll", function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down, hide navbar
                navbar.style.top = "-100px";
            } else {
                // Scrolling up, show navbar
                navbar.style.top = "0";
                if (scrollTop === 0) {
                    navbar.classList.remove("scrolled");
                } else {
                    navbar.classList.add("scrolled");
                }
            }
            lastScrollTop = scrollTop;
        });

        // --- Accordion Logic (Existing Code) ---
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                var panel = this.nextElementSibling;
                var isActive = this.classList.contains("active");
                // Close all accordion panels
                for (var j = 0; j < acc.length; j++) {
                    var otherPanel = acc[j].nextElementSibling;
                    if (otherPanel !== panel && acc[j].classList.contains("active")) {
                        otherPanel.style.maxHeight = null;
                        acc[j].classList.remove("active");
                    }
                }
                if (isActive) {
                    this.classList.remove("active");
                    panel.style.maxHeight = null;
                } else {
                    this.classList.add("active");
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }

        // --- Custom Mute Button Logic ---
        document.querySelectorAll('.mute-button').forEach(button => {
            const videoId = button.dataset.videoId;
            const video = document.getElementById(videoId);
            const icon = button.querySelector('i');

            // Set initial icon based on video muted state
            if (video.muted) {
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-mute');
            } else {
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
            }

            button.addEventListener('click', () => {
                video.muted = !video.muted; // Toggle mute state
                if (video.muted) {
                    icon.classList.remove('fa-volume-up');
                    icon.classList.add('fa-volume-mute');
                } else {
                    icon.classList.remove('fa-volume-mute');
                    icon.classList.add('fa-volume-up');
                }
            });

            // Ensure the video element has an ID
            if (!video) {
                console.error(`Video element with ID '${videoId}' not found for mute button.`);
            }
        });