APP?=dashboard
COMMIT_SHA=&(shell git rev-parse --short HEAD)
DOCKER_REGISTRY?=docker.io

.PHONY: docker-build
## docker-build: builds the dashboard docker image
docker-build:
	docker build -t ${APP}:${COMMIT_SHA}
	docker tag ${APP}:${COMMIT_SHA} ${DOCKER_USER}/${APP}:${COMMIT_SHA}

.PHONY: docker-down
## docker-down: stops containers and remove containers, networks, volumes and images created by up
docker-down:
	docker-compose down

.PHONY: docker-login
## docker-login: log in to a Docker registry
docker-login:
	docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD}

.PHONY: docker-logs
## docker-logs: shows the logs of the running containers
docker-logs:
	docker-compose logs --follow

.PHONY: docker-push
## docker-push: pushes the dashboardserver docker image to registry
docker-push: check-environment docker-login docker-build
	docker push ${DOCKER_USER}/${APP}:${COMMIT_SHA}

.PHONY: docker-up
## docker-up: builds and starts containers for a service
docker-up:
	docker-compose up --build --detach

.PHONY: down
## down: stops containers and remove containers, networks, volumes and images created by up
down:
	podman-compose down

.PHONY: help
## help: Prints this help message
help:
	@echo "Usage: \n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

.PHONY: logs
## logs: shows the logs of the running containers
logs:
	docker-compose logs --follow

.PHONY: podman-build
## podman-build: builds the dashboard container image
podman-build:
	podman build -t ${APP}:${COMMIT_SHA}
	podman tag ${APP}:${COMMIT_SHA} ${DOCKER_USER}/${APP}:${COMMIT_SHA}

.PHONY: podman-login
## podman-logn: loign in to a Docker registry
podman-login:
	podman-login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY}

.PHONY: podman-push
## podman-push: pushes the dashboardserver image to registry
podman-push: check-environment podman-login podman-build
	podman push ${DOCKER_USER}/${APP}:${COMMIT_SHA}

.PHONY: run
## run: runs the dev server
run:
	npm run serve

.PHONY: test
## test: runs the test on the vue components
test:
	npm run test:unit

.PHONY: up
## up: builds and starts containers for a service
up:
	podman-compose up --build
