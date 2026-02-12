# This describles How I build this project and serves as pesudo code.

## Header 
It will have project name, search bar and nav link.
For small device with menu icon and drop down nav link.

## How to build Header
Define state to check whether the form is opened or closed. If closed set form as hidden only for small device.
For large device we don't care the state. So make it hidden in small and check state to show it or not.