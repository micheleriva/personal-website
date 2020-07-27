dev:
	stack exec site watch

rebuild:
	stack exec site rebuild

build:
	stack exec site build

clean:
	stack exec site clean

deploy:
	stack build
	make clean
	make build
	git add .
	git commit -am "cd: publish"
	git push origin master