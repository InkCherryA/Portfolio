clean:
	rm -f *.o *.exe *.stackdump

git:
	git add .
	git commit && git push -u origin master
