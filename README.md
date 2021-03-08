# yaml-bug-1

Repro repository for a  YAML serialization bug in https://github.com/eemeli/yaml

To run:

```bash
npm install
npm run start
```

*Expected output:* Two similar, but not identical versions of YAML

*Actual output:*
```
YAMLSyntaxError: Invalid escape sequence \X
    at QuoteDouble.get strValue [as strValue] (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\parse-cst.js:1327:25)
    at Object.resolveString [as resolve] (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1282:20)
    at resolveByTagName (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1384:25)
    at resolveTag (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1414:17)
    at resolveNodeValue (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1535:23)
    at resolveNode (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1583:15)
    at resolveBlockMapItems (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1777:38)
    at Object.resolveMap [as resolve] (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1612:79)
    at resolveByTagName (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1384:25)
    at resolveTag (C:\Users\jant.SENTINELONE\Repos\jan-tee\yaml-bug-1\node_modules\yaml\dist\resolveSeq-4a68b39b.js:1414:17) {
  source: QuoteDouble {
    error: null,
    range: Range { start: 38, end: 214 },
    valueRange: Range { start: 38, end: 214 },
    props: [],
    type: 'QUOTE_DOUBLE',
    value: null,
    resolved: Scalar {
      value: '\r\n' +
        '\\XXXXXX\\XXXXXXXXXXXXXXX\\XXXXXXXXXXX\\XXXXX\\XXXXX\\XXXX\\ \\X\\XXXXX\\XXXXX\\XXXXXXXXX\\XXXXXXXXX\\XXXXXXXXX\\XXX_XXXXXX_X.X_(XXXXXXXXXX',
      range: [ 38, 214 ],
      type: 'QUOTE_DOUBLE'
    }
  }
}
```

