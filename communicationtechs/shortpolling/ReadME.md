The problem: We want the same weather application and the users want updates in every 100ms. 
We do not have enough resource to handle a lot of requests. 
For example if we have 1000 active users checking our weather page then we need to handle 10'000 requests per second. 
So first thing we want to try before increasing the resources is to use HTTP Long Polling and 
see if it can reduce the load or not.
