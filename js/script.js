document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  const contents = document.querySelectorAll('.content');
  const accordionContents = document.querySelectorAll('.accordion-content');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active state from all buttons, hide all contents and collapse all accordion contents
      accordionButtons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
      accordionContents.forEach(
        accContent => (accContent.style.display = 'none')
      );

      // Add active state to clicked button and display corresponding content
      button.classList.add('active');
      const contentId = button.parentElement.getAttribute('data-content');
      document.getElementById(contentId).classList.add('active');

      // Show the accordion content of the clicked button
      const accordionContent = button.nextElementSibling;
      accordionContent.style.display = 'block';
    });
  });

  // Set the first section as open by default
  accordionButtons[0].classList.add('active');
  contents[0].classList.add('active');
  accordionContents[0].style.display = 'block';
});
