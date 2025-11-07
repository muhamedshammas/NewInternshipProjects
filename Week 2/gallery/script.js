// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. FILTERING LOGIC ---
    
    const filterButtons = document.querySelectorAll("#filters .filter-btn");
    const galleryItems = document.querySelectorAll("#gallery .gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the filter value from the data-filter attribute
            const filter = button.getAttribute("data-filter");
            
            // Manage active button class
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            // Show/Hide gallery items based on filter
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");
                
                if (filter === "all" || filter === itemCategory) {
                    item.classList.remove("hide"); // Show item
                } else {
                    item.classList.add("hide"); // Hide item
                }
            });
        });
    });

    // --- 2. LIGHTBOX (MODAL) LOGIC ---

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    galleryItems.forEach(item => {
        const img = item.querySelector("img");
        
        // Add click listener to each gallery item's image
        img.addEventListener("click", () => {
            // Get the src of the clicked image
            const imgSrc = img.getAttribute("src");
            
            // Set the src to the lightbox image
            lightboxImg.setAttribute("src", imgSrc);
            
            // Show the lightbox
            lightbox.classList.add("active");
        });
    });

    // Function to close the lightbox
    const closeLightbox = () => {
        lightbox.classList.remove("active");
        // Optional: Reset image src to prevent flash of old image
        lightboxImg.setAttribute("src", ""); 
    };

    // Close lightbox when the close button is clicked
    closeBtn.addEventListener("click", closeLightbox);
    
    // Close lightbox when clicking on the background (the lightbox itself)
    lightbox.addEventListener("click", (e) => {
        // Only close if the click is on the background, not the image
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

});