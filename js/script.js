// load accordion data
const loadOptions = document.querySelector('.main_content_container');

loadOptions.innerHTML = `${accordionData
  .map(function (option) {
    return `
    <div class="first_content_div">
          <!-- title box -->
          <div class="title_text_box" onclick="openOption(this, ${option.id})">
            <div class="title_number_text_box">
              <span class="title_number">${option.number}</span>
              <h3 class="title_text">${option.title}</h3>
            </div>
            <!-- icon for arrow -->
            <div class="arrow_icon_container">
              <span class="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </div>
          </div>
          <!-- description text -->
          <div class="hidden_files_accodion">
            <div class="description_text_1">
              ${option.description1}
            </div>
            <div class="description_text_2">
              ${option.description2}
            </div>
          </div>
        </div>
  `;
  })
  .join('')}`;

// Set the first accodion to be open by default
document.addEventListener('DOMContentLoaded', function () {
  const firstAccodion = document.querySelector('.first_content_div');
  if (firstAccodion) {
    firstAccodion
      .querySelector('.hidden_files_accodion')
      .classList.add('accodion_text_active');
    firstAccodion.classList.add('accodion_border_active');
  }
});

function openOption(optionElement, id) {
  // Find the nearest parent container with the class 'first_content_div'
  const accodionContainer = optionElement.closest('.first_content_div');

  if (!accodionContainer) {
    console.error('Accodion container (first_content_div) not found');
    return;
  }

  // Check if the clicked accodion is already open
  const isAlreadyActive = accodionContainer.classList.contains(
    'accodion_border_active'
  );

  // Close all other accodions
  const allAccodions = document.querySelectorAll('.first_content_div');
  allAccodions.forEach(acc => {
    const hiddenAccodion = acc.querySelector('.hidden_files_accodion');
    if (hiddenAccodion) {
      hiddenAccodion.classList.remove('accodion_text_active');
      acc.classList.remove('accodion_border_active');
    }
  });

  // Toggle the clicked accodion
  const hiddenAccodion = accodionContainer.querySelector(
    '.hidden_files_accodion'
  );
  if (hiddenAccodion) {
    if (!isAlreadyActive) {
      hiddenAccodion.classList.add('accodion_text_active');
      accodionContainer.classList.add('accodion_border_active');
    }
  } else {
    console.error(
      'hidden_files_accodion not found within the accodion container'
    );
  }

  // Update the background image of image_container_learning based on the ID
  const imageContainer = document.querySelector('.image_container_learning');
  if (imageContainer) {
    imageContainer.style.backgroundImage = `url('/img/dog${id}.jpg')`;
  } else {
    console.error('image_container_learning not found');
  }
}

function loadFaq() {
  const faqOption = document.querySelector('.faq_item_container');

  faqOption.innerHTML = `${faqData
    .map(function (faqItem) {
      return `
      <div class="faq_item">
        <div class="faq_question" onclick="openAnswer(this)">
          ${faqItem.question}
          <span class="arrow">
            <span class="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </span>
        </div>
        <div class="faq_answer">
          <p>${faqItem.answer}</p>
        </div>
      </div>
      `;
    })
    .join('')}`;
}

// function openAnswer(faqElement) {
//   const faqBor = faqElement.parentNode;
//   const faqAns = faqElement.nextElementSibling;

//   faqBor.classList.toggle('faq_active_border');
//   faqAns.classList.toggle('faq_active_answer');
// }

// Set the first FAQ item as active by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
  const firstFaqItem = document.querySelector('.faq_item');
  if (firstFaqItem) {
    firstFaqItem.classList.add('faq_active_border'); // Active border for the first FAQ item
    const firstAnswer = firstFaqItem.querySelector('.faq_answer');
    if (firstAnswer) {
      firstAnswer.classList.add('faq_active_answer'); // Show the answer of the first FAQ item
    }
  }
});

function openAnswer(faqElement) {
  const faqBor = faqElement.parentNode; // Get the parent container of the question and answer
  const faqAns = faqElement.nextElementSibling; // Select the answer element

  // Check if this FAQ item is already active
  const isAlreadyActive = faqBor.classList.contains('faq_active_border');

  // Close all FAQ items
  const allFaqItems = document.querySelectorAll('.faq_item');
  allFaqItems.forEach(item => {
    item.classList.remove('faq_active_border'); // Remove the active border
    const answer = item.querySelector('.faq_answer');
    if (answer) {
      answer.classList.remove('faq_active_answer'); // Hide the answer
    }
  });

  // Toggle the clicked FAQ item if it was not already active
  if (!isAlreadyActive) {
    faqBor.classList.add('faq_active_border'); // Add the active border to the clicked item
    faqAns.classList.add('faq_active_answer'); // Show the answer of the clicked item
  }
}

loadFaq();

//faq_active_border
//faq_active_answer
