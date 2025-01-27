<script>
    document.addEventListener('DOMContentLoaded', function () {
        const galleries = document.querySelectorAll('.box');

        galleries.forEach(gallery => {
            const images = gallery.querySelectorAll('img');
            let currentIndex= 0;
            
            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 3000); // Change image every 3 seconds
        });
    });

   
		document.addEventListener('DOMContentLoaded', () => {
			const currentLocation = location.href;
			const menuItem = document.querySelectorAll('nav a');
			const menuLength = menuItem.length;
			for (let i = 0; i < menuLength; i++) {
				if (menuItem[i].href === currentLocation) {
					menuItem[i].className = "active";
				}
			}
		});
	</script>