# This describles How I build this project and serves as pesudo code.

## Header 
It will have project name, search bar and nav link.
For small device with menu icon and drop down nav link.

## How to build Header
Define state to check whether the form is opened or closed. If closed set form as hidden only for small device.
For large device we don't care the state. So make it hidden in small and check state to show it or not.

## Home Page
It have 5 different section
1. Hero Section
2. Popular Section
3. Airing Section
4. Favorite Section
5. Upcoming Section
6. Search Result Section

### Popular Section
Show a list of popular anime as a crousal. 
use swiper and fetch by using useQuery.

1. Create a component that takes children as props and it is a swiper.
2. Fetch data and create anime component and use it as a child of swiper component from 1.

fetch url - https://api.jikan.moe/v4/top/anime?filter=bypopularity

### Favorite Section 
Same as Popular Section only api endpoint differ
fetch url - https://api.jikan.moe/v4/top/anime?filter=favorite

### Airing SEction
Same as Popular with api endpoint difference
fetch url - https://api.jikan.moe/v4/top/anime?filter=airing

### Upcoming Section
Same as Popular with api endpoint difference
fetch url - https://api.jikan.moe/v4/top/anime?filter=upcoming

### Result Section 
Here is the interesting features. 
This section will show the result of user search.So I need to use refetch and enabled : false.

Since search bar is in header and result page is in home 2 different components. I will define all the nessary state and fetching in their parent which is App and passed down as props. 

### State defination for Search Bar (Header Component)
search for controlled form 

### State defination for resulted Page
page for navigation of the resulted animes.

### Header Props
search, setSearch, refetch 

### Resulted Page Props
page, setPage, data, isFetching, isError

### Api for searching Anime
https://api.jikan.moe/v4/anime?q="search"

### Result Section
show a list of animes and if there is next show next button if prev show prev button that's all.

So The structure I explain above work well but only with one catch :(

### The Problem 
I want to fetch when user search and when user navigate between page.Not fetch automatically. So I set enabled false and use refetch when user search. The problem is since I set enalbed false, it is not refetching when user navigate between page(pervios and next button).

### How I solve it.
First I try enabled : !!search - (meaning it will only fetch when search is a truty value IDK why they use !! instead of Boolean()).
The problem with this approach is when user type in search bar it start fetching before user click search on every key press(It sucks).
So That doesn't work.

So I made second approach. In this approach I define another state for appliedSearch which will be intailly "".
And use enabled : !!appliedSearch. and update appliedSearch to search when user click search.
Yearh thats it. You could be thinking why I don't do the same with search. The answer is search is used to control the form so.