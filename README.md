# calculate discord bitfield 
## input your discord bitfield and it will return an array of the permission names.


### install

```
npm install discord-bitfield-calculator
```


### usage

your js file 
```js
const bitfieldCalculator = require('discord-bitfield-calculator');

//the bitfield you get from some discord endpoint
const myBitfield = 523016588865;

//get the array returned and make it a varible
const myPerms = bitfieldCalculator.permissions(myBitfield);

//do as you wish with the array or permissions
console.log(myPerms);

if(myPerms.includes('BAN_MEMBERS')) {
    console.log("this bitfield contains the permission to ban members.");
} else {
    console.log("this bitfield doesn't contains the permission to ban members.");
}
```

### documentation

`permissions(bitfield)` - returns an array of permissions that can be found [here](https://discord.com/developers/docs/topics/permissions).

`bitfield('PERMISSION')` - returns the bitfield value for that permission.