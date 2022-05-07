# Calculate Discord Bitfield or Permissions

## Usage

```ts
import {
  genPermissions,
  genBitfield,
} from "@joner/discord-bitfield-calculator";

genPermissions(0x0000000000000001); // => ["CREATE_INSTANT_INVITE"]

genBitfield("CREATE_INSTANT_INVITE"); // => 0x1
```
