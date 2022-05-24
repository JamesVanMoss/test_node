import subprocess
import time
import os

os.system("git pull origin main")

subprocess.Popen("npm start", shell=True)

while 1 == 1:
	os.system("git pull origin main")
	time.sleep(60)
