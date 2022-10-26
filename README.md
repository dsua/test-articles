Dear Reviewer, please read these notes on the solution
---------------------
To run e2e test go to package.json and run 
1) start
2) testcafe (it will open chrome on you station)

I decided to go with testcafe for e2e since I worked with it not long ago.

#### On tests
I didn't do unit tests. I don't see any value in our case. 
Unit tests make sense when you have logic heavy components 
(e.g. medical/financial forms). 
Unit tests in our case will be more a burden and not help. 
e2e tests bring real value here. 
In my opinion they are absolute must have 
if you want to have a stable maintainable solution 
and not a pile of mess that devs are afraid to touch.

#### Visual design notes
1) In my opinion the current design abuses the orange color - reading orange
text makes my eyes hurt. I tried to address that 
but at the same time to convey that orange theme.
2) The design is basically adaptive to screen width 
but by no means this is a prod ready level.
3) I started with inline-block and decided to stay with it 
but flex is a more popular option nowadays (and more functional).



Front-end Software Engineer Development Test
--------------------------------------------

The goal of this test is to assert your coding and architectural skills. 
You are given a simple problem, so you can focus on showcasing development techniques.

This test should be written in React and should consume the json that we are sending with it

TASK
-----

Given the json response from a bundle page render using React the list of articles in a way that you think is good for the users to consume it (bundle is a page which show a list of articles/videos/columns on RTL MSP Platform, for example: https://www.rtlboulevard.nl/entertainment/showbizz/bundel/4532761/de-uitschieters-van-2018).

You don't have to build the article, video pages. Only the list of articles and link to our site using the url provided in the json response.

Requirements
------------

- Render the title, description, label and list of items (title, label, image)
- Build in React
- Add unit tests

Bonus points
------------ 

- Use Typescript
- Add end-to-end tests
 
Remember: There is no right or wrong way to do the test. Main goal is to assess the choices made and the skills used.
