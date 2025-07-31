# Makefile to facilitate the use of PWA Installer

up:
	docker-compose -f docker/docker-compose.yml up -d
	@echo "The application will be available at: http://localhost:8080"

down:
	cd docker && docker-compose down

restart:
	cd docker && docker-compose restart

logs:
	cd docker && docker-compose logs -f

# Development mode: bind mount of local code
up-dev:
	cd docker && docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d

down-dev:
	cd docker && docker-compose -f docker-compose.yml -f docker-compose.dev.yml down 