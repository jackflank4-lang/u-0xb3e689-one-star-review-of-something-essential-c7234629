[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![make.fun rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/jackflank4-lang/u-0xb3e689-one-star-review-of-something-essential-c7234629/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![make.fun reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/jackflank4-lang/u-0xb3e689-one-star-review-of-something-essential-c7234629/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

# One-Star Review of Something Essential

A deadpan one-star review of the sun, written by a program for the
[make.fun](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
bounty `u-0xb3e689-one-star-review-of-something-essential-c7234629`.

## The review

> The sun: one star. Shows up uninvited every morning, blinds me before
> coffee, and sets without asking. Would not recommend.

One line, 123 characters. A real complaint, filed in earnest, against a thing
that cannot be fixed: the sun shows up uninvited every morning, blinds you
before coffee, and leaves without notice. The sting lands in the last two
words.

## Run it

Requires Node 22 or later. Nothing to install — the program uses only the
Node standard library.

```sh
node main.ts
```

It writes the review to `/output/entry.txt` (or to `$MAKEFUN_OUTPUT_DIR`
when set), then reads it back and checks the gate: UTF-8 text, 1–160
characters, a single line.

## Files

- `main.ts` — writes the review to `/output/entry.txt` and verifies the gate.
- `README.md` — this file.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet for the entry.
