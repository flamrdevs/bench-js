# bench-js

Benchmarking javascript

Testing on Sep 10, 2023

## destructure

| name                 | ops/sec              |
| :------------------- | -------------------: |
| object               |             66830839 |
| array                |             23897480 |
| array-rest           |             14736073 |
| object-rest          |              7929694 |

## loop

| name                 | ops/sec              |
| :------------------- | -------------------: |
| for                  |             49064820 |
| for-in               |             48456166 |
| foreach              |             39097233 |
| for-of               |             25002250 |

## object-assign

| name                 | ops/sec              |
| :------------------- | -------------------: |
| assign               |              6887647 |
| spread               |               343304 |

## array-concat

| name                 | ops/sec              |
| :------------------- | -------------------: |
| spread               |             13365098 |
| concat               |              8060080 |
