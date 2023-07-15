// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all the pages
    const pages = document.getElementsByClassName('page');
    let currentPage = 0;
  
    // Show the initial page
    pages[currentPage].classList.add('active');
  
    // Function to navigate to the next page
    function nextPage() {
      // Hide the current page
      pages[currentPage].classList.remove('active');
      
      // Move to the next page
      currentPage = (currentPage + 1) % pages.length;
      
      // Show the next page
      pages[currentPage].classList.add('active');
    }
  
    // Add event listener to trigger the transition
    document.addEventListener('click', nextPage);
  });
  