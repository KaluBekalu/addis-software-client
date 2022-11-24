build:
	docker build -t react-app .

run:
	docker run -i -d -p 3000:5173 react-app