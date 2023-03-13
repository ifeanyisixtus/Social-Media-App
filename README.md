# Social media App

This is web app like twitter. here a user can createpostit (like in twitter), a user can also post in a postit and also can comment on a postit OR also this is a social media api with the basic functionality of a social media

## The API has three main components:

- Users: Allows for creating, updating, getting a user, getting all users, and deleting users who can access the API.

- Posts: Allows for creating, updating, getting a single postit, getting all postit and deleting postit.

- Comments: Allows for creating, getting a single comment, getting a comment under positit with the post id, and deleting the comment.

# How to install and run the code

- Download the zip or clone repository and open terminal.
- Use npm install to install all dependencies.
- Download Postman or Thunder Client to simulate running the code as a user on the client side.
- Check the contents of the .env.example to set up your .env file
- Connect your MongoDb Atlas database with the url.
- Use npm run build to build
- Use npm start:dev to run the program.

## Testing Endpoints

- You need to have Postman or any other similar app or extension installed to test this API.
- You can make a request from you local computer or through the live endpoint
- If you're using the live endpoint which is INSOMNIA then your {base url} is
  https://social-media-app-34z2.onrender.com/api/v1/
- If you're using the live endpoint then your docomentation is
  https://social-media-app-34z2.onrender.com/api/v1/docs
- If you're using your cloned app then your {base url} is
  https://localhost:3000
- If you're using your cloned app then your documentation is
  https://localhost:3000
- For database modelling: https://dbdesigner.page.link/vyDH3e6nTvutSiAe6

## What are the Functionalities

- Implemented a soft delete on all resources namely: user, post and comment resources
- Users can create, update or deleted their accounts
- Users can create, edit and delete their oen post-it
- Users can reply to a post-it but a post-it reply can not have another reply, so replies are not recursive
- A post-its author cannot delete replies to their own post-its unless it is their own reply, in other words if they delete their posit-it the replies remain which i implemented
- A deleted comment shouldnt be returned in a response which i observed
- Users can delete their own post-its replies[ user-A can delete his/her own reply and cannot delete user-B replies]
- When returning post-its they should be sorted by newest first.that is newly created post-its should come first and the old ones last which i implemented
- Decide what you will do with the deleted post-its ans in your readme, explain what you later did which i made sure i explained it in details
- I made sure i implemented the avatars features

### How i Implemented Soft Delete

- Created a boolean field called _deleted_ in the models.
- Updates the field to true once a user sends a delete request
- And lastly fetch data where _deleted_ is false.
