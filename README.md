# Starter code for CRUD App

## Client 

All Campuses and Students

Frontend (React-Redux, React, and React Router)
- [ ] Write a campuses sub-reducer to manage campuses in your Redux store
- [ ] Write a students sub-reducer to manage students in your Redux store

- [x] Write a component to display a list of all campuses (just their names and images)
- [x] Write a component to display a list of all students (just their names)
- [x] Display the all-campuses component when the url matches `/campuses`
- [x] Display the all-students component when the url matches `/students`
- [x] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view

Single Student and Single Campus 

Frontend (React and React Router)
- [x] Write a component to display a single campus with the following information:
  - [x] The campus's name, image, address and description
  - [x] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [x] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [x] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- [ ] Write a component to display a single student with the following information:
  - [ ] The student's full name, email, image, and gpa
  - [ ] The name of their campus (or a helpful message if they don't have one)
- [x] Display the appropriate student when the url matches `/students/:studentId`
- [x] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

Adding a Campus and Adding a Student 

Frontend (React and React Router)
- [x] Write a component to display a form for adding a new campus that contains inputs for _at least_ the name and address.
- [x] Display this component EITHER as part of the all-campuses view, or as its own view
- [x] Submitting the form with a valid name/address should:
  - [x] Make an AJAX request that causes the new campus to be persisted in the database
  - [x] Add the new campus to the list of campuses without needing to refresh the page

- [ ] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [ ] Display this component EITHER as part of the all-students view, or as its own view
- [ ] Submitting the form with a valid first name/last name/email should:
  - [ ] Make an AJAX request that causes the new student to be persisted in the database
  - [ ] Add the new student to the list of students without needing to refresh the page

Removing a Campus and Removing a Student

Frontend (React and Axios/Fetch)
- [ ] In the all-campuses view, include an `X` button next to each campus
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that campus to be removed from database
  - [ ] Remove the campus from the list of campuses without needing to refresh the page

- [ ] In the all-students view, include an `X` button next to each student
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that student to be removed from database
  - [ ] Remove the student from the list of students without needing to refresh the page