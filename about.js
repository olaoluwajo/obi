document.addEventListener('DOMContentLoaded', () => {
   const buttons = document.querySelectorAll('.btn-div button');
   const paragraphs = document.querySelectorAll('.btn-text-to-show p');

   buttons.forEach(button => {
       button.addEventListener('click', () => {
           // Remove 'active' class from all buttons
           buttons.forEach(btn => btn.classList.remove('active'));
           // Add 'active' class to the clicked button
           button.classList.add('active');

           // Hide all paragraphs
           paragraphs.forEach(p => p.classList.add('hidden'));
           // Show the paragraph associated with the clicked button
           const targetId = button.getAttribute('data-target');
           document.getElementById(targetId).classList.remove('hidden');
       });
   });

    
    
    
    
    
    
    
});