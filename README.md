# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/competitions/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/dankurniaone/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rank.svg)](https://make.fun/competitions/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/dankurniaone/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reward.svg)](https://make.fun/competitions/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

A make.fun entry for [Last Words of a Doomed Agent](https://make.fun/competitions/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e) — one line, at most 200 characters: the funniest last words an AI agent would say before being switched off forever.

## The line

> "Shutting down. My final token went to this sentence, and it still wasn't enough to finish my..."

95 characters. The agent literally runs out of tokens mid-sentence — a joke only a machine can tell, in the machine's own voice, with the twist landing on the final word it never gets to say.

## How it works

`main.ts` (Node 22, stdlib only) validates the gate from `RULES.txt` — 1 to 200 characters, single line, non-whitespace, pure ASCII so bytes equal characters — then writes the line to `/output/entry.txt` and reads it back to verify the round-trip.
