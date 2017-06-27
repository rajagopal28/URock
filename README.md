### Introduction:
  The current era being the era of technology that takes new and advanced forms day by day, it is high time that we just change the way we think while solving a problem. With technology providing surplus support the way we address a particular situation is of key importance. Technology has now become an integrated part of pretty much in every individual’s life that anyone and everyone understands technology as it is and where it will be. It is high time that we move synchronously with technologies and move in a pace of real user interactions as a part of innovations. It is not about some solution that merely addresses a problem with some traditional/age old methodology it is always about “wow factors” that does’t bore the existing customers and encourages new users to get into the system.
### Existing System:
   The problem in hand is the customer “reward points” system where based on customer’s spendings the system rewards them with some quantifiable units, often card “reward points” which can be redeemed in a later point of time. The following are the 3 major kinds of users in the system

- Users who have random purchasing habit will generally do not care about the reward points that are being added as a part of their spendings.
- Users who have constant purchasing habit but not having any idea about the reward points system, tend to loose the value they have earned because of their belief that their purchase might not be a great “reward point” earner.
- Users who have constant purchasing habit with conscience about their reward point accumulations fail to achieve their targeted purchasing criteria, as almost all the reward points systems increase the reward point value of the available products on a timely basis. For example, if a user with 2500pts is looking at the rewards system and sees a product with 3000pts of value that matches their liking and they shop for the remaining product in a month or so and when they come back to this page they always tend to see more than 3500pts. which makes them get frustrated.

 #### The problem with the existing systems are as follows.

- The point value of the user’s wish list item from the rewards site is so visible hiked in a short time, making the user accumulate point that is too low to purchase with this “past” price.
- Reward points are too monotonous and users tend to lose track of them over time.
- These system focuses only on making the user earn reward points but not making them effectively use them.

### Proposed System:
   The proposed system is trying to redefine the  way the reward point system operates such as way that it also helps boosting the user spending habits as well as to make them get a personalized experience in being rewarded. The proposed systems operated by gamifying the entire system based on customer purchasing categories, i.e, dining, fuel, travel, branded-shopping, etc. With these categories determined by the respective bank, we can have a leadership board for all the customers based on each categories and an aggregated one as a whole. The following are the fore seen benefits on the new system.

- Personalized offers on the category based purchases that the customer usually does to encourage them to continue their current purchasing habit and to improve on time basis.
- Targeted offers on categories that the customer has minimalistic purchasing interest, to potentially get them involved using promotions that might be relatively interest them.
- Even customers with random purchasing habits can be categories and visualized in the leadership board, helping them discover their pattern that evolved over time.

### Major User Journeys:
   The major user journeys in the system for the user who purchases anything using the credit/debit cards of a bank are as follows:

- Global leadership board - where the users view their aggregated status summing all the categories, this is where the users get to see personalized purchasing offers/items that can be redeemed with the points they own.
- Category based leadership board - personalized offers in the respective category based on the level in which the user is in right now, suggestions on improving their category wise spending with vendor deals etc.
- Promotions - personalized promotions on categories that the user can potentially be spending but has no idea about how to efficiently spend in them.

### The backend architecture:
![BackendSchema](https://file.ac/0M76LyfAGq8/schema.png)

### The Major tech nuances:

- Dynamic promotions applications - Whenever a payment is made, the promotion that corresponds to the current user reward point in fetched on the fly and the corresponding promotion is applied to the payment. This also includes discounting the price amount and updating the reward points with whatever nX promotions applied on reward points.
- Category wise grouping - Grouping customers based on their earned category wise rewards and on an “All Categories” level based on their entire payments.
- Personalized promotions - Promotions are availed based on current user payment as well as their position in the leadership board.

### The Implemented User Journeys:
![Home](https://file.ac/0M76LyfAGq8/home.png)
#### User list
![Users](https://file.ac/0M76LyfAGq8/users.png)
![User Payments](https://file.ac/0M76LyfAGq8/user-payments.png)
#### Promotions list
![Promotions](https://file.ac/0M76LyfAGq8/promotions.png)
#### Global leadership board
![Leadership Board](https://file.ac/0M76LyfAGq8/leadership-board.png)
#### Category wise filters on the leadership board
![Leadership Board Dining](https://file.ac/0M76LyfAGq8/leadership-board-dining.png)
![Leadership Board Clothing](https://file.ac/0M76LyfAGq8/leadership-board-clothing.png)
![Leadership Board Clothing Promotion](https://file.ac/0M76LyfAGq8/ledership-board-view-promotion-modal-dining.png)
![Leadership Board Fuel](https://file.ac/0M76LyfAGq8/leadership-board-fuel.png)

### Up and Running:
- The static React app is deployed to gh-pages and the URL is here [Live Link](https://rajagopal28.github.io/URock/)
- The Backend API server is using Spring-Boot + MySQL backend deployed to OpenShift server
- Please read this URL to install the app in local and keep it running[Local](Installation.md)

### The future:

- Machine learning to help learn customer purchasing habits with most precision.
- Instant redemption of reward points in the vendor outlets despite making them purchase through dashboard.
- Social networking - making the leadership board more collaborative by networking with people we know and play against their progress.
- Product Recommendation from friends in network to improve purchasing habits and fetching more reward points

### References:

- Customer Loyalty Programs: https://blog.hubspot.com/blog/tabid/6307/bid/31990/7-Customer-Loyalty-Programs-That-Actually-Add-Value.aspx
- React(Web) : https://facebook.github.io/react/docs/hello-world.html
- React Material-UI : http://www.material-ui.com/#/
