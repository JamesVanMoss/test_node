import subprocess
import time
import os

# os.system("npm start")
cmd = "npm start"
subprocess.Popen(cmd, shell=True)

while 1 == 1:
	os.system("git pull origin main")
	time.sleep(60)
