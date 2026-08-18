# Web Technologies — Lab 01

Lucas Nestler  
https://LucasNestler.github.io/webtech-lab-01/

# Lab 02

## Features

- **Dark Mode Toggle:** Located at the top of the page, the "Toggle Dark Mode" button dynamically updates CSS color variables in `style.css` to switch between light and dark themes.
- **Dynamic Collections Section:** Displays a list of items including personal projects, work experience, and favorite movies/TV shows.
- **Real-Time Collection Filtering:** Features an instant search bar that filters items live as you type, matching either the item name or category.
- **Add New Items:** An "+ Add Item" button toggles a creation form, allowing to push new items to the collection.
- **Item Actions (Event Delegation):** Each item card includes two buttons:
  - **Show/Hide Description:** Expands or collapses the item's description.
  - **Delete:** Removes the item from the collection.
  
  *Both actions are managed using a single event listener attached to the parent container.*
- **Custom Contact Form Validation:**
  - Displays explicit inline error messages if required fields are left blank.
  - Validates email formats using regular expressions (`text@text.text`).
  - Connects error messages to inputs
  - Displays a success confirmation message once all inputs are valid.