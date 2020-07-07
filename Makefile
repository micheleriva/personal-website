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
	git pull -X theirs
	git merge master -X ours
	cp -a _site/. build
	git commit -am "publish"
	git push origin gh-pages
	rm -rf build
	git checkout master