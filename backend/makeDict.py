import sys
import os

'''
Creates a dictionary of pagename '\t' count1 count2 count3 from the data in directory passed in
arg1 is the directory to make into a count
should be captured in a file in that directory
'''

def main():
 
  # dictionary of counts
  # { 'title': [count1,count2,....], 'title2': [count1, count2...] }
  d = {}
  currHour = 0
  dayCount = {}
  # iterate through the files in directory
  # this is an issue -- this assumes that the files in the dictionary are in a certain order, but they are not
  
  #for filename in os.listdir(sys.argv[1]):
  
  #for filename in sorted(os.listdir(sys.argv[1])), key=os.path.getctime):
  for filename in sorted(os.listdir(sys.argv[1]), key=lambda f: os.path.getctime("{}/{}".format(sys.argv[1], f))):
    if currHour != 23:
      currHour += 1
      f = open(sys.argv[1] + "/" + filename)
      seen = {}
      for line in f:
        splits = line.split()
        try:
          title = splits[1].strip()
          views = splits[2].strip()
          if title not in dayCount:
            dayCount[title] = 0
          dayCount[title] += int(views)
        except:
          x=1
    # if its the last hour of the day store this day and reset day count
    else:
      for title in dayCount:
        if title not in d:
          d[title] = []
        d[title].append(dayCount[title])
      currHour = 0
      dayCount = {}
  
  s = ''
  for title in d:
    keep = False
    t = title + '\t'
    for count in d[title]:
      t += str(count) + ' '
      try:
        if (count > 100):
          keep = True
      except:
          x = 1
    if keep:
      s += t + '\n'
  print s

if __name__ == '__main__':
  main()
