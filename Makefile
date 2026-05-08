# Makefile para NodeAPI

.PHONY: help up down restart logs build clean shell-api shell-db

help: ## Exibe esta ajuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

up: ## Sobe os containers (API + Banco)
	docker compose up -d --build

down: ## Para e remove os containers
	docker compose down

restart: down up ## Reinicia todos os serviços

logs: ## Mostra os logs da aplicação em tempo real
	docker compose logs -f

build: ## Reconstrói a imagem da API
	docker compose build

clean: ## Remove containers e volumes (limpa o banco de dados)
	docker compose down -v

shell-api: ## Acessa o terminal do container da API
	docker exec -it nodeapi_app sh

shell-db: ## Acessa o terminal do container do Banco de Dados
	docker exec -it nodeapi_postgres psql -U user -d nodeapi_db
