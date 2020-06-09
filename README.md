- https://medium.com/@guyavraham/how-to-navigate-from-mobile-app-to-messenger-bot-chat-and-back-to-the-app-d3ff057b594e
- Example for if you want to redirect customers back into an app.
- Allows you to have https url that creates deep link implementation by IOS or Android
- For a use case where you know they already have on their phones.
- Not for when you want navigation to the App/Play store.
- Was useful to me when I wanted to point my facebook bot users back to the app they came from
https://docs.expo.io/workflow/linking/#linking-to-your-app

<h2> How it works: </h2>

- For IOS it will be redirected on page load (with popup for user approval).
- For Android the user will have to click a button (href).
https://youtu.be/iFwm8fYxUQg

<h2>Deployment</h2>
If you already have existing aws account, I recommend auto deploying this kind of React web app with : <a href="console.aws.amazon.com/amplify"> aws-amplify </a>

It should be self explanatory to define the following with no more then 10 minutes:
- Connect your Github repo.
- Define auto deploy on push to master branch.
- Define custom domain so you user will understand what is the purpose of the web page.

There you go, now you have a web page with https prefix you can define for your bot for when a user asks to “go back to app”.
