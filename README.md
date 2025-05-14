# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot%20(71).png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- Mobile-first workflow


### What I learned

I learnt about form validation using javascript and the most challenging part was checking for radio input. I was able to rectify that by usinf a for loop to check all radio buttons to see if any has been ticked.
You can see the code snippet below

```js
 let queryChecked = false;
    for (const radioButton of queryButtons) {
      if (radioButton.checked) {
        queryChecked = true;
        console.log(radioButton);
        break;
    }};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

I still have a lot to learn when it comes to javascript functions, css flexbox and responsiveness



### Useful resources

- [Freecodecamp](https://www.freecodecamp.org/news/form-validation-in-javascript/) - This helped me with setting up javascript for form validation.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)



## Acknowledgments

I like to give thanks to Frontend Mentor for creating this challenge so fledgling software engineers like me can can practice and develop our skills

