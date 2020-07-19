init:
	yarn install

dev:
	yarn dev

render:
	yarn build

render-docker: render
	docker build . -t yt

run-docker: render-docker
	docker run -ti --rm --name yt \
	    -p8080:80 \
	    yt
