const siteContent = {
  
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/**NAV BAR */

// WE NEED TO GRAB THE NAV AND CREATE THE HEADINGS
// services, product, vision, features, about contact



const navSelector = document.querySelectorAll('nav a');



function navBar() {

  // pull the values of siteContent objects into an array
  const navLinks = Object.values(siteContent.nav);


    for (let i = 0; i < navLinks.length - 1; i ++) {

      navSelector[i].textContent = navLinks[i];

    }

} // PUT THE NAV ITEMS ON THE TOP IS WORKING

navBar();


/**CTA BUTTON & TEXT*/


/**DOM TEXT */
// create var for the h1 element
const ctaH1s = document.querySelector('h1');


ctaH1s.textContent = siteContent['cta']['h1'];


/**BUTTON */

//CREATE VAR AND ASSIGN IT TO QUERYSELECTOR
const ctaButton = document.querySelector('button');


//IT WORKS! THE TEXT IS IN THE BOX
ctaButton.textContent = siteContent['cta']['button'];



/**CTA CIRCLE IMG */

// CREATE THE VAR FOR THE IMG

// CREATE VAR FOR IMAGE USING THE SELECTOR
const ctaImg = document.querySelector('#cta-img');


// console.log(ctaImg);


//GIVE THE IMAGE VAR A VALUE
ctaImg.src = siteContent['cta']['img-src'];



/**MAIN CONTENT SECTION*/


/**FEATURES */

//THIS CALLS UPON THE TOP-CONTENT CLASS AND THE CHILDREN TEXT-CONTENT
const mainContentTitle = document.querySelectorAll('.text-content h4'); // grabs the main content text-content  h4 tags

//GRABS THE MAIN CONTENT P TAGS
const mainContentParag = document.querySelectorAll('.text-content p');

// console.log(mainContentParag);



// DUE TO QUERYSELECTORALL BEING A NODE WE CAN ACCESS ITS INDICES AND ASSIGN THEM

// GRAB THE HEADING TAGS
mainContentTitle[0].textContent = siteContent['main-content']['features-h4'];

// STYLE THE HEADING TAGS
mainContentTitle[0].style.fontWeight = 'bold';

// GRAB THE PARAG CONTENT
mainContentParag[0].textContent = siteContent['main-content']['features-content'];

// console.log(mainContentTitle[0]);

/**ABOUT SECTION */

// GRAB THE HEADING TAGS
mainContentTitle[1].textContent = siteContent['main-content']['about-h4'];

// STYLE THE HEADING TAGS
mainContentTitle[1].style.fontWeight = 'bold';

// console.log(mainContentTitle[1]);

// GRAB THE PARAG CONTENT
mainContentParag[1].textContent = siteContent['main-content']['about-content'];

/**SERVICES SECTION */

// GRAB THE HEADING TAGS
mainContentTitle[2].textContent = siteContent['main-content']['services-h4'];

// STYLE THE HEADING TAGS
mainContentTitle[2].style.fontWeight = 'bold';

// console.log(mainContentTitle[2]);

// GRAB THE PARAG CONTENT
mainContentParag[2].textContent = siteContent['main-content']['services-content'];


/**PRODUCT SECTION */

// GRAB THE HEADING TAGS
mainContentTitle[3].textContent = siteContent['main-content']['product-h4'];

// STYLE THE HEADING TAGS
mainContentTitle[3].style.fontWeight = 'bold';

// console.log(mainContentTitle[3]);

// GRAB THE PARAG CONTENT
mainContentParag[3].textContent = siteContent['main-content']['product-content'];

/**VISION SECTION */

// GRAB THE HEADING TAGS
mainContentTitle[4].textContent = siteContent['main-content']['vision-h4'];

// STYLE THE HEADING TAGS
mainContentTitle[4].style.fontWeight = 'bold';

// console.log(mainContentTitle[4]);

// GRAB THE PARAG CONTENT
mainContentParag[4].textContent = siteContent['main-content']['vision-content'];

/**MIDDLE IMAGE SECTION */

// GRAB THE IMG SELECTOR
const midImg = document.querySelector('.middle-img');

midImg.src = siteContent['main-content']['middle-img-src'];

// console.log(midImg);

































