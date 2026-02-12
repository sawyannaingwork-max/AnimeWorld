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