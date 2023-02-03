# Sale Tracker v1.0.0

###### This repository is for the client side of the application for the server repository please visit => https://github.com/Cetins/sale-tracker-server

![Screenshot 2023-01-28 at 10 35 03 - Edited - Edited](https://user-images.githubusercontent.com/69481095/216683087-ad28343f-e896-43cd-a35a-976f5dafaa3b.png)

## Small Business Sale Tracking Application

This application provide easy digital transition for small businesses. Most shops rely on their A4 agenda to track their sales, by writing line by line every sale during day. My husband's shop is one of them. We spend long hours to prepare our tax returns, track our stock, and analyse our financial performance. To end this torture for us and all the businesses out there, I've started this project, digital sales and stock tracker.

<img width="1000" alt="Sales Tracker Homepage" src="https://user-images.githubusercontent.com/69481095/216690156-2b06f06a-15d7-4084-92ac-3d74f4cef9b7.png">

## Features

- Seperate tabs for service and product sales
- Stock tracking
- Weekly sales per employee for both service and product sales
- Daily sales chart for the recent week
- Low stock warnings
- Product sales performance charts
- Theme accent color changer

<img width="1406" alt="Sales Tracker Sales Page" src="https://user-images.githubusercontent.com/69481095/216691107-b66d7845-5a57-44a6-a918-ef3ce8646bf2.png">

<img width="1381" alt="Sales Tracker Dashboard" src="https://user-images.githubusercontent.com/69481095/216691320-2fe8dcb8-ad0d-498c-8461-443f949886c1.png">

<img width="1405" alt="Screenshot 2023-02-03 at 19 34 49" src="https://user-images.githubusercontent.com/69481095/216691817-f53876e5-0dd5-4162-8e61-acbf06bcf6e4.png">

## Development

This is the alpha version, only runs on local development server. Right now I'm working on deploy the app in a platform so I can start testing with beta users. If you want to contribute this process please contact me at cetinsdev@gmail.com and don't be disheartened because you just started and don't have any experience yet. We all had to start somewhere and this app is my starting point. I don't have any experience yet :)

## How To Clone

There are two repositories for this application. In order to run this, you should clone both of them seperately.

As I couldn't install MongoDB npm package on my Windows laptop, the instructions will only work on MacOS. Sorry for the inconvenience but as soon as I figure it out I'll update this file.

In order to install npm packages in this project make sure you installed node in your machine.

First create a folder in your machine, open your terminal and cd to the folder you created and use the commands below on your terminal

```
git clone git@github.com:Cetins/sale-tracker-client.git
```
```
git clone git@github.com:Cetins/sale-tracker-server.git
```

This will clone the both repositories to your folder than you should install npm for each repository you had cloned. 
```
cd sale-tracker-client
```
```
npm install
```
```
cd ../
```
```
cd sale-tracker-server
```
```
npm install
```
Then you should upload the sample data by runnind the seeds command
```
npm run seeds
```
After all these commands your project should be ready to run. 

To run your server you can use ```npm run server:dev``` command from the root of the sale-tracker-server directory.
To run your client you can use ``` npm start``` command from the root of the sale-tracker-client directory.

I would personally open two seperate terminal windows and run server and client. I don't like to clutter my code editor's internal terminal and save it for git commands.
