# ShopingCartBasic

# Workflow EXP:-

## PACKAGES USED: React navigation, Redux toolkit, MSW, @testing-library/react-native, jest

# PRODUCTS PAGE

I have used RTK Query to fetch data

RTK Query gives inbuild hook with api state managment
 
I didnt push the products to store, Since I did not affect workflow & wanted to handle with rtk query by which we can keep server and client state synced (via refetch, caching and invalidation).

Refetch on Error component

Hanlded the api states, only one state is applicable at a time.
Used Flatlist to render list Item

## PRODUCT CARD

Receives the item in props and renders it. Design can be improved its simple and efficient

On clicking the add, the items are dispatched to state and navigated to cart

## CART

Displays the item and its total


# TESTING 

## MSW TO MOCK API

Basic test cases are writen on navigation and data load

 Created Jest.setup.ts and defiend global configs and includes in package.json

 Helpers folder consist of helper files and msw server initiation wih mock data

 Used react native testing library to test navigation and to check data loaded or not

fecthBaseUrl not accepting basic fetch thows warning which took some time to 



