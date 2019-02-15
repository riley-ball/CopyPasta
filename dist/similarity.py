string = """0: "HOW ResidentSleeper LONG ResidentSleeper CAN ResidentSleeper THIS ResidentSleeper GO ResidentSleeper ON ResidentSleeper"
1: "REPPIN LONDON ONTARIO 519 GANG"
2: "my eyes"
3: "CLULG"
4: "ResidentSleeper"
5: "mvp ward"
6: "4Head EU WATCHING NA 4Head STILL AWAKE 4Head NO JOB 4Head NO RESPONSIBILITIES 4Head TYPICAL EU 4Head"
7: "***"
8: "ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper"
9: "JUST GO IN ResidentSleeper"
10: "PogU"
11: "ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper"
12: "EU WON A DREAMHACK TOURAMENT WITH NO KOREANS LUL"
13: "zonySleeper"
14: "santorin has to make a play"
15: "CLG 10th place"
16: "FIGHTTTTT"
17: "ResidentSleeper ResidentSleeper"
18: "IS THIS GROUNDHOGS GAME?? ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper"
19: "6k lead and doing nothing LUL"
20: "HOW ResidentSleeper LONG ResidentSleeper CAN ResidentSleeper THIS ResidentSleeper GO ResidentSleeper ON ResidentSleeper"
21: "HEY CASTERS! how many stacks does turtle have??"
22: "NARAM"
23: "LOOOOOOOOOL ResidentSleeper"
24: "ResidentSleeper ResidentSleeper ResidentSleeper"
25: "SKIP ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper"
26: "ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper ResidentSleeper"
27: "ResidentSleeper exciting game ResidentSleeper exciting game ResidentSleeper exciting game ResidentSleeper exciting game"
28: "WHY DOES VIPER HAVE 700G BOUNTY WTF"
29: "bioftost sweepers are awful LUL"""

clean = string.replace("\n", "").split('"')
arr = []
for i in range(len(clean)):
    if i % 2 != 0:
        arr.append(clean[i])
print(arr)
