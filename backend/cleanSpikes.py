import sys
import os

'''
Filters out the spammy spikes, adds them to a list of files with the page counts for the last week
arg1 : file of topSpikes, format title tab count
arg2 : file of countDict from this week
arg3 : file of countDict from previous week
'''

f = open(sys.argv[1])
spikes = {}
numSpikes = 0

# iterates through topSpikes filters out bad ones
for line in f:
  splits = line.split()
  title = splits[0]
  count = splits[1]
  delete = False
  try:
    if title == "Main_Page":
      delete = True
    if "Special:" in title:
      delete = True
    if not delete:
      spikes[title] = count
      numSpikes += 1 
    if numSpikes > 70:
      break
  except:
    x = 1

s = ""
countDict1 = open(sys.argv[3])
countDict = open(sys.argv[2])

for line in countDict1:
  splits = line.split("\t")
  try:
    t = splits[0]
    counts = splits[1]
    if t in spikes:
      spikes[t] = counts.split("\n")[0]
  except:
    x = 1
  
for line in countDict:
  splits = line.split("\t")
  try:
    t = splits[0]
    counts = splits[1]
    if t in spikes:
      spikes[t] += counts
  except:
    x = 1

# create list of all max pagecounts
# create dict of pagecounts to pagenames
all_maxes=[]
max_to_name={}
for s in spikes:
  counts = spikes[s].split()
  c_max = int(max(counts)) 
  max_to_name[c_max] = s
  all_maxes.append(c_max)

# get the list into descending order
all_maxes.sort()
all_maxes.reverse()

acc = ""
for count in all_maxes:
  name = max_to_name[count]
  acc += name.replace("_", " ") + "\t" + spikes[name]

print acc

