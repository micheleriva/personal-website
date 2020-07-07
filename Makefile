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
	git commit -am "publish"
	git push origin gh-pages
	git checkout master