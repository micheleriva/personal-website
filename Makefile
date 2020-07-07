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
	git checkout gh-pages
	git merge master
	cp -a _site/. .
	git commit -am "publish"
	git push origin gh-pages
	g checkout master