# :nut_and_bolt::nut_and_bolt::nut_and_bolt:What is Middleware?:nut_and_bolt::nut_and_bolt::nut_and_bolt:

## And what are Express Middlewares?

##### 1. Middleware provides services to software application beyond those provided by ones own Operating System.

#### 2. It is the software layer that lies between the OS and the applications on each side of a network. 'Software Glue'

##### 3. There are two general types of Middleware - General and Service

##### 4. Middleware allows you to integrate legacy systems

---

#### WITHIN THE CONTEXT OF EXPRESS...

Middleware can refer to any number of functions that are invoked by the
Express.js routing layer before the final request handler is made.

Middleware functions are functions that have access to the request object (req),
the response object (res), and the NEXT middleware function in the application’s
req-res cycle. All middleware functions can include the ‘next’ perimeter so that
it can pass things along until the final function when it is no longer needed.

#### WHAT CAN IT DO? :key:

Middleware functions can perform tasks such as:

* Executing any code
* Making changes to the req-res object
* Ending the req-res cycle
* Calling the next middleware function in the stack.

Express Applications can use the following levels of middleware:

* Application-level middleware
* Router-level middleware
* Error-handling middleware
* Built-in middleware
* Third-party middleware

#### FUNCTIONALITY :loudspeaker:

<img width="978" alt="screen shot 2017-12-18 at 15 26 29" src="https://user-images.githubusercontent.com/25667270/34109089-313cb8c4-e40b-11e7-940c-408ce579e9f3.png">

#### USE means “Run this on ALL requests”

app.use( "/product" , mymiddleware);

* will match /product
* will match /product/cool
* will match /product/foo

#### GET means “Run this on a GET request, for the given URL”

#### EXAMPLES :wrench:

![untitled diagram](https://user-images.githubusercontent.com/25667270/34110856-934cbf28-e410-11e7-913c-bd4ae46d5052.jpg)
