## Lab 1: Angular ecosystem

In the command prompt, issue the following command to install the Angular CLI

```
npm install -g @angular/cli
```

and again, to verify:

```
ng -version
```

Run the help command to get an overview of the number of commands available.

Then run help on a few of the key commands. This is done by typing something similar to `ng new -
help` .

Examine the following commands:

[new](https://angular.io/cli/new)

[add](https://angular.io/cli/add)

[generate](https://angular.io/cli/generate)

[build](https://angular.io/cli/build)

[serve](https://angular.io/cli/serve)

[config](https://angular.io/cli/config)

[run](https://angular.io/cli/run)

Create a new empty folder and change to that folder.

Run the `ng` command to create a new app.

next type `ng serve --open to` run the basic application shell.

Notice that the address by default is `localhost:4200`

in the window press Ctrl-C to stop the server.
type in the command `npm start`

Notice the server will start but you have to manually open the browser to `localhost:4200`.

Open the `package.json` file and look at the `scripts` section. Change the line for `start` to include the `--open` option.

Now type `npm start` again and see what happens.

Without shutting down the server, do the following:

Edit the html page to remove the links and save the file.

Change the `title` property in `app.component.ts` and save the file.

Notice in both cases the application will rebuild and display.

Shut down the server and add a new component.

Put the tag for the new component in the original html file where the links were. 

Re-run the application to see the basic page information.
