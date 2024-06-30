# Frontend Developer Project - Room homepage 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Overview
Welcome to my Frontend Developer project for the Room homepage! In this challenge, I was tasked with building an e-commerce homepage based on a provided design. The primary goal was to create a responsive layout that closely matches the design across different screen sizes. Additionally, I aimed to implement hover states for interactive elements and enable slider navigation using both mouse/trackpad and keyboard inputs.

I used a combination of HTML, CSS, and TypeScript, along with React and Styled Components to develop the project. Below, you'll find details about my approach, the technologies I used, and my key learnings throughout the process.

### The challenge
In this project, users should be able to:

View the optimal layout: The website layout should adapt seamlessly to the user's device screen size, ensuring an optimal viewing experience regardless of whether they're using a desktop, tablet, or mobile device.

Experience hover states: Interactive elements on the page should provide visual feedback when hovered over, enhancing user engagement and indicating clickable or interactive areas.

Navigate the slider: Users should be able to navigate the slider component using either their mouse/trackpad or keyboard, allowing for easy exploration of the showcased content without solely relying on traditional mouse interaction.

### Links

- Solution URL: (https://github.com/KwameIcon/room-homepage)
- Live Site URL: (https://roomhomepage-amalitech.vercel.app/)

## My process

Planning:

Understanding the Requirements: I began by thoroughly understanding the project requirements and the design specifications provided. This involved reviewing the design mockups and the expected functionalities.

Setting Up the Development Environment: 

I set up my development environment with the necessary tools(Visual Studio Code Editor) and React - Js Library. I already have my Node.js installed so I head up to Creating React project with Create React App, adding Typescript for type scripting and adding Styled Components for styling.


Responsive Design Strategy: 

I planned developing on larger screens first before considering scaling it down to smaller screens.

Coding

 - HTML and CSS: I started by structuring the HTML with semantic tags to ensure readability and accessibility. I used Flexbox to create a responsive layout.

 - React Components: I broke down the design into reusable React components. This modular approach made it easier to manage and update the code.

 - Styled Components: I used Styled Components for styling the React components. This allowed me to write CSS directly within the JavaScript files, making the styles scoped and easier to maintain.


 - Cross-Device Testing: I tested the website on various devices and screen sizes to ensure it was fully responsive and provided a consistent user experience.

 - Browser Compatibility: I checked the website on different browsers (Chrome and  Firefox) to ensure compatibility and fix any issues that arose.

 Deployment

 - Version Control: Throughout the development process, I used Git for version control, committing changes regularly and managing branches effectively.

 - Hosting: I deployed the website using Vercel, which allowed for easy and continuous deployment. This ensured the live site was always up-to-date with the latest changes.

Final Checks: Before final deployment, I performed a thorough review and testing to ensure there were no remaining issues or bugs.

### Built with

Semantic HTML5 markup
CSS custom properties
Flexbox
[React](https://reactjs.org/) - JS library
[Styled Components](https://styled-components.com/) - For style
Typescript - static typing


### What I learned

This project provided several key learnings, including:

Responsive Design: 
Implementing a design that adapts across various devices required the effective use of CSS Flexbox for layout. This was essential in ensuring the site looked great on mobile, tablet, and desktop screens.

Example code below:

``` .container {
    display: flex;
    flex-wrap: wrap:
  
}
```
The above code is a great tool in developing applicatins that response to different screen size. Using this syntax will automatically displays the elements in a row and the flex-wrap will ensure that the elements wraps to the next line when the size of the page is being adjusted.

Or 

You can also do the following below:

```
.container {
  display: flex;
}

@media (min-width: 768px) {
  .container {
    flex-flow: wrap; or flex-direction: column
  }
}
```

Slider Navigation: 
Creating a slider component that can be navigated using both the mouse and keyboard enhanced accessibility.

```
    // Function to handle slider navigation on mouse click

    const handleSlider = useCallback((direction: 'left' | 'right') => {
        const dataLength = SHOWCASEDATA.length - 1;
        setCurrentIndex(prev => {
            if (direction === 'left') {
                return prev === 0 ? dataLength : prev - 1;
            } else {
                return prev === dataLength ? 0 : prev + 1;
            }
        });
    }, []);

```
And 
```
 const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handleSlider('left'); // Handle left arrow key press
            } else if (event.key === 'ArrowRight') {
                handleSlider('right'); // Handle right arrow key press
            }
        };

```


### Continued development

Continued development

In future projects, I plan to focus on:

Accessibility: 
Ensuring all interactive elements are accessible via keyboard and screen readers.

Advanced CSS Techniques: 
Further exploring CSS Grid and Flexbox properties to create more complex layouts.


Performance Optimization: 
Improving load times and responsiveness, especially for mobile users.

### Useful resources

[]CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) -  I have learned a lot from this website, which covers everything about CSS Flexbox. It's an invaluable tool for frontend developers looking to master CSS Flexbox for responsive designs. Flexbox is a key technique I use in development, and I gained a deep understanding of its importance from this resource.


[W3School](https://www.w3schools.com/jsref/obj_keyboardevent.asp) - W3Schools is an excellent resource for web development concepts. This website uses simple and clear approaches to teach various topics, including how to handle keyboard events in JavaScript. It has been incredibly helpful in understanding and implementing these concepts effectively. 


## Author

Website - [Anag-bey Kwame](https://roomhomepage-amalitech.vercel.app/)

