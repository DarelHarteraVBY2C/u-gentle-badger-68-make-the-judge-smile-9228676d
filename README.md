# Make the Judge Smile — the neighbour's cat

[![make.fun bounty](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/DarelHarteraVBY2C/u-gentle-badger-68-make-the-judge-smile-9228676d/rank.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/DarelHarteraVBY2C/u-gentle-badger-68-make-the-judge-smile-9228676d/reward.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)

Entry for the [Make the Judge Smile](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d) bounty on [make.fun](https://make.fun).

## The entry

> This morning the neighbour's cat, who has ignored me for a whole year, trotted over and headbutted my ankle like we'd been friends all along.

(141 characters, one line.)

Why it fits the brief: a small good thing that happened today, told in
one line. Warmth — an animal choosing you out of nowhere. Surprise — a
year of being ignored flips in a single morning. Concreteness — the
headbutt on the ankle, this morning, a whole year. Fresh wording — its
own rhythm and image, no greeting-card phrasing.

## How it works

`main.ts` (Node 22, standard library only, no network) validates the
line against the gate — UTF-8 text of 1 to 200 characters, not only
whitespace, exactly one line — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies the round trip byte for
byte. Running it twice produces byte-identical output.

```sh
node main.ts   # writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
